import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/ContextUser";

export const BtnLogOut = () => {
    const { setUser, setLogueado } = useUserContext();
    const nav = useNavigate();

    const handleLogout = () => {
      setUser(null);          // vaciar usuario
      setLogueado(false);     // marcar como no logueado
      nav("/");               // redirigir al login o home
    };

    return (
        <button 
        onClick={handleLogout}
        className="absolute cursor-pointer rounded-2xl w-[70%] p-3 bottom-6 left-2 flex items-center gap-3 hover:bg-blue-300">
                <img src="/src/assets/interruptor-de-alimentacion.png" alt="Cuenta" className="w-5" />
                <span className="opacity-0 text-Fondo group-hover:opacity-100 transition-opacity duration-300">LogOut</span>
        </button>
    )
}