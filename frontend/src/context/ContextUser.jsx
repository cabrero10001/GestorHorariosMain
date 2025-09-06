import { createContext, useContext, useState } from "react";

// 1. Crear el contexto
const UserContext = createContext();

// 2. Proveedor del contexto
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // guarda info del usuario
    const [logueado, setLogueado] = useState(false); // estado de sesión

    return (
        <UserContext.Provider value={{ user, setUser, logueado, setLogueado }}>
            {children}
        </UserContext.Provider>
    );
};

// 3. Custom hook para usarlo más fácil
export const useUserContext = () => useContext(UserContext);
