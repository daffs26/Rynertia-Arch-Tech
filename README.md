# Rynertia Arc Tech

> **Strategic Enterprise IT & Business Process Consulting**  
> Enterprise Architecture · BPMN 2.0 Process Modeling · High-Performance Software Engineering Labs

Official enterprise company profile and web application for **Rynertia Arc Tech**, built with modern web technologies, internationalized routing (`/id` and `/en`), anti-slop design principles, and enterprise-grade security.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Design Tokens
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Testing**: Node.js Native Test Runner (`node:test`)

---

## 🌐 Features

- **Multi-Language Architecture (i18n)**: Fully internationalized routing supporting Indonesian (`/id/...`) as primary default, and English (`/en/...`) via interactive flag dropdown switcher with URL preservation.
- **Dedicated Public Pages**:
  - `/id` / `/en` — Corporate Homepage (Hero, Value Proposition, Services, Solutions, Industries, Portfolio, News Sneak Peek)
  - `/id/tentang-kami` / `/en/about-us` — Corporate Profile, Color Philosophy, Competency Pillars
  - `/id/layanan` / `/en/services` — 4 Service Pillars (Problems Solved & Value Delivered)
  - `/id/solusi` / `/en/solutions` — Enterprise Solutions (*Problem → Approach → Solution → Value*)
  - `/id/industri` / `/en/industries` — 6 Enterprise Industry Sectors
  - `/id/portfolio` / `/en/portfolio` — 25 Deep-dive Case Studies
  - `/id/berita` / `/en/news` — News & Strategic Insights
  - `/id/organisasi` / `/en/organization` — Executive Suite, Leads, and 16 Personnel Directory
  - `/id/kontak` / `/en/contact` — Hardened Contact Form with RFC validation and rate limiting
- **Enterprise Security & Hardening**:
  - HTTP Security Headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-XSS-Protection`)
  - Zero AI Leak protocol & strict `.gitignore`
- **SEO Ready**: Dynamic `sitemap.xml` with `hreflang` alternates and `robots.txt`.

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.18+ or 20+ (Node.js 22/24 recommended)
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/daffs26/Rynertia-Arch-Tech.git

# Enter project directory
cd Rynertia-Arch-Tech

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Automated Testing

```bash
# Run all 24 QA and security verification suites
npm test
```

### Production Build

```bash
npm run build
npm start
```

---

## ☁️ Deployment to Vercel

This repository is pre-configured for zero-config Vercel deployment:

1. Import this repository in [Vercel Dashboard](https://vercel.com/new).
2. Framework Preset: **Next.js** (automatically detected).
3. Root Directory: `./` (leave default).
4. Click **Deploy**.

---

## 📄 License

Proprietary © 2026 Rynertia Arc Tech. All rights reserved.
