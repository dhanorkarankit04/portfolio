# Project memory

## Product intent & audience

- Personal portfolio for a software and VFX pipeline engineer
- Showcases engineering projects, VFX/pipeline work, and professional background
- Target audience: recruiters, hiring managers, collaborators
- Deploys as a static site to GitHub Pages under `/portfolio/` subpath

## Brand personality & voice

- Professional, technical, creative (bridging software engineering and VFX)
- Production-quality presentation; polished and distinctive rather than generic

## Visual design & UX direction

- Vite + React (JSX) + Tailwind CSS stack (despite "Django" in project title, implementation is static Vite/React)
- Animated UI components expected throughout
- Icons via `lucide-react`
- Path alias `@/` → `src/` for imports (e.g. `@/components/Foo`)

## Decisions, constraints & rationale

- **Vite `base` path defaults to `/`** for local dev and preview; GitHub Actions workflow overrides via `VITE_BASE=/portfolio/` at deploy time
  - Rationale: preview environment serves assets from root; hardcoding `/portfolio/` caused blank screen due to unresolvable asset URLs
- GitHub Pages deployment is handled by a CI workflow that sets the correct base path automatically — no manual `base` config needed in `vite.config` for deployment
- Avoid installing extra UI/icon/theme packages beyond built-in template tooling unless explicitly requested

## Open questions & assumptions

- Assumption: repo name is `portfolio` (drives the `/portfolio/` GitHub Pages subpath)
- Assumption: Django references in title/summary are legacy context; actual runtime is Vite/React static export
- Unclear: full page/section structure (likely hero, projects, about, contact) — to be confirmed by subsequent edits