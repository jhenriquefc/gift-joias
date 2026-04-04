// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, Menu, X } from 'lucide-react'; // Importamos Menu e X aqui
import './Navbar.css';

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado do menu mobile

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Empresa', href: '#empresa' },
    { name: 'Joias', href: '#joias' },
    { name: 'Garantia', href: '#garantia' },
    { name: 'Contato', href: '#contato' },
  ];

  // Função para fechar o menu ao clicar em um link
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.nav 
      initial={{ y: -120, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="navbar"
    >
      <div className="navbar-container">
        
        {/* LOGO */}
        <motion.div whileHover={{ scale: 1.03 }} className="logo-container">
          <div className="palm-wrapper">
            <svg className="palm-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00B4DB" />
                  <stop offset="100%" stopColor="#0a1f44" />
                </linearGradient>
              </defs>
              <path d="M45 90 Q55 60 48 30" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round" fill="none" />
              <path d="M48 30 Q20 20 15 45 Q30 35 48 30 Z" fill="url(#blueGradient)" stroke="#F3E5AB" strokeWidth="1" />
              <path d="M48 30 Q75 20 85 45 Q70 35 48 30 Z" fill="url(#blueGradient)" stroke="#F3E5AB" strokeWidth="1" />
              <path d="M48 30 Q30 5 15 15 Q35 20 48 30 Z" fill="url(#blueGradient)" stroke="#F3E5AB" strokeWidth="1" />
              <path d="M48 30 Q65 5 85 15 Q65 20 48 30 Z" fill="url(#blueGradient)" stroke="#F3E5AB" strokeWidth="1" />
              <path d="M48 30 Q48 0 55 5 Q52 20 48 30 Z" fill="url(#blueGradient)" stroke="#F3E5AB" strokeWidth="1" />
            </svg>
            <span className="sparkle sparkle-1"></span>
            <span className="sparkle sparkle-2"></span>
          </div>
          <span className="logo-text">GIFT LITORAL</span>
        </motion.div>
        
        {/* LINKS DE NAVEGAÇÃO DESKTOP (Some no celular) */}
        <div className="nav-links desktop-only">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + 0.1 * index, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, color: '#D4AF37', transition: { duration: 0.2 } }}
              className="nav-item"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.name}
              <AnimatePresence>
                {hoveredItem === item.name && (
                  <motion.span 
                    className="underline" 
                    layoutId="underline" 
                    initial={{ width: 0, opacity: 0 }} 
                    animate={{ width: '100%', opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </AnimatePresence>
            </motion.a>
          ))}
        </div>

        {/* AÇÕES DESKTOP (Some no celular) */}
        <div className="nav-actions desktop-only">
          <motion.div whileHover={{ scale: 1.1, rotate: 10 }}>
            <Search size={20} className="icon-btn search-icon" />
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.1, rotate: -10 }} className="cart-icon">
            <ShoppingBag size={20} className="icon-btn bag-icon" />
            <span className="badge">0</span>
          </motion.div>
          
          <motion.a href="#revenda" whileHover={{ scale: 1.05, boxShadow: "0px 10px 40px rgba(212, 175, 55, 0.4)", backgroundColor: "#D4AF37", color: "#ffffff" }} whileTap={{ scale: 0.98 }} className="highlight-btn">
            Seja uma Revendedora
          </motion.a>
        </div>

        {/* BOTÃO HAMBÚRGUER MOBILE (Só aparece no celular) */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* MENU MOBILE (Dropdown Animado) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="mobile-menu"
          >
            <div className="mobile-links">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} onClick={closeMobileMenu}>
                  {item.name}
                </a>
              ))}
              <a href="#revenda" className="mobile-highlight" onClick={closeMobileMenu}>
                Seja uma Revendedora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;