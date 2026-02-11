<?php

namespace App\Console\Commands;

use App\Models\Resource;
use App\Models\Tag;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemapCommand extends Command
{
    protected $signature = 'sitemap:generate';

    protected $description = 'Create sitemap for the website';

    public function handle(): void
    {
        $this->info('Generating sitemap...');

        $sitemap = Sitemap::create()
            ->add(
                Url::create(route('home'))
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_DAILY)
                    ->setPriority(1.0)
            )
            ->add(
                Url::create(route('about'))
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                    ->setPriority(0.8)
            )
            ->add(
                Url::create(route('team'))
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                    ->setPriority(0.8)
            )
            ->add(
                Url::create(route('contribution-guidelines'))
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                    ->setPriority(0.6)
            );

        Tag::isCollection()
            ->withResources()
            ->select(['id', 'slug'])
            ->each(function (Tag $tag) use ($sitemap) {
                $sitemap->add(
                    Url::create(route('tags.show', $tag->slug))
                        ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
                        ->setPriority(0.5)
                );
            });

        $sitemap->writeToFile(public_path('sitemap.xml'));

        $this->info('Sitemap generated at public/sitemap.xml');
    }
}
