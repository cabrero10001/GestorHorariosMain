export const Nav = () => {
    return (
        <header className=" w-[95%] mt-1 ml-[2.5%] rounded-2xl relative">
                <h1 className="text-3xl p-5">Gestor de Horarios</h1>
                <button className="bg-AzulLindo text-Fondo font-bold flex flex-row p-3 text-xl absolute top-3 right-10 rounded-2xl hover:bg-blue-900 cursor-pointer">
                    <img src="\src\assets\img\user-solid.svg" alt="" className="w-4 mr-3" />
                    Login
                </button>
                
        </header>
    )
}