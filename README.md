# Ankit Dhanorkar — Portfolio

A premium, responsive personal portfolio for a Software Developer & VFX Pipeline Engineer.
Built with Vite + React + TypeScript + Tailwind CSS, compiling to static files that deploy
**free to GitHub Pages** — no database, no server, no paid services required.

## Features

- Full-screen animated hero with a particle-network canvas and typewriter role cycler
- About, Skills, Projects (with category filters + detail modal), Experience timeline,
  Education, Resume, and Contact sections
- Scroll-reveal animations, scroll progress indicator, glassmorphism, pastel gradient system
- Respects `prefers-reduced-motion`
- SEO: meta tags, Open Graph, Twitter card, JSON-LD structured data, sitemap, robots.txt
- All content centralized in `src/data/profile.ts` for easy editing
- Responsive across mobile, tablet, and desktop

## Local development

```bash
npm install
npm run dev      # start dev server
npm run build    # produce static files in dist/
npm run preview  # preview the production build
```

## Editing your content

All text, projects, skills, experience, and links live in **`src/data/profile.ts`**.
Update that single file to change names, descriptions, email, and social links.

### Replace placeholders

1. **Portrait** — add your photo at `public/portrait.jpg` and update the image tags in
   `src/components/Hero.tsx` and `src/components/About.tsx`.
2. **Resume PDF** — add your resume at `public/resume.pdf`.
3. **Email / socials** — update `profile.email`, `profile.linkedin`, and `profile.github`
   in `src/data/profile.ts`.
4. **OG image** — replace `public/og-image.svg` with a 1200×630 image if desired.

## Deploy to GitHub Pages

This project includes a GitHub Actions workflow at `.github/workflows/deploy.yml`
that builds and deploys automatically on push to `main`.

### Setup

1. Create a repository named `portfolio` (for a project site at
   `https://<username>.github.io/portfolio/`), or `username.github.io` (for a root site).
2. Push this code to the `main` branch.
3. In your repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow runs on every push to `main` and deploys the `dist/` output.

### Base path

The build uses `VITE_BASE` to set the correct asset base path:

- **Project site** (`username.github.io/portfolio`): keep `VITE_BASE=/portfolio/`
  (already the default in `vite.config.ts` and the workflow).
- **Root user/org site** (`username.github.io`): set `VITE_BASE=/` in the workflow
  and `vite.config.ts`.

## Tech stack

| Layer       | Tools                                              |
| ----------- | -------------------------------------------------- |
| Build       | Vite, TypeScript                                   |
| UI          | React, Tailwind CSS, Lucide icons                  |
| Animation   | CSS transitions, requestAnimationFrame canvas      |
| Deploy      | GitHub Pages (static), GitHub Actions              |

## License

Personal portfolio. Code structure is reusable; content belongs to Ankit Dhanorkar.
