import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const projectRoot = path.resolve(import.meta.dirname, '..');

test('Security Gate: .gitignore must block AI tooling, secrets, and caches', () => {
  const gitignorePath = path.join(projectRoot, '.gitignore');
  assert.ok(fs.existsSync(gitignorePath), '.gitignore file must exist');

  const content = fs.readFileSync(gitignorePath, 'utf8');
  assert.match(content, /\.agents/, '.gitignore must exclude .agents/');
  assert.match(content, /\.gemini/, '.gitignore must exclude .gemini/');
  assert.match(content, /\.qoder/, '.gitignore must exclude .qoder/');
  assert.match(content, /\.env/, '.gitignore must exclude .env files');
  assert.match(content, /\.next/, '.gitignore must exclude .next/');
});

test('Security Gate: No active .env files or private keys in repository', () => {
  const forbiddenFiles = ['.env', '.env.local', '.env.production', 'id_rsa', 'server.key'];
  for (const file of forbiddenFiles) {
    const filePath = path.join(projectRoot, file);
    assert.ok(!fs.existsSync(filePath), `Sensitive file ${file} must not exist in repo`);
  }
});

test('Security Gate: Scan src/ for accidental secret patterns', () => {
  const srcDir = path.join(projectRoot, 'src');

  function scanDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scanDir(fullPath);
      } else if (/\.(ts|tsx|js|json)$/.test(entry.name)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        assert.doesNotMatch(
          content,
          /AKIA[0-9A-Z]{16}/,
          `AWS Access Key detected in ${entry.name}`
        );
        assert.doesNotMatch(
          content,
          /AIza[0-9A-Za-z-_]{35}/,
          `Google API Key detected in ${entry.name}`
        );
        assert.doesNotMatch(
          content,
          /-----BEGIN (RSA|EC|OPENSSH)? PRIVATE KEY-----/,
          `Private key detected in ${entry.name}`
        );
      }
    }
  }

  scanDir(srcDir);
});
