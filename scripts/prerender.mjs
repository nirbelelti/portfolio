import {readdir, readFile, rm, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const buildDir = path.join(projectRoot, 'build');
const ssrDir = path.join(projectRoot, 'build-ssr');
const rootPlaceholder = '<div id="root"></div>';
const preloadedFonts = [/^newsreader-latin-wght-normal-.*\.woff2$/, /^ibm-plex-sans-latin-wght-normal-.*\.woff2$/];

const fontPreloadTags = async () => {
    const assets = await readdir(path.join(buildDir, 'assets'));

    return preloadedFonts.map((pattern) => {
        const file = assets.find((asset) => pattern.test(asset));
        if (!file) throw new Error(`Font to preload not found: ${pattern}`);

        return `<link rel="preload" href="./assets/${file}" as="font" type="font/woff2" crossorigin />`;
    }).join('\n    ');
};

const {render} = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const indexPath = path.join(buildDir, 'index.html');
const template = await readFile(indexPath, 'utf8');

if (!template.includes(rootPlaceholder)) throw new Error('Root placeholder not found in build/index.html');

const html = template
    .replace('</title>', `</title>\n    ${await fontPreloadTags()}`)
    .replace(rootPlaceholder, `<div id="root">${render()}</div>`);

await writeFile(indexPath, html);
await rm(ssrDir, {recursive: true, force: true});

console.log('Prerendered build/index.html');
