import React from "react";
import Card from "../../Molecules/Card/Card";
import Card_2 from "../../Molecules/Card_2/Card_2";
import "./../Hero/Hero.css";

const handleClick = () => {
  window.location.href = "https://www.youtube.com";
};

const JammingHero = () => {
  return (
    <div className="card">
      <Card_2
        title="Jamming Sessions en Bares"
        imageSrc="/niceto_bar_b&w.jpg"
        subtitle="En estos eventos nos fusionamos con distintos bares de Buenos Aires para hacer un Jam único. Cada fecha contamos con distintos artistas que bienen a tocar y mostrar lo mejor de ellos."
      />
      <Card
        handleClick={handleClick}
        title="Konserta & El Sum al Rio, 2024"
        imageSrc="/sum_del_rio.jpeg"
        buttonContent="Ver más"
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
        imageSrc="/la_dama_de_bolini_III.jpg"
        buttonContent="Ver más"
      />
      <Card
        handleClick={handleClick}
        title="Konserta & La Dama de Bolini, 2023"
        imageSrc="/la_dama_de_bolini_I.JPG"
        buttonContent="Ver más"
      />
    </div>
  );
};

export default JammingHero;
