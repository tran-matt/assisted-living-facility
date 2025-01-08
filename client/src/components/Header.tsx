import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png'; // Replace with your actual logo path
import styles from './Header.module.css';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation(); // Initialize the translation hook

  // Function to handle language change
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang); // Change the language globally
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img src={logo} alt={t('header.logoAlt')} className={styles.logo} />
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>
          {t('header.home')}
        </Link>
        <Link to="/about" className={styles.navLink}>
          {t('header.about')}
        </Link>
        <Link to="/services" className={styles.navLink}>
          {t('header.services')}
        </Link>
        <Link to="/facility" className={styles.navLink}>
          {t('header.facility')}
        </Link>

        {/* Language Selector */}
        <div className={styles.language}>
          <select
            onChange={(e) => changeLanguage(e.target.value)} // Update language globally
            value={i18n.language} // Reflect current language in the dropdown
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
