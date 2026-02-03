<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Tag extends Model
{
    use HasFactory;
    public $timestamps = false;

    public $table = 'resource_tags';

    protected $fillable = [
        'name',
        'slug',
        'description',
        'is_collection'
    ];

    public function resources(): BelongsToMany
    {
        return $this->belongsToMany(Resource::class, 'resource_resource_tag', 'resource_tag_id', 'resource_id');
    }

    public function scopeIsCollection($query)
    {
        return $query->where('is_collection', true);
    }

    // scope to tags that actually have resources
    public function scopeWithResources($query)
    {
        return $query->whereHas('resources');
    }
}
