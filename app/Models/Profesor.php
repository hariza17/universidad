<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profesor extends Model //Modelo Profesor
{
    protected $table = "profesores";
    protected $fillable = ['nombres', 'apellidos', 'codigo', 'correo'];
    public $timestamps = false;
    public function cursos() //Relacion uno a muchos con la tabla cursos
    {
        return $this->hasMany('App\Models\Curso', 'profesor_id', 'id');
    }


}