import React, { useState } from 'react';
//import { useUserContext } from '../../context/UserContext';
import { LogIn, CheckCircle2, X } from 'lucide-react';
import axios from 'axios';

const LoginForm: React.FC = () => {
  const [documentNumber, setDocumentNumber] = useState('');
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successUser, setSuccessUser] = useState<{ firstName: string; lastName: string } | null>(null);
  //const { findUserByDocument } = useUserContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!documentNumber.trim()) {
      setError('Por favor ingrese su número de documento');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/RegistroHora', {
        numeroDocumento: documentNumber
      });

      const resultado = response.data.resultado;

      setSuccessUser({
        firstName: resultado.user?.primerNombre || 'Nombre',
        lastName: resultado.user?.primerApellido || 'Apellido'
      });

      setShowSuccessModal(true);
      setDocumentNumber('');
      setError('');
    } catch (err: unknown) {
      console.error(err);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.mensaje || 'Error al registrar la hora');
      } else {
        setError('Error al registrar la hora');
      }
    }
  };

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
        <div className="text-center mb-6">
          <LogIn className="h-12 w-12 text-blue-600 mx-auto" />
          <h2 className="mt-4 text-3xl font-bold text-gray-800">Iniciar Sesión</h2>
          <p className="mt-2 text-sm text-gray-600">
            Ingrese su número de documento para continuar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="documentNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Número de Documento
            </label>
            <input
              type="text"
              id="documentNumber"
              value={documentNumber}
              onChange={(e) => {
                setDocumentNumber(e.target.value);
                setError('');
              }}
              className={`w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Ingrese su número de documento"
            />
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              <LogIn className="mr-2 h-5 w-5" />
              Ingresar
            </button>
          </div>
        </form>
        
        <div className="mt-6">
          <p className="text-center text-xs text-gray-600">
            Para fines de prueba, puede usar los números de documento: 12345678 o 87654321
          </p>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 relative">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="text-center">
              <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">¡Ingreso Exitoso!</h3>
              {successUser && (
                <p className="text-gray-600">
                  Bienvenido(a) {successUser.firstName} {successUser.lastName}
                </p>
              )}
            </div>
            
            <button
              onClick={() => setShowSuccessModal(false)}
              className="mt-6 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
            >
              Continuar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;