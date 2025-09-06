import { useEffect, useState } from 'react';
import axios from 'axios';

export const UserTable = () => {
    const [usuarios, setUsuarios] = useState([]);
    
    

    return (
        <div className="p-6">
            <h2 className="text-center text-xl font-semibold mb-4">Listado de Usuarios</h2>
            <div className="overflow-x-auto">
                
            </div>
        </div>
    );
    
    function handleEditar(id) {
      // Aquí puedes abrir un modal o redirigir
        alert(`Editar usuario con ID ${id}`);
    }
};

