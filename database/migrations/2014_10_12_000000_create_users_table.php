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
            $table->string('clave_empleado')->unique()->nullable();
            $table->string('nombres')->nullable();
            $table->string('ap_paterno')->nullable();
            $table->string('ap_materno')->nullable();
            $table->string('email')->unique();
            $table->string('rfc')->unique()->nullable();
            $table->string('tipo_sangre')->nullable();
            $table->string('curp')->unique()->nullable();
            $table->string('clabe_interbancaria')->nullable();
            $table->string('banco')->nullable();
            $table->string('sexo')->nullable();
            $table->string('fecha_ingreso')->nullable();
            $table->string('req_control_asistencias')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->boolean('admin')->nullable();//p
            // $table->unsignedBigInteger('supervisor_id')->nullable();
            // $table->foreign('supervisor_id')->references('id')->on('users')->onDelete('set null');
            // $table->foreignId('oficina_id')->references('id')->on('oficinas')->nullable();
            $table->rememberToken();
            $table->timestamps();
            $table->foreignId('empresa_id')->references('id')->on('empresas')->default(0)->nullable();
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
