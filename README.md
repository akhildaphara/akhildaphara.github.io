# Akhil Daphara | Portfolio

[![Deploy to GitHub Pages](https://github.com/akhildaphara/akhildaphara.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/akhildaphara/akhildaphara.github.io/actions/workflows/deploy.yml)

A modern, content-driven portfolio built with Astro and Tailwind CSS. Static-first with a near-zero JS footprint, a terminal/blueprint aesthetic, and automatic deployment to GitHub Pages.

## Live Demo

[https://akhildaphara.github.io/portfolio/](https://akhildaphara.github.io/portfolio/)

## Tech Stack

- **Astro 5** - Static site generation with islands architecture
- **Tailwind CSS v4** - Utility-first styling via `@tailwindcss/vite`
- **React 19** - Used only for stateful islands (e.g. the hero typewriter)
- **Framer Motion** - Animation for React islands
- **Lucide React** - Consistent SVG icons
- **TypeScript** - Type safety and content collection schemas

## Features

- Data-driven content via Astro Content Collections (projects + experience)
- Scroll-triggered reveals with a lightweight `IntersectionObserver`
- Typing animation for the hero section
- CRT grid and noise overlays for a terminal feel
- Responsive layout
- Automatic builds and deploys on commit

## Getting Started

### Prerequisites

- Node.js 24+
- npm

### Installation

```bash
git clone https://github.com/akhildaphara/akhildaphara.github.io.git
cd akhildaphara.github.io
npm install
npm run dev
```

The dev server runs at `http://localhost:4321/`.

### Building

```bash
npm run build
```

This creates optimized production files in the `dist/` folder.

## Project Structure

```
src/
├── components/
│   ├── astro/        # Static UI (Navbar, SectionHeading, TechBadge)
│   └── react/        # Stateful islands (TypewriterText)
├── content/
│   ├── config.ts     # Zod schemas for collections
│   ├── projects/     # One markdown file per project
│   └── experience/   # One markdown file per role
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro   # The single page, rendered from collections
└── index.css         # Theme tokens and global styles

public/
├── favicon.svg       # Site favicon
├── icons.svg         # SVG sprite
└── 404.html          # Custom 404 page

.github/workflows/
└── deploy.yml        # GitHub Actions deployment workflow
```

To add or edit a project or job, create/modify a markdown file in `src/content/`. Do not hardcode entries in `index.astro`.

## Deployment

Pushing to the `source` branch triggers `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to the `master` branch for GitHub Pages. Never push to `master` manually.

## License

MIT
