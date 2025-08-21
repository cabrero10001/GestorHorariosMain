import { useEffect, useState } from 'react';
import axios from 'axios';

export const UserTable = () => {
    const [usuarios, setUsuarios] = useState([]);

    // Obtener datos al montar el componente
    useEffect(() => {
        axios.get('http://localhost:3000/api/GetUsuarios')
            .then(res => setUsuarios(res.data))
            .catch(err => console.error('Error al obtener usuarios:', err));
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-center text-xl font-semibold mb-4">Listado de Usuarios</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-black text-center">
                    <thead className="bg-gray-200">
                    <tr>
                        <th className="border border-black px-4 py-2">Usuario</th>
                        <th className="border border-black px-4 py-2">Área/Entidad</th>
                        <th className="border border-black px-4 py-2">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id}>
                                <td className="border border-black px-4 py-2">{usuario.nombre}</td>
                                <td className="border border-black px-4 py-2">{usuario.area}</td>
                                <td className="border border-black px-4 py-2 space-x-2">
                                    <button
                                        className="border border-black px-2 py-1 rounded hover:bg-blue-100"
                                        onClick={() => handleEditar(usuario.id)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className="border border-black px-2 py-1 rounded hover:bg-red-100"
                                        onClick={() => handleEliminar(usuario.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {usuarios.length === 0 && (
                            <tr>
                                <td colSpan="3" className="py-4 text-gray-500">
                                    No hay usuarios registrados.
                                </td>
                            </tr>
                        )}
                        </tbody>
                </table>
            </div>
        </div>
    );
    
    function handleEditar(id) {
      // Aquí puedes abrir un modal o redirigir
        alert(`Editar usuario con ID ${id}`);
    }

    function handleEliminar(id) {
      // Puedes hacer una petición DELETE al backend
        if (confirm('¿Estás seguro de eliminar este usuario?')) {
            axios.delete(`http://localhost:3000/api/DeleteUsuario/${id}`)
            .then(() => {
                setUsuarios(usuarios.filter(user => user.id !== id));
            })
            .catch(err => console.error('Error al eliminar:', err));
        }
    }
};

