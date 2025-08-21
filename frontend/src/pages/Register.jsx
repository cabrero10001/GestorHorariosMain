import { Header } from "../components/Header"
import { Nav } from "../components/nav"

export const Register = () => {
    return (
        <div className='flex h-screen bg-AzulLindo'>
            <Header />
            <div className="bg-Fondo w-screen mr-2 h-[98%] mt-[.5%] rounded-4xl">
                <Nav />
                <div className="bg-amber-200 justify-center items-center text-center">
                    <h1 className="text-5xl py-10">Register</h1>
                </div>
            </div>
        </div>
    )
}