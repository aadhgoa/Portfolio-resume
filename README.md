# Aayush Anand — Interactive Resume & Developer Portfolio

[![React](https://img.shields.io/badge/React-19.x-blue?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind%20CSS-v4.0-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animation-FF00C1?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Oxlint](https://img.shields.io/badge/Linter-Oxlint-orange?logo=oxlint)](https://github.com/oxc-project/oxc)

A premium, highly interactive, and responsive developer portfolio website designed for **Aayush Anand** (AI/GenAI Backend Engineer & Associate Consultant). This site transforms a traditional developer resume into a dynamic, game-like, and command-line friendly experience.

---

## ✨ Features

*   **💻 Interactive Terminal Simulator**: A fully functional simulated command-line console (`Terminal.jsx`) that lets developers interact with Aayush's resume via commands (e.g., `help`, `about`, `skills`, `experience`, `projects`, `clear`, `contact`).
*   **🐛 Bug Hunter Mini-Game**: An embedded interactive mini-game (`BugHunter.jsx`) designed specifically for developers. Click and catch crawling bug icons across the screen to increase your score!
*   **🎮 Konami Code Easter Egg**: Enter the legendary Konami Code (`Up, Up, Down, Down, Left, Right, Left, Right, B, A`) on your keyboard to unlock a celebration party mode featuring dynamic color transitions and high-performance confetti rain (`react-confetti`).
*   **🌌 Dynamic Particle Backdrop**: High-performance interactive background particles built with `@tsparticles/react` that respond gracefully to mouse hover and click interactions.
*   **🖱️ Custom Interactive Cursor**: A custom visual cursor element (`CustomCursor.jsx`) that tracks mouse movements with custom states, smooth spring physics, and hover-state resizing.
*   **🎨 Premium Dark Mode Aesthetics**: A modern glassmorphic interface utilizing sophisticated gradients, customized selection highlight styles, and smooth element transitions.
*   **📱 Fully Responsive Grid & Layouts**: Highly responsive design engineered using Tailwind CSS, showcasing skills, experiences, and projects with interactive 3D hover effects (`react-parallax-tilt`).

---

## 🛠️ Technology Stack

*   **Core Framework**: [React 19](https://react.dev) & [Vite 8](https://vite.dev) (Single Page Application configuration)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (Modern utility-first styling Engine)
*   **Animations**: [Framer Motion](https://framer.com/motion) (Smooth exit/enter transitions and scroll progress animations)
*   **Utilities**:
    *   `react-simple-typewriter` (Typing effect on the landing screen)
    *   `react-parallax-tilt` (Interactive card tilt mechanics)
    *   `react-use` (Window size monitoring and event hook listeners)
    *   `lucide-react` & `react-icons` (Clean, vector iconography)
    *   `oxlint` (Ultra-fast Rust-based JavaScript/React code linter)

---

## 📂 Project Structure

```
Resume_Based_Portfolio/
├── public/                 # Static assets (Favicons, Icons)
├── src/
│   ├── components/         # Modular React Components
│   │   ├── About.jsx       # Personal overview/bio section
│   │   ├── BackToTop.jsx   # Scroll-to-top button
│   │   ├── BugHunter.jsx   # Bug clicker mini-game
│   │   ├── CustomCursor.jsx# Mouse cursor tracking
│   │   ├── Experience.jsx  # Interactive career timeline
│   │   ├── Footer.jsx      # Footer with social icons
│   │   ├── Hero.jsx        # Landing hero section with typewriter effect
│   │   ├── MagneticButton.js# Dynamic magnet button hover physics
│   │   ├── Navbar.jsx      # Header navigation bar
│   │   ├── ParticleBackground.jsx # Background particles particle engine
│   │   ├── Projects.jsx    # Projects showcase grid
│   │   ├── Skills.jsx      # Categorized skill badges
│   │   └── Terminal.jsx    # The terminal CLI simulation console
│   ├── data/
│   │   └── resumeData.js   # Single source of truth for resume details
│   ├── utils/              # Helper utility scripts
│   ├── App.jsx             # Main router & layout coordinator (Konami Code logic)
│   ├── App.css             # Main component level styling
│   ├── index.css           # Global custom stylesheet & Tailwind imports
│   └── main.jsx            # Application mount point
├── package.json            # Scripts, dependencies, and metadata
└── vite.config.js          # Vite configurations (React/Tailwind plugins)
```

---

## 🚀 Getting Started

To run this project locally, follow these simple steps:

### Prerequisites

*   Make sure you have [Node.js](https://nodejs.org) (v18 or higher recommended) installed.

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project root directory.
3. Install all dependencies:
    ```bash
    npm install
    ```

### Available Scripts

In the project directory, you can run:

*   **Start the development server**:
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` to view the portfolio in your browser with Hot Module Replacement (HMR).

*   **Lint files using Oxlint**:
    ```bash
    npm run lint
    ```

*   **Build the application for production**:
    ```bash
    npm run build
    ```
    This compiles the app into highly optimized static files in the `dist` directory.

*   **Preview the production build locally**:
    ```bash
    npm run preview
    ```

---

## 🔗 Contact & Links

*   **Developer**: Aayush Anand
*   **Email**: [aadh_goa@yahoo.com](mailto:aadh_goa@yahoo.com)
*   **LinkedIn**: [linkedin.com/in/aadhgoa](https://linkedin.com/in/aadhgoa)
*   **GitHub**: [github.com/aadhgoa](https://github.com/aadhgoa)

