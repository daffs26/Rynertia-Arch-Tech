import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RYNERTIA ARC TECH | Strategic Enterprise IT & Business Process Consulting',
  description:
    'Strategic Enterprise IT consulting, BPMN 2.0 business process modeling, and high-performance software engineering labs.',
  keywords: [
    'Enterprise IT Consultant',
    'Software Engineering',
    'BPMN 2.0 Process Modeling',
    'Research and Analysis',
    'UI/UX Design Systems',
    'Enterprise ERP',
    'Rynertia Arc Tech',
  ],
  authors: [{ name: 'RYNERTIA ARC TECH' }],
  creator: 'RYNERTIA ARC TECH',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'RYNERTIA ARC TECH | Strategic Enterprise IT & Process Consulting',
    description:
      'Strategic enterprise IT consulting, BPMN 2.0 process modeling, and high-performance software engineering.',
    url: 'https://rynertia.tech',
    siteName: 'RYNERTIA ARC TECH',
    locale: 'id_ID',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'RYNERTIA ARC TECH',
  description:
    'Enterprise IT consulting, BPMN 2.0 business process modeling, and high-performance software engineering labs.',
  url: 'https://rynertia.tech',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jakarta',
    addressCountry: 'ID',
  },
  serviceType: [
    'Research and Business Process Modeling (BPMN)',
    'Enterprise Software Engineering',
    'UI/UX Design and Design Systems',
    'Data-Driven Digital Marketing',
    'Enterprise ERP Implementation',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} font-poppins antialiased bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
