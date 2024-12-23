import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import "../../Molecules/NavLink/NavLinkcomp";
import NavLinkcomp from "../../Molecules/NavLink/NavLinkcomp";

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <NavLinkcomp to="/Jamming" label={"Jamming"}></NavLinkcomp>
        </li>
        <li>
          <NavLinkcomp to="/Productora" label={"Productora"}></NavLinkcomp>
        </li>
        <li>
          <NavLinkcomp to="/Streaming" label={"Streaming"}></NavLinkcomp>
        </li>
        <li>
          <NavLinkcomp to="/Entradas" label={"Entradas"}></NavLinkcomp>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
