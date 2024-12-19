import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="path_to_logo" alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/Streaming"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Streaming
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contacto"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Jamming"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Jamming
          </NavLink>
        </li>
        <li>
          <NavLink to="/Entradas"
          className={({ isActive }) => (isActive ? 'active' : '')}>
            Entradas
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
