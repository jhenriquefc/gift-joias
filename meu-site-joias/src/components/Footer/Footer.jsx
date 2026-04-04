// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      
      {/* --- ONDAS EM LINHAS (Separador Premium) --- */}
      <div className="footer-wave-separator">
        <svg viewBox="0 0 1200 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,50 Q150,10 300,50 T600,50 T900,50 T1200,50" fill="none" stroke="#EABF2A" strokeWidth="2" opacity="0.7"/>
          <path d="M0,50 Q150,90 300,50 T600,50 T900,50 T1200,50" fill="none" stroke="#00B4DB" strokeWidth="1.5" opacity="0.5"/>
          <path d="M0,70 Q200,20 400,70 T800,70 T1200,70" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.2"/>
        </svg>
      </div>

      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Coluna 1: A Marca */}
          <div className="footer-brand">
            <h2 className="footer-logo">GIFT LITORAL</h2>
            <p className="footer-desc">
              A exclusividade das joias inspiradas na beleza e na força do oceano. Realce seu brilho natural com nossas coleções premium.
            </p>
            <div className="footer-socials">
              <a href="#instagram" className="social-icon">IG</a>
              <a href="#facebook" className="social-icon">FB</a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="footer-links">
            <h3 className="footer-heading">Navegação</h3>
            <ul>
              <li><a href="#colecao">Nossas Joias</a></li>
              <li><a href="#revenda">Seja Revendedora</a></li>
              <li><a href="#empresa">Sobre a Marca</a></li>
              <li><a href="#garantia">Garantia e Cuidados</a></li>
            </ul>
          </div>

          {/* Coluna 3: Atendimento */}
          <div className="footer-contact">
            <h3 className="footer-heading">Atendimento</h3>
            <ul>
              <li><span className="contact-icon">📞</span> (11) 99999-9999</li>
              <li><span className="contact-icon">✉️</span> contato@giftlitoral.com.br</li>
              <li><span className="contact-icon">📍</span> Litoral Norte, SP</li>
            </ul>
          </div>

          {/* Coluna 4: Newsletter */}
          <div className="footer-newsletter">
            <h3 className="footer-heading">Clube Exclusivo</h3>
            <p>Receba lançamentos e ofertas exclusivas direto no seu e-mail.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Seu melhor e-mail" required />
              <button type="submit" aria-label="Assinar">
                ➔
              </button>
            </form>
          </div>

        </div>

        {/* Linha Inferior: Copyright e Assinatura */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Gift Litoral. Todos os direitos reservados.</p>
          <p className="developer-credit">Desenvolvido por <strong>MyLab</strong></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;