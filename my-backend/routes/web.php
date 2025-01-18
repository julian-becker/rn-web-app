<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

use Inertia\Inertia;

Route::get('/my-frontend/{path}', function ($path) {
    return response()->file(public_path('my-frontend/' . $path));
})->where('path', '.*');

Route::get('/', function () {
    return Inertia::render('Home'); // Corresponds to `resources/js/Pages/Home.jsx`
});

