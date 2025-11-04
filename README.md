# 🚀 Hasitha Dananjaya - Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and achievements as a Full-Stack Developer.

## 🌐 Live Demo

**[View Portfolio →](https://hasithadn-dev.github.io/portfolio/)**

## ✨ Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Dark Theme**: Modern dark UI with green and blue accent colors
- **Dynamic Greeting**: Time-based greeting (Good Morning/Afternoon/Evening)
- **Interactive Components**: Smooth animations and hover effects
- **Verified Certifications**: Direct links to Credly badge verification
- **Project Showcase**: Detailed project cards with repository links
- **Contact Integration**: Direct links to email, LinkedIn, GitHub, and coding profiles

## 🛠️ Built With

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD pipeline

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── About.jsx          # About me section
│   │   ├── Awards.jsx         # Awards & certifications
│   │   ├── Contact.jsx        # Contact information
│   │   ├── Hero.jsx           # Hero section with greeting
│   │   ├── Navigation.jsx     # Responsive navigation bar
│   │   ├── Projects.jsx       # Project showcase
│   │   └── Skills.jsx         # Technical skills grid
│   ├── assets/                # Images and static assets
│   ├── App.jsx                # Main app component
│   ├── index.css              # Global styles and Tailwind imports
│   └── main.jsx               # App entry point
├── .github/workflows/         # CI/CD configuration
├── public/                    # Public assets
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies and scripts

```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HasithaDN-dev/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization

To customize this portfolio for your own use:

1. Update personal information in components (Hero, About, Contact)
2. Replace profile image in `src/assets/`
3. Update projects array in `Projects.jsx`
4. Modify certifications and awards in `Awards.jsx`
5. Update skills in `Skills.jsx`
6. Change color theme in `src/index.css`

## 🔧 Configuration

- **Base URL**: Set in `.env.production` and `vite.config.js` for GitHub Pages deployment
- **Tailwind**: Using v4 with `@import "tailwindcss";` in `index.css`
- **ESLint**: Configured in `eslint.config.js`

## 📄 License

© 2025 M.A.H.D. Navarathne. All rights reserved.

## 📧 Contact

- **Email**: hasithadananjaya894@gmail.com
- **LinkedIn**: [hasitha-dananjaya](https://www.linkedin.com/in/hasitha-dananjaya-92b873284/)
- **GitHub**: [HasithaDN-dev](https://github.com/HasithaDN-dev)

---

Built with ❤️ using React, Vite & Tailwind CSS
