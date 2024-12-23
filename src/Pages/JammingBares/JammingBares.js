import React from "react";
import "../Pages.css";
import Nav from "../../Organisms/Nav/Nav";
import JammingBaresHero from "../../components/JammingBaresHero/JammingBaresHero";
import Footer from "../../Organisms/Footer/Footer";

const Jamming = () => {
  return (
    <div className="page-container">
      <div className="content">
        <Nav />
        <JammingBaresHero />
      </div>
      <Footer />
    </div>
  );
};

export default Jamming;
