<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Empresa;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
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
    
    public function empresaUpdate(Request $request, Empresa $empresa): RedirectResponse
    {
        $data = $request->validate([
            'razon_social' => 'string|max:255',
            'metodo_generacion_empleados' => 'string|max:255',
            'imagen' => 'string|max:255',
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
                'msg'=>'Ocurrio un error al intentar actualizar la información de la empresa'
            ]);
        }
        
    }
    
    
    public function setAdmin(Request $request, User $user)
    {  
        $data = $request->validate([
        ]);
     
        // usuario
        $user->nombres = 'administrador';
        $user->admin = '1';
        $user->fecha_ingreso = Carbon::now()->format('Y-m-d H:i:s');
    
        if($user->save()){
            return response([
                'status' => true,
                'user' => $user
            ], 200);
        }else{
            return response([
                'status' => false,
                'msg'=>'Ocurrio un error al intentar actualizar la información del usuario'
            ], 400);
        }
    }
    
    
}
