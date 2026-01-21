<?php

namespace App\Http\Controllers;

use App\Models\ResourceCategory;
use Illuminate\Http\Request;

class ResourceCategoryController extends Controller
{
    public function index()
    {
        return ResourceCategory::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required'],
            'icon' => ['nullable'],
            'position' => ['required', 'integer'],
            'parent_id' => ['nullable', 'integer'],
            'bg_color' => ['required'],
            'description' => ['required'],
        ]);

        return ResourceCategory::create($data);
    }

    public function show(ResourceCategory $resourceCategory)
    {
        return $resourceCategory;
    }

    public function update(Request $request, ResourceCategory $resourceCategory)
    {
        $data = $request->validate([
            'name' => ['required'],
            'icon' => ['nullable'],
            'position' => ['required', 'integer'],
            'parent_id' => ['nullable', 'integer'],
            'bg_color' => ['required'],
            'description' => ['required'],
        ]);

        $resourceCategory->update($data);

        return $resourceCategory;
    }

    public function destroy(ResourceCategory $resourceCategory)
    {
        $resourceCategory->delete();

        return response()->json();
    }
}
