import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavLinkcomp.css'; // Assuming you have some CSS for styling

const NavLinkcomp = ({ to, label }) => {
    return (
        <NavLink to={to} className="navbar-link" smooth={"true"}>
            {label}
        </NavLink>
    );
};

NavLinkcomp.propTypes = {
    to: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default NavLinkcomp;