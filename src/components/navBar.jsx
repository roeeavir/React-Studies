import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
            <li>
                <NavLink to="/movies">Movies</NavLink>
            </li>
            <li>
                <NavLink to="/customers">Customers</NavLink>
            </li>
            <li>
                <NavLink to="/rentals">Rentals</NavLink>
            </li>
            <li>
                <NavLink to="/login">Login</NavLink>
            </li>
            <li>
                <NavLink to="/register">Register</NavLink>
            </li>
        </ul>
    );
};

export default NavBar;