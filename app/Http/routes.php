<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/


Route::group(['prefix' => 'api'], function () {////Prefijo api para rutas contenidas en el


    Route::resource('curso', 'CursoController');//Ruta para curso estilo API, GET,POST,PUT, DELETE

    Route::resource('profesor', 'ProfesorController');//Ruta para Profesores estilo API , GET,POST,PUT, DELETE

});

//Creando ruta inical /
Route::get('/', 'PagesController@index');