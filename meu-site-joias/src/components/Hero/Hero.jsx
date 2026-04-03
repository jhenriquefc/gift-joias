// src/components/Hero/Hero.jsx
import React from 'react';
import './Hero.css'; // Importação do CSS local

const Hero = () => {
  return (
    // 'hero-section' é o contêiner principal com a imagem de fundo
    <section className="hero-section">
      <div className="hero-overlay"></div> {/* Camada escura para dar contraste ao texto */}
      
      <div className="hero-container">
        <div className="hero-content">
          {/* Subtítulo elegante e fino */}
          <span className="hero-subtitle">Coleção Exclusiva</span>
          
          {/* Título Principal com a fonte serifada (Cinzel) */}
          <h1 className="hero-title">
            O Brilho Que <br />Conta Sua História
          </h1>
          
          {/* Descrição curta e objetiva */}
          <p className="hero-description">
            Descubra peças únicas em prata 925 e joias certificadas, 
            desenhadas para eternizar momentos.
          </p>
          
          {/* Botão de Ação (Call to Action) com efeito de hover */}
          <div className="hero-actions">
            <a href="#colecao" className="btn-primary">
              Explorar Joias
            </a>
            <a href="#contato" className="btn-secondary">
              Agendar Visita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// ESSA LINHA É A QUE FALTAVA E CAUSAVA O ERRO DE "EXPORTS"
export default Hero;