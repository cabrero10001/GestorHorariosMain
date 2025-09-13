import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { useUserContext } from "../context/ContextUser"
import Swal from "sweetalert2"

export const Login = () => {
    const nav = useNavigate()
    const { setUser, setLogueado } = useUserContext();

    const [data, setData] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const respuesta = await axios.post('http://localhost:3000/api/Login', data);
            if (respuesta.status === 200) {
                setLogueado(true)
                setUser(respuesta.data.usuario)

                Swal.fire({
                    title: "¡Sesión iniciada!",
                    text: "Bienvenido de nuevo 🚀",
                    icon: "success",
                    confirmButtonText: "Continuar",
                    confirmButtonColor: "#2563eb", // azul tailwind
                }).then(() => {
                    nav("/Dashboard");
                });
            }
        } catch (error) {
            if (error.response?.status === 404) {
                Swal.fire({
                    title: "Usuario no encontrado",
                    text: "El nombre de usuario ingresado no se encuentra registrado",
                    icon: "error",
                    confirmButtonText: "Reintentar"
                });
            } else if (error.response?.status === 401) {
                Swal.fire({
                    title: "Contraseña incorrecta",
                    text: "Verifica tus credenciales",
                    icon: "warning",
                    confirmButtonText: "Intentar de nuevo"
                });
            } else {
                Swal.fire({
                    title: "Error inesperado",
                    text: "Intenta más tarde",
                    icon: "error"
                });
            }
        }
    }

    return (
        <div className="flex w-[100%] h-[100%] ">
            <img src="/src/assets/fondo1.jpg" className="h-[100%] w-[100%]"/>
            
            <div className="h-[100%] w-[150%] fixed bg-gradient-to-r from-[#0B192C] via-[#0a0f2d]/90 to-transparent">
                <button onClick={() => nav("/")} 
                className="group flex mt-[1%] ml-[1%] items-center justify-around bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-all duration-400 overflow-hidden hover:pr-5 hover:pl-2 hover:rounded-4xl hover:w-40 w-10 h-10 cursor-pointer">
                    <img src="/src/assets/angulo.png" className='object-center' />
                    <span className="font-Caprasimo whitespace-nowrap opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400 origin-left">
                        Regresar
                    </span>
                </button>
                
                <div className="ml-[7%] mt-[3%] w-[25%]">
                    
                    <div className="flex gap-1 group">
                        <h1 className="font-bold text-gray-500">GH</h1>
                        <span className="text-[10px] text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            ico
                        </span>
                    </div>
                    
                    <h1 className="text-Fondo text-4xl font-Caprasimo">Hi, <span className="font-extrabold">Welcome user!</span></h1>
                    <form onSubmit={handleSubmit} className="flex flex-col w-[100%] mt-[10%]">
                        <input
                            className="bg-[#27374D] text-Fondo p-3 pl-5 w-[60%] rounded-xl "
                            onChange={handleChange}
                            type="text" placeholder="Username" name="username"/>
                        <input 
                            className="bg-[#27374D] text-Fondo mt-5 p-3 pl-5 w-[60%] rounded-xl "
                            onChange={handleChange}
                            type="password" placeholder="Password" name="password"/>
                        <h2 className="text-gray-400 mt-5">Don't have an account <a onClick={() => nav("/Register")} className="text-blue-500 hover:text-blue-700 cursor-pointer">Register</a></h2>
                        <button 
                        type="submit"
                        className="bg-blue-500 mt-[7%] p-2.5 w-[30%] rounded-xl cursor-pointer text-Fondo hover:bg-blue-700 hover:font-bold transition-all duration-300">
                            Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
