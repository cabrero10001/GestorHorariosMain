import React, { useState } from 'react';
import { Save, Trash2 } from 'lucide-react';
import axios from 'axios';

interface FormData {
  firstName: string;
  secondName: string;
  lastName: string;
  secondLastName: string;
  documentNumber: string;
  area: string;
  email: string;
}

const initialFormState: FormData = {
  firstName: '',
  secondName: '',
  lastName: '',
  secondLastName: '',
  documentNumber: '',
  area: '',
  email: ''
};

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormState);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
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
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:3000/api/EnvioRegistro', {
          primerNombre: formData.firstName,
          segundoNombre: formData.secondName,
          primerApellido: formData.lastName,
          segundoApellido: formData.secondLastName,
          numeroDocumento: formData.documentNumber,
          correo: formData.email,
          area: formData.area
        });

        if (response.status === 200) {
          setFormData(initialFormState);
          setShowSuccess(true);
          setErrorMsg('');

          setTimeout(() => setShowSuccess(false), 3000);
        }
      } catch (error: any) {
        console.error('Error al registrar:', error);
        setErrorMsg(error.response?.data?.mensaje || 'Error al registrar el usuario');
      }
    }
  };


  const handleClear = () => {
    setFormData(initialFormState);
    setErrors({});
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Registro de Usuario</h2>
      
      {showSuccess && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md flex items-center">
          <span className="mr-2">✓</span>
          Usuario registrado exitosamente
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              Primer Nombre <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
          </div>
          
          <div>
            <label htmlFor="secondName" className="block text-sm font-medium text-gray-700 mb-1">
              Segundo Nombre
            </label>
            <input
              type="text"
              id="secondName"
              name="secondName"
              value={formData.secondName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Primer Apellido <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
          </div>
          
          <div>
            <label htmlFor="secondLastName" className="block text-sm font-medium text-gray-700 mb-1">
              Segundo Apellido
            </label>
            <input
              type="text"
              id="secondLastName"
              name="secondLastName"
              value={formData.secondLastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="documentNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Número de Documento <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="documentNumber"
              name="documentNumber"
              value={formData.documentNumber}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${errors.documentNumber ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.documentNumber && <p className="mt-1 text-sm text-red-500">{errors.documentNumber}</p>}
          </div>
          
          <div>
            <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
              Área <span className="text-red-500">*</span>
            </label>
            <select
              id="area"
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
          
          <div className="md:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo Electrónico <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
        </div>
        
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={handleClear}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            <Trash2 className="mr-2 h-5 w-5 text-gray-500" />
            Borrar
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
  );
};

export default RegisterForm;