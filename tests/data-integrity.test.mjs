import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';

test('Data Integrity: Portfolio dataset contains 25 valid projects', async () => {
  const { portfolioItems } = await import('../src/data/portfolioData.ts');
  assert.equal(portfolioItems.length, 25, 'Portfolio must contain exactly 25 projects');

  const categories = new Set(portfolioItems.map(p => p.category));
  assert.ok(categories.has('bpmn'), 'Must include bpmn category');
  assert.ok(categories.has('it'), 'Must include it category');
  assert.ok(categories.has('design'), 'Must include design category');
  assert.ok(categories.has('marketing'), 'Must include marketing category');
  assert.ok(categories.has('enterprise'), 'Must include enterprise category');

  // Verify each item has required deep-dive fields
  for (const item of portfolioItems) {
    assert.ok(item.id, 'Project must have an id');
    assert.ok(item.titleEn, `Project ${item.id} must have titleEn`);
    assert.ok(item.titleId, `Project ${item.id} must have titleId`);
    assert.ok(item.image, `Project ${item.id} must have an image`);
    assert.ok(item.techStack?.length > 0, `Project ${item.id} must have techStack items`);
    assert.ok(item.metrics?.length > 0, `Project ${item.id} must have metrics`);
  }
});

test('Data Integrity: Translations dictionary has 100% key parity between EN and ID', async () => {
  const { translations } = await import('../src/data/translations.ts');
  assert.ok(translations.en, 'English dictionary must exist');
  assert.ok(translations.id, 'Indonesian dictionary must exist');

  const enKeys = Object.keys(translations.en);
  const idKeys = Object.keys(translations.id);

  const missingInId = enKeys.filter(k => !idKeys.includes(k));
  const missingInEn = idKeys.filter(k => !enKeys.includes(k));

  assert.deepEqual(missingInId, [], `Keys present in EN but missing in ID: ${missingInId.join(', ')}`);
  assert.deepEqual(missingInEn, [], `Keys present in ID but missing in EN: ${missingInEn.join(', ')}`);
});

test('Data Integrity: News & Insights dataset meets 14.7 specifications', async () => {
  const { newsArticles } = await import('../src/data/newsData.ts');
  const { teamMembers } = await import('../src/data/teamData.ts');
  const teamMemberIds = new Set(teamMembers.map(m => m.id.toLowerCase()));

  assert.ok(newsArticles.length >= 8, 'Must contain at least 8 articles (1 featured + 4 latest + 3 founders)');

  const featured = newsArticles.filter(a => a.isFeatured);
  assert.equal(featured.length, 1, 'Must contain exactly 1 featured article');

  const founders = newsArticles.filter(a => a.isFoundersCorner);
  assert.equal(founders.length, 3, 'Must contain exactly 3 founders corner articles');

  for (const article of newsArticles) {
    assert.ok(article.slug, 'Article must have a slug');
    assert.ok(article.titleEn, `Article ${article.slug} must have titleEn`);
    assert.ok(article.titleId, `Article ${article.slug} must have titleId`);
    assert.ok(article.summaryEn, `Article ${article.slug} must have summaryEn`);
    assert.ok(article.summaryId, `Article ${article.slug} must have summaryId`);
    assert.ok(article.coverImage, `Article ${article.slug} must have coverImage`);
    assert.ok(article.authorId, `Article ${article.slug} must have authorId`);
    assert.ok(
      teamMemberIds.has(article.authorId.toLowerCase()),
      `Article ${article.slug} authorId "${article.authorId}" must exist in teamMembers dataset`
    );
    assert.ok(article.category, `Article ${article.slug} must have category`);
    assert.ok(article.readTimeMinutes > 0, `Article ${article.slug} must have positive readTimeMinutes`);
    assert.ok(article.sections.length > 0, `Article ${article.slug} must have content sections`);
  }
});
