<?php

use Illuminate\Http\Request;
use App\Listing;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', 'ListingController@get_home_api')->name('home.api');
Route::get('/saved', 'ListingController@get_home_api')->name('saved.api');
Route::get('/dashboard', 'ListingController@get_home_api')->name('dashboard.api');
Route::get('listing/{listing}', 'ListingController@get_listing_api')->name('listing.api');
Route::post('/user/toggle_saved', 'UserController@toggle_saved')->middleware('auth:api');
Route::delete('/listing/{listing}/delete', 'ListingController@delete_listing')->middleware('auth:api')->name('listing.delete');
