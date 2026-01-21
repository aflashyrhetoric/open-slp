<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use App\Models\ResourceCategory;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $resources = Resource::with('category')->get();
        $flat = $resources;
//        $groupedByCategory = $resources->groupBy('category.name');
        $groupedByCategory = $resources->groupBy(function ($resource) {
            dump($resource->category);
            return $resource->category->name;
        });

        $categories = ResourceCategory::all();

        $resourceCount = $resources->count();
        return Inertia::render('welcome', [
//        'canRegister' => Features::enabled(Features::registration()),
            'categories' => $categories,
            'resources' => $flat,
            'resourcesByCategory' => $groupedByCategory,
            'resourceCount' => $resourceCount,
        ]);
    }
}
