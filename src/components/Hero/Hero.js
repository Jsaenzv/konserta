import React from 'react';
import Button from '../../Atoms/Button/Button';
import './Hero.css';

const handleClick = () => {
  // Add your click handler logic here
  window.location.href = 'https://www.youtube.com';
};

const Hero = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-background">
          <img src="/imagen.jpg" alt="Hero Background" className="hero-image" />
          <div className="hero-content">
            <h2 className="hero-title">Konserta & Niceto Bar, 2024</h2>
            <Button onClick={handleClick} className='spacex-button'>
              Ver más
            </Button>
          </div>
        </div>
      </section>
      <section className="hero-section">
        <div className="hero-background">
          <img src="/imagen2.jpg" alt="Hero Background" className="hero-image" />
          <div className="hero-content">
            <h2 className="hero-title">Konserta Jamming Sessions</h2>
            <Button onClick={handleClick} className='spacex-button'>
              Ver más
            </Button>
          </div>
        </div>
      </section>
      <section className="hero-section">
        <div className="hero-background">
          <img src="/imagen3.jpg" alt="Hero Background" className="hero-image" />
          <div className="hero-content">
            <h2 className="hero-title">Konserta productora</h2>
            <Button onClick={handleClick} className='spacex-button'>
              Ver más
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;