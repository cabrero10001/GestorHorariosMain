export const BtnLogin = ({accion, layer}) => {
    return (
        <button 
        className="w-auto py-2 px-7 text-2xl shadow-[0_4px_10px_rgba(0,0,0,0.4)] cursor-pointer bg-btnLogin2 text-btnLogin1 rounded-full mx-[10%] hover:px-8 hover:py-3 hover:transition-all duration-400"
        onClick={accion}>
            {layer}
        </button>   
    )
}
