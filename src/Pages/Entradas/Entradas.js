import React from 'react';
import "./Entradas.css"

const Entradas = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Compra tus entradas</h1>
            <p>Selecciona el evento y la cantidad de entradas que deseas comprar.</p>
            <form>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="evento">Evento:</label>
                    <select id="evento" name="evento">
                        <option value="concierto">Concierto</option>
                        <option value="teatro">Teatro</option>
                        <option value="deportes">Deportes</option>
                    </select>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="entradas">Cantidad de entradas:</label>
                    <input type="number" id="entradas" name="entradas" min="1" max="10" />
                </div>
                <button type="submit">Comprar</button>
            </form>
        </div>
    );
};

export default Entradas;