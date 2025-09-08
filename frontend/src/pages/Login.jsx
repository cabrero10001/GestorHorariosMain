export const Login = () => {
    return (
        <div className="flex">
            <img src="/src/assets/fondo1.jpg" className="ml-auto"/>
            <div className="h-[100%] w-[150%] fixed bg-gradient-to-r from-[#0B192C] via-[#0a0f2d]/90 to-transparent">
                <div>
                    <h1 className="text-Fondo text-4xl font-Caprasimo">Hi, <span className="font-extrabold">Welcome user!</span></h1>
                    <form action="" className="flex flex-col w-[15%] bg-amber-100">
                        <input
                            className="bg-[#27374D] text-Fondo p-3"
                            type="text" placeholder="Nombre de Usuario" />
                        <input 
                            className="bg-[#27374D] text-Fondo mt-1 p-3"
                            type="text" placeholder="Contraseña"/>
                        <input 
                        className="bg-blue-600 cursor-pointer mt-1 w-"
                        type="submit"/>
                    </form>
                </div>
            </div>

        </div>
    )
}