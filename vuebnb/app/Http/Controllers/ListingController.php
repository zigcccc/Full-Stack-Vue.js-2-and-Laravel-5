<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Session\Store;
use Illuminate\Support\Facades\Auth;
use App\Listing;

class ListingController extends Controller
{
    private function get_listing($listing)
    {
        $model = $listing->toArray();
        for ($i = 1; $i < 4; $i++) {
            $model['image_' . $i] = asset(
                'images/' . $listing->id . '/Image_' . $i . '.jpg'
            );
        }
        return collect(['listing' => $model]);
    }

    private function get_listing_sumarries()
    {
        $collection = Listing::all([
            'id', 'address', 'title', 'price_per_night'
        ]);
        $collection->transform(function($listing){
            $listing->thumb = asset(
                'images/' . $listing->id . '/Image_1_thumb.jpg' 
            );
            return $listing;
        });
        return collect(['listings' => $collection->toArray()]);
    }

    private function add_meta_data($collection, $request)
    {
        return $collection->merge([
            'path' => $request->getPathInfo(),
            'auth' => Auth::check(),
            'saved' => Auth::check() ? Auth::user()->saved : [],
            'user' => Auth::check() ? ['name' => Auth::user() -> name, 'email' => Auth::user() -> email] : []
        ]);
    }

    public function get_home_api()
    {
        $data = $this -> get_listing_sumarries();
        return response()->json($data);
    }

    public function get_home_web(Request $request) {
        
        $data = $this -> get_listing_sumarries();
        $data = $this -> add_meta_data($data, $request);
        return view('app', ['data' => $data]);
    }

    public function delete_listing(Listing $listing)
    {
        $item = $listing->toArray();
        //$listing->delete();
        return response()->json(['message' => 'Item #' . $item['id'] . ' was deleted from the database.']);
    }

    public function get_listing_api(Listing $listing)
    {
        $data = $this -> get_listing($listing);
        return response()->json($data);
    }

    public function get_listing_web(Listing $listing, Request $request)
    {
        $data = $this -> get_listing($listing);
        $data = $this -> add_meta_data($data, $request);
        return view('app', ['data' => $data]);
    }
}
