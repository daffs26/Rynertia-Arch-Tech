# RYNERTIA ARC TECH — DESIGN SYSTEM & UI/UX SPECIFICATION GUIDE

> **Dokumen Resmi Desain Sistem & Spesifikasi Antarmuka Pengguna (UI/UX)**  
> Dibuat untuk panduan perancangan di **Figma**, mencakup *Design Tokens*, *Typography*, *Component Library*, *Auto-Layout Guidelines*, hingga *Screen Wireframes*.

---

## 1. 🌈 Design Tokens: Color Palette & Variables

### A. Brand Colors (Cobalt & Arc Blues)
| Token Name | HEX Code | Kegunaan di Figma |
| :--- | :---: | :--- |
| `arc-cobalt` (Primary) | `#2563EB` | Tombol utama, link aktif, border fokus, gradient utama |
| `arc-blue-dark` | `#1D4ED8` | Start point gradient teks & tombol hover |
| `arc-blue-deep` | `#1E40AF` | Latar belakang gradient gelap / badge eksekutif |
| `arc-sky` | `#0EA5E9` | End point gradient teks, aksen telemetri |
| `arc-cyan` | `#06B6D4` | Aksen diagram aliran data, grafik live |
| `arc-blue-light` | `#DBEAFE` | Background badge, glow sphere lembut di hero |
| `arc-blue-50` | `#EFF6FF` | Background chip, card highlight, input focus |

### B. Surface & Neutral Colors (Slate Canvas System)
| Token Name | HEX Code | Kegunaan di Figma |
| :--- | :---: | :--- |
| `bg-canvas` | `#F8FAFC` | Latar belakang utama seluruh halaman (Light Mode) |
| `surface-white` | `#FFFFFF` | Latar kartu (*cards*), container input, navbar |
| `slate-100` | `#F1F5F9` | Background badge pasif, scrollbar track, container tab |
| `border-light` | `#E2E8F0` | Border standar kartu dan divider (1px solid) |
| `border-hover` | `#93C5FD` | Border kartu saat state `:hover` |
| `text-primary` | `#0F172A` | Heading teks utama (H1, H2, H3), judul kartu |
| `text-secondary` | `#475569` | Paragraf deskripsi, body copy |
| `text-muted` | `#94A3B8` | Label tanggal, breadcrumb non-aktif, overline |
| `surface-dark` | `#020617` | Latar dark-tech preview, terminal mockup, footer |
| `surface-dark-card` | `#0B0F19` | Kotak telemetri blueprint di dalam dark screen |

### C. Semantic & Functional Accents
| Kategori | HEX Code | Background Tint | Kegunaan |
| :--- | :---: | :---: | :--- |
| **Success / Uptime** | `#10B981` | `#ECFDF5` | Status *Live*, checklist fitur, uptime 99.9% |
| **Warning / Rating** | `#F59E0B` | `#FFFBEB` | Bintang testimoni (5.0), alert batas |
| **Danger / Challenge**| `#E11D48` | `#FFF1F2` | Angka kendala klien (*Challenges list*), error |
| **AI / Indigo** | `#8B5CF6` | `#F5F3FF` | Modul AI RAG, kartu digital marketing |

### D. Gradient Styles (Figma Paint Styles)
* **`Gradient/Text-Blue`**: `Linear 135°` $\rightarrow$ `#1D4ED8 (0%)` $\rightarrow$ `#2563EB (50%)` $\rightarrow$ `#0EA5E9 (100%)`
* **`Gradient/Hero-Radial`**: `Radial Center -20%` $\rightarrow$ `#DBEAFE (80%)` $\rightarrow$ `#F1F5F9 (60%)` $\rightarrow$ `#F8FAFC (100%)`
* **`Gradient/Dark-Tech`**: `Linear 180°` $\rightarrow$ `#020617 (0%)` $\rightarrow$ `#0F172A (100%)`

---

## 2. 🔤 Typography Hierarchy (Figma Text Styles)

* **Font Utama (UI & Headings)**: `Poppins`
* **Font Telemetri (Code, Metrics, Badges)**: `JetBrains Mono` / `Fira Code`

| Style Name | Font | Size / Line Height | Weight | Tracking | Kegunaan |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Display XL** | Poppins | `48px / 56px` | Extrabold (800) | `-0.02em` | Hero Header Desktop |
| **Heading 1** | Poppins | `36px / 44px` | Bold (700) | `-0.01em` | Section Titles |
| **Heading 2** | Poppins | `24px / 32px` | Bold (700) | `normal` | Judul Card / Modal Header |
| **Heading 3** | Poppins | `18px / 26px` | SemiBold (600) | `normal` | Sub-judul / Card Item |
| **Body Large** | Poppins | `16px / 26px` | Regular (400) | `normal` | Subtitle Hero, Intro |
| **Body Base** | Poppins | `14px / 22px` | Regular (400) | `normal` | Paragraf umum, Form Input |
| **Body Small** | Poppins | `12px / 18px` | Medium (500) | `normal` | Deskripsi Card, Caption |
| **Mono Metric**| JetBrains Mono | `32px – 48px` | Black (900) | `-0.03em` | Angka ROI (`+180%`, `-72%`) |
| **Overline Badge** | JetBrains Mono | `10px / 14px` | Bold (700) | `+0.05em` | Tag Kategori, Chip Divisi |

---

## 3. 📐 Spacing, Radii & Elevation (Effects)

### A. 8-Point Spacing System (Auto-Layout Gap/Padding)
* `4px` (Micro gap) $\rightarrow$ Jarak teks dengan ikon kecil
* `8px` (Tight) $\rightarrow$ Padding chip / tag
* `12px` (Standard) $\rightarrow$ Jarak antar baris form input
* `16px` (Default) $\rightarrow$ Padding tombol, gap antar item kecil
* `24px` (Comfortable) $\rightarrow$ Padding dalam kartu biasa
* `32px` (Spacious) $\rightarrow$ Padding dalam kartu besar / modal
* `48px – 64px` $\rightarrow$ Gap antar section di tablet/mobile
* `80px – 96px` $\rightarrow$ Padding vertical per section di desktop

### B. Corner Radius (Borders)
* `9999px (Full Rounded)`: Tombol Pill, Badge status, Language Switcher.
* `16px (Rounded-2xl)`: Tombol kotak, Kartu personil tim, Form Input.
* `24px (Rounded-3xl)`: Kartu Portofolio, Kartu Layanan, Kotak Dokumentasi Foto.
* `32px (Rounded-4xl)`: Frame Blueprint Telemetri, Modal Lightbox Foto.

### C. Elevation & Shadows (Figma Effects)
```yaml
Elevation/Card-Default:
  - Drop Shadow: X: 0, Y: 4, Blur: 20, Spread: -2, Color: #0F172A (Opacity: 5%)
  - Stroke: 1px Inside, Color: #E2E8F0

Elevation/Card-Hover:
  - Drop Shadow 1: X: 0, Y: 20, Blur: 25, Spread: -5, Color: #2563EB (Opacity: 12%)
  - Drop Shadow 2: X: 0, Y: 8, Blur: 10, Spread: -6, Color: #2563EB (Opacity: 6%)
  - Stroke: 1px Inside, Color: #93C5FD
  - Transform: Y: -4px

Elevation/Button-CTA:
  - Drop Shadow: X: 0, Y: 12, Blur: 24, Spread: -4, Color: #2563EB (Opacity: 30%)
```

---

## 4. 🧩 Master Components & Auto-Layout Specs

### 1. Navigation Bar (Desktop & Mobile Drawer)
* **Frame Settings**: Width `100%` (Max `1280px`), Height `80px`, Auto-Layout Horizontal, Space Between, Align Center.
* **Fill**: `#FFFFFF` (90% Opacity) + Background Blur `20px` (*Backdrop Blur*).
* **Border Bottom**: `1px solid #E2E8F0`.
* **Elements**:
  * *Left*: Logo Icon (40x40px) + Teks "RYNERTIA" (Bold 18px) + "ARC TECH" (Gradient Blue 10px).
  * *Center*: Menu Links (`Beranda`, `Portofolio`, `Layanan`, `Alur Kerja`, `Tim`, `Tentang`) dengan gap `28px`.
  * *Right*: Language Switcher Pill (Width 96px, Height 34px) + Tombol CTA *"Konsultasi"* (Padding `14px 24px`, Radius `14px`).

### 2. Language Switcher (Sliding Pill Component)
* **Frame**: Width `96px`, Height `34px`, Background `#F1F5F9`, Radius `9999px`, Inner Stroke `1px #E2E8F0`.
* **Variants**: `State = ID` (Pill putih/biru di kiri) & `State = EN` (Pill putih/biru di kanan).

---

### 3. Open Circular Workflow Stepper (Alur Kerja)
* **Layout**: 4 Node Horizontal (Desktop) / Vertical (Mobile) tanpa border kotak kaku.
* **Komponen Tiap Node**:
  * Circle Container (Width `64px`, Height `64px`, Radius `9999px`, Background `#EFF6FF`, Border `2px solid #2563EB`).
  * Glow Effect: Layer Blur `16px` dengan warna `#2563EB` (Opacity 25%).
  * Angka Urutan (`01`, `02`, `03`, `04`) di atas lingkaran dalam format font Mono Bold.
  * SVG Curved Dashed Track di sela-sela node dengan ikon panah mengalir (*ArrowRight*).
  * Judul Tahapan (`Fondasi Riset`, `Tata Kelola BPMN`, `Eksekusi IT`, `Peluncuran`) + Deskripsi pendek.

---

### 4. Kartu Portofolio (Portfolio Card)
* **Frame**: Width `380px` (Flexible grid 3 kolom), Radius `24px`, Background `#FFFFFF`, Border `1px #E2E8F0`.
* **Top Header Mockup (Height `220px`)**:
  * Background Dark `#020617` dengan simulasi terminal / dashboard telemetri.
  * Tag Kategori di pojok kanan atas: Capsule `#0F172A/90` border `#334155` teks putih `10px`.
* **Body (Padding `24px`, Gap `16px`)**:
  * Label Client & Timeline: Font Mono `11px` warna `#2563EB`.
  * Judul Proyek: Bold `18px` warna `#0F172A`.
  * Deskripsi: Body Small `12px` warna `#475569`.
  * Primary Metric Box: Background `#EFF6FF`, Border `#DBEAFE`, Nilai Besar (misal `+180%` atau `-72%`).
  * Chip Tech Stack: 3 badge mini font Mono.
  * Tombol Aksi: *"Pelajari Studi Kasus Lengkap ➔"*.

---

### 5. Kartu Personil Tim (Arched Portrait Roster)
* **Frame**: Width `260px` (5 Kolom Grid), Radius `24px`, Background `#FFFFFF`, Border `1px #E2E8F0`.
* **Top Portrait Frame**:
  * Arch Shape (Radius atas `9999px`, bawah `16px`, Height `220px`).
  * Avatar Ring Gradient: Stroke `2px` Gradient dari `#EC4899` ke `#2563EB`.
* **Info Box (Padding `16px`, Align Center)**:
  * Nama Lengkap (Bold `13px`).
  * Jabatan / Role (Regular `11px` `#64748B`).
  * Badge Divisi (Capsule `#F1F5F9`, `10px`).

---

### 6. Sesi Galeri Foto Dokumentasi Proyek (Project Deliverables)
* **Card Frame**: Width `360px` (3 Kolom Grid), Radius `20px`, Overflow Hidden, Background `#FFFFFF`.
* **Image Container (Aspect Ratio 16:9, Height `190px`)**:
  * Foto dokumentasi lapangan / workshop dengan efek *scale 1.05* saat hover.
  * Floating Badge Kategori di pojok kiri atas (misal: `RISET & DISCOVERY`).
  * Tombol Zoom Icon di pojok kanan atas.
* **Caption Box (Padding `16px`, Gap `8px`)**:
  * Judul Foto (Bold `13px`).
  * Deskripsi Aktivitas (Body `12px` `#64748B`).
  * Trigger: *"Klik untuk Perbesar"* (Biru `#2563EB`, SemiBold `11px`).

---

## 5. 🗺️ Struktur Wireframe & Hierarchy Halaman

```
┌─────────────────────────────────────────────────────────────┐
│ 1. NAVBAR (Sticky 80px) [Logo] [Menu Links] [Lang] [CTA]    │
├─────────────────────────────────────────────────────────────┤
│ 2. HERO SECTION                                             │
│    • Badge: "Genesis Arc: Igniting the Next Tech Frontier"  │
│    • H1: Menyatukan Presisi Riset & Rekayasa IT Enterprise  │
│    • CTA Button Group: [Ajukan Konsultasi] [Lihat Portofolio]│
│    • 4 Floating KPI Stats: [100% Proyek] [99.9% Uptime]...  │
├─────────────────────────────────────────────────────────────┤
│ 3. SERVICES (4 Pilar Layanan)                               │
│    • [Riset & Analisis] [Rekayasa Software]                 │
│    • [UI/UX & Branding] [Digital Marketing]                │
├─────────────────────────────────────────────────────────────┤
│ 4. FEATURED PORTFOLIO (3 Highlight Cards)                   │
│    • [BPMN Process Engine] [FinTech App] [Omnichannel Scale]│
│    • Primary Button: "Jelajahi Seluruh Galeri Portofolio ➔" │
├─────────────────────────────────────────────────────────────┤
│ 5. WORKFLOW STEPPER (Open Circular Nodes with Dashed Track) │
│    • (01 Fondasi) ──➔ (02 BPMN) ──➔ (03 IT) ──➔ (04 Launch)  │
├─────────────────────────────────────────────────────────────┤
│ 6. TEAM ROSTER (16 Personil dengan Filter Kategori)         │
│    • [Semua] [Eksekutif] [R&A] [IT] [Marketing] [UI/UX]    │
│    • Grid Arched Portrait Cards (Link ke /team/[id])        │
├─────────────────────────────────────────────────────────────┤
│ 7. PHILOSOPHY & ABOUT (6 Spectrum Cards)                    │
├─────────────────────────────────────────────────────────────┤
│ 8. CONTACT & CONSULTATION FORM (2-Col Split Form + Info)    │
├─────────────────────────────────────────────────────────────┤
│ 9. FOOTER (Top Info Strip + 4 Columns Links + Copyright)    │
└─────────────────────────────────────────────────────────────┘
```

---

## 6. 📱 Responsive Layout Grid System di Figma

### Desktop Frame (`1440px`):
* **Grid**: 12 Columns
* **Max Content Width**: `1280px`
* **Margin (Left/Right)**: `80px`
* **Gutter**: `32px`

### Tablet Frame (`834px` / `768px`):
* **Grid**: 8 Columns
* **Margin (Left/Right)**: `32px`
* **Gutter**: `24px`

### Mobile Frame (`390px` / `375px`):
* **Grid**: 4 Columns
* **Margin (Left/Right)**: `20px`
* **Gutter**: `16px`

---

## 7. 💡 Rekomendasi Pembuatan di Figma (Tips Pro)

1. **Gunakan Figma Variables**:
   * Buat *Color Collection* (`Primary/Cobalt`, `Neutral/Canvas`, `Surface/Dark`, dll.).
   * Buat *Number Collection* untuk Spacing (`4, 8, 12, 16, 24, 32, 48`) dan Radius (`16, 24, 32, 9999`).
2. **Setup Component Set dengan Auto-Layout**:
   * Gunakan `Horizontal Auto-Layout` + `Space Between` untuk Navbar.
   * Gunakan `Vertical Auto-Layout` + `Fill Container` untuk konten card agar responsif.
3. **Efek Glassmorphism di Figma**:
   * *Background Blur*: `20px`
   * *Fill*: `#FFFFFF` dengan opacity `85% - 90%`
   * *Stroke*: `1px Inside` warna `#E2E8F0`
