import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import styles from './About.module.css';
import twoElderlyImage from '../assets/Two Elderly.png';
import vaseImage from '../assets/Vase.png';
import handsImage from '../assets/Hands.png';
import logo from '../assets/Logo.png';

const About: React.FC = () => {
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
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img
          className={styles.heroImage}
          src={twoElderlyImage}
          alt={t('about.heroAlt')}
        />
      </section>

      {/* Empty Space */}
      <section className={styles.emptySpace}></section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <h1 className={styles.aboutTitle}>{t('about.title')}</h1>
          <p className={styles.aboutText}>{t('about.text1')}</p>
          <p className={styles.aboutText}>{t('about.text2')}</p>
          <Link to="/services" className={styles.aboutButton}>
            {t('about.viewServicesButton')}
          </Link>
        </div>
        <img
          className={styles.aboutImage}
          src={vaseImage}
          alt={t('about.vaseAlt')}
        />
      </section>

      {/* Empty Space */}
      <section className={styles.emptySpace}></section>

      {/* Certifications Section */}
      <section className={styles.certificationsSection}>
        <img
          className={styles.certificationsImage}
          src={handsImage}
          alt={t('about.certificationsAlt')}
        />
        <div className={styles.certificationsContent}>
          <h2 className={styles.certificationsTitle}>
            {t('about.certificationsTitle')}
          </h2>
          <p className={styles.certificationsIntro}>
            {t('about.certificationsIntro')}
          </p>
          <ul className={styles.certificationsList}>
            <li>{t('about.certification1')}</li>
            <li>{t('about.certification2')}</li>
            <li>{t('about.certification3')}</li>
            <li>{t('about.certification4')}</li>
            <li>{t('about.certification5')}</li>
            <li>{t('about.certification6')}</li>
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
              {t('header.language')}
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

export default About;
