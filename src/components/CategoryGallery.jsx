// src/components/CategoryGallery.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryGallery = ({ title, images, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <section>
      <h2>{title}</h2>
      <div className="gallery" onClick={handleClick} style={{ cursor: 'pointer' }}>
        {images.slice(0, 1).map((src, idx) => (
          <img key={idx} src={src} alt={`${title} ${idx + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default CategoryGallery;
