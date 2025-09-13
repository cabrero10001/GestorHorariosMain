import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import Swal from "sweetalert2"

export const Register = () => {
    const nav = useNavigate();
    
    const [data, setData] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });

    const noCoinciden = data.confirmPassword.length > 0 && data.password !== data.confirmPassword;

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (data.password === data.confirmPassword) {
                const respuesta = await axios.post("http://localhost:3000/api/Register", data);

                if (respuesta.status === 200) {
                    Swal.fire({
                        title: "¡Usuario creado!",
                        text: "Ahora puedes iniciar sesión",
                        icon: "success",
                        confirmButtonText: "Ir al login",
                        confirmButtonColor: "#2563eb",
                    }).then(() => {
                        nav("/Login");
                    });
                }
            } else {
                Swal.fire({
                    title: "Error",
                    text: "Las contraseñas no coinciden",
                    icon: "warning",
                    confirmButtonText: "Intentar de nuevo"
                });
            }
        } catch (error) {
            if (error.response?.status === 409) {
                Swal.fire({
                    title: "Usuario existente",
                    text: "El usuario ya fue registrado, redirigiendo a inicio de sesión",
                    icon: "error",
                    confirmButtonText: "Ir al login"
                }).then(() => nav("/Login"));
            } else if (error.response?.status === 404) {
                Swal.fire({
                    title: "Usuario no válido",
                    text: "El correo no se encuentra registrado",
                    icon: "error"
                });
            } else if (error.response?.status === 401) {
                Swal.fire({
                    title: "Contraseña inválida",
                    text: "La contraseña es incorrecta",
                    icon: "warning"
                });
            } else {
                Swal.fire({
                    title: "Error inesperado",
                    text: "Intenta nuevamente más tarde",
                    icon: "error"
                });
            }
        }
    }

    return(
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
                    <h1 className="text-Fondo text-4xl font-Caprasimo">Create <span className="font-extrabold"> New Account</span></h1>
                    <form onSubmit={handleSubmit} className="flex flex-col w-[100%] mt-[8%]">
                        <input
                            className="bg-[#27374D] text-Fondo p-3 pl-5 w-[60%] rounded-xl "
                            type="text" placeholder="Username" name="username" onChange={handleChange}/>
                        <input 
                            className="bg-[#27374D] text-Fondo mt-5 p-3 pl-5 w-[60%] rounded-xl "
                            type="password" placeholder="Password" name="password" onChange={handleChange}/>
                        <input 
                            className="bg-[#27374D] text-Fondo mt-5 p-3 pl-5 w-[60%] rounded-xl "
                            type="password" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange}/>
                            {noCoinciden && (
                                <div
                                    className="text-center bg-red-600 text-white p-2 rounded-md text-sm shadow-md mt-3 w-[60%]"
                                >
                                    ⚠️ LAS CONTRASEÑAS NO COINCIDEN ⚠️
                                </div>
                            )}
                        <h2 className="text-gray-400 mt-5">Already A Member? <a onClick={() => nav("/Login")} className="text-blue-500 hover:text-blue-700 cursor-pointer"> Log in</a></h2>
                        <button 
                        type="submit"
                        className="bg-blue-500 mt-[7%] p-2.5 w-[30%] rounded-xl cursor-pointer text-Fondo hover:bg-blue-700 hover:font-bold transition-all duration-300">
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
