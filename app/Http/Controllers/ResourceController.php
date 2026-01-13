<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use Illuminate\Http\Request;

class ResourceController extends Controller
{
    public function index()
    {
        return Resource::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required'],
            'href' => ['required'],
            'author' => ['nullable'],
            'author_page_href' => ['nullable'],
            'og_image' => ['nullable'],
            'og_title' => ['nullable'],
            'og_description' => ['nullable'],
            'has_downloadables' => ['boolean'],
            'is_free' => ['boolean'],
            'pricing_model' => ['nullable', 'string'],
            'target_audience' => ['required'],
            'uses_ai' => ['boolean'],
            'notes' => ['required'],
            'keywords' => ['required'],
            'clicked_count' => ['required', 'integer'],
            'supports_english' => ['boolean'],
            'supports_spanish' => ['boolean'],
            'category' => ['required'],
        ]);

        return Resource::create($data);
    }

    public function show(Resource $resource)
    {
        return $resource;
    }

    public function update(Request $request, Resource $resource)
    {
        $data = $request->validate([
            'name' => ['required'],
            'href' => ['required'],
            'author' => ['nullable'],
            'author_page_href' => ['nullable'],
            'og_image' => ['nullable'],
            'og_title' => ['nullable'],
            'og_description' => ['nullable'],
            'has_downloadables' => ['boolean'],
            'is_free' => ['boolean'],
            'price' => ['nullable', 'integer'],
            'target_audience' => ['required'],
            'uses_ai' => ['boolean'],
            'notes' => ['required'],
            'keywords' => ['required'],
            'clicked_count' => ['required', 'integer'],
            'supports_english' => ['boolean'],
            'supports_spanish' => ['boolean'],
            'category' => ['required'],
        ]);

        $resource->update($data);

        return $resource;
    }

    public function destroy(Resource $resource)
    {
        $resource->delete();

        return response()->json();
    }
}
