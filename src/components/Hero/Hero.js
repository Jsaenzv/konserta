import React from 'react';
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
        imageSrc="/niceto_bar.jpg"
        buttonContent="Ver más"
      />
      <Card
        handleClick={handleClick}
        title="Konserta Jamming Sessions"
        imageSrc="/jam_grande_IV.jpg"
        buttonContent="Ver más"
      />
      <Card
        handleClick={handleClick}
        title="Konserta productora"
        imageSrc="/niceto_bar_b&w.jpg"
        buttonContent="Ver más"
      />
    </div>
  );
};

export default Hero;
