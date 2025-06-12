import React, { useState } from 'react';
import { useUserContext } from '../../context/UserContext';
import { Edit2, Trash2, Plus } from 'lucide-react';
import EditUserModal from '../modals/EditUserModal';
import { User } from '../../types/User';

const UserTable: React.FC = () => {
  const { users, deleteUser } = useUserContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showConfirmation, setShowConfirmation] = useState<string | null>(null);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setShowConfirmation(id);
  };

  const confirmDelete = (id: string) => {
    deleteUser(id);
    setShowConfirmation(null);
  };

  const cancelDelete = () => {
    setShowConfirmation(null);
  };

  const handleAddNew = () => {
    setSelectedUser(null);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex justify-between items-center p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-800">Usuarios Registrados</h2>
        <button
          onClick={handleAddNew}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          <Plus className="mr-2 h-5 w-5" />
          Agregar Usuario
        </button>
      </div>

      {users.length === 0 ? (
        <div className="p-6 text-center text-gray-500">
          No hay usuarios registrados
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Usuario
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Área
                </th>
                
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{user.firstName} {user.lastName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.area}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {showConfirmation === user.id ? (
                      <div className="flex justify-end space-x-2">
                        <span className="text-sm text-gray-600 mr-2">¿Eliminar?</span>
                        <button 
                          onClick={() => confirmDelete(user.id)} 
                          className="text-green-600 hover:text-green-900"
                        >
                          Sí
                        </button>
                        <button 
                          onClick={cancelDelete} 
                          className="text-red-600 hover:text-red-900"
                        >
                          No
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-end space-x-3">
                        <button
                          onClick={() => handleEdit(user)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Edit2 className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <EditUserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={selectedUser}
      />
    </div>
  );
};

export default UserTable;