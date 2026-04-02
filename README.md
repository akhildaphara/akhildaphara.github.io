# Akhil Daphara | Portfolio

[![Deploy to GitHub Pages](https://github.com/akhildaphara/akhildaphara.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/akhildaphara/akhildaphara.github.io/actions/workflows/deploy.yml)

A modern, minimalist portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, dark terminal aesthetic, and automatic deployment to GitHub Pages.

## Live Demo

[https://akhildaphara.github.io/portfolio/](https://akhildaphara.github.io/portfolio/)

## Tech Stack

- **React 19** - UI framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Scroll-triggered reveals and animations
- **Lucide React** - Consistent SVG icons
- **TypeScript** - Type safety

## Features

- Smooth scroll animations with Framer Motion
- Typing animations for hero section
- CRT scan lines and noise overlay for terminal feel
- Fully responsive design
- Automatic builds and deploys on commit
- Optimized for fast loading

## Getting Started

### Prerequisites

- Node.js 24+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/akhildaphara/akhildaphara.github.io.git
cd akhildaphara.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173/portfolio/`.

### Building

```bash
npm run build
```

This creates optimized production files in the `dist/` folder.

## Project Structure

```
src/
├── App.tsx         # Main React component
├── index.css       # Global styles and CSS variables
└── main.tsx        # React entry point

public/
├── favicon.svg     # Site favicon
└── 404.html        # Custom 404 page

.github/workflows/
└── deploy.yml      # GitHub Actions deployment workflow
```

## Deployment

This project automatically deploys to GitHub Pages whenever you push to the `source` branch.

The GitHub Actions workflow:
1. Builds the React app with Vite
2. Pushes the compiled files to the `master` branch
3. GitHub Pages serves the website from the `master` branch

## License

MIT
