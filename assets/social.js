'use strict';

const palette = { blue: '#2447ec', paper: '#f7f7f2', ink: '#20231e', peach: '#efd5db', mint: '#e3e9d7', sky: '#dce7ef' };
const socialPieces = [
  { id: '01-presentacion', title: '01 · Tu próxima web', kind: 'cover', width:1080, height:1350, label:'DISEÑO WEB CON PROPÓSITO', lines:['Tu idea merece', 'una gran web.'], bg:palette.blue, color:palette.paper, image:'assets/images/mawe-desktop.jpg' },
  { id: '02-mawe', title: '02 · Mawe', kind:'project', width:1080, height:1350, label:'CATÁLOGO & EMPRENDIMIENTO', lines:['Mawe.', 'Una marca con', 'mucho para celebrar.'], bg:palette.peach, color:'#71394d', image:'assets/images/mawe-desktop.jpg', sub:'Catálogo interactivo · Consultas por WhatsApp' },
  { id: '03-contador', title:'03 · Federico Molina', kind:'project', width:1080, height:1350, label:'WEB PARA MARCA PROFESIONAL', lines:['Federico Molina.', 'Una presencia', 'que da confianza.'], bg:palette.sky, color:'#1f465e', image:'assets/images/contador-desktop.png', sub:'Servicios claros · Contacto directo' },
  { id: '04-valen', title:'04 · Valen & amigos', kind:'project', width:1080, height:1350, label:'EXPERIENCIA INTERACTIVA', lines:['Valen & amigos.', 'Un mundo para', 'descubrir jugando.'], bg:palette.mint, color:'#426044', image:'assets/images/valen-desktop.png', sub:'Juegos · Palabras · Colores · Sonidos' },
  { id: '05-contacto', title:'05 · Hagámoslo realidad', kind:'contact', width:1080, height:1350, label:'EL PRÓXIMO PROYECTO PUEDE SER EL TUYO', lines:['Vos ponés', 'la idea.', 'Yo, el código.'], bg:palette.ink, color:palette.paper },
  { id: '06-historia', title:'06 · Historia', kind:'story', width:1080, height:1920, label:'JUAN PABLO MOLINA · DISEÑO WEB', lines:['Tu negocio,', 'en su mejor', 'versión web.'], bg:palette.blue, color:palette.paper, image:'assets/images/mawe-desktop.jpg' }
];

function text(ctx, value, x, y, size, color, weight=500) {
  ctx.fillStyle = color; ctx.font = `${weight} ${size}px Montserrat, Arial, sans-serif`; ctx.textBaseline = 'top'; ctx.fillText(value, x, y);
}
function rounded(ctx,x,y,w,h,r,fill) { ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fillStyle=fill;ctx.fill(); }
function arrow(ctx,x,y,size,color) { ctx.strokeStyle=color;ctx.lineWidth=5;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x,y+size);ctx.lineTo(x+size,y);ctx.moveTo(x,y);ctx.lineTo(x+size,y);ctx.lineTo(x+size,y+size);ctx.stroke(); }
function spark(ctx,x,y,r,color) { ctx.save();ctx.translate(x,y);ctx.strokeStyle=color;ctx.lineWidth=4;for(let i=0;i<8;i++){ctx.rotate(Math.PI/4);ctx.beginPath();ctx.moveTo(r*.27,0);ctx.lineTo(r,0);ctx.stroke()}ctx.restore(); }
function imageLoad(src) { return new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=()=>reject(new Error(`No se pudo cargar ${src}`));img.src=src;}); }
function drawBrowser(ctx,img,x,y,w,h) {
  ctx.save(); ctx.shadowColor='#0000001c';ctx.shadowBlur=40;ctx.shadowOffsetY=20;rounded(ctx,x,y,w,h,12,'#fff');ctx.shadowColor='transparent';
  for(let i=0;i<3;i++){ctx.beginPath();ctx.arc(x+25+i*17,y+22,5,0,Math.PI*2);ctx.fillStyle=['#e7b9af','#e5d6a5','#bed3ba'][i];ctx.fill();}
  text(ctx,'UNA WEB CON IDENTIDAD PROPIA',x+w*.31,y+15,11,'#7c8077',500);
  ctx.beginPath();ctx.roundRect(x,y+42,w,h-42,[0,0,12,12]);ctx.clip();const imageH=w*img.naturalHeight/img.naturalWidth;ctx.drawImage(img,x,y+42,w,imageH);ctx.restore();
}
function brand(ctx,y,color) { text(ctx,'jp.',72,y,66,color,750); text(ctx,'JUAN PABLO MOLINA',190,y+6,19,color,700);text(ctx,'DISEÑO & DESARROLLO WEB',190,y+36,12,color,500); }
function footer(ctx,h,color,index) { ctx.strokeStyle=color+'40';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(72,h-117);ctx.lineTo(1008,h-117);ctx.stroke();text(ctx,'JUAN PABLO MOLINA · DISEÑO WEB',72,h-86,15,color,600);text(ctx,index,944,h-86,15,color,500); }
async function renderPiece(piece,index) {
  const canvas=document.createElement('canvas');canvas.width=piece.width;canvas.height=piece.height;canvas.setAttribute('role','img');canvas.setAttribute('aria-label',piece.title);
  const ctx=canvas.getContext('2d'); const {height:h,bg,color}=piece;
  ctx.fillStyle=bg;ctx.fillRect(0,0,1080,h);
  const gradient=ctx.createRadialGradient(950,120,10,950,120,700);gradient.addColorStop(0,'#ffffff18');gradient.addColorStop(1,'#ffffff00');ctx.fillStyle=gradient;ctx.fillRect(0,0,1080,h);
  brand(ctx,58,color);
  text(ctx,piece.label,74,193,piece.kind==='contact'?15:17,color,600);
  const image=piece.image?await imageLoad(piece.image):null;
  if(piece.kind==='cover'){
    text(ctx,piece.lines[0],68,268,84,color,600);text(ctx,piece.lines[1],68,365,99,'#e2f1be',650);arrow(ctx,913,278,70,color);
    text(ctx,'Diseño y desarrollo para tu próximo paso online.',74,504,24,color,450);
    drawBrowser(ctx,image,74,610,932,480);
    text(ctx,'Deslizá y conocé mis trabajos',74,1145,23,color,550);arrow(ctx,945,1142,34,color);
  } else if(piece.kind==='project') {
    piece.lines.forEach((line,i)=>text(ctx,line,70,272+i*83,i===0?74:65,color,600));
    drawBrowser(ctx,image,74,580,932,482);text(ctx,piece.sub,74,1120,22,color,500);
  } else if(piece.kind==='contact') {
    piece.lines.forEach((line,i)=>text(ctx,line,68,283+i*120,104,i===2?'#dbe9b9':color,600));spark(ctx,906,586,86,'#a6b3ff');
    text(ctx,'Landing pages · Webs profesionales',74,756,24,'#d2d7ca',450);text(ctx,'Catálogos digitales · Ideas a medida',74,799,24,'#d2d7ca',450);
    rounded(ctx,74,897,932,104,5,'#e2f1be');text(ctx,'Conversemos de tu próxima web',106,930,28,palette.ink,600);arrow(ctx,917,929,33,palette.ink);
    text(ctx,'WHATSAPP  +54 9 264 415 1881',74,1050,26,color,600);text(ctx,'molinapablo72@gmail.com',74,1102,24,color,450);text(ctx,'github.com/Juanpimolina92',74,1150,20,'#d2d7ca',450);
  } else {
    piece.lines.forEach((line,i)=>text(ctx,line,68,300+i*117,103,i===2?'#e2f1be':color,600));spark(ctx,926,740,65,'#e2f1be');
    text(ctx,'Diseño. Desarrollo. Tu identidad.',74,720,29,color,450);drawBrowser(ctx,image,74,876,932,520);
    text(ctx,'¿Tenés una idea?',74,1492,40,color,600);text(ctx,'Hagámosla realidad.',74,1550,40,'#e2f1be',600);
    text(ctx,'WhatsApp  +54 9 264 415 1881',74,1651,27,color,600);text(ctx,'molinapablo72@gmail.com',74,1704,24,color,450);
  }
  footer(ctx,h,color,piece.kind==='story'?'STORY':`${index+1} / 5`);
  const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
  if(!blob)throw new Error('No se pudo exportar la imagen.');
  const url=URL.createObjectURL(blob);
  const card=document.createElement('article');card.className='social-card';
  const title=document.createElement('h2');title.textContent=piece.title;
  const dimensions=document.createElement('p');dimensions.textContent=`${piece.width} × ${piece.height} px · PNG`;
  const download=document.createElement('a');download.href=url;download.download=`${piece.id}.png`;download.textContent=`Descargar ${piece.id.split('-')[0]} PNG ↓`;download.dataset.piece=piece.id;
  card.append(canvas,title,dimensions,download);document.querySelector('#piezas').append(card);
}
async function initialize() {
  try {
    await document.fonts.load('600 30px Montserrat');
    for(let i=0;i<socialPieces.length;i++)await renderPiece(socialPieces[i],i);
    document.querySelector('#social-status').textContent='Las 6 piezas están listas para descargar.';
  }catch(error){document.querySelector('#social-status').textContent='No se pudo generar alguna pieza. Abrí esta página desde la vista previa local o usá los PNG de la carpeta instagram.';console.error(error);}
}
document.querySelector('#copy-caption').addEventListener('click',async()=>{
  const area=document.querySelector('#instagram-caption');const status=document.querySelector('#copy-status');
  try{await navigator.clipboard.writeText(area.value);status.textContent='Texto copiado.';}
  catch{area.focus();area.select();status.textContent='Texto seleccionado. Copialo con Ctrl+C o desde el menú del celular.';}
});
initialize();
