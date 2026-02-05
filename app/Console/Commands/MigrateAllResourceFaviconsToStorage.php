<?php

/*
 * THIS COMMMAND HAS BEEN USED AND SHOULD NOT BE USED AGAIN
 */

namespace App\Console\Commands;

use App\Models\Resource;
use App\Utilities\OpenSlp;
use Illuminate\Console\Command;

class MigrateAllResourceFaviconsToStorage extends Command
{
    protected $signature = 'resources:backup-favicons';

    protected $description = 'Iterates through resources and backs up favicons to storage disk';

    public function handle(): void
    {
        $resources = Resource::all();

        foreach ($resources as $resource) {
            $faviconUrl = OpenSlp::getFaviconUrl($resource->href);

            if (! $faviconUrl) {
                $this->info("No favicon found for resource ID {$resource->id}");

                continue;
            }

            $storedUrl = OpenSlp::downloadAndStoreFavicon($faviconUrl, $resource->id);

            if ($storedUrl) {
                $resource->favicon_href = $storedUrl;
                $resource->save();
                $this->info("Backed up favicon for resource ID {$resource->id} to {$storedUrl}");
            } else {
                $this->warn("Failed to download/store favicon for resource ID {$resource->id}");
            }
        }
    }
}
