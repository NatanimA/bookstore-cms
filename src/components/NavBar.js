import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (

  <nav className="nav-link-container">
    <h1 className="header-name">
      Bookstore
      <span className="cms-header">CMS</span>
    </h1>
    <ul>
      <li>
        {' '}
        <NavLink to="/">Book</NavLink>
      </li>
      <li>
        {' '}
        <NavLink to="/categories">Categories</NavLink>
      </li>
    </ul>
  </nav>

);

export default NavBar;
