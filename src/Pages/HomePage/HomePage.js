import React from "react";
import "./HomePage.css";
import Hero from "../../components/Hero/Hero";
import Nav from "../../Organisms/Nav/Nav";
import Footer from "../../Organisms/Footer/Footer";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="content">
        <Nav />
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
