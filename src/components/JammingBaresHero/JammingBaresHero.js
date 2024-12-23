import React from "react";
import Card_2 from "../../Molecules/Card_2/Card_2";
import Card from "../../Molecules/Card/Card";
import Card_4 from "../../Molecules/Card_4/Card_4";
import "./JammingBaresHero.css";

const scrollToCard = (id) => {
  const card = document.getElementById(id);
  if (card) {
    card.scrollIntoView({ behavior: "smooth" });
  }
};

const handleClick1 = () => scrollToCard("1");
const handleClick2 = () => scrollToCard("2");
const handleClick3 = () => scrollToCard("3");
const handleClick4 = () => scrollToCard("4");

const clickJammingDescampados = () => {
  window.location.href = "/";
};

const JammingHero = () => {
  return (
    <div className="card">
      <Card_2
        title={"Jamming Sessions en Bares"}
        imageSrc={"/niceto_bar_b&w.jpg"}
        subtitle={
          "En estos eventos nos fusionamos con distintos bares de Buenos Aires para hacer un jam único. Cada fecha contamos con distintos músicos que vienen a tocar y mostrar lo mejor de ellos."
        }
      />
      <Card_4
        imageSrc={"/la_dama_de_bolini_III.jpg"}
        button4={"Konserta & Sum Al Rio"}
        button3={"Konserta & Niceto Bar"}
        button2={"Konserta & La Dama de Bolini II"}
        button1={"Konserta & La Dama de Bolini I"}
        handleClick1={handleClick1}
        handleClick2={handleClick2}
        handleClick3={handleClick3}
        handleClick4={handleClick4}
      />
      <Card
        handleClick={clickJammingDescampados}
        title="Konserta & Sum Al Rio, 2024"
        imageSrc="/sum_del_rio.jpeg"
        buttonContent="Ver más"
        id="4"
      />
      <Card
        handleClick={clickJammingDescampados}
        title="Konserta & Niceto Bar, 2024"
        imageSrc="/niceto_bar.jpg"
        buttonContent="Ver más"
        id="3"
      />
      <Card
        handleClick={clickJammingDescampados}
        title="Konserta & La Dama de Bolini, 2024"
        imageSrc="/la_dama_de_bolini_III.jpg"
        buttonContent="Ver más"
        id="2"
      />
      <Card
        handleClick={clickJammingDescampados}
        title="Konserta & La Dama de Bolini, 2023"
        imageSrc="/la_dama_de_bolini_I.JPG"
        buttonContent="Ver más"
        id="1"
      />
    </div>
  );
};

export default JammingHero;
