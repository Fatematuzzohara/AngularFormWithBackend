<?php

use Illuminate\Http\Request;
use App\Http\Controllers\lastapicontroller;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/lastmodel','App\Http\Controllers\lastapicontroller@create');

// Route::put('/update/$id','App\Http\Controllers\lastapicontroller@update');
Route::put('/update/{id}','App\Http\Controllers\lastapicontroller@update');
// Route::get('/get/{id}','App\Http\Controllers\lastapicontroller@update');
Route::get('/list','App\Http\Controllers\lastapicontroller@list');
Route::get('/list/{id}','App\Http\Controllers\lastapicontroller@list1');
Route::delete('/delete/{id}','App\Http\Controllers\lastapicontroller@delete');
