<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use Inertia\Inertia;

class SlideController extends Controller
{
    public function renderSlide(Resource $resource)
    {
        // Return as json
        return Inertia::render('slide', [
            'resource' => $resource->with('category')->first(),
        ]);
    }
}
