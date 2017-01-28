<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Curso extends Model//Modelo Curso
{
    protected $table = "cursos";
    protected $fillable = ['nombre', 'descripcion', 'periodo', 'anio', 'fecha_inicio', 'profesor_id'];
    public $timestamps = false;


    public function profesor()//Relacion Muchos a uno con la tabla profesor
    {
        return $this->belongsTo('App\Models\Profesor', 'profesor_id', 'id');
    }


}
