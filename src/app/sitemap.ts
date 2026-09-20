import { MetadataRoute } from 'next';
import { portfolioItems } from '@/data/portfolioData';
import { teamMembers } from '@/data/teamData';
import { newsArticles } from '@/data/newsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rynertia.tech';
  const currentDate = new Date();

  // Core Static Pages mapped per PRD 14.1
  const coreSections = [
    { id: '', en: '', priority: 1.0 },
    { id: 'tentang-kami', en: 'about-us', priority: 0.85 },
    { id: 'layanan', en: 'services', priority: 0.9 },
    { id: 'solusi', en: 'solutions', priority: 0.9 },
    { id: 'industri', en: 'industries', priority: 0.85 },
    { id: 'berita', en: 'news', priority: 0.85 },
    { id: 'organisasi', en: 'organization', priority: 0.8 },
    { id: 'kontak', en: 'contact', priority: 0.8 },
    { id: 'portfolio', en: 'portfolio', priority: 0.9 },
  ];

  const staticRoutes: MetadataRoute.Sitemap = [];

  for (const section of coreSections) {
    const idPath = section.id ? `/id/${section.id}` : '/id';
    const enPath = section.en ? `/en/${section.en}` : '/en';

    // Indonesian entry
    staticRoutes.push({
      url: `${baseUrl}${idPath}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: section.priority,
      alternates: {
        languages: {
          id: `${baseUrl}${idPath}`,
          en: `${baseUrl}${enPath}`,
        },
      },
    });

    // English entry
    staticRoutes.push({
      url: `${baseUrl}${enPath}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: section.priority,
      alternates: {
        languages: {
          id: `${baseUrl}${idPath}`,
          en: `${baseUrl}${enPath}`,
        },
      },
    });
  }

  // Dynamic Portfolio Case Studies
  const portfolioRoutes: MetadataRoute.Sitemap = [];
  for (const item of portfolioItems) {
    const idUrl = `${baseUrl}/id/portfolio/${item.id}`;
    const enUrl = `${baseUrl}/en/portfolio/${item.id}`;
    portfolioRoutes.push({
      url: idUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: { id: idUrl, en: enUrl },
      },
    });
    portfolioRoutes.push({
      url: enUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: { id: idUrl, en: enUrl },
      },
    });
  }

  // Dynamic Team Profiles
  const teamRoutes: MetadataRoute.Sitemap = [];
  for (const member of teamMembers) {
    const idUrl = `${baseUrl}/id/team/${member.id}`;
    const enUrl = `${baseUrl}/en/team/${member.id}`;
    teamRoutes.push({
      url: idUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: { id: idUrl, en: enUrl },
      },
    });
    teamRoutes.push({
      url: enUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: { id: idUrl, en: enUrl },
      },
    });
  }

  // Dynamic News & Insights Articles
  const newsRoutes: MetadataRoute.Sitemap = [];
  for (const article of newsArticles) {
    const idUrl = `${baseUrl}/id/berita/${article.slug}`;
    const enUrl = `${baseUrl}/en/news/${article.slug}`;
    newsRoutes.push({
      url: idUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
      alternates: {
        languages: { id: idUrl, en: enUrl },
      },
    });
    newsRoutes.push({
      url: enUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
      alternates: {
        languages: { id: idUrl, en: enUrl },
      },
    });
  }

  return [...staticRoutes, ...portfolioRoutes, ...teamRoutes, ...newsRoutes];
}
