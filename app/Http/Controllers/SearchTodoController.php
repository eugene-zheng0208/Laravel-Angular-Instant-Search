<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Todo;
use App\Http\Requests;

class SearchTodoController extends Controller
{
    public function getSearch(Request $request)
    {
        return Todo::where('body', 'like', '%'.$request->get('searchString').'%')->get();
    }
}
