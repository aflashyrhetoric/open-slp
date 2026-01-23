<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use Inertia\Inertia;

class SlideController extends Controller
{
    public function renderSlide(Resource $resource, $page = 1)
    {
        // Return as json
        return Inertia::render('slide', [
            'resource' => $resource->with('category')->first(),
            'page' => (int) $page,
        ]);
    }
}
