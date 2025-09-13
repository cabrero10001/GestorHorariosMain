import { BtnLogin } from "../components/elements/BtnLogin";
import { Nav } from "../components/nav"
import { useNavigate } from "react-router-dom";

export const Index = () => {
    const nav = useNavigate();
    return (
        <div className="">
            <Nav />
            <div className="relative mt-[2%] h-[450px]">
                <div className="absolute left-0 top-[5%] w-[54%] h-[90%] bg-Fondo z-10 p-6">
                    <h1 className="text-5xl font-bold mt-[5%] ml-[5%]">
                        Bienvenido al aplicativos de Gestor de Horarios
                    </h1>
                    <p className="w-[90%] mt-[5%] ml-[5%]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit...
                    </p>
                    <div className="w-full my-[5%] ">
                        <BtnLogin 
                            layer={"Ir al calendario"}
                            accion={() => nav("/Login")}
                        />
                    </div>
                </div>  
                <div className="absolute right-0 w-[50%] h-[100%] bg-AzulLindo z-0 p-6"> 
                    <h2>Aqui va la imagen de la pagina del dash, son ejemplos</h2>
                </div>
            </div>

        </div>
    )
}