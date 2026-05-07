# Agent Instructions

This file contains high-signal, repo-specific context for OpenCode and other AI agents to avoid mistakes and ramp up quickly.

## Architecture & Tech Stack
- **Framework**: Astro (Static Site Generation), migrated from a Vite React SPA.
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite`. Global theme variables are defined in `src/index.css` using the `@theme` directive.
- **Component Strategy (Islands)**:
  - Prefer `.astro` components (`src/components/astro/`) for static UI, layouts, and simple scroll/hover effects.
  - Use React components (`src/components/react/`) **only** for elements requiring state or lifecycle hooks (e.g., `TypewriterText.tsx` using `framer-motion`). Remember to use Astro client directives (like `client:load`) when importing React components.

## Data & Content
- **Content Collections**: The portfolio is data-driven. Do not modify `index.astro` to add new jobs or projects. 
- Add/edit data exclusively in the Markdown files located at `src/content/projects/*.md` and `src/content/experience/*.md`.
- Ensure Frontmatter matches the strict Zod schemas defined in `src/content/config.ts`.

## Commands
- **Dev Server**: `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint`

## Deployment
- **Branch Strategy**: The main development branch is `source`.
- **CI/CD**: Pushing to the `source` branch automatically triggers `.github/workflows/deploy.yml`. The action builds the site and pushes the `dist/` directory to the `master` branch for GitHub Pages.
- **Rule**: NEVER push to `master` manually.

## Known Quirks & Troubleshooting
- **Vite Cache Conflicts**: Because this project uses Astro (which wraps Vite) alongside React integrations, aggressive caching can occasionally cause `504 Outdated Optimize Dep` or `Failed to fetch dynamically imported module` errors during local dev. 
- **Fix**: Wipe the cache and reinstall: `rm -rf node_modules .astro dist package-lock.json && npm install`.
- **Animations**: To maintain a near-zero JS bundle, prioritize native CSS (`hover:`, `active:`, `transition-all`) and lightweight Vanilla JS `IntersectionObserver` (defined in layouts/components) over heavy JS animation libraries.
