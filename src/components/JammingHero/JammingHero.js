import React from "react";
import Card_3 from "../../Molecules/Card_3/Card_3";
import "./../JammingHero/JammingHero.css";

const handleClick = () => {
  window.location.href = "https://www.youtube.com";
};

const JammingHero = () => {
  return (
    <div className="card">
      <Card_3
        title={"Jamming Sessions en Bares"}
        imageSrc={"/niceto_bar_b&w.jpg"}
        subtitle={""}
        buttonContent={"Ver Jammings"}
        handleClick={handleClick}
      />
      <Card_3
        title={"Jamming Sessions en Descampados"}
        imageSrc={"/jam_grande_vertical.jpg"}
        subtitle={""}
        buttonContent={"Ver Jammings"}
        handleClick={handleClick}
      />
    </div>
  );
};

export default JammingHero;
