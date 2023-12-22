import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function RegisterPartTwo() {
    const { data, setData, post, processing, errors, reset } = useForm({
        razon_social: '',
        metodo_generacion_empleados: '',
        imagen: '',
        clave_empleado: '',
        nombres: '',
        ap_paterno: '',
        ap_materno: '',
        rfc: '',
        tipo_sangre: '',
        curp: '',
        clabe_interbancaria: '',
        banco: '',
        sexo: '',
        req_control_asistencias: '',
        admin: '1',
        fecha_ingreso: '15/12/2023',
    });

    // useEffect(() => {
    //     return () => {
    //         reset('password', 'password_confirmation');
    //     };
    // }, []);

    const submit = (e) => {
        e.preventDefault();
        
        console.log(e);
        console.log('data',data);

        // post(route('register'));

        sendData(data);
    };
    
    const sendData = (data) => {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("X-XSRF-TOKEN", "2|3e9pepIh05VFq29Kd0FnvhjUxHSEBpqz0CEFIsh9");
        // myHeaders.append("Authorization", "Bearer 2|3e9pepIh05VFq29Kd0FnvhjUxHSEBpqz0CEFIsh9");

        console.log(data.razon_social)
        
        
        
        var contenedor = {
            data: data
          };
        
        var raw = JSON.stringify(contenedor);
        
        console.log('raw');
        console.log(raw);

        
        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/api/user/1", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    return (
        <GuestLayout>
            <Head title="RegisterPartTwo" />
            <form onSubmit={submit}>
                <div>
                    <h2 style={{color: '#FFF', fontSize: '20px'}}>Datos empresa</h2>
                    <p className='mb-2 text-white'>Complete los datos de su empresa</p>
                    <div>
                        <div className='mt-4'>  
                            <InputLabel htmlFor="razon_social" value="razon_social" />
                            <TextInput
                                id="razon_social"
                                name="razon_social"
                                value={data.razon_social}
                                className="mt-1 block w-full"
                                autoComplete="razon_social"
                                isFocused={true}
                                onChange={(e) => setData('razon_social', e.target.value)}
                                required
                            />

                            <InputError message={errors.razon_social} className="mt-2" />
                        </div>
                        
                        <div className='mt-4'>  
                            <InputLabel htmlFor="metodo_generacion_empleados" value="metodo_generacion_empleados" />
                            <TextInput
                                id="metodo_generacion_empleados"
                                name="metodo_generacion_empleados"
                                value={data.metodo_generacion_empleados}
                                className="mt-1 block w-full"
                                autoComplete="metodo_generacion_empleados"
                                isFocused={true}
                                onChange={(e) => setData('metodo_generacion_empleados', e.target.value)}
                                required
                                />

                            <InputError message={errors.metodo_generacion_empleados} className="mt-2" />
                        </div>
                        
                        <div className='mt-4'>  
                            <InputLabel htmlFor="imagen" value="imagen" />
                            <TextInput
                                id="imagen"
                                name="imagen"
                                value={data.imagen}
                                className="mt-1 block w-full"
                                autoComplete="imagen"
                                isFocused={true}
                                onChange={(e) => setData('imagen', e.target.value)}
                                required
                            />

                            <InputError message={errors.imagen} className="mt-2" />
                        </div>
                        
                    </div>
                </div>
                
          
                <hr className='my-7' />
      
                
                <div>
                    <h2 style={{color: '#FFF', fontSize: '20px'}}>Datos empleado</h2>
                    <p className='mb-2 text-white'>Complete los datos de su cuenta de usuario</p>
                    <div>
                        <div className='mt-4'>  
                            <InputLabel htmlFor="clave_empleado" value="clave_empleado" />
                                <TextInput
                                    id="clave_empleado"
                                    name="clave_empleado"
                                    value={data.clave_empleado}
                                    className="mt-1 block w-full"
                                    autoComplete="clave_empleado"
                                    isFocused={true}
                                    onChange={(e) => setData('clave_empleado', e.target.value)}
                                    required
                                />

                            <InputError message={errors.clave_empleado} className="mt-2" />
                        </div>
                        
                        <div className='mt-4'> 
                            <InputLabel htmlFor="nombres" value="nombres" />
                                <TextInput
                                    id="nombres"
                                    name="nombres"
                                    value={data.nombres}
                                    className="mt-1 block w-full"
                                    autoComplete="nombres"
                                    isFocused={true}
                                    onChange={(e) => setData('nombres', e.target.value)}
                                    required
                                />

                            <InputError message={errors.nombres} className="mt-2" />
                        </div>
                        
                        <div className='mt-4'> 
                            <InputLabel htmlFor="ap_paterno" value="ap_paterno" />
                                <TextInput
                                    id="ap_paterno"
                                    name="ap_paterno"
                                    value={data.ap_paterno}
                                    className="mt-1 block w-full"
                                    autoComplete="ap_paterno"
                                    isFocused={true}
                                    onChange={(e) => setData('ap_paterno', e.target.value)}
                                    required
                                />

                            <InputError message={errors.ap_paterno} className="mt-2" />
                        </div>
                        
                        <div className='mt-4'> 
                            <InputLabel htmlFor="ap_materno" value="ap_materno" />
                                <TextInput
                                    id="ap_materno"
                                    name="ap_materno"
                                    value={data.ap_materno}
                                    className="mt-1 block w-full"
                                    autoComplete="ap_materno"
                                    isFocused={true}
                                    onChange={(e) => setData('ap_materno', e.target.value)}
                                    required
                                />

                            <InputError message={errors.ap_materno} className="mt-2" />
                        </div>
                        
                        <div className='mt-4'> 
                            <InputLabel htmlFor="rfc" value="rfc" />
                                <TextInput
                                    id="rfc"
                                    name="rfc"
                                    value={data.rfc}
                                    className="mt-1 block w-full"
                                    autoComplete="rfc"
                                    isFocused={true}
                                    onChange={(e) => setData('rfc', e.target.value)}
                                    required
                                />

                            <InputError message={errors.rfc} className="mt-2" />
                        </div>
                        
                        <div className='mt-4'> 
                            <InputLabel htmlFor="tipo_sangre" value="tipo_sangre" />
                                <TextInput
                                    id="tipo_sangre"
                                    name="tipo_sangre"
                                    value={data.tipo_sangre}
                                    className="mt-1 block w-full"
                                    autoComplete="tipo_sangre"
                                    isFocused={true}
                                    onChange={(e) => setData('tipo_sangre', e.target.value)}
                                    required
                                />

                            <InputError message={errors.tipo_sangre} className="mt-2" />
                        </div>
                        
                        <div className='mt-4'> 
                            <InputLabel htmlFor="curp" value="curp" />
                                <TextInput
                                    id="curp"
                                    name="curp"
                                    value={data.curp}
                                    className="mt-1 block w-full"
                                    autoComplete="curp"
                                    isFocused={true}
                                    onChange={(e) => setData('curp', e.target.value)}
                                    required
                                />

                            <InputError message={errors.curp} className="mt-2" />
                        </div>
                        
                        <div className='mt-4'> 
                            <InputLabel htmlFor="clabe_interbancaria" value="clabe_interbancaria" />
                                <TextInput
                                    id="clabe_interbancaria"
                                    name="clabe_interbancaria"
                                    value={data.clabe_interbancaria}
                                    className="mt-1 block w-full"
                                    autoComplete="clabe_interbancaria"
                                    isFocused={true}
                                    onChange={(e) => setData('clabe_interbancaria', e.target.value)}
                                    required
                                />

                            <InputError message={errors.clabe_interbancaria} className="mt-2" />
                        </div>
                        
                        <div className='mt-4'> 
                            <InputLabel htmlFor="banco" value="banco" />
                                <TextInput
                                    id="banco"
                                    name="banco"
                                    value={data.banco}
                                    className="mt-1 block w-full"
                                    autoComplete="banco"
                                    isFocused={true}
                                    onChange={(e) => setData('banco', e.target.value)}
                                    required
                                />

                            <InputError message={errors.banco} className="mt-2" />
                        </div>
                        
                        <div className='mt-4'> 
                            <InputLabel htmlFor="sexo" value="sexo" />
                                <TextInput
                                    id="sexo"
                                    name="sexo"
                                    value={data.sexo}
                                    className="mt-1 block w-full"
                                    autoComplete="sexo"
                                    isFocused={true}
                                    onChange={(e) => setData('sexo', e.target.value)}
                                    required
                                />

                            <InputError message={errors.sexo} className="mt-2" />
                        </div>
                        
                        <div className='mt-4'> 
                            <InputLabel htmlFor="req_control_asistencias" value="req_control_asistencias" />
                                <TextInput
                                    id="req_control_asistencias"
                                    name="req_control_asistencias"
                                    value={data.req_control_asistencias}
                                    className="mt-1 block w-full"
                                    autoComplete="req_control_asistencias"
                                    isFocused={true}
                                    onChange={(e) => setData('req_control_asistencias', e.target.value)}
                                    required
                                />

                            <InputError message={errors.req_control_asistencias} className="mt-2" />
                        </div>
                        
                        {/* p: admin, fecha_ingreso  */}
                        
                    </div>
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        // href={route('login')}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        {/* Already registered? */}
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        RegisterPartTwo
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
