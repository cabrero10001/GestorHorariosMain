import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Navbar from './components/Navbar';
import RegisterPage from './pages/RegisterPage';
import UsersPage from './pages/UsersPage';
import CalendarPage from './pages/CalendarPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="pt-4 pb-10">
            <Routes>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<Navigate to="/register\" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;