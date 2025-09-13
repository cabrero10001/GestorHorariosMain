import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/ContextUser";

const PrivateRoute = ({ children }) => {
    const { logueado } = useUserContext();

    if (!logueado) {
        // Si no está logueado, redirige al Login
        return <Navigate to="/Login" replace />;
    }

    // Si está logueado, muestra la ruta protegida
    return children;
};

export default PrivateRoute;
