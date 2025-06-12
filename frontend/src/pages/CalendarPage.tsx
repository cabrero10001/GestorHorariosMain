import React from 'react';
import { Calendar } from 'lucide-react';

const CalendarPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Calendario</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        <Calendar className="h-16 w-16 text-blue-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Próximamente</h2>
        <p className="text-gray-600">
          Esta sección está en desarrollo. Próximamente estará disponible el calendario de eventos.
        </p>
      </div>
    </div>
  );
};

export default CalendarPage;