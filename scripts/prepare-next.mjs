import { cp, mkdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
await mkdir(resolve(root, 'public'), { recursive: true });
for (const entry of ['assets', 'proyectos', 'instagram', 'instagram.html']) {
  await cp(resolve(root, entry), resolve(root, 'public', entry), { recursive: true });
}
console.log('Recursos locales preparados para Next.js.');
