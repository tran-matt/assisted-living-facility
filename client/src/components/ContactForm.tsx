import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="contact-form">
      <h2>Contact Us</h2>
      <form>
        <div>
          <label>First name *</label>
          <input type="text" name="firstName" required />
        </div>
        <div>
          <label>Last name *</label>
          <input type="text" name="lastName" required />
        </div>
        <div>
          <label>Email address *</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Phone number</label>
          <input type="tel" name="phone" />
        </div>
        <div>
          <label>Message *</label>
          <textarea name="message" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;