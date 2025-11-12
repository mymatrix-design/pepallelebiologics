#!/usr/bin/env node
// convert-extracted-to-webp.js
// Converts extracted raster images under public/ to WebP and AVIF, and
// optionally writes @2x variants when the source image is large enough.
// Usage:
//   npm install --save-dev sharp
//   node scripts/convert-extracted-to-webp.js

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

async function walk(dir) {
  const out = [];
  for (const name of await fs.readdir(dir)) {
    const full = path.join(dir, name);
    const stat = await fs.stat(full);
    if (stat.isDirectory()) {
      out.push(...await walk(full));
    } else if (stat.isFile()) {
      if (/[-]embedded[-].*\.(png|jpe?g)$/i.test(name)) out.push(full);
    }
  }
  return out;
}

function replaceExt(p, ext) {
  return p.replace(/\.[^.]+$/, `.${ext}`);
}

async function convert(file) {
  try {
    const img = sharp(file);
    const meta = await img.metadata();
    const dir = path.dirname(file);
    const base = path.basename(file).replace(/\.[^.]+$/, '');

    const webpPath = path.join(dir, `${base}.webp`);
    const avifPath = path.join(dir, `${base}.avif`);

    await img.webp({ quality: 80 }).toFile(webpPath);
    console.log(`Wrote ${webpPath}`);

    await img.avif({ quality: 50 }).toFile(avifPath);
    console.log(`Wrote ${avifPath}`);

    // Optionally create @2x if the original width is available and reasonable
    if (meta.width && meta.width * 2 <= 4096) {
      const x2 = meta.width * 2;
      const webp2 = path.join(dir, `${base}@2x.webp`);
      const avif2 = path.join(dir, `${base}@2x.avif`);
      await img.resize({ width: x2 }).webp({ quality: 80 }).toFile(webp2);
      await img.resize({ width: x2 }).avif({ quality: 50 }).toFile(avif2);
      console.log(`Wrote ${webp2} and ${avif2}`);
    }
  } catch (err) {
    console.error(`Failed to convert ${file}:`, err);
  }
}

async function main() {
  console.log('Scanning public/ for extracted images...');
  const files = await walk(PUBLIC_DIR);
  if (files.length === 0) {
    console.log('No extracted "-embedded-" images found in public/. Run the extractor first.');
    return;
  }

  for (const f of files) await convert(f);
  console.log('Done. Verify generated WebP/AVIF files in public/ and commit them.');
}

main().catch((e) => { console.error(e); process.exit(1); });
