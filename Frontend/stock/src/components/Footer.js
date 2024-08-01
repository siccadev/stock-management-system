import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-links">
      <a href="#" onClick={(e) => e.preventDefault()}>Contact Us</a>
      <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
      <a href="#" onClick={(e) => e.preventDefault()}>Terms of Service</a>
    </div>
    <div className="footer-copyright">
      © 2024 Stock Management System. All rights reserved.
    </div>
  </footer>
);

export default Footer;
