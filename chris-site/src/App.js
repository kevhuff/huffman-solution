import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Replaced Switch with Routes
import './App.css';
import NavBar from './components/navbar';
import Hero from './components/hero';
import Contact from './components/contact';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Hero />} /> 
          <Route path="/contact" element={<Contact />} /> 
          {/* Add corresponding components for these routes when done*/}
          {/* <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
