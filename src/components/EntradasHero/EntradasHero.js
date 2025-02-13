import React from "react";
import Card from "../../Molecules/Card/Card";
import Card_5 from "../../Molecules/Card_5/Card_5";
import "./../Hero/Hero.css";

const handleClick = () => {
  window.location.href = "https://www.youtube.com";
};

const EntradasHero = () => {
  return (
    <div className="card">
      <Card_5
        title="27 de Julio, Palermo, Buenos Aires"
        imageSrc="/la_dama_de_bolini_III.jpg"
        subtitle="¿Te lo vas a perder?"
        buttonContent="Conseguí tú entrada"
      />
      <Card
        handleClick={handleClick}
        title="Eventos anteriores"
        imageSrc="/eventos_anteriores.jpeg"
        buttonContent="Ver eventos"
      />
      <Card
        handleClick={handleClick}
        title="Konserta & Niceto Bar, 2024"
        imageSrc="/niceto_bar.jpg"
        buttonContent="Ver más"
      />
      <Card
        handleClick={handleClick}
        title="Konserta & La Dama de Bolini, 2024"
        imageSrc="/la_dama_de_bolini_I.JPG"
        buttonContent="Ver más"
      />
      <Card
        handleClick={handleClick}
        title="Konserta & La Dama de Bolini, 2023"
        imageSrc="/niceto_bar_b&w.jpg"
        buttonContent="Ver más"
      />
    </div>
  );
};

export default EntradasHero;