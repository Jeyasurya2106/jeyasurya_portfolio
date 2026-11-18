# Jeya Surya M — Futuristic MERN Stack Developer Portfolio

A production-ready developer portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **next-themes**.

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration
1. Push this repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Keep default Next.js build settings and click **Deploy**.

## Updating Resume Content & Links

All portfolio text, experience entries, skills, projects, and contact details live in a single typed file:

- `lib/profile.ts` — Edit profile info, project links (`[Add Link]`), social URLs (`[Add GitHub URL]`, `[Add LinkedIn URL]`, `[Add Twitter/X URL]`), or certifications (`[Add Certification Title Here]`).
- `public/resume.pdf` — Replace this placeholder PDF with your latest resume file so the **Download Resume** button serves your updated PDF.
