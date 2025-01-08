import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import styles from './Services.module.css';
import oldHandsImage from '../assets/Old Hands.png';
import soupImage from '../assets/Soup.png';
import medicationImage from '../assets/Medication.png';
import logo from '../assets/logo.png';

const Services: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  // Handle language change
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setShowDropdown(false);
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      )
      .then(
        () => {
          setStatus('success');
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
          });
        },
        () => {
          setStatus('error');
        }
      );
  };

  return (
    <div className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img
          className={styles.heroImage}
          src={oldHandsImage}
          alt={t('services.heroAlt')}
        />
      </section>

      {/* Empty Space */}
      <section className={styles.emptySpace}></section>

      {/* Our Services Section */}
      <section className={styles.ourServicesSection}>
        <div className={styles.ourServicesContent}>
          <h1 className={styles.ourServicesTitle}>{t('services.title')}</h1>
          <p className={styles.ourServicesText}>{t('services.customizedCare')}</p>
          <p className={styles.ourServicesText}>{t('services.mealDetails')}</p>
        </div>
        <img
          className={styles.ourServicesImage}
          src={soupImage}
          alt={t('services.soupAlt')}
        />
      </section>

      {/* Services Levels Section */}
      <section className={styles.servicesLevelsSection}>
        <img
          className={styles.servicesLevelsImage}
          src={medicationImage}
          alt={t('services.medicationAlt')}
        />
        <div className={styles.servicesLevelsContent}>
          <h2 className={styles.servicesLevelsTitle}>{t('services.levelsTitle')}</h2>
          <ul className={styles.servicesLevelsList}>
            <li>{t('services.levelsList.0')}</li>
            <li>{t('services.levelsList.1')}</li>
            <li>{t('services.levelsList.2')}</li>
            <li>{t('services.levelsList.3')}</li>
            <li>{t('services.levelsList.4')}</li>
            <li>{t('services.levelsList.5')}</li>
            <li>{t('services.levelsList.6')}</li>
            <li>{t('services.levelsList.7')}</li>
            <li>{t('services.levelsList.8')}</li>
          </ul>
        </div>
      </section>

      {/* Empty Space */}
      <section className={styles.emptySpace}></section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactLogo}>
          <img
            src={logo}
            alt={t('home.contactLogoAlt')}
            className={styles.contactLogoImage}
          />
          <ul className={styles.contactLinks}>
            <li>
              <Link to="/about">{t('home.contactAboutLink')}</Link>
            </li>
            <li>
              <Link to="/services">{t('home.contactServicesLink')}</Link>
            </li>
            <li>
              <Link to="/facility">{t('home.contactFacilityLink')}</Link>
            </li>
            <li
              className={styles.languageMenu}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              Language
              {showDropdown && (
                <ul className={styles.dropdown}>
                  <li onClick={() => handleLanguageChange('en')}>English</li>
                  <li onClick={() => handleLanguageChange('ko')}>한국어</li>
                  <li onClick={() => handleLanguageChange('es')}>Español</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className={styles.contactFormContainer}>
          <h2 className={styles.contactTitle}>{t('home.contactTitle')}</h2>
          {status === 'success' && <p className={styles.successMessage}>Email sent successfully!</p>}
          {status === 'error' && <p className={styles.errorMessage}>Failed to send email. Please try again.</p>}
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div>
                <label htmlFor="firstName">{t('home.contactFirstNameLabel')}</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName">{t('home.contactLastNameLabel')}</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className={styles.formRow}>
              <div>
                <label htmlFor="email">{t('home.contactEmailLabel')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">{t('home.contactPhoneLabel')}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message">{t('home.contactMessageLabel')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.contactSubmit}>
              {t('home.contactSubmitButton')}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Services;
