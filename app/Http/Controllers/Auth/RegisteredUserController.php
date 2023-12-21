<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Empresa;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'rfc' => 'required|string|max:255',
            'email' => 'required|string|l
            owercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        
        $empresa = Empresa::create([
            'rfc' => $request->rfc,
        ]);
        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'empresa_id' => $empresa->id,
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
    
    public function UserUpdate(Request $request, User $user): RedirectResponse
    {
        $request->validate([
            'razon_social' => 'required|string|max:255',
            'metodo_generacion_empleados' => 'required|string|max:255',
            'imagen' => 'required|string|max:255',
            'clave_empleado' => 'required|string|max:255',
            'nombres' => 'required|string|max:255',
            'ap_paterno' => 'required|string|max:255',
            'ap_materno' => 'required|string|max:255',
            'rfc' => 'required|string|max:255',
            'tipo_sangre' => 'required|string|max:255',
            'curp' => 'required|string|max:255',
            'clabe_interbancaria' => 'required|string|max:255',
            'banco' => 'required|string|max:255',
            'sexo' => 'required|string|max:255',
            'req_control_asistencias' => 'required|string|max:255',
            'admin' => 'required|string|max:255',
            'fecha_ingreso' => 'required|string|max:255',
        ]);
        
        // empresa
        $empresa->razon_social=$data['razon_social'];
        $empresa->metodo_generacion_empleados=$data['metodo_generacion_empleados'];
        $empresa->imagen=$data['imagen'];
    
        if($empresa->save()){
            return response([
                'status' => true,
                '$empresa'=>$empresa
            ]);
        }else{
            return response([
                'status' => false,
                'msg'=>'Ocurrio un error al intentar actualizar la información'
            ]);
        }
        
        // usuario
        $user->clave_empleado=$data['clave_empleado'];
        $user->nombres=$data['nombres'];
        $user->ap_paterno=$data['ap_paterno'];
        $user->ap_materno=$data['ap_materno'];
        $user->rfc=$data['rfc'];
        $user->tipo_sangre=$data['tipo_sangre'];
        $user->curp=$data['curp'];
        $user->clabe_interbancaria=$data['clabe_interbancaria'];
        $user->banco=$data['banco'];
        $user->sexo=$data['sexo'];
        $user->req_control_asistencias=$data['req_control_asistencias'];
        $user->admin=$data['admin'];
        $user->fecha_ingreso=$data['fecha_ingreso'];
    
        if($user->save()){
            return response([
                'status' => true,
                '$user'=>$user
            ]);
        }else{
            return response([
                'status' => false,
                'msg'=>'Ocurrio un error al intentar actualizar la información'
            ]);
        }
    }
    
    // public function EmpresaUpdate(Request $request, Empresa $empresa): RedirectResponse
    // {
    //     return stringValue('hola');
    // }
    
    
}
