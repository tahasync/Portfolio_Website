# Portfolio — Muhammad Taha Naeem

A dark-themed animated React portfolio site showcasing data science projects, skills, and experience — with Netlify Forms contact and PDF resume download.

## What it does

Single-page portfolio with sections: Navbar, Hero (with morphing blob profile image and CTA buttons), About (bio + stats), Skills (categorized tags), Projects (cards with tech tags and GitHub/demo links), Experience (education timeline), Contact (Netlify Forms serverless form), and Footer. All content is driven by `src/data/content.js` — edit once, update everywhere. Deployed on Netlify at `tahasync-portfolio.netlify.app`.

## Tech stack

- React 18, Vite, Tailwind CSS 4, Framer Motion 12, Lucide React
- `sharp` listed in dependencies but never imported
- Deployment: Netlify (via `netlify.toml`)

## Features

- **Dark UI** — navy/magenta/cyan/gold palette with gradient mesh backgrounds
- **Scroll animations** — Framer Motion entry animations + floating blob profile image
- **Responsive** — mobile hamburger drawer, adaptive grid layouts
- **Netlify Forms** — serverless contact form with success/error feedback (no backend)
- **Resume download** — direct PDF download from hero section
- **SEO ready** — OG and Twitter card meta tags

## Setup

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # outputs to dist/
```

## Status

**Complete — live on Netlify.** Fully responsive, all sections populated with real content. Used as the author's professional portfolio (`tahasync-portfolio.netlify.app`).