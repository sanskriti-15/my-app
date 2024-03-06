import React from 'react';
import './Footer.scss';
import { FaAngleDown } from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-content">
          <div className="footer-column">
            <h3>CATEGORIES</h3>
            <ul>
              <li>Web Builder</li>
              <li>Hosting</li>
              <li>Data Center</li>
              <li>Robotic Automation</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>CONTACT</h3>
            <ul>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Categories</li>
              <li>About</li>
            </ul>
          </div>
        
          <div className="footer-column">
            <h3>United States <FaAngleDown/></h3>

          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
