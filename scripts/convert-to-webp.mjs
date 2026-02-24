import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

function findPngFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      results.push(...findPngFiles(fullPath));
    } else if (entry.endsWith('.png')) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = findPngFiles('src/assets/projects');
for (const file of files) {
  const webpPath = file.replace(/\.png$/, '.webp');
  await sharp(file).webp({ quality: 85 }).toFile(webpPath);
  console.log(`Converted: ${file} → ${webpPath}`);
}
