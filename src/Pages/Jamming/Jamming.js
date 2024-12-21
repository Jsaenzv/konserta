import React from 'react';
import '../Pages.css';
import Nav from '../../Organisms/Nav/Nav';
import JammingHero from '../../components/JammingHero/JammingHero'
import Footer from '../../Organisms/Footer/Footer';

const Jamming = () => {
    return (
        <div className="page-container">
          <div className="content">
            <Nav />
            <JammingHero />
          </div>
          <Footer />
        </div>
      );
};

export default Jamming;