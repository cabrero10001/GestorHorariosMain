import { useEffect, useState } from 'react';
import axios from 'axios';

export const UserTable = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/GetUsuarios");
              setUsuarios(res.data.resultado); // 👈 aquí ajustamos
            } catch (error) {
                console.error("Error al obtener usuarios:", error);
            }
        };

        fetchUsuarios();

      // Opcional: actualizar cada 5 segundos
        const interval = setInterval(fetchUsuarios, 15000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-center text-xl font-semibold mb-4">Listado de Usuarios</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 shadow-md rounded-lg">
                    <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 border">#</th>
                        <th className="px-4 py-2 border">Primer Nombre</th>
                        <th className="px-4 py-2 border">Segundo Nombre</th>
                        <th className="px-4 py-2 border">Primer Apellido</th>
                        <th className="px-4 py-2 border">Segundo Apellido</th>
                        <th className="px-4 py-2 border">Área</th>
                    </tr>
                    </thead>
                    <tbody>
                        {usuarios.length > 0 ? (
                            usuarios.map((u, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="px-4 py-2 border">{index + 1}</td>
                                    <td className="px-4 py-2 border">{u.primerNombre}</td>
                                    <td className="px-4 py-2 border">{u.segundoNombre}</td>
                                    <td className="px-4 py-2 border">{u.primerApellido}</td>
                                    <td className="px-4 py-2 border">{u.segundoApellido}</td>
                                    <td className="px-4 py-2 border">{u.area}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4">
                                    No hay usuarios registrados
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};  
