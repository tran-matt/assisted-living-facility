import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Replace with your actual logo path
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt="Wellbeing Assisted Living Logo" className={styles.logo} />
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/about" className={styles.navLink}>About Us</Link>
        <Link to="/services" className={styles.navLink}>Services</Link>
        <Link to="/facility" className={styles.navLink}>Facility</Link>
        <div className={styles.language}>
          <select>
            <option value="en">English</option>
            <option value="ko">한국어</option>
            <option value="es">Español</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Header;
