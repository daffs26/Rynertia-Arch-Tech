# SPECIFICATION: Rynertia Arc Tech — Anti-Slop, High-Taste UI/UX & End-to-End Enterprise Security

- **Project**: Rynertia Arc Tech (`c:\Kuliah\ngods\Rynertia Tech`)
- **Version**: 3.1.0 (Comprehensive Security, AI Exclusion & Anti-Slop Hardening)
- **Status**: Ready for Execution
- **Governing Skills & Workflows**:
  - `security-and-hardening` (`.agents/skills/security-and-hardening/SKILL.md`)
  - `antislop` (`.agents/skills/antislop/SKILL.md`)
  - `taste-skill` (`.agents/skills/taste-skill/SKILL.md`)
  - `spec-driven-development` (`.agents/workflows/spec.md`)
  - `planning-and-task-breakdown` (`.agents/workflows/plan.md`)
  - `incremental-implementation` (`.agents/workflows/build.md`)

---

## 1. Security Architecture & Threat Modeling

### 1.1 Strict Exclusion of AI Tooling & Sensitive Data from GitHub
Per explicit instruction: *"untuk setiap kali buat project dan project ini, jika upload file ke github, file yang berhubungan dengan AI atau yang lain lain tidak ikut diupload juga tapi website tersebut masih bisa berjalan dengan normal"*:

- **Git Exclusions (Dual-Tier .gitignore)**:
  - **AI Tooling & Agent Artifacts**:
    - `.agents/`
    - `.gemini/`
    - `.qoder/`
    - `.cursor/`
    - `*.cursorrules`
    - Scratch AI generation scripts (`generate_high_res_assets.py`, `scripts/generate-*.js`)
    - Base64 dump files (`*.b64`, `femas_b64.txt`)
  - **Secrets & Sensitive Environment Variables**:
    - `.env*` (`.env`, `.env.local`, `.env.production`, `.env.*.local`)
    - Cryptographic keys & certificates (`*.pem`, `*.key`, `*.cert`, `*.pfx`, `id_rsa*`)
  - **Build Artifacts & Local Caches**:
    - `.next/`, `dist/`, `build/`, `out/`
    - `tsconfig.tsbuildinfo`, `*.tsbuildinfo`
    - `node_modules/`, `npm-debug.log*`
    - OS metadata (`.DS_Store`, `Thumbs.db`)
- **Independent Runtime Guarantee**:
  - The website codebase (`src/`, `public/`, `package.json`, Next.js config) is **100% self-contained**.
  - Zero imports or runtime dependencies from `.agents/`, `.gemini/`, or AI folders.
  - The site builds, deploys, and runs in production with identical performance whether AI folders exist or not.

### 1.2 Permanent Project Rule in `.agents/AGENTS.md`
- Enshrine the AI exclusion and secret protection rule permanently in `.agents/AGENTS.md` so all current and future projects automatically protect against accidental AI artifact or secret leakage to GitHub.

### 1.3 HTTP Security Headers & Browser Hardening (`next.config.ts`)
- `X-Frame-Options: DENY` (anti-clickjacking).
- `X-Content-Type-Options: nosniff` (anti-MIME sniffing).
- `Referrer-Policy: strict-origin-when-cross-origin`.
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`.
- `X-XSS-Protection: 1; mode=block`.

### 1.4 Client-Side Input Hardening & Sanitization (`Contact.tsx`)
- RFC-compliant email regex.
- Input length limits (name: 100, email: 120, message: 1000).
- 5-second submission throttle.
- Smooth inline confirmation card (no browser `alert()`).

---

## 2. SDLC Quality Gates & Testing Strategy

### 2.1 Automated Test Suite (`npm test`)
- `tests/security-scan.test.mjs`:
  - Verifies `.gitignore` ignores all AI folders (`.agents`, `.qoder`, `.gemini`) and `.env*` files.
  - Verifies no uncommitted secrets, private keys, or API tokens exist in the source code.
- `tests/data-integrity.test.mjs`:
  - Verifies 25 portfolio items, categories, and deep-dive metadata.
  - Verifies 100% dictionary key parity between English (`en`) and Indonesian (`id`).
- `tests/anti-slop.test.mjs`:
  - Verifies zero em dashes (`—`) and zero buzzwords across copy.

### 2.2 SEO, Sitemaps & Resilient Boundaries
- `src/app/sitemap.ts`: Dynamic XML sitemap indexing all 25 portfolio case studies.
- `src/app/robots.ts`: Crawl directives pointing directly to `/sitemap.xml`.
- `src/app/not-found.tsx`: Custom branded 404 page.
- `src/app/error.tsx`: Resilient client error boundary.

---

## 3. Anti-Slop Visual & Copywriting Specifications

- **Hard Gate R-02**: Zero em dashes (`—`) in UI copy across all pages.
- **Hard Gate R-17**: Eliminate all unverified buzzwords (*"Igniting the Next Tech Frontier"*, *"kelas dunia"*).
- **Hero Section**: Remove `Sparkles`, floating badges, and pulsing glow orbs; add enterprise capability ribbon.
- **About Section**: Refactor 6-color rainbow blocks into an intentional two-pillar architecture.
- **Workflow Section**: Architectural milestone pipeline (Input -> Methodology -> Enterprise Deliverable).
- **Dead Code Elimination**: Delete ~350 lines of unused dead code across `Portfolio.tsx` and `portfolio/page.tsx`.

---

## 4. Acceptance Criteria & Quality Gates

1. **AI Exclusion Gate**: `git status` confirms `.agents/`, `.qoder/`, `.env*`, and dump files are strictly ignored.
2. **Security Gate**: Security headers active, form hardened against spam/injections, zero secrets exposed.
3. **Automated Tests**: `npm test` passes 100% green.
4. **Type Safety & Build**: `npx tsc --noEmit` exits with 0 errors, `npm run build` succeeds cleanly.
