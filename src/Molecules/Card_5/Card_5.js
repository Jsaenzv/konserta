import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../../Atoms/Button/Button";
import "./Card_5.css"; // Assuming you have a CSS file for Card styles

const Card_5 = ({ title, imageSrc, subtitle, buttonContent, handleClick }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Apply the visible class
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const elements = document.querySelectorAll(
      ".card_5-title, .card_5-subtitle, .card_5-image, .card-button"
    ); // Observe card_5 titles, buttons, and images
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="card_5-section">
      <div className="card_5-background">
        <img
          src={imageSrc}
          alt="Card_5 Background"
          className="card_5-image animated-image"
        />
        <div className="card_5-content">
          <h2 className="card_5-title">{title}</h2>
          <Button onClick={handleClick} className="card-button spacex-button">
            {buttonContent}
          </Button>
          <p className="card_5-subtitle">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

Card_5.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonContent: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Card_5;
