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
            <div className="section">
                <h2>Explore Our Technologies</h2>
                <p>Discover our latest innovations, projects, and breakthroughs.</p>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
