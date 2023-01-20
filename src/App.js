import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import Login from './components/pages/Login';
import Cadastro from './components/pages/Cadastro';
import CadastroLivro from './components/pages/CadastroLivro';
import Perfil from './components/pages/Perfil';
// import Sidebar from './components/pages/Sidebar';


function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/cadastro' element={<Cadastro />}/>
            <Route path='/cadastro-livro' element={<CadastroLivro />}/>
            <Route path='/user' element={<Perfil />}/>
          </Routes>
      </Router> 
    </>
  );
}

export default App;
