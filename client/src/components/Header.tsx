import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/Logo.png';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to handle language change
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  // Function to toggle navigation visibility
  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt={t('header.logoAlt')} className={styles.logo} />
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className={styles.hamburger} onClick={toggleNav}>
        <div />
        <div />
        <div />
      </div>

      {/* Navigation Menu */}
      <nav className={`${styles.nav} ${isNavOpen ? styles.active : ''}`}>
        <Link to="/" className={styles.navLink} onClick={() => setIsNavOpen(false)}>
          {t('header.home')}
        </Link>
        <Link to="/about" className={styles.navLink} onClick={() => setIsNavOpen(false)}>
          {t('header.about')}
        </Link>
        <Link to="/services" className={styles.navLink} onClick={() => setIsNavOpen(false)}>
          {t('header.services')}
        </Link>
        <Link to="/facility" className={styles.navLink} onClick={() => setIsNavOpen(false)}>
          {t('header.facility')}
        </Link>

        {/* Language Selector */}
        <div className={styles.language}>
          <select
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
          >
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
