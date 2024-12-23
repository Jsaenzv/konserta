import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../../Atoms/Button/Button";
import "./Card_4.css"; // Assuming you have a CSS file for Card styles

const Card_4 = ({
  imageSrc,
  button1,
  button2,
  button3,
  button4,
  handleClick1,
  handleClick2,
  handleClick3,
  handleClick4,
}) => {
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
      ".card_4-title, .card_4-subtitle, .card_4-image, .card_4-button"
    ); // Observe card_4 titles, buttons, and images
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="card_4-section">
      <div className="card_4-background">
        <img
          src={imageSrc}
          alt="Card_4 Background"
          className="card_4-image animated-image"
        />
        <div className="card_4-content">
          <Button
            onClick={handleClick4}
            className="card_4-button spacex-button"
          >
            {button4}
          </Button>
          <Button
            onClick={handleClick3}
            className="card_4-button spacex-button"
          >
            {button3}
          </Button>
          <Button
            onClick={handleClick2}
            className="card_4-button spacex-button"
          >
            {button2}
          </Button>
          <Button
            onClick={handleClick1}
            className="card_4-button spacex-button"
          >
            {button1}
          </Button>
        </div>
      </div>
    </section>
  );
};

Card_4.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  button1: PropTypes.string.isRequired,
  button2: PropTypes.string.isRequired,
  button3: PropTypes.string.isRequired,
  button4: PropTypes.string.isRequired,
  handleClick1: PropTypes.func.isRequired,
  handleClick2: PropTypes.func.isRequired,
  handleClick3: PropTypes.func.isRequired,
  handleClick4: PropTypes.func.isRequired,
};

export default Card_4;
