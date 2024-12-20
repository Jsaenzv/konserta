import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Atoms/Button/Button';
import './Card.css'; // Assuming you have a CSS file for Card styles

const Card = ({ handleClick, title, imageSrc, buttonContent }) => {
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

    const elements = document.querySelectorAll('.card-title, .card-button, .card-image'); // Observe card titles, buttons, and images
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="card-section">
      <div className="card-background">
        <img src={imageSrc} alt="Card Background" className="card-image animated-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <Button onClick={handleClick} className="card-button spacex-button">
            {buttonContent}
          </Button>
        </div>
      </div>
    </section>
  );
};

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  buttonContent: PropTypes.string.isRequired,
};

export default Card;