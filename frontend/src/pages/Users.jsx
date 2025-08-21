import { Header } from "../components/Header"
import { Nav } from "../components/nav"
import { UserTable } from "../components/Usertable"

export const Users = () => {
    

    return (
        <div className='flex h-screen bg-AzulLindo'>
            <Header />
            <div className="bg-Fondo w-screen mr-2 h-[98%] mt-[.5%] rounded-4xl">
                <Nav />
                <UserTable />
            </div>
        </div>
    )
}