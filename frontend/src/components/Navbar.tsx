import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Users, CalendarDays, LogIn, FileSignature } from 'lucide-react';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">AppWeb</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <button
                onClick={() => navigate('/register')}
                className={`${
                  isActive('/register')
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
              >
                <FileSignature className="mr-2 h-5 w-5" />
                Registro
              </button>
              <button
                onClick={() => navigate('/users')}
                className={`${
                  isActive('/users')
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
              >
                <Users className="mr-2 h-5 w-5" />
                Usuarios
              </button>
              <button
                onClick={() => navigate('/calendar')}
                className={`${
                  isActive('/calendar')
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
              >
                <CalendarDays className="mr-2 h-5 w-5" />
                Calendario
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => navigate('/login')}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              <LogIn className="mr-2 h-5 w-5" />
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className="md:hidden border-t border-gray-200">
        <div className="grid grid-cols-4 text-xs">
          <button
            onClick={() => navigate('/register')}
            className={`${
              isActive('/register') ? 'text-blue-600' : 'text-gray-500'
            } flex flex-col items-center py-2`}
          >
            <FileSignature className="h-6 w-6" />
            <span>Registro</span>
          </button>
          <button
            onClick={() => navigate('/users')}
            className={`${
              isActive('/users') ? 'text-blue-600' : 'text-gray-500'
            } flex flex-col items-center py-2`}
          >
            <Users className="h-6 w-6" />
            <span>Usuarios</span>
          </button>
          <button
            onClick={() => navigate('/calendar')}
            className={`${
              isActive('/calendar') ? 'text-blue-600' : 'text-gray-500'
            } flex flex-col items-center py-2`}
          >
            <CalendarDays className="h-6 w-6" />
            <span>Calendario</span>
          </button>
          <button
            onClick={() => navigate('/login')}
            className={`${
              isActive('/login') ? 'text-blue-600' : 'text-gray-500'
            } flex flex-col items-center py-2`}
          >
            <LogIn className="h-6 w-6" />
            <span>Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;