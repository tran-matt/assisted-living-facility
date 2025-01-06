import React from 'react';
import styles from './About.module.css'; 
import ContactForm from '../components/ContactForm';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>About Us</h1>
        <p>Wellbeing Assisted Living (웰빙 노인 요양원)</p>
        <p>
          A place that offers a safe residential option for seniors in a peaceful home-like
          environment.
        </p>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <h2>About Us</h2>
        <p>
          Wellbeing Assisted Living (웰빙 노인 요양원) is a place that offers a safe residential option
          for seniors in a peaceful home-like environment. Here, they will receive assistance for
          their day-to-day needs while maintaining their respect, dignity, and independence.
        </p>
        <p>
          Wellbeing Assisted Living provides superior care for individuals and works closely with
          their families and health care providers to ensure the utmost quality of life. We are a
          Korean and English-speaking facility that specializes in care for Korean-speaking seniors.
        </p>
        <button className={styles.button}>View Our Services</button>
      </section>

      {/* Certifications Section */}
      <section className={styles.certifications}>
        <h2>Certifications & Qualifications</h2>
        <p>
          Julie Kim is the owner and founder of Wellbeing Assisted Living, a Maryland State-licensed
          facility. With over 10 years of experience, she has devoted her life to caring for senior
          citizens and establishing a place they can call home.
        </p>
        <ul>
          <li>State of Maryland Licensed Facility</li>
          <li>Certified Assisted Living Manager</li>
          <li>
            Geriatric Nursing Assistant (GNA) through the Maryland Board of Nursing
          </li>
          <li>Medication Technician (Maryland Board of Nursing)</li>
          <li>CPR & First Aid Certified</li>
          <li>Bilingual in Korean & English</li>
        </ul>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default About;
