import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Navbar.css';

function Menu() {
    return (
        <div className="menu">
            <NavLink to="/signup" className="menu-item" activeClassName="active">
                Signup
            </NavLink>
            <NavLink to="/about" className="menu-item" activeClassName="active">
                About
            </NavLink>
            <NavLink to="/products" className="menu-item" activeClassName="active">
                Products
            </NavLink>
            <NavLink to="/pricing" className="menu-item" activeClassName="active">
                Pricing
            </NavLink>
            <NavLink to="/support" className="menu-item" activeClassName="active">
                Support
            </NavLink>
        </div>
    );
}

export default Menu;
