<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Resource extends Model
{
    protected $with = ['category','tags'];
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
        'published',
    ];

    protected function casts(): array
    {
        return [
            'published' => 'boolean',
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

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class, 'resource_resource_tag', 'resource_id', 'resource_tag_id');
    }

    // query scope for only published ones
    public function scopePublished($query)
    {
        return $query->where('published', 1);
    }

    // query scope for category
    public function scopeOfCategory($query, $categoryId)
    {
        return $query->where('category_id', $categoryId);
    }
}
