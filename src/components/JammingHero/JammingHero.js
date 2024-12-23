import React from "react";
import Card_3 from "../../Molecules/Card_3/Card_3";
import "./JammingHero.css";

const clickJammingBares = () => {
  window.location.href = "/JammingBares";
};

const clickJammingDescampados = () => {
  window.location.href = "/JammingDescampados";
};

const JammingHero = () => {
  return (
    <div className="card">
      <Card_3
        title={"Jamming Sessions en Bares"}
        imageSrc={"/la_dama_de_bolini_I.jpg"}
        subtitle={""}
        buttonContent={"Ver Jammings"}
        handleClick={clickJammingBares}
      />
      <Card_3
        title={"Jamming Sessions en Descampados"}
        imageSrc={"/jam_grande_IV.jpg"}
        subtitle={""}
        buttonContent={"Ver Jammings"}
        handleClick={clickJammingDescampados}
      />
    </div>
  );
};

export default JammingHero;
