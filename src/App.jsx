import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home'; 
import { Register } from './pages/home/registrationForm/register';
import { Login } from './pages/home/login/login';
import { ForgotPassword } from './pages/home/forgotPassword/forgotPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login/>} /> 
        <Route path="/forgot" element={<ForgotPassword/>} />  



      </Routes>
    </Router>
  );
}

export default App;
