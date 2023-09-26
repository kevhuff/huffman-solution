import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import Hero from './components/hero';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar />
      <div>
      <Hero />
      </div>
    </BrowserRouter>
  );
}

export default App;
