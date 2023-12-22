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
    });
    
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

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

        setAdmin();
        sendData(data);
    };
    
    const setAdmin = () => {
        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: '',
            redirect: 'follow'
        };
        
        fetch("http://127.0.0.1:8000/api/user/1", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    
    const sendData = (data) => {        
        var raw = JSON.stringify(data);
        
        console.log('raw');
        console.log(raw);

        
        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/api/empresa/1", requestOptions)
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
                            <InputLabel htmlFor="razon_social" value="razon social (opcional)" />
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
                            <InputLabel htmlFor="metodo_generacion_empleados" value="metodo_generacion_empleados (opcional)" />
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
                            <InputLabel htmlFor="imagen" value="imagen (opcional)" />
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
