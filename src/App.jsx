import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home'; 
import { Register } from './pages/home/registrationForm/register';
import { Login } from './pages/home/login/login';
import { ForgotPassword } from './pages/home/forgotPassword/forgotPassword';
import ProfilePage from './pages/home/profile/profile';
import { BuyForm } from './pages/home/buyForm/buyForm';
import { SellForm } from './pages/home/sellForm/sellForm';
import CrudOperation from './pages/home/CrudSystem/crudOperation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login/>} /> 
        <Route path="/forgot" element={<ForgotPassword/>} />  
        <Route path="/profile" element={<ProfilePage/>} />  
        <Route path="/buyForm" element={<BuyForm/>} />  
        <Route path="/sellForm" element={<SellForm/>} />  
        <Route path="/crudOperation" element={<CrudOperation/>} />  

      </Routes>
    </Router>
  );
}

export default App;
