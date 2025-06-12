import React, { useState, useEffect } from 'react';
import { User } from '../../types/User';
import { useUserContext } from '../../context/UserContext';
import { X, Save } from 'lucide-react';
import axios from 'axios';

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
}

const EditUserModal: React.FC<EditUserModalProps> = ({ isOpen, onClose, user }) => {
  const { addUser, updateUser } = useUserContext();
  const [formData, setFormData] = useState<Omit<User, 'id'>>({
    firstName: '',
    secondName: '',
    lastName: '',
    secondLastName: '',
    documentNumber: '',
    area: '',
    email: ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Omit<User, 'id'>, string>>>({});

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName,
        secondName: user.secondName,
        lastName: user.lastName,
        secondLastName: user.secondLastName,
        documentNumber: user.documentNumber,
        area: user.area,
        email: user.email
      });
    } else {
      setFormData({
        firstName: '',
        secondName: '',
        lastName: '',
        secondLastName: '',
        documentNumber: '',
        area: '',
        email: ''
      });
    }
    setErrors({});
  }, [user, isOpen]);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof Omit<User, 'id'>, string>> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'El primer nombre es requerido';
    if (!formData.lastName.trim()) newErrors.lastName = 'El primer apellido es requerido';
    if (!formData.documentNumber.trim()) newErrors.documentNumber = 'El número de documento es requerido';
    if (!formData.area.trim()) newErrors.area = 'El área es requerida';
    
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ingrese un correo electrónico válido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name as keyof Omit<User, 'id'>]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      if (user) {
        updateUser(user.id, { ...formData, id: user.id });
      } else {
        addUser({ ...formData, id: Date.now().toString() });
      }
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-semibold text-gray-800">
            {user ? 'Editar Usuario' : 'Agregar Usuario'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="modal-firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  Primer Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="modal-firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
              </div>
              
              <div>
                <label htmlFor="modal-secondName" className="block text-sm font-medium text-gray-700 mb-1">
                  Segundo Nombre
                </label>
                <input
                  type="text"
                  id="modal-secondName"
                  name="secondName"
                  value={formData.secondName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="modal-lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Primer Apellido <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="modal-lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
              </div>
              
              <div>
                <label htmlFor="modal-secondLastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Segundo Apellido
                </label>
                <input
                  type="text"
                  id="modal-secondLastName"
                  name="secondLastName"
                  value={formData.secondLastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="modal-area" className="block text-sm font-medium text-gray-700 mb-1">
                Área <span className="text-red-500">*</span>
              </label>
              <select
                id="modal-area"
                name="area"
                value={formData.area}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${errors.area ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              >
                <option value="">Seleccione un área</option>
                <option value="Desarrollo">Desarrollo</option>
                <option value="Recursos Humanos">Recursos Humanos</option>
                <option value="Marketing">Marketing</option>
                <option value="Ventas">Ventas</option>
                <option value="Administración">Administración</option>
              </select>
              {errors.area && <p className="mt-1 text-sm text-red-500">{errors.area}</p>}
            </div>
            
            <div>
              <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo Electrónico <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="modal-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="modal-documentNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Número de Documento <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="modal-documentNumber"
                name="documentNumber"
                value={formData.documentNumber}
                onChange={handleChange}
                className={`w-full px-3 py-2 border ${errors.documentNumber ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.documentNumber && <p className="mt-1 text-sm text-red-500">{errors.documentNumber}</p>}
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              <Save className="mr-2 h-5 w-5" />
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;