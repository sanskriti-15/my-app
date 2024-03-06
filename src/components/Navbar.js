import React from 'react';
import { CiSearch } from 'react-icons/ci';
import './Navbar.scss'; // Import the SCSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
           
          />
          <CiSearch className="search-icon" />
        </div>

        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              Categories
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Today's Deal
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Website Builder
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
