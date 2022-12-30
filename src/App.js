import React from 'react';
import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Section2 from './components/Section2';
import Section3 from './components/Section3';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<Navbar />}/>
          </Routes>
      </Router>
      <Section />
      <Section2 />
      <Section3 />
    </>

  );
}

export default App;
