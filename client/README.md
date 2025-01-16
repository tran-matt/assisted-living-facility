# Welcome Wellb

This repository showcases a responsive, multilingual web application built using React and various modern technologies. It is designed to offer seamless navigation, accessibility, and interactivity, providing potential users with a rich experience. Below is a detailed description of the project to help you better understand its features and functionalities.

---

## Table of Contents
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Deployment and Usage](#deployment-and-usage)
- [How It Works](#how-it-works)
- [Future Enhancements](#future-enhancements)
- [Contact Information](#contact-information)

---

## Key Features

### Multilingual Support
- **Languages:** English, Korean, Spanish.
- Implemented using the `react-i18next` library for dynamic language switching.

### Modular Components
- Structured with reusable and responsive React components, ensuring maintainability and scalability.

### Interactive Forms
- Includes contact forms for user engagement.
- Integrated with **EmailJS** for direct email communication.
- Real-time form validation to ensure data accuracy.

### Carousel Photo Galleries
- Implemented using `react-multi-carousel` for smooth and responsive image galleries.
- Displays dynamic images in the `Facility` section for an engaging visual experience.

### Clean, Responsive UI
- Developed with CSS Modules for modular and scoped styles.
- Fully responsive design, ensuring compatibility across devices and screen sizes.

---

## Technologies Used

### Frontend
- **React:** Functional components with hooks for state and lifecycle management.
- **React Router:** SPA navigation.
- **CSS Modules:** Styling with scoped and maintainable CSS.

### Multilingual Support
- **react-i18next:** Seamless translation and language management.

### Form Handling
- **EmailJS:** Backend-free email service for contact forms.

### Gallery
- **react-multi-carousel:** Smooth and customizable image carousel.

---

## Project Structure
```plaintext
src/
├── assets/        # Images and static files
├── components/    # React components for different pages
│   ├── Home/      # Homepage components
│   ├── Facility/  # Facility page components
│   └── About/     # About page components
├── styles/        # CSS Modules for styling
└── App.tsx        # Root application component
```

---

## Deployment and Usage

### Prerequisites
- Node.js and npm/yarn installed.

### Running Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Deployment
- This project has been deployed using **Netlify**. You can view the live version at:
  [https://wellbeingal.netlify.app/](https://wellbeingal.netlify.app/)

---

## How It Works

### Language Switching
- Dynamically changes the displayed language based on user selection using `i18next`'s context and `useTranslation` hook.

### Contact Form Submission
- Form data is sent directly to the configured email using EmailJS, providing real-time status feedback to users (success or failure).

### Carousel
- Displays an array of images with responsive settings for desktop, tablet, and mobile devices, ensuring an optimized user experience.

---

## Future Enhancements

- **Dark Mode:** Adding a theme switcher for dark/light modes.
- **Backend Integration:** Replacing EmailJS with a custom backend for enhanced functionality.
- **User Authentication:** Implementing secure user login and role-based access control.

---

## Contact Information
If you have any questions or would like more information, feel free to reach out:

- **Email:** recruiter@yourdomain.com


---

I hope this project highlights our commitment to creating clean, responsive, and feature-rich web applications. Thank you for considering our work!
