import React from "react";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <header>
            <h1 className="header-name">Bookstore <span className="cms-header">CMS</span></h1>
            <nav className="nav-link-container">
                <ul>
                    <li> <NavLink to="/">Book</NavLink></li>
                    <li> <NavLink to="/categories">Categories</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;
