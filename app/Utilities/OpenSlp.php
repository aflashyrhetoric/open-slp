<?php

namespace App\Utilities;

use DOMDocument;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class OpenSlp
{
    /**
     * @return array<string, string>
     */
    public static function getOgTags(string $url): array
    {
        $result = [];
        $isLocal = App::environment('local');

        Log::info('getOgTags called', ['url' => $url]);

        $response = Http::timeout(5)
            ->connectTimeout(3)
            ->withOptions(['verify' => ! $isLocal])
            ->get($url);

        Log::info('HTTP response', [
            'status' => $response->status(),
            'contentType' => $response->header('Content-Type'),
        ]);

        if ($response->failed()) {
            $nonCriticalStatuses = [401, 403, 404, 410, 451];

            if (in_array($response->status(), $nonCriticalStatuses)) {
                Log::info('Skipping URL due to non-critical HTTP error', [
                    'url' => $url,
                    'status' => $response->status(),
                ]);

                return [];
            }

            throw new \RuntimeException("Failed to fetch URL: HTTP {$response->status()}");
        }

        $contentType = $response->header('Content-Type') ?? '';

        $skipTypes = [
            'application/pdf',
            'audio',
            'video',
            'image',
            'application/json',
            'application/xml',
            'text/plain',
            'application/rtf',
            'application/rss+xml',
            'application/javascript',
            'application/octet-stream',
            'application/zip',
        ];

        foreach ($skipTypes as $type) {
            if (str_contains($contentType, $type)) {
                Log::info('Skipping non-HTML content type', ['contentType' => $contentType]);

                return [];
            }
        }

        if (! str_contains($contentType, 'text/html')) {
            Log::info('Content type is not text/html', ['contentType' => $contentType]);

            return [];
        }

        $dom = new DOMDocument('1.0', 'UTF-8');
        @$dom->loadHTML($response->body());

        $ogTagsFound = false;

        foreach ($dom->getElementsByTagName('meta') as $node) {
            $prop = $node->getAttribute('name');

            if (! str_starts_with($prop, 'og:')) {
                continue;
            }

            $ogTagsFound = true;

            $content = $node->getAttribute('content');
            $result[$prop] = mb_convert_encoding($content, 'UTF-8', 'UTF-8');
        }

        // If no tags were found let's try again with 'property' instead of 'name'
        if (! $ogTagsFound) {
            foreach ($dom->getElementsByTagName('meta') as $node) {
                $prop = $node->getAttribute('property');

                if (! str_starts_with($prop, 'og:')) {
                    continue;
                }

                $content = $node->getAttribute('content');
                $result[$prop] = mb_convert_encoding($content, 'UTF-8', 'UTF-8');
            }
        }

        Log::info('OG tags found', ['tags' => $result]);

        return $result;
    }
}
