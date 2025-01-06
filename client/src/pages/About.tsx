import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css'; 
import twoElderlyImage from '../assets/Two Elderly.png';
import vaseImage from '../assets/Vase.png';
import handsImage from '../assets/Hands.png';
import logo from '../assets/logo.png';

const About: React.FC = () => {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img className={styles.heroImage} src={twoElderlyImage} alt="Two elderly people walking together" />
      </section>

      {/* Empty Space */}
      <section className={styles.emptySpace}></section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <h1 className={styles.aboutTitle}>About us</h1>
          <p className={styles.aboutText}>
            <strong>Wellbeing Assisted Living</strong> (<strong>웰빙 노인 요양원</strong>) is a place that offers a safe residential option for seniors in a peaceful home-like environment. Here, they will receive assistance for their day-to-day needs while maintaining their respect, dignity, and independence.
          </p>
          <p className={styles.aboutText}>
            Wellbeing Assisted Living provides superior care for individuals and works closely with their families and health care providers to ensure the utmost quality of life. We are a Korean and English speaking facility that specializes in care for Korean-speaking seniors.
          </p>
          <button className={styles.aboutButton}>View Our Services</button>
        </div>
        <img className={styles.aboutImage} src={vaseImage} alt="Person watering plants" />
      </section>

      {/* Empty Space */}
      <section className={styles.emptySpace}></section>

      {/* Certifications Section */}
      <section className={styles.certificationsSection}>
        <img className={styles.certificationsImage} src={handsImage} alt="Hands holding each other" />
        <div className={styles.certificationsContent}>
          <h2 className={styles.certificationsTitle}>Certifications & Qualifications</h2>
          <p className={styles.certificationsIntro}>
            Julie Kim is the owner and founder of Wellbeing Assisted Living, a Maryland State licensed facility. With over 10 years of experience, she has devoted her life to caring for senior citizens and establishing a place they can call home.
          </p>
          <ul className={styles.certificationsList}>
            <li>State of Maryland Licensed Facility</li>
            <li>Certified Assisted Living Manager</li>
            <li>Geriatric Nursing Assistant (GNA) through the Maryland Board of Nursing</li>
            <li>Medication Technician (Maryland Board of Nursing)</li>
            <li>CPR & First Aid Certified</li>
            <li>Bilingual in Korean & English</li>
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

export default About;