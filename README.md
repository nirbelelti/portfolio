# Nir Belelti — portfolio

Personal portfolio of Nir Belelti, software engineer in Copenhagen. Live at https://nirbelelti.github.io/portfolio/.

A single-page React + TypeScript site, prerendered to static HTML at build time and deployed to GitHub Pages. No UI framework: layout and motion are plain CSS, interactions use native `<dialog>`, `<details>` and IntersectionObserver.

## Commands

| Command          | What it does                                                        |
|------------------|---------------------------------------------------------------------|
| `npm run dev`    | Dev server at http://localhost:5173/portfolio/                      |
| `npm run build`  | Type-check, build, then prerender the page into `build/index.html`  |
| `npm run preview`| Serve the production build at http://localhost:4173/portfolio/      |
| `npm test`       | Unit tests (Vitest)                                                 |
| `npm run lint`   | ESLint                                                              |
| `npm run deploy` | Build and publish `build/` to GitHub Pages                          |

## Structure

- `src/content/` — all copy and data (profile, capabilities, projects, modeling, AI, experience, education). Edit text here.
- `src/sections/` — one component per page section, in page order (see `App.tsx`).
- `src/components/` — shared building blocks (header, section wrapper, image dialog, tags, icons).
- `src/hooks/` — scroll state, active section, reveal-on-scroll, legacy route redirect, print behaviour.
- `src/styles/tokens.css` — the design system: colour (light and dark), type, spacing, radius, shadow and motion tokens.
- `src/styles/print.css` — turns the page into a résumé when printed or saved as PDF.
- `scripts/prerender.mjs` — renders the app to HTML after the build and preloads the above-the-fold fonts.

Old hash routes such as `#/modeling` or `#/employment` are redirected to the matching section.

## Images

Images are committed as optimised WebP next to their source PNGs. To regenerate one, for example a diagram:

```sh
magick src/assets/modeling/class_design.png -background white -alpha remove -resize '1600x>' /tmp/out.png
cwebp -q 82 /tmp/out.png -o src/assets/modeling/class_design.webp
```
