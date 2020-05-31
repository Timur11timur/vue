<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('skills', function () {
    return ['Laravel', 'Vue', 'PHP', 'JavaScript', 'Tooling'];
});

Route::get('projects/create', 'ProjectsController@create');
Route::post('projects', 'ProjectsController@store');
