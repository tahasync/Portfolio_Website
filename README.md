<div align="center">

# 🎨 Portfolio — Muhammad Taha Naeem

**Generative / Data Aesthetic Portfolio — React + Vite + Tailwind CSS v4 + Framer Motion**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EA4C89?logo=framer&logoColor=white)](https://www.framer.com/motion)
[![Lucide](https://img.shields.io/badge/Lucide-React-F56565?logo=lucide&logoColor=white)](https://lucide.dev)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white)](https://netlify.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

</div>

---

## 📋 Overview

A dark-themed, animated portfolio website showcasing my data science projects, skills, and experience. Built with a modern React stack, featuring smooth Framer Motion scroll animations, a morphing blob profile image, gradient mesh backgrounds, and a fully functional contact form powered by Netlify Forms.

---

## ✨ Features

- **🌙 Dark UI** — Navy/magenta/cyan/gold color palette with gradient mesh backgrounds
- **🎬 Scroll Animations** — Framer Motion entry animations + floating blob profile image
- **📱 Responsive** — Mobile hamburger drawer nav, adaptive grid layouts
- **📝 Netlify Forms** — Serverless contact form with success/error feedback
- **📄 Resume Download** — Direct PDF download from the hero section
- **⚡ Content-Driven** — All data in `src/data/content.js` — edit once, update everywhere
- **🎯 SEO Ready** — OG and Twitter cards meta tags

---

## 🗂️ Project Structure

```
Portfolio_Website/
├── 📂 public/
│   ├── favicon.svg              # Site favicon
│   ├── resume.pdf               # Downloadable resume
│   └── _redirects               # Netlify redirect rules
│
├── 📂 src/
│   ├── 📂 assets/
│   │   └── profile.webp         # Profile photo
│   │
│   ├── 📂 components/
│   │   ├── Navbar.jsx           # Sticky nav + mobile drawer
│   │   ├── Hero.jsx             # Hero section with CTA buttons
│   │   ├── About.jsx            # Bio + stats + morphing blob image
│   │   ├── Skills.jsx           # Categorized skill tags grid
│   │   ├── Projects.jsx         # Project cards with tech tags
│   │   ├── Experience.jsx       # Timeline education entry
│   │   ├── Contact.jsx          # Contact form + social links
│   │   ├── Footer.jsx           # Footer with back-to-top
│   │   └── icons.jsx            # Custom SVG icon components
│   │
│   ├── 📂 data/
│   │   └── content.js           # All site content (single source of truth)
│   │
│   ├── 📂 hooks/
│   │   └── useInView.js         # IntersectionObserver scroll hook
│   │
│   ├── App.jsx                  # Root layout
│   ├── main.jsx                 # Entry point
│   └── index.css                # Tailwind + custom theme tokens
│
├── index.html                   # HTML entry + hidden Netlify form
├── netlify.toml                 # Netlify deploy config
├── vite.config.js               # Vite + React + Tailwind plugins
├── package.json
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

| Requirement | Version | Download |
|:------------|:-------:|:---------|
| Node.js | 18+ | [nodejs.org](https://nodejs.org) |
| npm | 9+ | ships with Node.js |

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/tahasync/Portfolio_Website.git
cd Portfolio_Website

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build
```

Output goes to `dist/`.

---

## 🌐 Deploy to Netlify (Free)

### Option 1 — Auto-deploy from GitHub (recommended)

1. Push this repo to GitHub.
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**.
3. Connect your GitHub repo.
4. Netlify auto-detects the settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**.
6. Every push to the main branch triggers a new deploy.

### Option 2 — Manual drag-and-drop

```bash
npm run build
```

Drag the `dist/` folder onto [app.netlify.com](https://app.netlify.com) in the **Sites** tab.

---

## 📝 Editing Content

All site content lives in **`src/data/content.js`**:

| Section | What to Edit |
|:--------|:-------------|
| **Personal Info** | Name, email, links, resume URL, tagline |
| **Bio** | About section paragraphs |
| **Skills** | Categories and skill items |
| **Projects** | Title, description, tech stack, GitHub/demo links |
| **Experience** | Education entries with details |

### Resume PDF

Update the `resumeUrl` in `src/data/content.js` with your Google Drive direct download link:

```
https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
```

Or place `resume.pdf` directly in the `public/` folder.

---

## 📬 Contact Form (Netlify Forms)

The contact form uses Netlify Forms (free tier — no backend needed):

1. After deploying, go to **Netlify Dashboard → Your Site → Forms**.
2. Submissions appear here automatically.
3. To verify: submit the form on your live site, then check the Forms tab.
4. Set up email notifications in the Forms settings.

---

## 🛠️ Tech Stack

| Layer | Technology |
|:------|:-----------|
| **Framework** | React 19 |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Framer Motion 12 |
| **Icons** | Lucide React + Custom SVG |
| **Image Processing** | Sharp |
| **Linting** | Oxlint |
| **Deployment** | Netlify |

---

## 🧪 Lint

```bash
npm run lint
```

---

## 👤 Author

<div align="center">

**Muhammad Taha Naeem** — Data Science | Python | ML | Blockchain

[![GitHub](https://img.shields.io/badge/GitHub-tahasync-181717?logo=github)](https://github.com/tahasync)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?logo=linkedin)](https://linkedin.com/in/heyitxtaha)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live-FF6B6B?logo=netlify&logoColor=white)](https://tahasync-portfolio.netlify.app)

**If you find this project useful, consider giving it a ⭐!**

</div>
