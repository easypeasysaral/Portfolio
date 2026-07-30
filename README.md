# Saral Jain — Portfolio (React + Vite + Tailwind)

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # optional, serves the dist/ build locally
```

The build output lands in `dist/` — deploy that folder to Netlify, Vercel, GitHub Pages, etc.

## Structure

```
src/
  data.js              content: skills, projects, experience, education, stats
  useTheme.js           dark/light theme hook (toggles [data-theme] on <html>)
  index.css             Tailwind directives + CSS variable design tokens
  App.jsx                assembles all sections
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx        filterable, expandable project cards
    Timeline.jsx         Experience / Education tabs
    Heatmap.jsx           shared seeded activity heatmap w/ tooltip
    Activity.jsx          GitHub / LeetCode toggle wrapping Heatmap
    Contact.jsx
    Footer.jsx
```

## Notes

- The GitHub and LeetCode activity heatmaps now pull **live data**, fetched client-side on mount:
  - GitHub: [`github-contributions-api.jogruber.de`](https://github.com/grubersjoe/github-contributions-api) —
    a free, CORS-enabled, no-auth API that scrapes the public contribution graph.
  - LeetCode: [`leetcode-stats.tashif.codes`](https://github.com/tashifkhan/LeetCode-Stats-API) — a free
    hosted API exposing solved counts and a `/heatmap` endpoint with daily submission counts, streaks, etc.
  - Both are third-party community projects, not official APIs — if either goes down or rate-limits you,
    the section shows an inline error instead of silently falling back to fake data.
- **Update `src/config.js` before shipping**: `GITHUB_USERNAME` is set to `easypeasysaral` (from your
  resume). `LEETCODE_USERNAME` is currently a guess (set to the same handle) — replace it with your
  actual LeetCode username or the heatmap will either 404 or show someone else's stats.
- All content (name, projects, experience) lives in `src/data.js` — edit that file to update copy
  without touching component markup.
- Theming is done via CSS custom properties on `:root` / `[data-theme='light']` in `src/index.css`,
  referenced from Tailwind using arbitrary values like `bg-[var(--panel)]`.
