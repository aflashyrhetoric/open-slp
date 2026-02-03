<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use App\Models\ResourceCategory;
use App\Models\Tag;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $resources = Resource::published()->get();
        $flat = $resources;
        $groupedByCategory = $resources->groupBy(function ($resource) {
            return $resource->category->name;
        });

        $categories = ResourceCategory::all();
        $allTags = Tag::withResources()->isCollection()->get();
//        $allTags = Tag::all();

        $resourceCount = $resources->count();
        return Inertia::render('welcome', [
//        'canRegister' => Features::enabled(Features::registration()),
            'allTags' => $allTags,
            'categories' => $categories,
            'resources' => $flat,
            'resourcesByCategory' => $groupedByCategory,
            'resourceCount' => $resourceCount,
        ]);
    }

    public function incrementClickedCount($id)
    {
        $resource = Resource::find($id);
        if ($resource) {
            $resource->increment('clicked_count');
            return response()->json(['success' => true]);
        }
        return response()->json(['success' => false], 404);
    }
}
