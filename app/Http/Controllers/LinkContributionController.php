<?php

namespace App\Http\Controllers;

use App\Models\LinkContribution;
use Illuminate\Http\Request;

class LinkContributionController extends Controller
{
    public function index()
    {
        return LinkContribution::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'href' => ['required', 'url'],
            'description' => ['nullable', 'string'],
            'category_id' => ['nullable', 'integer'],
        ]);

        return LinkContribution::create($data);
    }

    public function show(LinkContribution $linkContribution)
    {
        return $linkContribution;
    }

    public function update(Request $request, LinkContribution $linkContribution)
    {
        $data = $request->validate([
            'href' => ['required'],
            'description' => ['nullable'],
            'category_id' => ['nullable', 'integer'],
        ]);

        $linkContribution->update($data);

        return $linkContribution;
    }

    public function destroy(LinkContribution $linkContribution)
    {
        $linkContribution->delete();

        return response()->json();
    }
}
