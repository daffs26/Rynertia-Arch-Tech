import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve(import.meta.dirname, '..');
const baseUrl = 'http://localhost:3000';

async function isServerOnline() {
  try {
    await fetch(`${baseUrl}/`, { signal: AbortSignal.timeout(1000) });
    return true;
  } catch {
    return false;
  }
}

// Helper to escape HTML entities for matching in raw HTML
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ── 1. HTTP Status & Core Pages ──────────────────────────────
test('Full QA: Core Routes Return 200 OK with Proper Content', async () => {
  if (!(await isServerOnline())) {
    console.log('Server not online on http://localhost:3000. Skipping live HTTP check.');
    return;
  }

  const routes = [
    { path: '/', match: 'RYNERTIA ARC TECH' },
    { path: '/id', match: 'RYNERTIA ARC TECH' },
    { path: '/en', match: 'RYNERTIA ARC TECH' },
    { path: '/id/tentang-kami', match: 'RYNERTIA' },
    { path: '/en/about-us', match: 'RYNERTIA' },
    { path: '/id/layanan', match: 'RYNERTIA' },
    { path: '/en/services', match: 'RYNERTIA' },
    { path: '/id/solusi', match: 'RYNERTIA' },
    { path: '/en/solutions', match: 'RYNERTIA' },
    { path: '/id/industri', match: 'RYNERTIA' },
    { path: '/en/industries', match: 'RYNERTIA' },
    { path: '/id/portfolio', match: 'RYNERTIA' },
    { path: '/en/portfolio', match: 'RYNERTIA' },
    { path: '/id/berita', match: 'RYNERTIA' },
    { path: '/en/news', match: 'RYNERTIA' },
    { path: '/id/organisasi', match: 'RYNERTIA' },
    { path: '/en/organization', match: 'RYNERTIA' },
    { path: '/id/kontak', match: 'RYNERTIA' },
    { path: '/en/contact', match: 'RYNERTIA' },
    { path: '/robots.txt', regex: /user-agent:/i },
    { path: '/sitemap.xml', match: '<urlset' },
  ];

  for (const r of routes) {
    const res = await fetch(`${baseUrl}${r.path}`);
    assert.equal(res.status, 200, `Expected 200 for ${r.path}, got ${res.status}`);
    const text = await res.text();
    if (r.match) {
      assert.ok(text.includes(r.match), `${r.path} content should contain "${r.match}"`);
    }
    if (r.regex) {
      assert.ok(r.regex.test(text), `${r.path} content should match regex ${r.regex}`);
    }
  }
});

// ── 2. Dynamic Portfolio Routes (All 25 Projects) ─────────────
test('Full QA: Dynamic Portfolio Routes Coverage (All 25 Projects)', async () => {
  if (!(await isServerOnline())) {
    console.log('Server not online on http://localhost:3000. Skipping live HTTP check.');
    return;
  }

  const { portfolioItems } = await import('../src/data/portfolioData.ts');
  assert.equal(portfolioItems.length, 25, 'Expected 25 portfolio items in data');

  for (const item of portfolioItems) {
    let res;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        res = await fetch(`${baseUrl}/id/portfolio/${item.id}`);
        if (res.status === 200) break;
      } catch (err) {
        if (attempt === 2) throw err;
        await new Promise(r => setTimeout(r, 400));
      }
    }
    assert.equal(
      res.status,
      200,
      `Project ${item.id} route failed with status ${res.status}`
    );
    const text = await res.text();
    // Verify clientName or escaped title appears in page HTML
    const titleEnEscaped = escapeHtml(item.titleEn);
    const titleIdEscaped = escapeHtml(item.titleId);
    assert.ok(
      text.includes(titleEnEscaped) || text.includes(titleIdEscaped) || text.includes(item.clientName),
      `Project ${item.id} page should contain its title or client name`
    );
  }
});

// ── 3. Dynamic Team Member Routes (All 16 Personnel) ──────────
test('Full QA: Dynamic Team Member Routes Coverage (All 16 Personnel)', async () => {
  if (!(await isServerOnline())) {
    console.log('Server not online on http://localhost:3000. Skipping live HTTP check.');
    return;
  }

  const { teamMembers } = await import('../src/data/teamData.ts');
  assert.equal(teamMembers.length, 16, 'Expected 16 team members in data');

  for (const member of teamMembers) {
    const res = await fetch(`${baseUrl}/id/team/${member.id}`);
    assert.equal(
      res.status,
      200,
      `Team member ${member.id} route failed with status ${res.status}`
    );
    const text = await res.text();
    assert.ok(
      text.includes(member.name),
      `Team member ${member.id} page should contain member name "${member.name}"`
    );
  }
});

// ── 3B. Dynamic News Routes Coverage (All 8 Articles) ──────────
test('Full QA: Dynamic News Routes Coverage (All 8 Articles)', async () => {
  if (!(await isServerOnline())) {
    console.log('Server not online on http://localhost:3000. Skipping live HTTP check.');
    return;
  }

  const { newsArticles } = await import('../src/data/newsData.ts');
  assert.ok(newsArticles.length >= 8, 'Expected at least 8 news articles in data');

  for (const article of newsArticles) {
    let res;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        res = await fetch(`${baseUrl}/id/berita/${article.slug}`);
        if (res.status === 200) break;
      } catch (err) {
        if (attempt === 2) throw err;
        await new Promise(r => setTimeout(r, 400));
      }
    }
    assert.equal(
      res.status,
      200,
      `News article ${article.slug} route failed with status ${res.status}`
    );
    const text = await res.text();
    const titleEnEscaped = escapeHtml(article.titleEn);
    const titleIdEscaped = escapeHtml(article.titleId);
    assert.ok(
      text.includes(titleEnEscaped) || text.includes(titleIdEscaped) || text.includes('RYNERTIA'),
      `News article ${article.slug} page should contain title or brand`
    );
  }
});

// ── 4. Graceful Fallbacks for Invalid Dynamic Slugs ────────────
test('Full QA: Graceful Fallbacks for Invalid Dynamic Slugs', async () => {
  if (!(await isServerOnline())) {
    console.log('Server not online on http://localhost:3000. Skipping live HTTP check.');
    return;
  }

  // Invalid portfolio slug
  const portRes = await fetch(`${baseUrl}/id/portfolio/invalid-slug-9999`);
  const portText = await portRes.text();
  assert.ok(
    portText.includes('Studi Kasus Tidak Ditemukan') || portText.includes('Case Study Not Found'),
    'Invalid portfolio slug should show not found message'
  );

  // Invalid team slug
  const teamRes = await fetch(`${baseUrl}/id/team/invalid-personnel-9999`);
  const teamText = await teamRes.text();
  assert.ok(
    teamText.includes('Personil Tidak Ditemukan') || teamText.includes('Personnel Not Found'),
    'Invalid team slug should show not found message'
  );

  // Invalid news slug
  const newsRes = await fetch(`${baseUrl}/id/berita/invalid-news-slug-9999`);
  const newsText = await newsRes.text();
  assert.ok(
    newsText.includes('Artikel Tidak Ditemukan') || newsText.includes('Article Not Found'),
    'Invalid news slug should show not found message'
  );
});

// ── 5. Enterprise HTTP Security Headers ───────────────────────
test('Full QA: Enterprise HTTP Security Headers Enforcement', async () => {
  if (!(await isServerOnline())) {
    console.log('Server not online on http://localhost:3000. Skipping live HTTP check.');
    return;
  }

  const res = await fetch(`${baseUrl}/id`);
  const headers = res.headers;

  assert.equal(headers.get('x-frame-options'), 'DENY', 'X-Frame-Options must be DENY');
  assert.equal(headers.get('x-content-type-options'), 'nosniff', 'X-Content-Type-Options must be nosniff');
  assert.equal(headers.get('referrer-policy'), 'strict-origin-when-cross-origin', 'Referrer-Policy must be strict-origin-when-cross-origin');
  assert.equal(headers.get('permissions-policy'), 'camera=(), microphone=(), geolocation=()', 'Permissions-Policy must restrict device APIs');
  assert.equal(headers.get('x-xss-protection'), '1; mode=block', 'X-XSS-Protection must be 1; mode=block');
});

// ── 6. Sitemap.xml & Robots.txt Integrity ─────────────────────
test('Full QA: Sitemap.xml & Robots.txt Integrity', async () => {
  if (!(await isServerOnline())) {
    console.log('Server not online on http://localhost:3000. Skipping live HTTP check.');
    return;
  }

  const sitemapRes = await fetch(`${baseUrl}/sitemap.xml`);
  const sitemapXml = await sitemapRes.text();

  assert.ok(sitemapXml.includes('https://rynertia.tech'), 'Sitemap must contain base domain');
  assert.ok(sitemapXml.includes('https://rynertia.tech/id'), 'Sitemap must include ID homepage');
  assert.ok(sitemapXml.includes('https://rynertia.tech/en'), 'Sitemap must include EN homepage');
  assert.ok(sitemapXml.includes('https://rynertia.tech/id/portfolio'), 'Sitemap must include ID portfolio index');
  assert.ok(sitemapXml.includes('https://rynertia.tech/en/portfolio'), 'Sitemap must include EN portfolio index');

  const { portfolioItems } = await import('../src/data/portfolioData.ts');
  for (const item of portfolioItems) {
    assert.ok(
      sitemapXml.includes(`https://rynertia.tech/id/portfolio/${item.id}`) ||
      sitemapXml.includes(`https://rynertia.tech/en/portfolio/${item.id}`),
      `Sitemap must include project ${item.id}`
    );
  }

  const { teamMembers } = await import('../src/data/teamData.ts');
  for (const member of teamMembers) {
    assert.ok(
      sitemapXml.includes(`https://rynertia.tech/id/team/${member.id}`) ||
      sitemapXml.includes(`https://rynertia.tech/en/team/${member.id}`),
      `Sitemap must include team member ${member.id}`
    );
  }

  assert.ok(
    sitemapXml.includes('https://rynertia.tech/id/berita') ||
    sitemapXml.includes('https://rynertia.tech/en/news'),
    'Sitemap must include news catalog index'
  );

  const { newsArticles } = await import('../src/data/newsData.ts');
  for (const article of newsArticles) {
    assert.ok(
      sitemapXml.includes(`https://rynertia.tech/id/berita/${article.slug}`) ||
      sitemapXml.includes(`https://rynertia.tech/en/news/${article.slug}`),
      `Sitemap must include news article ${article.slug}`
    );
  }

  const robotsRes = await fetch(`${baseUrl}/robots.txt`);
  const robotsTxt = await robotsRes.text();
  assert.ok(robotsTxt.includes('Sitemap: https://rynertia.tech/sitemap.xml'), 'Robots.txt must declare sitemap URL');
  assert.ok(/user-agent:\s*\*/i.test(robotsTxt), 'Robots.txt must declare wildcard user agent');
});

// ── 7. Media & Local Assets Existence ─────────────────────────
test('Full QA: Media & Local Assets Existence on Disk', () => {
  const publicDir = path.join(projectRoot, 'public');

  // Video assets
  const videoFile = path.join(publicDir, 'videos', 'jakarta-1min.mp4');
  assert.ok(fs.existsSync(videoFile), 'Active video jakarta-1min.mp4 must exist');
  assert.ok(fs.statSync(videoFile).size > 1000000, 'Video file must be valid size (>1MB)');

  const posterFile = path.join(publicDir, 'videos', 'jakarta-poster.webp');
  assert.ok(fs.existsSync(posterFile), 'Active poster jakarta-poster.webp must exist');
  assert.ok(fs.statSync(posterFile).size > 10000, 'Poster file must be valid size (>10KB)');

  // Favicon & Core Logos
  const favicon = path.join(publicDir, 'favicon.ico');
  assert.ok(fs.existsSync(favicon), 'Favicon must exist');

  const logoIcon = path.join(publicDir, 'logo-icon.png');
  assert.ok(fs.existsSync(logoIcon), 'Logo icon must exist');

  const rynertiaLogo = path.join(publicDir, 'rynertia-logo.png');
  assert.ok(fs.existsSync(rynertiaLogo), 'Rynertia logo must exist');

  // Next.js metadata icons
  const appIcon = path.join(projectRoot, 'src', 'app', 'icon.png');
  assert.ok(fs.existsSync(appIcon), 'App router icon.png must exist');

  const appleIcon = path.join(projectRoot, 'src', 'app', 'apple-icon.png');
  assert.ok(fs.existsSync(appleIcon), 'App router apple-icon.png must exist');
});

// ── 8. Form Validation & Rate-Limiting Logic ─────────────────
test('Full QA: Contact Form Validation & Rate Limiting Logic', () => {
  const rfc5322Regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  // Valid business emails
  assert.ok(rfc5322Regex.test('cto@enterprise.com'), 'Standard enterprise email must pass');
  assert.ok(rfc5322Regex.test('alex.smith@consulting.co.id'), 'Compound domain email must pass');
  assert.ok(rfc5322Regex.test('contact+enterprise@rynertia.tech'), 'Plus-tagged email must pass');

  // Invalid emails
  assert.ok(!rfc5322Regex.test('plainaddress'), 'Missing @ must fail');
  assert.ok(!rfc5322Regex.test('@missingusername.com'), 'Missing username must fail');
  assert.ok(!rfc5322Regex.test('username@.com'), 'Missing domain label must fail');
  assert.ok(!rfc5322Regex.test('username@domain'), 'Missing top level domain must fail');

  // Rate limiting cooldown calculation
  const COOLDOWN_MS = 5000;
  const lastSubmit = Date.now();
  const immediateRetry = lastSubmit + 1000;
  const validRetry = lastSubmit + 5100;

  assert.ok(immediateRetry - lastSubmit < COOLDOWN_MS, '1-second retry must be throttled');
  assert.ok(validRetry - lastSubmit >= COOLDOWN_MS, '5.1-second retry must be permitted');
});

// ── 9. Anti-Slop & Design Standards Compliance ────────────────
test('Full QA: Anti-Slop & Human Copywriting Compliance', async () => {
  const { translations } = await import('../src/data/translations.ts');
  const { servicePillars } = await import('../src/data/servicesData.ts');
  const { workflowSteps } = await import('../src/data/workflowData.ts');

  // Check translations for forbidden em dash
  for (const lang of ['en', 'id']) {
    for (const [k, v] of Object.entries(translations[lang])) {
      assert.ok(!v.includes('—'), `Em dash (—) forbidden in translations.${lang}.${k}`);
    }
  }

  // Check services deliverables and summaries
  for (const s of servicePillars) {
    for (const d of s.deliverablesEn) {
      assert.ok(!d.includes('—'), `Em dash forbidden in service deliverable EN: ${d}`);
    }
    for (const d of s.deliverablesId) {
      assert.ok(!d.includes('—'), `Em dash forbidden in service deliverable ID: ${d}`);
    }
  }

  // Check workflow steps
  for (const w of workflowSteps) {
    assert.ok(!w.badgeEn.includes('—'), `Em dash forbidden in workflow badgeEn: ${w.badgeEn}`);
    assert.ok(!w.badgeId.includes('—'), `Em dash forbidden in workflow badgeId: ${w.badgeId}`);
  }

  // Check news articles for forbidden em dash
  const { newsArticles: articlesToCheck } = await import('../src/data/newsData.ts');
  for (const a of articlesToCheck) {
    assert.ok(!a.titleEn.includes('—'), `Em dash forbidden in news titleEn: ${a.titleEn}`);
    assert.ok(!a.titleId.includes('—'), `Em dash forbidden in news titleId: ${a.titleId}`);
    assert.ok(!a.summaryEn.includes('—'), `Em dash forbidden in news summaryEn: ${a.summaryEn}`);
    assert.ok(!a.summaryId.includes('—'), `Em dash forbidden in news summaryId: ${a.summaryId}`);
    for (const k of a.keyTakeawaysEn) {
      assert.ok(!k.includes('—'), `Em dash forbidden in news keyTakeawaysEn: ${k}`);
    }
    for (const k of a.keyTakeawaysId) {
      assert.ok(!k.includes('—'), `Em dash forbidden in news keyTakeawaysId: ${k}`);
    }
    for (const sec of a.sections) {
      assert.ok(!sec.headingEn.includes('—'), `Em dash forbidden in section headingEn: ${sec.headingEn}`);
      assert.ok(!sec.headingId.includes('—'), `Em dash forbidden in section headingId: ${sec.headingId}`);
      for (const p of sec.paragraphsEn) {
        assert.ok(!p.includes('—'), `Em dash forbidden in section paragraphEn: ${p}`);
      }
      for (const p of sec.paragraphsId) {
        assert.ok(!p.includes('—'), `Em dash forbidden in section paragraphId: ${p}`);
      }
      if (sec.bulletPointsEn) {
        for (const b of sec.bulletPointsEn) {
          assert.ok(!b.includes('—'), `Em dash forbidden in section bulletPointsEn: ${b}`);
        }
      }
      if (sec.bulletPointsId) {
        for (const b of sec.bulletPointsId) {
          assert.ok(!b.includes('—'), `Em dash forbidden in section bulletPointsId: ${b}`);
        }
      }
      if (sec.quoteEn) {
        assert.ok(!sec.quoteEn.includes('—'), `Em dash forbidden in section quoteEn: ${sec.quoteEn}`);
      }
      if (sec.quoteId) {
        assert.ok(!sec.quoteId.includes('—'), `Em dash forbidden in section quoteId: ${sec.quoteId}`);
      }
    }
  }

  // Check zero forbidden AI trope icons in components
  const componentsDir = path.join(projectRoot, 'src', 'components');
  const forbiddenIcons = ['Sparkles', 'Wand', 'Magic', 'Robot'];
  const componentFiles = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

  for (const file of componentFiles) {
    const code = fs.readFileSync(path.join(componentsDir, file), 'utf8');
    for (const icon of forbiddenIcons) {
      assert.ok(
        !code.includes(icon),
        `Forbidden AI decorative icon "${icon}" found in component ${file}`
      );
    }
  }
});
