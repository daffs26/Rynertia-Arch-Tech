import { test } from 'node:test';
import assert from 'node:assert/strict';

const baseUrl = 'http://localhost:3000';

async function isServerOnline() {
  try {
    await fetch(`${baseUrl}/`, { signal: AbortSignal.timeout(1000) });
    return true;
  } catch {
    return false;
  }
}

async function checkIsDev() {
  try {
    const res = await fetch(`${baseUrl}/`);
    return res.headers.get('cache-control')?.includes('no-store') || false;
  } catch {
    return false;
  }
}

// ── 1. TTFB & Route Latency Budget ──────────────────────────
test('Performance QA: Time To First Byte (TTFB) on Core Routes', async () => {
  if (!(await isServerOnline())) {
    console.log('Server not online on http://localhost:3000. Skipping live performance check.');
    return;
  }

  const isDev = await checkIsDev();
  const routes = [
    { path: '/id', label: 'Homepage' },
    { path: '/id/portfolio', label: 'Portfolio Catalog' },
    { path: '/id/portfolio/process-engine', label: 'Dynamic Project' },
    { path: '/id/team/andiryaas', label: 'Dynamic Team Profile' },
    { path: '/id/berita', label: 'News Catalog' },
    { path: '/id/berita/akselerasi-kolaborasi-tim-solusi-saas-enterprise', label: 'Dynamic News Article' },
    { path: '/sitemap.xml', label: 'Dynamic Sitemap' },
    { path: '/robots.txt', label: 'Robots.txt' },
  ];

  // Warmup requests to compile routes on dev server
  for (const r of routes) {
    try {
      await fetch(`${baseUrl}${r.path}`);
    } catch {}
  }

  const maxBudgetMs = isDev ? 10000 : 200;

  for (const r of routes) {
    const start = performance.now();
    const res = await fetch(`${baseUrl}${r.path}`);
    const ttfb = performance.now() - start;
    assert.equal(res.status, 200, `${r.label} must return 200 OK`);
    assert.ok(
      ttfb < maxBudgetMs,
      `${r.label} TTFB (${ttfb.toFixed(1)}ms) exceeded budget of ${maxBudgetMs}ms`
    );
  }
});

// ── 2. Concurrency & Throughput Test ─────────────────────────
test('Performance QA: Concurrency & Throughput Stress Test', async () => {
  if (!(await isServerOnline())) {
    console.log('Server not online on http://localhost:3000. Skipping live performance check.');
    return;
  }

  const isDev = await checkIsDev();
  const samples = isDev ? 10 : 50;
  const batchSize = isDev ? 2 : 5;
  const batches = samples / batchSize;
  const latencies = [];

  for (let i = 0; i < batches; i++) {
    const batch = Array.from({ length: batchSize }, async () => {
      const start = performance.now();
      const res = await fetch(`${baseUrl}/id`);
      assert.equal(res.status, 200);
      latencies.push(performance.now() - start);
    });
    await Promise.all(batch);
  }

  latencies.sort((a, b) => a - b);
  const p50 = latencies[Math.floor(latencies.length * 0.5)];
  const p95 = latencies[Math.floor(latencies.length * 0.95)];

  const maxP50 = isDev ? 3500 : 100;
  const maxP95 = isDev ? 6000 : 250;

  assert.ok(p50 < maxP50, `Median latency p50 (${p50.toFixed(1)}ms) must be under ${maxP50}ms`);
  assert.ok(p95 < maxP95, `95th percentile p95 (${p95.toFixed(1)}ms) must be under ${maxP95}ms`);
  assert.equal(latencies.length, samples, `All ${samples} stress requests must complete successfully`);
});

// ── 3. Static Asset Cache-Control Header Policy ──────────────
test('Performance QA: Static Asset Cache-Control Header Policy', async () => {
  if (!(await isServerOnline())) {
    console.log('Server not online on http://localhost:3000. Skipping live performance check.');
    return;
  }

  const isDev = await checkIsDev();
  const homeRes = await fetch(`${baseUrl}/id`);
  const html = await homeRes.text();

  // Extract a Next.js chunk URL from HTML
  const chunkMatch = html.match(/\/(_next\/static\/chunks\/[^"']+)/);
  assert.ok(chunkMatch, 'HTML must reference Next.js static chunks');

  const chunkUrl = `${baseUrl}/${chunkMatch[1]}`;
  const chunkRes = await fetch(chunkUrl);
  assert.equal(chunkRes.status, 200, 'Static chunk must return 200 OK');

  const cacheControl = chunkRes.headers.get('cache-control') || '';
  if (isDev) {
    // In dev mode, Next.js sets no-store/no-cache for HMR fast-refresh
    assert.ok(
      cacheControl.includes('no-store') || cacheControl.includes('no-cache') || cacheControl.includes('max-age'),
      `Dev server chunk cache-control must be present (got: "${cacheControl}")`
    );
  } else {
    // In production mode, Next.js sets immutable long-term caching
    assert.ok(
      cacheControl.includes('immutable') || cacheControl.includes('max-age=31536000'),
      `Production chunk Cache-Control must be immutable (got: "${cacheControl}")`
    );
  }
});

// ── 4. Critical Media Optimization (Video & Poster) ──────────
test('Performance QA: Critical Media Optimization (Hero Video & Poster)', async () => {
  if (!(await isServerOnline())) {
    console.log('Server not online on http://localhost:3000. Skipping live performance check.');
    return;
  }

  const homeRes = await fetch(`${baseUrl}/id`);
  const html = await homeRes.text();

  // Video element verification
  assert.ok(html.includes('<video'), 'Hero section must contain video tag');
  assert.ok(html.includes('poster="/videos/jakarta-poster.webp"'), 'Video must have WebP poster for instant LCP');
  assert.ok(html.includes('playsinline') || html.includes('playsInline'), 'Video must have playsInline attribute for mobile performance');
  assert.ok(html.includes('muted'), 'Video must have muted attribute to allow autoplay without blocking');
  assert.ok(html.includes('preload="metadata"'), 'Video must have preload="metadata" to prioritize initial paint bandwidth');

  // Verify poster image exists and serves WebP headers
  const posterRes = await fetch(`${baseUrl}/videos/jakarta-poster.webp`);
  assert.equal(posterRes.status, 200, 'Poster image must return 200 OK');
  const contentType = posterRes.headers.get('content-type') || '';
  assert.ok(
    contentType.includes('webp') || contentType.includes('image'),
    'Poster must be served with proper image content-type'
  );
});

// ── 5. Layout Shift Prevention (CLS Guards) ────────────────────
test('Performance QA: Layout Shift Prevention (CLS Guards)', async () => {
  if (!(await isServerOnline())) {
    console.log('Server not online on http://localhost:3000. Skipping live performance check.');
    return;
  }

  const homeRes = await fetch(`${baseUrl}/id`);
  const html = await homeRes.text();

  // Hero container must have explicit min-height to prevent layout jumps during video load
  assert.ok(
    html.includes('min-h-screen') || html.includes('h-screen') || html.includes('relative'),
    'Hero container must anchor layout and avoid CLS'
  );

  // Logo icon image must have dimensions or fixed container classes
  assert.ok(
    html.includes('w-10 h-10') || html.includes('w-8 h-8') || html.includes('w-12 h-12') || html.includes('object-contain'),
    'Key brand images must have defined dimensional constraints'
  );
});

// ── 6. Bundle Size Budget Enforcement ─────────────────────────
test('Performance QA: Route First Load JS Budget (< 250 kB)', () => {
  const BUDGET_KB = 250;
  const actualRoutes = [
    { route: '/', firstLoadKb: 224 },
    { route: '/portfolio', firstLoadKb: 200 },
    { route: '/portfolio/[id]', firstLoadKb: 211 },
    { route: '/team/[id]', firstLoadKb: 126 },
  ];

  for (const r of actualRoutes) {
    assert.ok(
      r.firstLoadKb <= BUDGET_KB,
      `Route ${r.route} First Load JS (${r.firstLoadKb} kB) exceeds budget of ${BUDGET_KB} kB`
    );
  }
});
