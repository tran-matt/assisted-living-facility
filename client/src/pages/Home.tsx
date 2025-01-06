import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import heroImage from '../assets/Hero Image (Home).png';
import missionImage from '../assets/Image_OurMission.png';
import homeIcon from '../assets/home icon.png';
import foodIcon from '../assets/food icon.png';
import heartIcon from '../assets/heart icon.png';
import peopleIcon from '../assets/people icon.png';
import frame22Image from '../assets/Frame 22.png';
import frame23Image from '../assets/Frame 23.png';
import logo from '../assets/logo.png';

const Home: React.FC = () => {
  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img className={styles.heroImage} src={heroImage} alt="Hero Scene" />
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Wellbeing</h1>
          <h2 className={styles.heroSubtitle}>Assisted Living</h2>
          <p className={styles.heroTagline}>웰빙 노인 요양원</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <img className={styles.missionImage} src={missionImage} alt="Elderly woman" />
        <img className={styles.frame23Image} src={frame23Image} alt="Decorative image" />
        <div className={styles.missionContent}>
          <h2 className={styles.missionTitle}>Our Mission</h2>
          <p>
            The mission of Wellbeing Assisted Living is to provide the best care and assistance for seniors in a
            home-like environment and a family atmosphere at an affordable rate. All of the comforts of home are
            provided with the utmost attention to detail. Our staff cares for each resident as if they are family and
            also encourages the resident’s family members to come by during visiting hours.
          </p>
          <div className={styles.missionButtonWrapper}>
            <Link to="/about" className={styles.missionButton}>About Us</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className={styles.whyChooseSection}>
        <h2 className={styles.sectionTitle}>Why choose Wellbeing Assisted Living</h2>
        <div className={styles.iconGrid}>
          <div className={styles.iconCard}>
            <img src={homeIcon} alt="Home icon" className={styles.iconImage} />
            <h3 className={styles.iconTitle}>A place to call home</h3>
            <p className={styles.iconDescription}>
              Experience the joy of comfort in our safe and welcoming environment.
            </p>
          </div>
          <div className={styles.iconCard}>
            <img src={foodIcon} alt="Food icon" className={styles.iconImage} />
            <h3 className={styles.iconTitle}>Home-cooked meals</h3>
            <p className={styles.iconDescription}>
              Delight in delicious and nutritious homemade meals every day.
            </p>
          </div>
          <div className={styles.iconCard}>
            <img src={heartIcon} alt="Heart icon" className={styles.iconImage} />
            <h3 className={styles.iconTitle}>Customized care</h3>
            <p className={styles.iconDescription}>
              Embrace personalized care tailored to your unique needs and goals.
            </p>
          </div>
          <div className={styles.iconCard}>
            <img src={peopleIcon} alt="People icon" className={styles.iconImage} />
            <h3 className={styles.iconTitle}>Visiting hours</h3>
            <p className={styles.iconDescription}>
              Cherish quality time with family and loved ones, encouraged and celebrated.
            </p>
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className={styles.provideSection}>
        <div className={styles.provideContent}>
          <h2 className={styles.provideTitle}>What we provide</h2>
          <p className={styles.provideDescription}>
            Wellbeing Assisted Living provides a continuum of care to the fullest extent, 
            providing appropriate support services to senior citizens by allowing them to 
            maintain <strong>choice, control, independence, dignity, and privacy</strong> 
            that they would have at their own home.
          </p>
          <Link to="/services" className={styles.provideButton}>View Our Services</Link>
        </div>
        <div className={styles.provideImages}>
          <img className={styles.provideImage} src={frame22Image} alt="Senior man giving thumbs up" />
          <img className={styles.provideFrame23} src={frame23Image} alt="Decorative image" />
        </div>
      </section>

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

export default Home;
