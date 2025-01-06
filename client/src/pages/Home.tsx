import React from 'react';
import ContactForm from '../components/ContactForm';
import styles from './Home.module.css'; // Create a CSS module for this component

const Home: React.FC = () => {
  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Wellbeing Assisted Living</h1>
          <p>웰빙 노인 요양원</p>
          <p>
            Providing the best care and assistance for seniors in a home-like environment and a
            family atmosphere at an affordable rate.
          </p>
        </div>
        <button className={styles.heroButton}>About Us</button>
      </section>

      {/* Mission Section */}
      <section className={styles.mission}>
        <div className={styles.textContent}>
          <h2>Our Mission</h2>
          <p>
            The mission of Wellbeing Assisted Living is to provide the best care and assistance for
            seniors in a home-like environment and a family atmosphere at an affordable rate. All of
            the comforts of home are provided with the utmost attention to detail. Our staff cares
            for each resident as if they are family and also encourages the resident’s family
            members to come by during visiting hours.
          </p>
          <button>About Us</button>
        </div>
        <img
          className={styles.image}
          src="/assets/elderly-woman.jpg" // Replace with actual path
          alt="Elderly woman"
        />
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>Why Choose Wellbeing Assisted Living</h2>
        <div className={styles.featureCards}>
          <div className={styles.card}>
            <h3>A place to call home</h3>
            <p>Experience the joy of comfort in our safe and welcoming environment.</p>
          </div>
          <div className={styles.card}>
            <h3>Home-cooked meals</h3>
            <p>Delight in delicious and nutritious homemade meals every day.</p>
          </div>
          <div className={styles.card}>
            <h3>Customized care</h3>
            <p>Embrace personalized care tailored to your unique needs and goals.</p>
          </div>
          <div className={styles.card}>
            <h3>Visiting hours</h3>
            <p>Cherish quality time with family and loved ones, encouraged and celebrated.</p>
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className={styles.whatWeProvide}>
        <div className={styles.textContent}>
          <h2>What We Provide</h2>
          <p>
            Wellbeing Assisted Living provides a continuum of care to the fullest extent, providing
            appropriate support services to senior citizens by allowing them to maintain choice,
            control, independence, dignity, and privacy that they would have at their own home.
          </p>
          <button>View Our Services</button>
        </div>
        <img
          className={styles.image}
          src="/assets/senior-man.jpg" // Replace with actual path
          alt="Senior man"
        />
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default Home;
