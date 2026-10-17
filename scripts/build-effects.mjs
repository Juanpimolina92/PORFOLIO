import { build } from 'esbuild';
import { copyFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
await build({
  absWorkingDir: root,
  entryPoints: ['src/interactive-effects.jsx'],
  outfile: 'assets/interactive-effects.js',
  bundle: true,
  minify: true,
  format: 'iife',
  jsx: 'automatic',
  target: ['es2020'],
  define: { 'process.env.NODE_ENV': '"production"' },
  legalComments: 'linked'
});
for (const [packageName, name] of [['react', 'LICENSE-React.txt'], ['react-dom', 'LICENSE-ReactDOM.txt']]) {
  await copyFile(resolve(root, 'node_modules', packageName, 'LICENSE'), resolve(root, 'assets/vendor', name));
}
console.log('Efectos React compilados en assets/interactive-effects.js.');
