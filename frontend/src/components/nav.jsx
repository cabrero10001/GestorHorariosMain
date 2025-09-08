export const Nav = () => {
    return (
        <div className="flex">
            <div className="flex gap-1 mt-[1%] px-3 py-5 group">
                <h1 className="text-2xl font-bold ml-[20%]">GH</h1>
                <span className="text-[10px] text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ico
                </span>
            </div>

            <ul className="flex ml-auto mr-25 mt-[2.5%]">
                <li className="mr-5">Home</li>
                <li>About us</li>
            </ul>
        </div>
    )
}