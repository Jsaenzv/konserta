import React, { useEffect } from 'react';
import Card from '../../Molecules/Card/Card';
import './Hero.css';

const handleClick = () => {
  window.location.href = 'https://www.youtube.com';
};

const Hero = () => {
  return (
    <div className="card">
      <Card
        handleClick={handleClick}
        title="Konserta & Niceto Bar, 2024"
        imageSrc="/imagen.jpg"
        buttonContent="Ver más"
      />
      <Card
        handleClick={handleClick}
        title="Konserta Jamming Sessions"
        imageSrc="/imagen2.jpg"
        buttonContent="Ver más"
      />
      <Card
        handleClick={handleClick}
        title="Konserta productora"
        imageSrc="/imagen3.jpg"
        buttonContent="Ver más"
      />
    </div>
  );
};

export default Hero;
