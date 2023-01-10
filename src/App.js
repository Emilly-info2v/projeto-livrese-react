import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<Navbar />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/cadastro' element={<Cadastro />}/>
            <Route path='/livrese' element={<Dashboard />}/>
          </Routes>
      </Router>  
    </>
  );
}

export default App;
