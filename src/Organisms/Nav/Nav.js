import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/Streaming"
            className={({ isActive }) => (isActive ? "active" : "")}
            smooth={"true"}
          >
            Streaming
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contacto"
            className={({ isActive }) => (isActive ? "active" : "")}
            smooth={"true"}
          >
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Jamming"
            className={({ isActive }) => (isActive ? "active" : "")}
            smooth={"true"}
          >
            Jamming
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Entradas"
            className={({ isActive }) => (isActive ? "active" : "")}
            smooth={"true"}
          >
            Entradas
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
