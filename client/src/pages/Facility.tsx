import React from 'react';
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
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className={styles.facilityPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img
          className={styles.heroImage}
          src={livingRoomImage}
          alt="Living room at the facility"
        />
      </section>

      {/* Empty Space */}
      <section className={styles.emptySpace}></section>

      {/* Our Facility Section */}
      <section className={styles.ourFacilitySection}>
        <div className={styles.facilityContent}>
          <h1 className={styles.facilityTitle}>Our Facility</h1>
          <p className={styles.facilityDescription}>
            Wellbeing Assisted Living is a home facility that is warm and welcoming to all of our
            residents and their visitors. We offer a clean and safe space so that our residents can
            be comfortable and at ease in their new home.
          </p>
          <div className={styles.facilityDetails}>
            <div className={styles.location}>
              <p className={styles.detailTitle}>Location</p>
              <p className={styles.detailText}>16400 S Westland Dr. Gaithersburg, MD 20877</p>
            </div>
            <div className={styles.visitingHours}>
              <p className={styles.detailTitle}>Visiting Hours</p>
              <p className={styles.detailText}>10:00 AM - 5:00 PM (By appointment only)</p>
            </div>
          </div>
        </div>
        <img
          className={styles.facilityImage}
          src={pianoImage}
          alt="Piano and fireplace area in the facility"
        />
      </section>

      {/* Photo Gallery Section */}
      <section className={styles.gallerySection}>
        <h2 className={styles.galleryTitle}>Photo Gallery</h2>
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
              alt={`Gallery image ${index + 1}`}
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
            alt="Wellbeing Assisted Living Logo"
            className={styles.contactLogoImage}
          />
          <ul className={styles.contactLinks}>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/facility">Facility</a>
            </li>
            <li>
              <a href="/language">Language</a>
            </li>
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
            <button type="submit" className={styles.contactSubmit}>
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Facility;
