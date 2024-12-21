import React from 'react';
import Nav from '../../Organisms/Nav/Nav';
import EntradasHero from '../../components/EntradasHero/EntradasHero';
import Footer from '../../Organisms/Footer/Footer';
import "../Pages.css"

const Entradas = () => {
    return (
        <div className="page-container">
          <div className="content">
            <Nav />
            <EntradasHero />
          </div>
          <Footer />
        </div>
      );
};

export default Entradas;