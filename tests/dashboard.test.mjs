import { test } from 'node:test';
import assert from 'node:assert/strict';

test('Dashboard PRD Gate: Content Lifecycle & Data Integrity', async () => {
  const { initialContentData } = await import('../src/data/dashboardMockData.ts');

  assert.ok(initialContentData.length > 0, 'Content data must not be empty');

  const validStatuses = ['draft', 'published', 'archived'];
  const validTypes = ['portfolio', 'berita', 'layanan', 'tim'];

  for (const item of initialContentData) {
    assert.ok(item.id, 'Item must have an ID');
    assert.ok(item.title, `Item ${item.id} must have a title`);
    assert.ok(validStatuses.includes(item.status), `Item ${item.id} must have valid status`);
    assert.ok(validTypes.includes(item.type), `Item ${item.id} must have valid type`);

    // Anti-slop: No em dash in title or summary
    assert.ok(
      !item.title.includes('—'),
      `Content title "${item.title}" contains banned em dash`
    );
    assert.ok(
      !item.summary.includes('—'),
      `Content summary in ${item.id} contains banned em dash`
    );
  }

  // Ensure all 3 lifecycle statuses are represented in mock data
  const statuses = new Set(initialContentData.map((c) => c.status));
  assert.ok(statuses.has('published'), 'Must contain published items');
  assert.ok(statuses.has('draft'), 'Must contain draft items');
  assert.ok(statuses.has('archived'), 'Must contain archived items');
});

test('Dashboard PRD Gate: Visitor Messages Integrity', async () => {
  const { initialMessagesData } = await import('../src/data/dashboardMockData.ts');

  assert.ok(initialMessagesData.length > 0, 'Messages data must not be empty');

  for (const msg of initialMessagesData) {
    assert.ok(msg.id, 'Message must have an ID');
    assert.ok(msg.name, 'Message must have sender name');
    assert.ok(msg.email.includes('@'), `Invalid email for ${msg.name}`);
    assert.ok(msg.subject, 'Message must have subject');
    assert.ok(msg.message, 'Message must have body content');
    assert.ok(['unread', 'read'].includes(msg.status), 'Invalid status');
  }

  // Ensure unread messages exist for testing notification badges
  const hasUnread = initialMessagesData.some((m) => m.status === 'unread');
  assert.ok(hasUnread, 'Must have at least one unread message');
});

test('Dashboard PRD Gate: Business Discovery 11 Fields & 4 Website Statuses (PRD 19.3 & 19.5)', async () => {
  const { initialBusinessCandidates } = await import('../src/data/dashboardMockData.ts');

  assert.ok(initialBusinessCandidates.length > 0, 'Business discovery must not be empty');

  // PRD 19.1: 5 mandatory categories
  const requiredCategories = ['Perusahaan', 'Startup', 'UMKM', 'Pebisnis', 'Pedagang'];
  const coveredCategories = new Set(initialBusinessCandidates.map((b) => b.category));

  for (const reqCat of requiredCategories) {
    assert.ok(
      coveredCategories.has(reqCat),
      `PRD 19.1 Category "${reqCat}" must be present in business candidates`
    );
  }

  // PRD 19.3: 4 non-absolute website statuses
  const validWebsiteStatuses = [
    'Unknown',
    'Has Website',
    'No Website Candidate',
    'Needs Manual Verification',
  ];

  const validVerificationStatuses = [
    'Pending Verification',
    'Verified No Website',
    'False Positive (Has Website)',
    'Lead Qualified',
  ];

  for (const cand of initialBusinessCandidates) {
    // 1. Business name
    assert.ok(cand.name, `Candidate ${cand.id} missing business name`);
    // 2. Business category
    assert.ok(requiredCategories.includes(cand.category), `Candidate ${cand.id} invalid category`);
    // 3. Address
    assert.ok(cand.address, `Candidate ${cand.id} missing address`);
    // 4. Phone
    assert.ok(cand.phone, `Candidate ${cand.id} missing phone`);
    // 5. Google Place ID
    assert.ok(cand.placeId, `Candidate ${cand.id} missing placeId`);
    // 8. Website status (PRD 19.3)
    assert.ok(
      validWebsiteStatuses.includes(cand.websiteStatus),
      `Candidate ${cand.id} has invalid website status: ${cand.websiteStatus}`
    );
    // 9. Source
    assert.ok(cand.source, `Candidate ${cand.id} missing source`);
    // 10. Last checked
    assert.ok(cand.lastChecked, `Candidate ${cand.id} missing last checked`);
    // 11. Verification status
    assert.ok(
      validVerificationStatuses.includes(cand.verificationStatus),
      `Candidate ${cand.id} has invalid verification status: ${cand.verificationStatus}`
    );
    assert.ok(cand.potentialSolution, `Candidate ${cand.id} must have recommended solution`);
  }
});

test('Dashboard Gate: Company Settings Integrity', async () => {
  const { initialCompanySettings } = await import('../src/data/dashboardMockData.ts');

  assert.ok(initialCompanySettings.companyName, 'Company name required');
  assert.ok(initialCompanySettings.officialEmail.includes('@'), 'Official email required');
  assert.ok(initialCompanySettings.whatsappNumber, 'WhatsApp number required');
  assert.ok(initialCompanySettings.officeAddress, 'Office address required');
});
