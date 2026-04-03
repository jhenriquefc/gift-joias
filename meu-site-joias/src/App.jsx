import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css'; // Certifique-se que esse arquivo existe na pasta src

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;