<?php

namespace App\Http\Controllers;

use App\Models\Curso;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use App\Http\Requests;
use App\Http\Controllers\Controller;


class CursoController extends Controller
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
        //busca el curso por id con el parametro que esta despues de la URL api/curso/{parameter}
        $this->curso=Curso::find($route->getParameter('curso'));
    }

    public function index()
    {
        //Muestra todos los cursos con su respectivo profesor cuando hacemos GET api/curso
        $curso = Curso::with('profesor')->get();
        return response()->json($curso);
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
        //Crea un nuevo registro de curso cuando hacemos un POST a api/curso
        Curso::create($request->all());
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
        //Muetra el curso por id cuando hacemos GET api/curso/{id}
        return response()->json($this->curso);
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
        //Actualiza un curso por id cuando hacemos PUT api/curso/{id}
        $this->curso->fill($request->all());
        $this->curso->save();
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
        //elimina un curso por id cuando hacemos DELETE api/curso/{id}
        $this->curso->delete();
    }
}
