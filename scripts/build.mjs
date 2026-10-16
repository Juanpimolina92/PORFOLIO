import { cp, mkdir, readFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const css = await readFile(resolve(root, 'assets/styles.css'), 'utf8');
if (!css.includes('.hero-showcase') || css.includes('Error:')) throw new Error('Primero compilá SCSS con npm run build:css.');
await mkdir(resolve(root, 'dist'), { recursive: true });
for (const entry of ['index.html', 'instagram.html', 'assets', 'proyectos', 'instagram']) {
  await cp(resolve(root, entry), resolve(root, 'dist', entry), { recursive: true });
}
console.log('Archivos listos en dist/. No se realizó ninguna publicación.');
