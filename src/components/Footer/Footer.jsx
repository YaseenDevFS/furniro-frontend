import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-column">
          <h2 className="footer-logo">Funiro.</h2>
          <p>400 University Drive Suite 200 Coral Gables,<br />FL 33134 USA</p>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>Help</h3>
          <ul>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <h3>Newsletter</h3>
          <div className="newsletter">
            <input type="email" placeholder="Enter Your Email Address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>2025 Funiro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;