import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/HomePage/HomePage';
import Contacto from './Pages/Contacto/Contacto'
import './styles/App.css'


const App = () => (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contacto" element={<Contacto />} />
    </Routes>
);

export default App;