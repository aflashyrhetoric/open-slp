<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Resource extends Model
{
    protected $fillable = [
        'name',
        'href',
        'category_id',
        'author',
        'author_page_href',
        'og_image',
        'og_title',
        'og_description',
        'has_downloadables',
        'pricing_model',
        'target_audience',
        'uses_ai',
        'updates_regularly',
        'notes',
        'keywords',
        'clicked_count',
        'supports_english',
        'supports_spanish',
        'supports_korean',
        'category',
    ];

    protected function casts(): array
    {
        return [
            'has_downloadables' => 'boolean',
            'uses_ai' => 'boolean',
            'updates_regularly' => 'boolean',
            'supports_english' => 'boolean',
            'supports_spanish' => 'boolean',
            'supports_korean' => 'boolean',
        ];
    }

    // Category
    public function category(): BelongsTo
    {
        return $this->belongsTo(ResourceCategory::class);
    }
}
