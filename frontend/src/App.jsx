import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard';
import { Calendar } from './pages/Calendar';
import { Users } from './pages/Users';
import { Register } from './pages/Register';
import { Index } from './pages/index';

function App() {

  return (
    <Routes>
      <Route path='/' element = {
          <Index />
        } />
      <Route path='/Dashboard' element = {
          <Dashboard />
        } />
      <Route path='/Calendar' element ={
        <Calendar />
      } />
      <Route path='/Users' element={
        <Users />
      }/>
      <Route path='/Register' element={
        <Register />
      }/>
    </Routes>
  );
}

export default App
