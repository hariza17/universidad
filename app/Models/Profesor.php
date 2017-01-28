<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profesor extends Model
{
    protected $table = "profesores";
    protected $fillable = ['nombres', 'apellidos', 'codigo', 'correo'];
    public $timestamps = false;
    public function cursos()
    {
        return $this->hasMany('App\Models\Curso', 'profesor_id', 'id');
    }


}