import React from 'react';
import './HomePage.css';
import Hero from '../../components/Hero/Hero';
import Nav from '../../Organisms/Nav/Nav';
import Footer from '../../Organisms/Footer/Footer';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <Nav />
            <Hero />
            <Footer />
        </div>
    );
};

export default HomePage;