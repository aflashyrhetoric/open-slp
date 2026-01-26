<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use Inertia\Inertia;

class SlideController extends Controller
{
    public function renderSlide(Resource $resource, $page = 1)
    {
        // Load the category on the resource
        $resourceWithCategory = $resource->load('category');

        // Return as json
        return Inertia::render('slide', [
            'resource' => $resourceWithCategory,
            'page' => (int) $page,
        ]);
    }
}
