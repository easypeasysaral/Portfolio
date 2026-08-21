
# Saral Jain - AI/ML Engineer Portfolio

A minimalist, brutalist-style personal portfolio built with React and Vite.

## Run Locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for Production

```bash
npm run build
npm run preview   # optional, serves the dist/ build locally
```

The build output lands in `dist/`. You can deploy this folder directly to Netlify, Vercel, or GitHub Pages.

## Architecture

The codebase has been refactored to be extremely lean. It relies on standard CSS rather than PostCSS or Tailwind to guarantee maximum performance and match the desired brutalist aesthetic.

```text
src/
  data.js              # Centralized content: projects, skills, signals
  index.css            # Compiled brutalist design tokens and CSS rules
  App.jsx              # Main layout assembling all sections
  components/
    Navbar.jsx         # Top navigation with mobile menu
    Reveal.jsx         # Scroll-triggered animation wrapper using IntersectionObserver
    Hero.jsx           # Landing section with terminal UI
    Band.jsx           # Scrolling marquee
    About.jsx          # Short bio section
    Projects.jsx       # Selected work showcase
    Experience.jsx     # Current roles and education
    Skills.jsx         # Tooling categorized by domain
    Signals.jsx        # Hackathons, simulation, and extra-curriculars
    Contact.jsx        # Contact info and external links
```

## Making Edits

- **Content**: All text for your projects, skills, and signals lives in `src/data.js`. Edit this file to update the copy across the site without touching the React components.
- **Animations**: Any new sections you add should use the `<Reveal>` component wrapper to hook into the global scroll animation system.

