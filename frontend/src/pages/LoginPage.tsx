import React from 'react';
import LoginForm from '../components/forms/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Acceso</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;