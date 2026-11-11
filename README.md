# Raden Mas Galih Pradityo — Personal Portfolio Website

A modern, high-performance personal portfolio website built with **Next.js 15 (App Router)**, **Tailwind CSS**, and **Framer Motion**, tailored to showcase expertise in **Backend Engineering**, **API Architecture**, and **Database Modeling**.

Live Preview: [http://localhost:3001](http://localhost:3001)

---

## 🚀 Key Features

- **Decoupled Data Architecture**: All profile information, skills, projects, and organizational experiences reside in `data/portfolio.ts` for clean separation of concerns and instant maintainability.
- **Glassmorphic HUD & Cyber Anime Aesthetic**: Inspired by the Solo Leveling / Jujutsu Kaisen visual references, featuring obsidian dark backgrounds, violet & cyan glow accents, and S-Rank specialist badges.
- **Responsive Single-Page Layout**:
  - **Sticky Navbar**: Glassmorphic blur (`backdrop-blur-xl`), anchor navigation with scroll offset, instant CV download trigger, and dark/light theme toggle.
  - **Hero Section**: Dynamic HUD layout, direct download CTA for `CV_Raden Mas Galih Pradityo.pdf`, and link to project showcase.
  - **About Me**: Academic foundation at IPB University (GPA 3.80/4.00), core engineering principles, and career internship goals.
  - **Skills Bento Grid**: Categorized into *Backend & APIs*, *Databases*, and *Tools & CV*.
  - **Featured Projects**: Interactive cards with hover-lift motion, architectural system diagrams rendered with Next.js `<Image/>`, and tech stack chips for **MediGo**, **Agrivision**, **Ba-Yu**, and **QLC**.
  - **Experience & Honors**: Responsive vertical timeline with diamond node markers and academic achievement cards.
  - **Contact Section**: Quick message form with pre-filled mailto trigger, social handles, and location metadata.
- **SEO & Performance Optimized**:
  - Fully static pre-rendering via Next.js App Router.
  - Native `<Image/>` optimization with SVG vector diagrams.
  - Automated `sitemap.xml` and `robots.txt` generation.
  - Dark/Light mode powered by `next-themes` with zero layout shift.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Language**: TypeScript (Strict Mode)

---

## 📁 Project Structure

```text
├── app/
│   ├── globals.css          # Tailwind base & custom scrollbar styles
│   ├── icon.svg             # Terminal HUD browser favicon
│   ├── layout.tsx           # Root layout with ThemeProvider, Navbar, & Footer
│   ├── page.tsx             # Single-page portfolio structure
│   ├── robots.ts            # Search engine crawler directives
│   └── sitemap.ts           # Dynamic sitemap index
├── components/
│   ├── AboutSection.tsx     # Academic foundation & career goals
│   ├── ContactSection.tsx   # Direct message transmission & contact links
│   ├── ExperienceSection.tsx# Vertical timeline & honors cards
│   ├── Footer.tsx           # Minimalist footer with copyright & links
│   ├── HeroSection.tsx      # S-Rank framed HUD & dual CTAs
│   ├── Navbar.tsx           # Sticky glassmorphism nav & dark mode toggle
│   ├── ProjectCard.tsx      # Interactive card with hover-lift & tech chips
│   ├── ProjectsSection.tsx  # Grid wrapper for featured projects
│   ├── SkillBadge.tsx       # Modern bento skill badge component
│   ├── SkillsSection.tsx    # Technical competencies bento grid
│   ├── ThemeProvider.tsx    # Next-themes wrapper
│   └── Timeline.tsx         # Responsive vertical spine timeline
├── data/
│   └── portfolio.ts         # Single source of truth for all content
├── public/
│   ├── CV_Raden Mas Galih Pradityo.pdf  # Downloadable resume
│   └── images/
│       ├── hero-architect.svg           # Central system architecture graphic
│       └── projects/                    # Project architecture diagrams
│           ├── agrivision.svg
│           ├── bayu.svg
│           ├── medigo.svg
│           └── qlc.svg
├── tailwind.config.ts       # Design tokens, color palette, & glow shadows
└── tsconfig.json            # TypeScript configuration
```

---

## 💻 Getting Started

### 1. Prerequisites
Ensure you have **Node.js 18+** installed:
```bash
node -v
npm -v
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or `http://localhost:3001` if port 3000 is occupied).

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🚢 Deploying to Vercel

1. Push your repository to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Next.js presets will be detected automatically. Click **"Deploy"**.

---

## 📄 License
MIT © Raden Mas Galih Pradityo
