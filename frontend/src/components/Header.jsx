import { BotonMenu } from "./elements/BotonMenu";
import { useNavigate } from 'react-router-dom';


export const Header = () => {
    const nav = useNavigate();

    return (
        <nav className="group bg-AzulLindo h-screen w-16 hover:w-48 transition-all duration-300 flex flex-col items-start relative overflow-hidden">
            <div className="flex items-center gap-1 mt-5 px-3 py-5">
                <h1 className="text-2xl text-Fondo font-bold">GH</h1>
                <span className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">ico</span>
            </div>

            <ul className="flex flex-col gap-2 w-full px-2 mt-20">
                <BotonMenu iconPath="/src/assets/img/house-solid.svg" text="Home"
                    accion = {() => nav("/")}
                />
                <BotonMenu iconPath="/src/assets/img/users-solid.svg" text="Usuarios"
                    accion = {() => nav('/Users')}
                />
                <BotonMenu iconPath="/src/assets/img/calendar-days-solid.svg" text="Calendario" 
                    accion = {() => nav('/Calendar')}
                />
                <BotonMenu iconPath="/src/assets/img/address-card-solid.svg" text="Registro" 
                    accion={() => nav("/Register")}
                />
            </ul>

            <button className="absolute cursor-pointer rounded-2xl w-[90%] p-3 bottom-10 left-2 flex items-center gap-2 hover:bg-blue-300">
                <img src="/src/assets/img/address-card-solid.svg" alt="Cuenta" className="w-5" />
                <span className="opacity-0 text-Fondo group-hover:opacity-100 transition-opacity duration-300">Cuenta</span>
            </button>
        </nav>
    );
};


