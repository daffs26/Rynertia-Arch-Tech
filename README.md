# Rynertia Arc Tech

The official corporate web portal and digital platform for **Rynertia Arc Tech**, specializing in Enterprise IT Consulting, Enterprise Architecture, BPMN 2.0 Process Modeling, and Software Engineering Labs.

Built with Next.js 15, React 19, TypeScript, and Tailwind CSS, featuring full bilingual support (Indonesian & English) and enterprise security configurations.

---

## Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **Core** | [React 19](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Animation** | [Framer Motion](https://motion.dev/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Testing** | Node.js Test Runner (`node:test`) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## Architecture & Features

- **Localized Subpath Routing (i18n)**: Native bilingual routing (`/id` and `/en`) with locale switching and route preservation.
- **Enterprise Design System**: Tailored typography, WCAG-compliant contrast ratios, and theme switching support.
- **Dynamic Content Modules**: Structured directories for industry solutions, services, case studies, news articles, and leadership profiles.
- **Security & Reliability**: Strict HTTP headers (`X-Frame-Options`, `X-Content-Type-Options`, `Permissions-Policy`), input validation, and request rate limiting.
- **SEO & Search Discovery**: Dynamic `sitemap.xml` with `hreflang` alternating tags, semantic HTML5 structure, and OpenGraph metadata.

---

## Getting Started

### Prerequisites

- **Node.js**: v18.18+ (Node.js 20+ LTS recommended)
- **Package Manager**: npm, pnpm, or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/daffs26/Rynertia-Arch-Tech.git
   cd Rynertia-Arch-Tech
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server |
| `npm run build` | Compiles the production build |
| `npm run start` | Runs the compiled production build locally |
| `npm run lint` | Runs ESLint to verify code quality and style standards |
| `npm test` | Executes the automated test suite (security, data integrity, and QA gates) |

---

## Project Structure

```text
├── public/                 # Static assets, media, and branding files
├── src/
│   ├── app/                # Next.js App Router (pages, layouts, and API handlers)
│   ├── components/         # Reusable UI components and section layouts
│   ├── context/            # React context providers (e.g., ThemeContext)
│   ├── data/               # Structured data models and translations (ID/EN)
│   ├── lib/                # Shared utilities and helper functions
│   └── middleware.ts       # Next.js edge middleware for routing and security
├── tests/                  # Verification test suites (QA, security, data integrity)
├── next.config.ts          # Next.js configuration and HTTP security headers
└── tailwind.config.ts      # Custom Tailwind styling tokens
```

---

## Deployment

This repository is optimized for deployment on [Vercel](https://vercel.com):

1. Link the repository to your Vercel project.
2. The framework preset is automatically detected as **Next.js**.
3. Deploy directly via Git push to the `main` branch.

---

## License

Proprietary © 2026 Rynertia Arc Tech. All rights reserved.
