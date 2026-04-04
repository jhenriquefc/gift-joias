import React from 'react';
import Navbar from './components/Navbar/Navbar';
import BackgroundCoastal from './components/BackgroundCoastal/BackgroundCoastal';
import JewelryShowcase from './components/JewelryShowcase/JewelryShowcase';
import Footer from './components/Footer/Footer'; /* Importação do Footer */
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <BackgroundCoastal>
        
        {/* A SHADOW BOX */}
        <section className="hero-shadow-box">
          <h1 className="hero-title">
            A Exclusividade do Litoral
          </h1>
          <div className="hero-divider"></div>
        </section>

        {/* OS BOTÕES */}
        <div className="cta-botoes-container">
          <a href="#revenda" className="botao-revenda">
            Seja uma Revendedora
          </a>
          <a href="#varejo" className="botao-vendedora">
            Fale com uma Vendedora
          </a>
          <a href="#colecao" className="botao-colecao">
            Ver Coleção
          </a>
        </div>

        {/* O CARROSSEL */}
        <JewelryShowcase />

      </BackgroundCoastal>
      
      {/* O FOOTER ENTRA AQUI: Fora do background de praia, mas dentro da div App */}
      <Footer />

    </div>
  );
}

export default App;