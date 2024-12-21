import React from "react";
import Hero from "../../components/Hero/Hero";
import Nav from "../../Organisms/Nav/Nav";
import Footer from "../../Organisms/Footer/Footer";
import "../Pages.css"

const HomePage = () => {
  return (
    <div className="page-container">
      <div className="content">
        <Nav />
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
