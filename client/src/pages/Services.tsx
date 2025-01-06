import React from 'react';
import ContactForm from '../components/ContactForm';
import styles from './Services.module.css'; // CSS Module for styling

const Services: React.FC = () => {
  return (
    <div className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Our Services</h1>
      </section>

      {/* Services Description Section */}
      <section className={styles.servicesDescription}>
        <div className={styles.textContent}>
          <h2>Our Services</h2>
          <p>
            The services provided by Wellbeing Assisted Living will be customized to meet the
            individual needs of each resident. We will provide a comfortable atmosphere that creates
            room for a personal connection with each resident.
          </p>
          <p>
            The facility will have certified staff present <strong>24 hours a day</strong> and will
            be ready at all times to assist residents with their daily needs. A cook will provide
            <strong>home-style meals</strong> that will be prepared on-site in the facility's
            kitchen. The residents will receive three complete nutritious meals a day, with healthy
            snacks and drinks available at all times. Meals will be served family-style and
            customized based on residents' preferences.
          </p>
        </div>
        <img
          className={styles.image}
          src="/assets/soup.jpg" // Update the path to match your assets folder
          alt="Home-style meals"
        />
      </section>

      {/* Services Levels Section */}
      <section className={styles.servicesLevels}>
        <img
          className={styles.image}
          src="/assets/medication.jpg" // Update the path to match your assets folder
          alt="Medication administration"
        />
        <div className={styles.textContent}>
          <h2>Services Provided for Levels I, II, III of Care:</h2>
          <ul>
            <li>Medication administration by med-technician</li>
            <li>Semi-annual medication review by a consultant pharmacist</li>
            <li>
              Delegating nurse on-site every 45 days/available on call
            </li>
            <li>Three meals daily in the main dining room, including evening snack</li>
            <li>
              Arrange appointments and transportation to and from doctor’s visits
            </li>
            <li>Social, recreational, and religious activities</li>
            <li>Cable TV, Wi-Fi Internet service</li>
            <li>Housekeeping service</li>
            <li>Laundry service</li>
          </ul>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default Services;