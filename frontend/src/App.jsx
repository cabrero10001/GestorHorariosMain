import { Routes, Route } from 'react-router-dom'
import { Index } from './pages/index';
import { Calendar } from './pages/Calendar';
import { Users } from './pages/Users';
import { Register } from './pages/Register';

function App() {

  return (
    <Routes>
      <Route path='/' element = {
          <Index />
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
