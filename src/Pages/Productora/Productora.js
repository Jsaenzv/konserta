import React from 'react';

const Productora = () => {
    return (
        <div>
            <header>
                <h1>Konserta</h1>
                <p>Organizamos eventos para dar visualización a músicos</p>
            </header>
            <main>
                <section>
                    <h2>Próximos Eventos</h2>
                    {/* Aquí puedes agregar una lista de eventos */}
                </section>
                <section>
                    <h2>Sobre Nosotros</h2>
                    <p>Konserta es una productora dedicada a organizar eventos para músicos, ayudándolos a ganar visibilidad y conectar con su audiencia.</p>
                </section>
                <section>
                    <h2>Contacto</h2>
                    <p>Para más información, contáctanos en <a href="mailto:info@konserta.com">info@konserta.com</a></p>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Konserta. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Productora;