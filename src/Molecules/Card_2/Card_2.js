import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Card_2.css'; // Assuming you have a CSS file for Card styles

const Card_2 = ({ title, imageSrc, subtitle }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Apply the visible class
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const elements = document.querySelectorAll('.card_2-title, .card_2-subtitle, .card_2-image'); // Observe card_2 titles, buttons, and images
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="card_2-section">
      <div className="card_2-background">
        <img src={imageSrc} alt="Card_2 Background" className="card_2-image animated-image" />
        <div className="card_2-content">
          <h2 className="card_2-title">{title}</h2>
          <p className='card_2-subtitle'>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

Card_2.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Card_2;