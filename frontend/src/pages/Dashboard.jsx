import { Header } from "../components/Header"
import { Inicio } from "./inicio"
export const Dashboard = () => {
    return (
        <div className='flex h-screen bg-AzulLindo'>
            <Header />
            <Inicio />
            
        </div>
    )
}