import React from 'react';
import './customNavbar.scss'; // Import the SCSS file

const CustomNavbar = () => {
  return (
    <div className="navbar-container">
      <div>
        <ul className="nav-links1">
          <li>Tools</li>
          <li>AWS Builder</li>
          <li>Start Build</li>
          <li>Build Supplies</li>
          <li>Tooling</li>
          <li>BlueHosting</li>
        </ul>
      </div>

      <div>
        <ul className="nav-links2">
          <li>Home   &gt;</li>
          <li>Hosting for all  &gt;</li>
          <li>Hosting  &gt;</li>
          <li>Hosting6  &gt;</li>
          <li>Hosting5</li>
        </ul>
      </div>
    </div>
  );
};

export default CustomNavbar;
