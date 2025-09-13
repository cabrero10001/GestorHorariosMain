import { Header } from "../components/Header"
import axios from "axios"
import { useState } from "react"
import Swal from "sweetalert2"

export const RegisterNew = () => {
    const [data, setData] = useState({
        primerNombre: '',
        segundoNombre: '',
        primerApellido: '',
        segundoApellido: '',
        numeroDocumento: '',
        correo: '',
        area: ''
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const respuesta = await axios.post("http://localhost:3000/api/RegisterNew", data);
            if (respuesta.status === 200){
                Swal.fire({
                    title: "¡Usuario creado!",
                    text: "Ahora puedes registrar tu hora de entrada y salida",
                    icon: "success",
                    confirmButtonText: "Almacenando Informacion de Usuario",
                    confirmButtonColor: "#2563eb",
                }).then(() => {
                    nav("/RegisterNew");
                });
            }
            } catch (error) {
                    if (error.response?.status === 409) {
                        Swal.fire({
                            title: "Usuario existente",
                            text: "El usuario ya fue registrado, redirigiendo a inicio de sesión",
                            icon: "error",
                            confirmButtonText: "Ir al login"
                        }).then(() => nav("/RegisterNew"));
                    } 
                    else {
                        Swal.fire({
                            title: "Error inesperado",
                            text: "Intenta nuevamente más tarde",
                            icon: "error"
                        });
                    }
                }
    }
    return (
        <div className='flex h-screen bg-AzulLindo'>
            <Header />
            <div className="bg-Fondo flex w-screen mr-2 h-[98%] mt-[.5%] rounded-4xl">
                <div className="justify-center items-center text-center w-[50%] rounded-4xl">
                    <h1 className="text-5xl py-12">Register</h1>
                </div>
                <div className="bg-white shadow-[0_4px_10px_rgba(0,0,0,0.4)] mx-[5%] my-[1%] max-h-[100%] w-[50%] overflow-auto rounded-4xl">
                    <form onSubmit={handleSubmit} className="flex flex-col p-[10%] w-[100%] ">
                        <label htmlFor="" className="mt-1">Primer Nombre:</label>
                        <input 
                            className="bg-Fondo inset-shadow-sm rounded-2xl px-7 pt-3 pb-2"
                            type="text" required name="primerNombre" onChange={handleChange}/>
                        <label htmlFor="" className="mt-5">Segundo Nombre:</label>
                        <input 
                            className="bg-Fondo inset-shadow-sm rounded-2xl px-7 pt-3 pb-2"
                            type="text" name="segundoNombre" onChange={handleChange}/>
                        <label htmlFor="" className="mt-5">Primer Apellido:</label>
                        <input 
                            className="bg-Fondo inset-shadow-sm rounded-2xl px-7 pt-3 pb-2"
                            type="text" required name="primerApellido" onChange={handleChange}/>
                        <label htmlFor="" className="mt-5">Segundo Apellido:</label>
                        <input 
                            className="bg-Fondo inset-shadow-sm rounded-2xl px-7 pt-3 pb-2"
                            type="text" required name="segundoApellido" onChange={handleChange}/>
                        <label htmlFor="" className="mt-5">Numero de Documento:</label>
                        <input 
                            className="bg-Fondo inset-shadow-sm rounded-2xl px-7 pt-3 pb-2"
                            type="number" required name="numeroDocumento" onChange={handleChange}/>
                        <label htmlFor="" className="mt-5">Correo:</label>
                        <input 
                            className="bg-Fondo inset-shadow-sm rounded-2xl px-7 pt-3 pb-2"
                            type="email" name="correo" onChange={handleChange}/>
                        <label htmlFor="" className="mt-5">Area:</label>
                        <input 
                            className="bg-Fondo inset-shadow-sm rounded-2xl px-7 pt-3 pb-2"
                            type="text" name="area" onChange={handleChange}/>
                        <button
                            className="bg-blue-400 text-Fondo p-3 w-[25%] mt-5 ml-[35%] cursor-pointer hover:bg-blue-600"
                            type="submit"
                        >Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}