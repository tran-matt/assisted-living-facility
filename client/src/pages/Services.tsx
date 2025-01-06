import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Services.module.css'; // CSS Module for styling
import oldHandsImage from '../assets/Old Hands.png';
import soupImage from '../assets/Soup.png';
import medicationImage from '../assets/Medication.png';
import logo from '../assets/logo.png';

const Services: React.FC = () => {
  return (
    <div className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img
          className={styles.heroImage}
          src={oldHandsImage}
          alt="Elderly hands holding an object"
        />
      </section>

      {/* Empty Space */}
      <section className={styles.emptySpace}></section>

      {/* Our Services Section */}
      <section className={styles.ourServicesSection}>
        <div className={styles.ourServicesContent}>
          <h1 className={styles.ourServicesTitle}>Our Services</h1>
          <p className={styles.ourServicesText}>
            The services provided by Wellbeing Assisted Living will be <strong>customized</strong> to meet the
            individual needs of each resident. We will provide a comfortable atmosphere that creates room for
            a personal connection with each resident.
          </p>
          <p className={styles.ourServicesText}>
            The facility will have certified staff present <strong>24 hours a day</strong> and will be ready at
            all times to assist residents with their daily needs. A cook will provide <strong>home-style meals</strong>
            that will be prepared on-site in the facility's kitchen. The residents will receive three complete
            nutritious meals a day, with healthy snacks and drinks available at all times. Meals will be served
            family-style and customized based on residents' preferences.
          </p>
        </div>
        <img
          className={styles.ourServicesImage}
          src={soupImage}
          alt="Home-style meal in a bowl"
        />
      </section>

      {/* Services Levels Section */}
      <section className={styles.servicesLevelsSection}>
        <img
          className={styles.servicesLevelsImage}
          src={medicationImage}
          alt="Medication administration"
        />
        <div className={styles.servicesLevelsContent}>
          <h2 className={styles.servicesLevelsTitle}>
            Services Provided for Levels I, II, III of Care:
          </h2>
          <ul className={styles.servicesLevelsList}>
            <li>Medication administration by med-technician</li>
            <li>Semi-annual medication review by a consultant pharmacist</li>
            <li>Delegating nurse on-site every 45 days/available on call</li>
            <li>Three meals daily in the main dining room, including evening snack</li>
            <li>Arrange appointments and transportation to and from doctor’s visits</li>
            <li>Social, recreational, and religious activities</li>
            <li>Cable TV, Wi-Fi Internet service</li>
            <li>Housekeeping service</li>
            <li>Laundry service</li>
          </ul>
        </div>
      </section>

      {/* Empty Space */}
      <section className={styles.emptySpace}></section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactLogo}>
          <img src={logo} alt="Wellbeing Assisted Living Logo" className={styles.contactLogoImage} />
          <ul className={styles.contactLinks}>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/facility">Facility</Link></li>
            <li><Link to="/language">Language</Link></li>
          </ul>
        </div>
        <div className={styles.contactFormContainer}>
          <h2 className={styles.contactTitle}>Contact us</h2>
          <form className={styles.contactForm}>
            <div className={styles.formRow}>
              <div>
                <label htmlFor="firstName">First name *</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div>
                <label htmlFor="lastName">Last name *</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>
            <div className={styles.formRow}>
              <div>
                <label htmlFor="email">Email address *</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="phone">Phone number (Optional)</label>
                <input type="tel" id="phone" name="phone" />
              </div>
            </div>
            <div>
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className={styles.contactSubmit}>Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Services;
