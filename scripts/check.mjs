import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, dirname, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const errors=[];let documents=0;let references=0;
async function walk(folder) {
  const files=[];
  for(const entry of await readdir(folder,{withFileTypes:true})) {
    if(entry.name.startsWith('.')||['node_modules','dist','reports','entrega'].includes(entry.name))continue;
    const file=resolve(folder,entry.name);
    if(entry.isDirectory())files.push(...await walk(file));else files.push(file);
  }
  return files;
}
for(const file of await walk(root)) {
  const extension=extname(file);
  if(!['.html','.css'].includes(extension))continue;
  documents++;
  const source=await readFile(file,'utf8');
  if(file===resolve(root,'index.html')&&/SOEESIT/i.test(source))errors.push('El proyecto omitido aparece en el portfolio.');
  const pattern=extension==='.html'?/(?:src|href)\s*=\s*["']([^"']+)["']/g:/url\(\s*["']?([^)'"\s]+)["']?\s*\)/g;
  for(const match of source.matchAll(pattern)) {
    let ref=match[1];
    if(/^(?:[a-z]+:|#|\/\/)/i.test(ref))continue;
    ref=ref.split(/[?#]/)[0];if(!ref)continue;
    const target=ref.startsWith('/')?resolve(root,'.'+ref):resolve(dirname(file),decodeURIComponent(ref));
    if(target!==root&&!target.startsWith(root+sep)){errors.push(`Referencia fuera del sitio: ${ref}`);continue;}
    references++;
    try{await stat(target);}catch{errors.push(`${file.slice(root.length+1)} → falta ${ref}`);}
  }
}
for(const file of ['assets/app.js','assets/social.js','scripts/build.mjs','scripts/serve.mjs']) {
  const result=spawnSync(process.execPath,['--check',resolve(root,file)],{encoding:'utf8'});
  if(result.status!==0)errors.push(result.stderr||`Error de sintaxis: ${file}`);
}
for(const [file,w,h] of [['01-presentacion.png',1080,1350],['02-mawe.png',1080,1350],['03-contador.png',1080,1350],['04-valen.png',1080,1350],['05-contacto.png',1080,1350],['06-historia.png',1080,1920]]) {
  try{const bytes=await readFile(resolve(root,'instagram',file));if(bytes.toString('hex',0,8)!=='89504e470d0a1a0a'||bytes.readUInt32BE(16)!==w||bytes.readUInt32BE(20)!==h)errors.push(`PNG con dimensiones incorrectas: ${file}`);}catch{errors.push(`Falta la pieza ${file}`);}
}
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}
else console.log(`Verificación correcta: ${documents} documentos, ${references} referencias locales, JavaScript y 6 PNG de Instagram.`);
