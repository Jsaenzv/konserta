import React from 'react';
import './Jamming.css';

const Jamming = () => {
    return (
        <div className="jamming-page">
            <header className="jamming-header">
                <h1>Jamming Events</h1>
                <p>
                    Un Jam es una reunión de músicos donde se improvisa música en conjunto. Es un espacio de creatividad y colaboración, donde los participantes pueden explorar nuevas ideas musicales y disfrutar de la espontaneidad del momento. Los Jams son una oportunidad para conectar con otros músicos, aprender unos de otros y crear algo único e irrepetible.
                </p>
            </header>
            <section className="events-section">
                <h2>Eventos Recientes</h2>
                <div className="event">
                    <h3>Jam Session #1</h3>
                    <p>Fecha: 10 de Octubre, 2023</p>
                    <p>Ubicación: Sala de Ensayo XYZ</p>
                </div>
                <div className="event">
                    <h3>Jam Session #2</h3>
                    <p>Fecha: 17 de Octubre, 2023</p>
                    <p>Ubicación: Club de Música ABC</p>
                </div>
                <div className="event">
                    <h3>Jam Session #3</h3>
                    <p>Fecha: 24 de Octubre, 2023</p>
                    <p>Ubicación: Estudio de Grabación 123</p>
                </div>
            </section>
        </div>
    );
};

export default Jamming;