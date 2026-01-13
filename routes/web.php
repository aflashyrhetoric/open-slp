<?php

use App\Models\Resource;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    $resources = Resource::all();
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
        'resources' => $resources,
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
