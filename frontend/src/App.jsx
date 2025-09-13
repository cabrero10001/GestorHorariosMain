import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard';
import { Calendar } from './pages/Calendar';
import { Users } from './pages/Users';
import { RegisterNew } from './pages/RegisterNew';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Index } from './pages/Index';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path='/' element = {
          <Index />
        } />
      <Route path='/Login' element = {
          <Login />
        } />
      <Route path='/Register' element = {
          <Register />
        } />
      {/* Rutas protegidas */}
      <Route path='/Dashboard' element = {
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
        } />
      <Route path='/Calendar' element ={
        <PrivateRoute>
          <Calendar />
        </PrivateRoute>
      } />
      <Route path='/Users' element={
        <PrivateRoute>
          <Users />
        </PrivateRoute>
      }/>
      <Route path='/RegisterNew' element={
        <PrivateRoute>
          <RegisterNew />
        </PrivateRoute>
      }/>
    </Routes>
  );
}

export default App
