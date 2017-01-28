


<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CrateTableCusos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cursos', function($table) {
            $table->increments('id', true);
            $table->integer('profesor_id')->unsigned();
            $table->string('nombre');
            $table->string('periodo');
            $table->integer('anio');
            $table->string('descripcion');
            $table->date('fecha_inicio');
        });

        Schema::table('cursos', function($table) {
            $table->foreign('profesor_id')->references('id')->on('profesores');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('cursos');
    }
}
