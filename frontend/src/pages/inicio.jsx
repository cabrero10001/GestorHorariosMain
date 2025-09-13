import { useUserContext } from "../context/ContextUser"

export const Inicio = () => {
    const { user } = useUserContext();

    return (
        <div className="bg-Fondo w-screen mr-2 h-[98%] mt-[.5%] rounded-4xl">
            <div className="bg-amber-200 justify-center items-center text-center">
                <h1 className="text-5xl py-10">
                    Bienvenido <span>{user?.username}</span>
                </h1>
            </div>
        </div>
    );
};
