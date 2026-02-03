<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use App\Models\ResourceCategory;
use App\Models\Tag;
use Inertia\Inertia;

class TagsController extends Controller
{
    public function index()
    {

    }

    public function show(string $slug)
    {
        $tag = Tag::where('slug', $slug)->firstOrFail();
        $resources = $tag->resources()->published()->get();
        $flat = $resources;
        $groupedByCategory = $resources->groupBy(function ($resource) {
            return $resource->category->name;
        });

        $categories = ResourceCategory::all();
        $allTags = Tag::withResources()->get();

        $resourceCount = $resources->count();
        return Inertia::render('tag-show', [
            'allTags' => $allTags,
            'tag' => $tag,
            'categories' => $categories,
            'resources' => $flat,
            'resourcesByCategory' => $groupedByCategory,
            'resourceCount' => $resourceCount,
        ]);

    }
}
