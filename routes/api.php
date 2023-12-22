<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::put('/empresa/{empresa}', [RegisteredUserController::class, 'empresaUpdate']);
Route::put('/user/{user}', [RegisteredUserController::class, 'setAdmin']);
// Route::post('/empresa/{empresa}', [RegisteredUserController::class, 'EmpresaUpdate']);
