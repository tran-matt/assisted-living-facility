import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import styles from './Facility.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import livingRoomImage from '../assets/Living Room.png';
import pianoImage from '../assets/Piano.png';
import logo from '../assets/Logo.png';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';

const Facility: React.FC = () => {
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

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setShowDropdown(false); // Close dropdown after selection
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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

  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className={styles.facilityPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img
          className={styles.heroImage}
          src={livingRoomImage}
          alt={t('facility.heroAlt')}
        />
      </section>

      {/* Empty Space */}
      <section className={styles.emptySpace}></section>

      {/* Our Facility Section */}
      <section className={styles.ourFacilitySection}>
        <div className={styles.facilityContent}>
          <h1 className={styles.facilityTitle}>{t('facility.title')}</h1>
          <p className={styles.facilityDescription}>{t('facility.description')}</p>
          <div className={styles.facilityDetails}>
            <div className={styles.location}>
              <p className={styles.detailTitle}>{t('facility.locationTitle')}</p>
              <p className={styles.detailText}>{t('facility.locationText')}</p>
            </div>
            <div className={styles.visitingHours}>
              <p className={styles.detailTitle}>{t('facility.visitingHoursTitle')}</p>
              <p className={styles.detailText}>{t('facility.visitingHoursText')}</p>
            </div>
          </div>
        </div>
        <img
          className={styles.facilityImage}
          src={pianoImage}
          alt={t('facility.pianoAlt')}
        />
      </section>

      {/* Photo Gallery Section */}
      <section className={styles.gallerySection}>
        <h2 className={styles.galleryTitle}>{t('facility.galleryTitle')}</h2>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          className={styles.carousel}
          containerClass="container-with-dots"
          draggable
          focusOnSelect={false}
          infinite
          itemClass={styles.carouselItem}
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
          }}
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={t('facility.galleryImageAlt', { index: index + 1 })}
              className={styles.carouselImage}
            />
          ))}
        </Carousel>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactLogo}>
          <img
            src={logo}
            alt={t('facility.contactLogoAlt')}
            className={styles.contactLogoImage}
          />
          <ul className={styles.contactLinks}>
            <li>
              <a href="/about">{t('facility.contactAboutLink')}</a>
            </li>
            <li>
              <a href="/services">{t('facility.contactServicesLink')}</a>
            </li>
            <li>
              <a href="/facility">{t('facility.contactFacilityLink')}</a>
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
          <h2 className={styles.contactTitle}>{t('facility.contactTitle')}</h2>
          {status === 'success' && <p className={styles.successMessage}>Email sent successfully!</p>}
          {status === 'error' && <p className={styles.errorMessage}>Failed to send email. Please try again.</p>}
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div>
                <label htmlFor="firstName">{t('facility.contactFirstNameLabel')}</label>
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
                <label htmlFor="lastName">{t('facility.contactLastNameLabel')}</label>
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
                <label htmlFor="email">{t('facility.contactEmailLabel')}</label>
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
                <label htmlFor="phone">{t('facility.contactPhoneLabel')}</label>
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
              <label htmlFor="message">{t('facility.contactMessageLabel')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.contactSubmit}>
              {t('facility.contactSubmitButton')}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Facility;
