import React from 'react';
import './BackgroundCoastal.css';

const BackgroundCoastal = ({ children }) => {
  return (
    <div className="coastal-container">
      
      {/* 1. Imagem Premium de Fundo */}
      <div className="coastal-image"></div>
      
      {/* 2. Overlay para contraste */}
      <div className="coastal-overlay"></div>
      
      {/* 3. NOVO: Efeito de Luzes Desfocadas (Reflexo do Mar/Joias) */}
      <div className="sea-glow">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
        <div className="glow glow-3"></div>
      </div>
      
      {/* 4. Conteúdo */}
      <div className="coastal-content">
        {children}
      </div>
      
    </div>
  );
};

export default BackgroundCoastal;