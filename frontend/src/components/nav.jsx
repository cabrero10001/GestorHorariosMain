export const Nav = () => {
    return (
        <div className="flex">
            <div className="flex items-center gap-1 mt-5 px-3 py-5 group">
                <h1 className="text-2xl">Gestor de Horarios</h1>
                <h1 className="text-2xl font-bold">GH</h1>
                <span className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ico
                </span>
            </div>

            <ul className="flex ml-auto mr-25 mt-5">
                <li className="mr-5">Home</li>
                <li>About us</li>
            </ul>
        </div>
    )
}