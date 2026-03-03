#!/usr/bin/env node

import fs from 'node:fs/promises';
import { createWriteStream } from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import http from 'node:http';

const manifestPath = new URL('./image-manifest.json', import.meta.url);
const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));

const outputDir = process.argv[2] || 'public/uploads';
const filterCategory = process.argv[3]; // optional filter
const force = process.argv.includes('--force');

async function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https:') ? https : http;
    const req = protocol.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      const file = createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
      file.on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(30000, () => {
      req.destroy();
      reject(new Error(`Timeout for ${url}`));
    });
  });
}

async function main() {
  const filtered = filterCategory ? manifest.filter(m => m.category === filterCategory) : manifest;
  for (const item of filtered) {
    const fullPath = path.join(outputDir, item.category, item.filename);
    const dir = path.dirname(fullPath);
    await fs.mkdir(dir, { recursive: true });
    const destPath = fullPath;
    try {
      const exists = await fs.access(destPath).then(() => true).catch(() => false);
      if (exists && !force) {
        console.log(`Skipping ${item.id}, file exists: ${destPath}`);
        continue;
      }
      console.log(`Downloading ${item.id} to ${destPath}`);
      await downloadImage(item.source, destPath);
      console.log(`Downloaded ${item.id}`);
    } catch (err) {
      console.error(`Failed to download ${item.id}: ${err.message}`);
    }
  }
}

main().catch(console.error);