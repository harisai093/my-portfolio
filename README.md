# 🚀 Modern Developer Portfolio

A high-performance, responsive portfolio built with **React 19**, **Vite**, and **Tailwind CSS 4**. This project features a custom loading screen, smooth scroll-reveal animations, and a functional contact form powered by EmailJS.

---

## ✨ Features
- **Modern Tech Stack**: Built with the latest React 19 and Tailwind CSS 4.
- **Custom Loading Experience**: Interactive entrance animation managed via global state.
- **Responsive Navigation**: Seamless switching between desktop navbar and mobile overlay menu.
- **Contact Form**: Integrated with **EmailJS** for direct client inquiries without a backend.
- **Optimized for Web**: Built with Vite for near-instant HMR and fast production builds.
- **Scroll Animations**: Custom-built reveal effects for sections as you scroll.

## 🛠️ Tech Stack
- **Frontend**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)
- **Deployment**: Configured for GitHub Pages

## 📂 Project Structure
```text
my-portfolio/
├── public/              # Static assets (images, icons)
├── src/
│   ├── components/      # Global UI components
│   │   ├── Navbar.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── LoadingScreen.jsx
│   │   └── sections/    # Individual page sections
│   │       ├── Home.jsx
│   │       ├── About.jsx
│   │       ├── Projects.jsx
│   │       └── Contact.jsx
│   ├── App.jsx          # Main application & state logic
│   ├── main.jsx         # Application entry point
│   └── index.css        # Tailwind 4 & Custom Keyframe Animations
├── .env                 # API Keys (Ignored by Git)
├── .gitignore           # Git exclusion rules
├── eslint.config.js     # Linting configuration
├── index.html           # HTML template
├── package.json         # Dependencies & Scripts
├── README.md            # Project documentation
└── vite.config.js       # Vite configuration (Base path: /my-portfolio)

📦 Getting Started

1. Clone the repository
Bash
git clone [https://github.com/your-username/my-portfolio.git](https://github.com/your-username/my-portfolio.git)
cd my-portfolio

2. Install dependencies
Bash
npm install

3. Environment Variables
Create a .env file in the root directory and add your EmailJS credentials:

Code snippet
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key

4. Run Development Server
Bash
npm run dev


🚀 Deployment

This project is pre-configured for GitHub Pages via the base property in vite.config.js.

1.Ensure your vite.config.js base matches your repository name:

JavaScript
export default defineConfig({
  base: "/my-portfolio/",
  // ...
});

2.Build and deploy:

Bash
npm run build
npm run deploy

📄 License

This project is open-source and available under the MIT License.

**Would you like me to help you create the actual `Contact.jsx` file now so that the "Contact Form" feature actually works?**