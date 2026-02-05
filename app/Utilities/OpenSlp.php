<?php

namespace App\Utilities;

use DOMDocument;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

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

    public static function getFaviconUrl(string $url): ?string
    {
        $isLocal = App::environment('local');
        $parsed = parse_url($url);
        $origin = ($parsed['scheme'] ?? 'https').'://'.($parsed['host'] ?? '');

        // 1. Check /favicon.ico at the root
        try {
            $response = Http::timeout(5)
                ->connectTimeout(3)
                ->withOptions(['verify' => ! $isLocal])
                ->get($origin.'/favicon.ico');

            if ($response->successful()) {
                $contentType = $response->header('Content-Type') ?? '';

                if (str_contains($contentType, 'image')) {
                    return $origin.'/favicon.ico';
                }
            }
        } catch (\Exception $e) {
            Log::info('Failed to fetch /favicon.ico', ['url' => $origin, 'error' => $e->getMessage()]);
        }

        // 2. Parse the page markup for favicon declarations
        try {
            $response = Http::timeout(5)
                ->connectTimeout(3)
                ->withOptions(['verify' => ! $isLocal])
                ->get($url);

            if ($response->failed()) {
                return null;
            }

            $contentType = $response->header('Content-Type') ?? '';

            if (! str_contains($contentType, 'text/html')) {
                return null;
            }

            $dom = new DOMDocument('1.0', 'UTF-8');
            @$dom->loadHTML($response->body());

            foreach ($dom->getElementsByTagName('link') as $node) {
                $rel = strtolower($node->getAttribute('rel'));

                if (! in_array($rel, ['icon', 'shortcut icon', 'apple-touch-icon', 'apple-touch-icon-precomposed'])) {
                    continue;
                }

                $href = $node->getAttribute('href');

                if (empty($href)) {
                    continue;
                }

                // Resolve relative URLs
                if (str_starts_with($href, '//')) {
                    $href = ($parsed['scheme'] ?? 'https').':'.$href;
                } elseif (str_starts_with($href, '/')) {
                    $href = $origin.$href;
                } elseif (! str_starts_with($href, 'http')) {
                    $href = rtrim($origin, '/').'/'.$href;
                }

                return $href;
            }
        } catch (\Exception $e) {
            Log::info('Failed to parse page for favicon', ['url' => $url, 'error' => $e->getMessage()]);
        }

        return null;
    }

    /**
     * Downloads a favicon from a remote URL and uploads it to cloud storage.
     * Returns the public URL of the stored favicon, or null on failure.
     */
    public static function downloadAndStoreFavicon(string $faviconUrl, int $resourceId): ?string
    {
        $maxSize = 100 * 1024; // 100KB cap

        try {
            $response = Http::timeout(10)->get($faviconUrl);

            if ($response->failed()) {
                Log::info('Failed to download favicon', ['url' => $faviconUrl, 'status' => $response->status()]);

                return null;
            }

            $bytes = $response->body();

            if (strlen($bytes) > $maxSize) {
                Log::info('Favicon too large', ['url' => $faviconUrl, 'size' => strlen($bytes)]);

                return null;
            }

            $contentType = $response->header('Content-Type') ?? '';
            $extension = match (true) {
                str_contains($contentType, 'png') => 'png',
                str_contains($contentType, 'svg') => 'svg',
                str_contains($contentType, 'gif') => 'gif',
                str_contains($contentType, 'webp') => 'webp',
                default => 'ico',
            };

            $filename = 'favicons/'.$resourceId.'-'.md5($faviconUrl).'.'.$extension;

            Storage::disk('openslp-public')->put($filename, $bytes);

            return Storage::disk('openslp-public')->url($filename);
        } catch (\Exception $e) {
            Log::info('Error downloading favicon', ['url' => $faviconUrl, 'error' => $e->getMessage()]);

            return null;
        }
    }
}
