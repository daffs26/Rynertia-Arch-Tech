# 📋 Reminder: Checklist Migrasi ke Proyek Riil (Real Project)

Catatan pengingat (*reminder*) untuk transisi dari data dummy & mockup sintetis ke proyek riil klien di **Rynertia Arc Tech**.

---

## 1. Berkas & Skrip yang Perlu Dihapus Total (*Clean-up*)

| File Target | Path | Keterangan |
| :--- | :--- | :--- |
| **Generator Mockup 6 Card** | `scripts/generate-mockups.js` | Hapus total |
| **Generator Mockup 25 Card** | `scripts/generate-all-25-mockups.js` | Hapus total |
| **Aset Gambar Mockup Dummy** | `public/portfolio/mockup-*.jpg` *(25 file)* | Hapus 25 file `.jpg` dummy (~1.5 MB) agar repo & Vercel bersih |

---

## 2. Kode Sisa (*Dead Code*) yang Perlu Dihapus dari Komponen

1. **Fungsi `renderCardVisual` di `src/app/portfolio/page.tsx`**:
   - Berada di baris 50 – 207 (switch case untuk vector card lama).
   - Sudah tidak dipakai sama sekali karena card sekarang menggunakan tag `<img src={item.image} />`.
2. **Icon Unused di `src/app/portfolio/page.tsx`**:
   - Hapus import icon `Cpu`, `Bot`, `Truck` dari `lucide-react` jika tidak digunakan lagi.

---

## 3. Komponen & Berkas yang Perlu Disesuaikan / Diperbarui

### A. `src/data/portfolioData.ts`
- **Ganti Data**: Perbarui array `portfolioItems: PortfolioItem[]` dengan data proyek riil.
- ⚠️ **PENTING**: **JANGAN HAPUS** interface TypeScript (`PortfolioItem`, `TechStackItem`, `MetricItem`, `ProjectDocumentationItem`) karena menjadi blueprint skema data.

### B. `src/components/ClientMarquee.tsx`
- **Fungsi `getClientLogo(id)`**: Ganti/hapus case dummy (`aerologix`, `navapay`, `vanguard`, dsb.) dengan logo brand/klien riil (atau render file SVG/PNG dari `public/clients/`).
- **Array `clients`**: Sesuaikan daftar nama dan kategori klien riil pada running banner mitra.

### C. `src/app/portfolio/[id]/page.tsx` (Halaman Detail Studi Kasus)
- **Fungsi `renderBlueprintVisual(id)`**:
  - Hapus switch-case ID dummy (`process-engine`, `fintech-app`, `omnichannel-scale`).
  - Gunakan visual arsitektur dinamis (mengambil dari `project.architecture` atau screenshot diagram arsitektur asli di array `project.documentation`).

### D. `src/components/Portfolio.tsx` (Homepage Section)
- Menggunakan `portfolioItems.slice(0, 3)`.
- Pastikan 3 proyek unggulan (*flagship*) diletakkan pada 3 indeks pertama array.

---

## 4. Format Aset & Best Practices Proyek Riil

1. **Aset Foto / Mockup**:
   - Simpan screenshot atau mockup tampilan asli di `public/portfolio/[nama-slug].webp` (format WebP sangat disarankan untuk kompresi maksimal dan ketajaman tinggi).
2. **Koneksi Tim Internal (`teamMemberIds`)**:
   - Sambungkan ID anggota tim ke ID yang terdaftar di `src/data/teamData.ts` (misal: `daffa-haidar`, `andiryaas`). Kartu profil anggota tim otomatis tampil di halaman detail studi kasus.
3. **Dokumentasi Lapangan (`documentation`)**:
   - Isi dengan screenshot proses: Wireframe Figma, rancangan arsitektur ERD / BPMN, foto serah terima/UAT.
4. **Metrik & Testimoni**:
   - Cantumkan metrik nyata (misal: *+140% Efisiensi*, *< 12ms Latensi*).
   - Cantumkan testimoni asli dari klien (nama, jabatan, perusahaan).
