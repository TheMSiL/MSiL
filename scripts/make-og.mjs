/** Generates the 1200x630 social preview card at public/og.jpg. */
import path from 'node:path';
import sharp from 'sharp';

const card = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#101014"/>
  <rect x="0" y="0" width="1200" height="8" fill="#8b3ddb"/>
  <text x="80" y="250" font-family="Segoe UI, Arial, sans-serif" font-size="86" font-weight="700" fill="#ffffff">Max Silka</text>
  <text x="80" y="330" font-family="Segoe UI, Arial, sans-serif" font-size="46" font-weight="600" fill="#8b3ddb">Front-end React Developer</text>
  <text x="80" y="404" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="400" fill="#a8a8b0">React · Next.js · TypeScript · Tailwind CSS</text>
  <text x="80" y="540" font-family="Segoe UI, Arial, sans-serif" font-size="28" font-weight="400" fill="#6f6f78">msil.vercel.app</text>
</svg>`;

const out = path.join(process.cwd(), 'public', 'og.jpg');
const { size } = await sharp(Buffer.from(card))
	.jpeg({ quality: 88 })
	.toFile(out);

console.log(`public/og.jpg written (${Math.round(size / 1024)} KB)`);
