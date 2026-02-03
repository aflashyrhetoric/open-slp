<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\SlideController;
use App\Http\Controllers\TagsController;
use App\Models\Resource;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

// Proper named route using controller syntax
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/tags/{slug}', [TagsController::class, 'show'])->name('tags.show');
Route::get('/resource/{resource}/slide/{page?}', [SlideController::class, 'renderSlide'])->name('slide.index');
Route::get('/resource/{resource}/json', [SlideController::class, 'slideJson'])->name('slide.json');
Route::post('/resource/{id}/increment-clicked-count', [HomeController::class, 'incrementClickedCount'])->name('incrementClickedCount');

//Route::get('/', function () {
//    $resources = Resource::all();
//    $resourceCount = $resources->count();
//    return Inertia::render('welcome', [
////        'canRegister' => Features::enabled(Features::registration()),
//        'resources' => $resources,
//        'resourceCount' => $resourceCount,
//    ]);
//})->name('home');

Route::get('/team', function () {
    $resources = Resource::all();
    $resourceCount = $resources->count();
    return Inertia::render('team', [
        'resources' => $resources,
        'resourceCount' => $resourceCount,
    ]);
})->name('team');

Route::get('/story', function () {
    $resources = Resource::all();
    $resourceCount = $resources->count();
    return Inertia::render('story', [
        'resources' => $resources,
        'resourceCount' => $resourceCount,
    ]);
})->name('story');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
