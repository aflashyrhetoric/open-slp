<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ResourceCategory extends Model
{
    protected $fillable = [
        'name',
        'icon',
        'position',
        'parent_id',
        'bg_color',
        'description',
    ];
}
