import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage/HomePage";
import Contacto from "./Pages/Contacto/Contacto";
import Entradas from "./Pages/Entradas/Entradas";
import Streaming from "./Pages/Streaming/Streaming";
import Productora from "./Pages/Productora/Productora";
import Jamming from "./Pages/Jamming/Jamming";
import JammingBares from "./Pages/JammingBares/JammingBares";
import JammingDescampados from "./Pages/JammingDescampados/JammingDescampados";
import "./styles/App.css";

const App = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/contacto" element={<Contacto />} />
    <Route path="/Entradas" element={<Entradas />} />
    <Route path="/Jamming" element={<Jamming />} />
    <Route path="/JammingBares" element={<JammingBares />} />
    <Route path="/JammingDescampados" element={<JammingDescampados />} />
    <Route path="/Streaming" element={<Streaming />} />
    <Route path="/Productora" element={<Productora />} />
  </Routes>
);

export default App;
