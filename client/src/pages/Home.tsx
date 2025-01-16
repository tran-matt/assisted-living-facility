import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import styles from './Home.module.css';
import missionImage from '../assets/Image_OurMission.png';
import homeIcon from '../assets/home icon.png';
import foodIcon from '../assets/food icon.png';
import heartIcon from '../assets/heart icon.png';
import peopleIcon from '../assets/people icon.png';
import frame22Image from '../assets/Frame 22.png';
import frame23Image from '../assets/Frame 23.png';
import logo from '../assets/Logo.png';

const Home: React.FC = () => {
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

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  emailjs
    .send(
      'service_oks00cs',
      'template_ktu1gn5',
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      'Hedu9wnB5lt1fcdIp'
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
      (error) => {
        console.error('EmailJS Error:', error);
        setStatus('error');
      }
    );
}; 


  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>{t('home.heroTitle')}</h1>
          <h2 className={styles.heroSubtitle}>{t('home.heroSubtitle')}</h2>
          <p className={styles.heroTagline}>{t('home.heroTagline')}</p>
        </div>
      </section>

      {/* Empty Spacer Area */}
<div className={styles.emptyArea}></div>

      {/* Mission Section */}
      <section className={styles.missionSection}>
  <img
    className={styles.missionImage}
    src={missionImage}
    alt={t('home.missionAlt')}
  />
  <div className={styles.missionContent}>
    <h2 className={styles.missionTitle}>{t('home.missionTitle')}</h2>
    <p>{t('home.missionText')}</p>
    <div className={styles.missionButtonWrapper}>
  <Link to="/about" className={styles.missionButton}>
    {t('home.aboutButton')}
  </Link>
</div>

  </div>
</section>


      {/* Why Choose Section */}
      <section className={styles.whyChooseSection}>
        <h2 className={styles.sectionTitle}>{t('home.whyChooseTitle')}</h2>
        <div className={styles.iconGrid}>
          <div className={styles.iconCard}>
            <img src={homeIcon} alt={t('home.icon1Alt')} className={styles.iconImage} />
            <h3 className={styles.iconTitle}>{t('home.icon1Title')}</h3>
            <p className={styles.iconDescription}>{t('home.icon1Description')}</p>
          </div>
          <div className={styles.iconCard}>
            <img src={foodIcon} alt={t('home.icon2Alt')} className={styles.iconImage} />
            <h3 className={styles.iconTitle}>{t('home.icon2Title')}</h3>
            <p className={styles.iconDescription}>{t('home.icon2Description')}</p>
          </div>
          <div className={styles.iconCard}>
            <img src={heartIcon} alt={t('home.icon3Alt')} className={styles.iconImage} />
            <h3 className={styles.iconTitle}>{t('home.icon3Title')}</h3>
            <p className={styles.iconDescription}>{t('home.icon3Description')}</p>
          </div>
          <div className={styles.iconCard}>
            <img src={peopleIcon} alt={t('home.icon4Alt')} className={styles.iconImage} />
            <h3 className={styles.iconTitle}>{t('home.icon4Title')}</h3>
            <p className={styles.iconDescription}>{t('home.icon4Description')}</p>
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className={styles.provideSection}>
        <div className={styles.provideContent}>
          <h2 className={styles.provideTitle}>{t('home.provideTitle')}</h2>
          <p className={styles.provideDescription}>{t('home.provideDescription')}</p>
          <Link to="/services" className={styles.provideButton}>
            {t('home.viewServicesButton')}
          </Link>
        </div>
        <div className={styles.provideImages}>
          <img
            className={styles.provideImage}
            src={frame22Image}
            alt={t('home.provideImageAlt')}
          />
          <img
            className={styles.provideFrame23}
            src={frame23Image}
            alt={t('home.decorativeAlt')}
          />
        </div>
      </section>

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

export default Home;
