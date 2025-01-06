import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/path/to/logo.svg" alt="Wellbeing Assisted Living" />
        <span>Wellbeing Assisted Living</span>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><Link to="/" className={styles.navItem}>Home</Link></li>
          <li><Link to="/about" className={styles.navItem}>About Us</Link></li>
          <li><Link to="/services" className={styles.navItem}>Services</Link></li>
          <li><Link to="/facility" className={styles.navItem}>Facility</Link></li>
        </ul>
      </nav>
      <div className={styles.language}>
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
