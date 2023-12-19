<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('clave_empleado')->unique();
            $table->string('nombres');
            $table->string('ap_paterno');
            $table->string('ap_materno');
            $table->string('email')->unique();
            $table->string('rfc')->unique();
            $table->string('tipo_sangre');
            $table->string('curp')->unique();
            $table->string('clabe_interbancaria');
            $table->string('banco');
            $table->string('sexo');
            $table->string('fecha_ingreso')->nullable();
            $table->string('req_control_asistencias')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->boolean('admin');
            // $table->unsignedBigInteger('supervisor_id')->nullable();
            // $table->foreign('supervisor_id')->references('id')->on('users')->onDelete('set null');
            // $table->foreignId('oficina_id')->references('id')->on('oficinas')->nullable();
            $table->rememberToken();
            $table->timestamps();
            $table->foreignId('empresa_id')->references('id')->on('empresas')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
