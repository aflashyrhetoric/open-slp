<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LinkContribution extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'href',
        'description',
        'category_id',
    ];
}
