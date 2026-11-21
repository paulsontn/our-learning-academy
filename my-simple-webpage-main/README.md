# 🌐 Our Learning Academy 🚀

A responsive web-based project designed to help beginners explore Full Stack Development, Courses, and Student Registration.
This project demonstrates HTML5, CSS3, and Vanilla JavaScript usage with features like persistent dark mode, URL-driven course enrollment, form validation, and responsive UI.

## 📌 Features

- **🏠 Home Page (`index.html`)** – Introduction to full stack development, responsive embedded YouTube tutorial, tech stack overview table, and featured course cards.
- **📚 Courses Page (`courses.html`)** – Showcases available programs (*Fullstack with Python*, *Java Fullstack*, *Data Science & AI*, and *Blockchain Development*) with direct **Enroll Now** buttons.
- **📝 Registration Page (`register.html`)** – Auto-populates the selected course via query parameters, validates inputs with accessible error states, and saves the enrollment summary in `localStorage`.
- **📩 Contact Page (`contact.html`)** – Interactive contact form with confirmation feedback.
- **🌙 Dark Mode Toggle** – Saves theme preference in `localStorage` and updates button labels dynamically across all pages.
- **🎨 Responsive Design** – Fluid layout optimized for desktop, tablet, and mobile viewports.

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Custom CSS with CSS Grid/Flexbox, transitions, responsive breakpoints, and dark mode theming
- **Storage:** `localStorage` (for dark mode preference and student enrollment persistence)

## 📂 Project Structure

```text
├── index.html        # Home Page
├── courses.html      # Courses Page
├── register.html     # Student Registration Page
├── contact.html      # Contact Page
├── style.css         # Centralized Stylesheet (Light & Dark Mode)
├── script.js         # Centralized JavaScript (Theme, Validation & Storage)
└── README.md         # Project Documentation