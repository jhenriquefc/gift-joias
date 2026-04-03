import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Empresa', href: '#empresa' },
    { name: 'Joias', href: '#joias' },
    { name: 'Garantia', href: '#garantia' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* LOGO: Diamante Safira Brilhante */}
        <motion.div whileHover={{ scale: 1.03 }} className="logo-container">
          <div className="diamond-wrapper">
            <svg className="diamond-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00B4DB" /> {/* Ciano brilhante */}
                  <stop offset="100%" stopColor="#0052D4" /> {/* Azul vibrante */}
                </linearGradient>
              </defs>
              <path d="M50 10L15 40L50 90L85 40L50 10Z" stroke="#D4AF37" strokeWidth="2.5" fill="url(#blueGradient)"/>
              <path d="M50 10V90M15 40H85M32.5 25L50 40L67.5 25M32.5 55L50 40L67.5 55" stroke="#ffffff" strokeWidth="1.5" opacity="0.9"/>
              <path d="M50 10L67.5 55M50 10L32.5 55" stroke="#ffffff" strokeWidth="1.5" opacity="0.6"/>
            </svg>
            <span className="sparkle sparkle-1"></span>
            <span className="sparkle sparkle-2"></span>
          </div>
          <span className="logo-text">GIFT JOIAS</span>
        </motion.div>
        
        {/* LINKS DESKTOP */}
        <div className="nav-links desktop-only">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
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

        {/* AÇÕES E MENU */}
        <div className="nav-actions">
          <motion.div whileHover={{ scale: 1.1 }} className="desktop-only">
            <Search size={20} className="icon-btn search-icon" />
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.1 }} className="cart-icon">
            <ShoppingBag size={20} className="icon-btn bag-icon" />
            <span className="badge">0</span>
          </motion.div>
          
          <a href="#revenda" className="highlight-btn desktop-only">
            Seja uma Revendedora
          </a>

          {/* Botão Hambúrguer isolado para Mobile */}
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* OVERLAY DO MENU MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mobile-menu"
          >
            <div className="mobile-links">
              {navItems.map((item) => (
                <motion.a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a 
                href="#revenda" 
                className="mobile-highlight" 
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.95 }}
              >
                Seja uma Revendedora
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;