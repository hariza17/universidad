<?php

namespace App\Http\Controllers;

use App\Models\Profesor;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class ProfesorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct(){
        //Ejecuta en metodo find antes de ejecutar el show, udate , destry

        $this->beforeFilter('@find',['only'=>['show','update','destroy']]);
    }

    public function find(Route $route){
        //busca el curso por id con el parametro que esta despues de la URL api/profesor/{parameter}

        $this->profesor=Profesor::with('cursos')->where('id',$route->getParameter('profesor'))->firstOrFail();
    }

    public function index()
    {
        //Muestra todos los prfesores cuando hacemos GET api/profesor

        $profesor = Profesor::all();
        return response()->json($profesor);
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Crea un nuevo registro de profesor cuando hacemos un POST a api/profesor

        Profesor::create($request->all());
        return response()->json(["mensaje"=>"Creado correctamente"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //Muetra el profesor por id cuando hacemos GET api/profesor/{id}

        return response()->json($this->profesor);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id){
        //Actualiza un profesor por id cuando hacemos PUT api/profesor/{id}

        $this->profesor->fill($request->all());
        $this->profesor->save();
        return response()->json(["mensaje"=>"Actualizacion exitosa"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //elimina un profesor por id cuando hacemos DELETE api/profesor/{id}

        $this->profesor->delete();
    }
}
