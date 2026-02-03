<?php

namespace App\Console\Commands;

use App\Models\Resource;
use App\Utilities\OpenSlp;
use Illuminate\Console\Command;

class SetFaviconForAllResources extends Command
{
    protected $signature = 'resources:refresh-favicons';

    protected $description = 'Command description';

    public function handle(): void
    {
        $resources = Resource::all();

        foreach ($resources as $resource) {
            $favicon = OpenSlp::getFaviconUrl($resource->href);
            if($favicon) {
                $resource->favicon_href = $favicon;
                $resource->save();
                $this->info("Swapped for resource ID {$resource->id}");
            } else {
                $this->info("No favicon found for resource ID {$resource->id}");
            }

        }
    }
}
