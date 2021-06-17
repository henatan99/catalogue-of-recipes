import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="nav-bar">
    <ul className="nav-items">
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">nomnom</li>
      <li className="nav-item">
        <span className="iconify" data-icon="carbon:user-avatar-filled-alt" data-inline="false" />
      </li>
    </ul>
  </nav>
);

export default NavBar;
