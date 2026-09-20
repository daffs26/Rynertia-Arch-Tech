import { test } from 'node:test';
import assert from 'node:assert/strict';

test('Anti-Slop Hard Gate: Zero em dashes (—) in user-facing translation copy', async () => {
  const { translations } = await import('../src/data/translations.ts');

  for (const lang of ['en', 'id']) {
    const dict = translations[lang];
    for (const [key, value] of Object.entries(dict)) {
      assert.ok(
        !value.includes('—'),
        `Forbidden em dash (—) found in ${lang} key "${key}": "${value}". Use comma, period, or colon instead.`
      );
    }
  }
});

test('Anti-Slop Hard Gate: Zero generic AI tropes and hyperbolic buzzwords in translations', async () => {
  const { translations } = await import('../src/data/translations.ts');
  const bannedPhrases = [
    'Igniting the Next Tech Frontier',
    'kelas dunia',
    'Next-Gen',
    'Revolutionize',
    'Cutting-Edge',
  ];

  for (const lang of ['en', 'id']) {
    const dict = translations[lang];
    for (const [key, value] of Object.entries(dict)) {
      for (const phrase of bannedPhrases) {
        assert.ok(
          !value.toLowerCase().includes(phrase.toLowerCase()),
          `Banned AI buzzword "${phrase}" found in ${lang} key "${key}": "${value}"`
        );
      }
    }
  }
});
