
// extract-svg-embedded-images.js (ES module)
// Node script to scan public/*.svg for embedded data:image/...;base64 URIs,
// extract them to sibling files, and replace the data URI with a file path.
// Usage: node scripts/extract-svg-embedded-images.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

function walk(dir) {
  const files = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      files.push(...walk(full));
    } else if (stat.isFile() && full.endsWith('.svg')) {
      files.push(full);
    }
  }
  return files;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function processSvg(svgPath) {
  let text = fs.readFileSync(svgPath, 'utf8');
  // Match data:image/...;base64,.... We don't anchor to line end because base64 may be inline.
  const regex = /data:(image\/(png|jpeg|jpg|webp));base64,([A-Za-z0-9+/=\n\r]+)/gmi;

  // Find all data URIs in the file
  let match;
  let count = 0;
  while ((match = regex.exec(text)) !== null) {
    const mime = match[1];
    const ext = mime.split('/')[1] === 'jpeg' ? 'jpg' : mime.split('/')[1];
    const b64 = match[3].replace(/\s+/g, '');
    const buffer = Buffer.from(b64, 'base64');

    // Write file next to svg with a descriptive name
    const relDir = path.dirname(path.relative(PUBLIC_DIR, svgPath));
    const outDir = path.join(PUBLIC_DIR, relDir);
    ensureDir(outDir);

    const baseName = path.basename(svgPath, '.svg');
    const outName = `${baseName}-embedded-${++count}.${ext}`;
    const outPath = path.join(outDir, outName);

    fs.writeFileSync(outPath, buffer);
    console.log(`Wrote extracted image: ${outPath}`);

    // Replace the data URI in SVG with a relative path starting from '/'
    const publicPath = `/${path.posix.join(relDir.replace(/\\/g, '/'), outName)}`.replace('//', '/');
    text = text.replace(match[0], publicPath);
  }

  if (count > 0) {
    fs.writeFileSync(svgPath, text, 'utf8');
    console.log(`Updated svg: ${svgPath} (extracted ${count} images)`);
  }
}

function main() {
  const svgs = walk(PUBLIC_DIR);
  console.log('Found svgs:', svgs.length);
  for (const s of svgs) processSvg(s);
  console.log('Done. Review the public/ folder and commit the changes.');
}

main();
