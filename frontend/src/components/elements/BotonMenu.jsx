export const BotonMenu = ({ iconPath, text, accion }) => (
    <li className="w-full">
        <button className="flex items-center gap-3 text-Fondo hover:bg-blue-300 px-3 py-2 rounded-lg w-full transition-colors duration-200 cursor-pointer" onClick={accion}
        >
            <img src={iconPath} alt={text} className="w-5" />
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {text}
            </span>
        </button>
    </li>
);