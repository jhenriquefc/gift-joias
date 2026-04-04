import React from 'react';
import './JewelryShowcase.css';

const JewelryShowcase = () => {
  // Lista de imagens (A sua do ML + fotos de alta qualidade para o teste visual)
  const jewelryItems = [
    {
      id: 1,
      name: "Trio Estrelas do Mar",
      img: "https://http2.mlstatic.com/D_NQ_NP_701017-CBT71044953923_082023-O.webp",
    },
    {
      id: 2,
      name: "Choker Gotas de Oceano",
      img: "https://images.unsplash.com/photo-1599643478524-fb66f70a0063?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Colar Concha Dourada",
      img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Argola Brisa do Mar",
      img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Pulseira Pérola Litoral",
      img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop", // Substituir depois
    }
  ];

  // Duplicamos o array para criar a ilusão de rolagem infinita sem quebras
  const duplicatedItems = [...jewelryItems, ...jewelryItems];

  return (
    <div className="showcase-container">
      <div className="showcase-track">
        {duplicatedItems.map((item, index) => (
          <div className="showcase-card" key={`${item.id}-${index}`}>
            <div className="showcase-img-wrapper">
              <img src={item.img} alt={item.name} className="showcase-img" />
              
              {/* Efeito Hover com botão "Ver Joia" */}
              <div className="showcase-hover-overlay">
                <span className="showcase-btn">Ver Joia</span>
              </div>
            </div>
            <h3 className="showcase-title">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JewelryShowcase;