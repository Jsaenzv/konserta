import React from 'react';
import './Contacto.css'

const Contacto = () => {
    return (
        <div>
            <header>
                <h1>Contacto</h1>
            </header>
            <main>
                <section>
                    <h2>About Us</h2>
                    <p>Welcome to our website. We are dedicated to providing the best service possible.</p>
                </section>
                <section>
                    <h2>Our Mission</h2>
                    <p>Our mission is to deliver high-quality products that bring value to our customers.</p>
                </section>
                <section>
                    <h2>Contact Us</h2>
                    <p>If you have any questions, feel free to reach out to us at contact@ourwebsite.com.</p>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Our Website. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Contacto;