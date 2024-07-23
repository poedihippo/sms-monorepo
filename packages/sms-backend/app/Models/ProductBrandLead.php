<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductBrandLead extends Model
{
    protected $guarded = [];
    protected $casts = [
        'is_available' => 'boolean'
    ];
}
