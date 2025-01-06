import React from 'react';
import ContactForm from '../components/ContactForm';
import styles from './Facility.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Facility: React.FC = () => {
  const images = [
    '/assets/dining-room.jpg',
    '/assets/kitchen.jpg',
    '/assets/living-room.jpg',
    '/assets/fireplace.jpg',
    '/assets/bedroom.jpg',
    '/assets/common-area.jpg',
  ];

  return (
    <div className={styles.facilityPage}>

      {/* Hero Section */}
      <section className={styles.hero}>
        <img
          className={styles.heroImage}
          src="/assets/living-room.jpg"
          alt="Warm and inviting living room at the facility"
        />
      </section>

      {/* Facility Information Section */}
      <section className={styles.facilityInfo}>
        <div className={styles.textContent}>
          <h2 className={styles.sectionHeading}>Our Facility</h2>
          <p>
            Wellbeing Assisted Living is a home facility that is warm and welcoming to all of our
            residents and their visitors. We offer a clean and safe space so that our residents can
            be comfortable and at ease in their new home.
          </p>
          <p>
            <strong>Location:</strong> 16400 S Westland Dr. Gaithersburg, MD 20877
          </p>
          <p>
            <strong>Visiting Hours:</strong> 10:00 AM - 5:00 PM (By appointment only)
          </p>
        </div>
        <img
          className={styles.image}
          src="/assets/fireplace.jpg"
          alt="Comfortable fireplace area in the facility"
        />
      </section>

      {/* Photo Gallery Section */}
      <section className={styles.gallery}>
        <h2 className={styles.sectionHeading}>Photo Gallery</h2>
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

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default Facility;
