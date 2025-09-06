import BtnLogin from "../components/elements/BtnLogin"
import { Nav } from "../components/nav"
export const Index = () => {
    return (
        <div className="">
            <Nav />
            <div className="flex mt-10">
                <div className="bg-green-200 w-[50%]">
                    <h1 className="text-5xl font-bold m-15">Bienvenido al aplicativos de Gestor de Horarios</h1>
                    <p className="w-[90%] ml-15">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ad laudantium voluptatum, laborum velit quisquam obcaecati dignissimos voluptatibus quae. Dolor natus tenetur, sint, optio ex blanditiis repellendus nam ratione sapiente beatae, eveniet corrupti officiis dolore doloremque voluptatibus. Itaque, corrupti tenetur!</p>
                    <div className="w-full my-[5%] bg-amber-200">
                        <BtnLogin />
                    </div>
                    </div>
                    <div className="bg-blue-200 w-[50%]">
                        <h2>Aqui va la imagen de la pagina del dash, son ejemplos</h2>
                    </div>
                </div>
        </div>
    )
}