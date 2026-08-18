/**
 * Builds the responsive WebP set the portfolio ships.
 *
 * Sources live in src/assets/works/_src (one file per project slug); for every
 * source it writes <slug>-800.webp (cards) and <slug>-1600.webp (modal, retina)
 * next to them in src/assets/works.
 *
 *   node scripts/optimize-images.mjs
 */
import { mkdir, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const WORKS = path.join(process.cwd(), 'src', 'assets', 'works');
const SOURCES = path.join(WORKS, '_src');
const WIDTHS = [800, 1600];
const QUALITY = 88;
const RASTER = /\.(png|jpe?g|webp)$/i;

const kb = bytes => `${Math.round(bytes / 1024)} KB`;

await mkdir(WORKS, { recursive: true });

const sources = (await readdir(SOURCES)).filter(name => RASTER.test(name));
let before = 0;
let after = 0;

for (const name of sources.sort()) {
	const slug = name.replace(RASTER, '');
	const source = path.join(SOURCES, name);
	const { size } = await stat(source);
	before += size;

	const written = [];

	for (const width of WIDTHS) {
		const buffer = await sharp(source)
			.resize({ width, withoutEnlargement: true })
			.webp({ quality: QUALITY, effort: 6, smartSubsample: true })
			.toBuffer();

		await writeFile(path.join(WORKS, `${slug}-${width}.webp`), buffer);
		written.push(buffer.length);
		after += buffer.length;
	}

	console.log(
		`${slug.padEnd(20)} ${kb(size).padStart(8)} -> ${written.map(kb).join(' + ')}`
	);
}

console.log(`\n${sources.length} projects: ${kb(before)} -> ${kb(after)}`);
