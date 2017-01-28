<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    protected $table = "cursos";
    protected $fillable = ['nombre', 'descripcion', 'perido', 'anio', 'fecha_inicio', 'profesor_id'];
    public $timestamps = false;
    public function profesor()
    {
        return $this->belongsTo('App\Models\Profesor', 'profesor_id', 'id');
    }


}
