import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Industries } from '@/components/Industries';
import { Workflow } from '@/components/Workflow';
import { Portfolio } from '@/components/Portfolio';
import { NewsSneakPeek } from '@/components/NewsSneakPeek';
import { Team } from '@/components/Team';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollProgressBar, BackToTopButton } from '@/components/MotionWrapper';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col relative transition-colors duration-200">
      <ScrollProgressBar />
      <Navbar />
      {/* 1. Beranda */}
      <Hero />
      {/* 2. Tentang Kami (Teaser Ringkas) */}
      <About isPreview={true} />
      {/* 3. Layanan */}
      <Services />
      {/* 4. Industri yang Dilayani */}
      <Industries />
      {/* 5. Solusi */}
      <Workflow />
      {/* 6. Portofolio */}
      <Portfolio />
      {/* 7. Berita & Wawasan */}
      <NewsSneakPeek />
      {/* 8. Organisasi Struktural */}
      <Team />
      {/* 9. Kontak */}
      <Contact />
      <Footer />
      <BackToTopButton />
    </main>
  );
}
