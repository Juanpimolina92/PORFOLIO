'use strict';

const projects = {
  mawe: {
    title: 'Mawe', category: 'CATÁLOGO & EMPRENDIMIENTO', image: 'assets/images/mawe-desktop.jpg', demo: 'proyectos/mawe/index.html', service: 'Catálogo digital',
    description: 'El mundo de Marieta convertido en una web: colores suaves, una identidad cercana y un catálogo que invita a descubrir sus imprimibles y kits.',
    features: ['Catálogo con filtros por categoría y detalle de cada diseño.', 'Consultas de productos por WhatsApp.', 'Galería, preguntas frecuentes y diseño adaptable a celulares.'],
    note: 'HTML, SCSS, JavaScript, Bootstrap y AOS. La demo conserva los enlaces de contacto del emprendimiento.'
  },
  contador: {
    title: 'Federico Molina', category: 'WEB PARA MARCA PROFESIONAL', image: 'assets/images/contador-desktop.png', demo: 'proyectos/contador/index.html', service: 'Web profesional',
    description: 'Una web para presentar servicios contables con claridad. La identidad visual acompaña una experiencia de lectura ordenada y un camino directo a la consulta.',
    features: ['Presentación de servicios contables y forma de trabajo.', 'Formulario que prepara la consulta por WhatsApp.', 'Panel interactivo de demostración para distintos tipos de negocio.'],
    note: 'HTML, SCSS, JavaScript y Bootstrap. El panel muestra datos ficticios; no es un sistema de gestión conectado. La demo conserva el contacto del profesional.'
  },
  valen: {
    title: 'Valen & amigos', category: 'APRENDER A TRAVÉS DEL JUEGO', image: 'assets/images/valen-desktop.png', demo: 'proyectos/valen/index.html', service: 'Experiencia a medida',
    description: 'Una experiencia pensada para descubrir jugando: personajes, pequeñas actividades y sonidos que acompañan cada interacción.',
    features: ['Actividades de palabras, colores, números y familia.', 'Audios y consignas para explorar juntos.', 'Ajustes de nombre, volumen y ritmo guardados en el navegador.'],
    note: 'HTML, CSS y JavaScript. La demo usa sonido; podés silenciarlo desde el encabezado.'
  }
};

const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionButtons = [...document.querySelectorAll('.motion-toggle, .hero-motion-toggle')];
let manualPause = false;
let aosReady = false;
try { manualPause = localStorage.getItem('jp-motion-paused') === 'true'; } catch {}
function isMotionPaused() { return manualPause || motionQuery.matches; }
function updateMotion() {
  const paused = isMotionPaused();
  document.documentElement.classList.toggle('no-motion', paused);
  motionButtons.forEach(button => {
    button.setAttribute('aria-pressed', String(paused));
    const label = paused ? 'Reanudar animaciones' : 'Pausar animaciones';
    button.setAttribute('aria-label', motionQuery.matches ? 'Movimiento reducido activado en tu sistema' : label);
    button.textContent = button.classList.contains('hero-motion-toggle') ? (paused ? '▶' : 'Ⅱ') : (paused ? 'Animaciones pausadas' : label);
    button.title = motionQuery.matches ? 'Se respeta tu preferencia de movimiento reducido' : label;
  });
  if (!aosReady && window.AOS && !paused) {
    try { window.AOS.init({ duration: 750, offset: 55, once: true, easing: 'ease-out-cubic', disable: () => isMotionPaused() }); aosReady = true; }
    catch { document.documentElement.classList.add('aos-unavailable'); }
  }
  if (!window.AOS) document.documentElement.classList.add('aos-unavailable');
  if (paused) document.querySelectorAll('.hero-showcase .mini-browser, .hero-showcase .phone-preview').forEach(el => { el.style.translate = ''; });
}
motionButtons.forEach(button => button.addEventListener('click', () => {
  manualPause = !manualPause;
  try { localStorage.setItem('jp-motion-paused', String(manualPause)); } catch {}
  updateMotion();
}));
motionQuery.addEventListener('change', updateMotion);
updateMotion();

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menú');
  navigation.classList.remove('is-open');
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('is-open')) { closeMenu(); menuToggle.focus(); } });
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);

const cards = [...document.querySelectorAll('.project-card')];
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
  let shown = 0;
  cards.forEach(card => {
    card.hidden = category !== 'todos' && card.dataset.category !== category;
    if (!card.hidden) { shown++; card.classList.add('aos-animate'); }
  });
  document.querySelector('#project-count').textContent = `${String(shown).padStart(2, '0')} ${shown === 1 ? 'proyecto' : 'proyectos'}`;
  if (aosReady) window.AOS.refresh();
}));

const projectDialog = document.querySelector('#project-dialog');
const serviceSelect = document.querySelector('#contact-service');
let dialogTrigger = null;
let selectedProject = null;
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  if (!project) return;
  selectedProject = project;
  dialogTrigger = button;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-category').textContent = project.category;
  document.querySelector('#dialog-description').textContent = project.description;
  const img = document.querySelector('#dialog-image');
  img.src = project.image;
  img.alt = `Captura real de ${project.title}`;
  document.querySelector('#dialog-demo').href = project.demo;
  document.querySelector('#dialog-note').textContent = project.note;
  document.querySelector('#dialog-features').replaceChildren(...project.features.map(text => {
    const li = document.createElement('li'); li.textContent = text; return li;
  }));
  projectDialog.showModal();
  document.body.classList.add('dialog-open');
  projectDialog.scrollTop = 0;
}));
function closeProject() { projectDialog.close(); }
document.querySelector('.dialog-close').addEventListener('click', closeProject);
projectDialog.addEventListener('click', event => {
  if (event.target !== projectDialog) return;
  const box = projectDialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) closeProject();
});
projectDialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); dialogTrigger?.focus({ preventScroll: true }); });
document.querySelector('#dialog-consult').addEventListener('click', () => {
  if (selectedProject) {
    serviceSelect.value = selectedProject.service;
    const message = document.querySelector('#contact-message');
    if (!message.value.trim()) message.value = `Me gustó el proyecto ${selectedProject.title} y quiero conversar sobre una web para mi negocio.`;
  }
  closeProject();
});
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => { serviceSelect.value = link.dataset.service; }));

const certificateDialog = document.querySelector('#certificate-dialog');
const certificateTrigger = document.querySelector('#open-certificate');
certificateTrigger.addEventListener('click', event => {
  event.preventDefault();
  certificateDialog.showModal();
  document.body.classList.add('dialog-open');
  certificateDialog.scrollTop = 0;
});
document.querySelector('.certificate-close').addEventListener('click', () => certificateDialog.close());
certificateDialog.addEventListener('click', event => {
  if (event.target !== certificateDialog) return;
  const box = certificateDialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) certificateDialog.close();
});
certificateDialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  certificateTrigger.focus({ preventScroll: true });
});

const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const nameField = document.querySelector('#contact-name');
  const messageField = document.querySelector('#contact-message');
  nameField.setCustomValidity(nameField.value.trim() ? '' : 'Escribí tu nombre.');
  messageField.setCustomValidity(messageField.value.trim().length >= 10 ? '' : 'Contame un poco más de tu idea (al menos 10 caracteres).');
  if (!contactForm.reportValidity()) return;
  const message = `Hola Juan Pablo, soy ${nameField.value.trim()}.\nVi tu portfolio y me interesa: ${serviceSelect.value}.\n\n${messageField.value.trim()}`;
  const url = `https://wa.me/5492644151881?text=${encodeURIComponent(message)}`;
  const opened = window.open(url, '_blank', 'noopener,noreferrer');
  const status = document.querySelector('#form-status');
  status.replaceChildren();
  const text = document.createTextNode('Revisá tu consulta en WhatsApp. Si no se abrió, ');
  const fallback = document.createElement('a');
  fallback.href = url; fallback.target = '_blank'; fallback.rel = 'noopener noreferrer';
  fallback.textContent = 'abrila desde este enlace ↗'; fallback.style.textDecoration = 'underline';
  status.append(text, fallback);
});
contactForm.addEventListener('input', event => { if (event.target.setCustomValidity) event.target.setCustomValidity(''); });

const header = document.querySelector('.site-header');
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress'; scrollProgress.setAttribute('aria-hidden', 'true');
document.body.prepend(scrollProgress);
let scrollFrame = false;
function updateScroll() {
  header.classList.toggle('scrolled', window.scrollY > 20);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.style.transform = `scaleX(${max > 0 ? Math.max(0, Math.min(1, window.scrollY / max)) : 0})`;
  scrollFrame = false;
}
window.addEventListener('scroll', () => { if (!scrollFrame) { scrollFrame = true; requestAnimationFrame(updateScroll); } }, { passive: true });
window.addEventListener('resize', updateScroll, { passive: true });
updateScroll();

const navLinks = [...navigation.querySelectorAll('a[href^="#"]')];
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => { if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
}

const showcase = document.querySelector('.hero-showcase');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
let pointerFrame = 0;
showcase.addEventListener('pointermove', event => {
  if (!finePointer.matches || isMotionPaused()) return;
  cancelAnimationFrame(pointerFrame);
  const box = showcase.getBoundingClientRect();
  const x = (event.clientX - box.left) / box.width - .5;
  const y = (event.clientY - box.top) / box.height - .5;
  pointerFrame = requestAnimationFrame(() => {
    showcase.style.setProperty('--light-x', `${(x + .5) * 100}%`);
    showcase.style.setProperty('--light-y', `${(y + .5) * 100}%`);
    showcase.querySelector('.browser-front').style.translate = `${x * 12}px ${y * 12}px`;
    showcase.querySelector('.browser-back').style.translate = `${x * -8}px ${y * -8}px`;
    showcase.querySelector('.phone-preview').style.translate = `${x * 18}px ${y * 18}px`;
  });
});
showcase.addEventListener('pointerleave', () => {
  cancelAnimationFrame(pointerFrame);
  showcase.querySelectorAll('.mini-browser,.phone-preview').forEach(el => { el.style.translate = ''; });
});
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = String(new Date().getFullYear()); });
