import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <h3>Wellbeing Assisted Living</h3>
      </div>
      <nav className="footer-nav">
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/facility">Facility</a></li>
          <li><a href="/">Home</a></li>
        </ul>
      </nav>
      <div className="footer-contact">
        <p>Email: info@wellbeing.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </footer>
  );
};

export default Footer;