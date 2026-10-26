import * as THREE from 'three';
import mesh from './generated/hero-mesh.json';

export function createHeroScene(canvas, showcase) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.5;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 30);
  camera.position.set(0, 0, 7.8);
  const sculpture = new THREE.Group();
  scene.add(sculpture);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(mesh.positions, 3));
  geometry.setIndex(mesh.indices);
  geometry.computeVertexNormals();
  const material = new THREE.MeshPhysicalMaterial({ color: 0x657c48, metalness: 0.42, roughness: 0.24, clearcoat: 1, clearcoatRoughness: 0.16 });
  const knot = new THREE.Mesh(geometry, material);
  sculpture.add(knot);
  sculpture.rotation.set(0.45, -0.35, -0.3);

  scene.add(new THREE.HemisphereLight(0xfff9e8, 0x304936, 3));
  const key = new THREE.DirectionalLight(0xfff5dc, 6);
  key.position.set(-3, 4, 5); scene.add(key);
  const rim = new THREE.DirectionalLight(0xe0edff, 5);
  rim.position.set(4, -1, 2); scene.add(rim);
  const back = new THREE.DirectionalLight(0xe8aa7a, 4);
  back.position.set(0, 2, -4); scene.add(back);

  const satelliteGeometry = new THREE.SphereGeometry(0.085, 20, 16);
  const satelliteMaterial = new THREE.MeshStandardMaterial({ color: 0xb87850, metalness: 0.45, roughness: 0.25 });
  const satellites = Array.from({ length: 5 }, (_, i) => {
    const sphere = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
    const a = i * Math.PI * 2 / 5;
    sphere.position.set(Math.cos(a) * 2, Math.sin(a) * 1.65, Math.sin(a) * 0.6);
    sculpture.add(sphere);
    return sphere;
  });

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  let frame = 0, last = 0, elapsed = 0, visible = true, lost = false, destroyed = false;
  let pointerX = 0, pointerY = 0, smoothX = 0, smoothY = 0;
  const paused = () => reduced.matches || document.documentElement.classList.contains('no-motion');
  function draw(time = 0) {
    frame = 0;
    if (destroyed || lost) return;
    const dt = last ? Math.min((time - last) / 1000, 0.05) : 0;
    last = time;
    if (!paused()) elapsed += dt;
    smoothX += (pointerX - smoothX) * 0.06;
    smoothY += (pointerY - smoothY) * 0.06;
    sculpture.rotation.y = -0.35 + elapsed * 0.14 + smoothX * 0.38;
    sculpture.rotation.x = 0.45 + Math.sin(elapsed * 0.35) * 0.12 + smoothY * 0.22;
    sculpture.position.y = Math.sin(elapsed * 0.8) * 0.07;
    satellites.forEach((sphere, i) => { sphere.scale.setScalar(1 + Math.sin(elapsed + i) * 0.18); });
    renderer.render(scene, camera);
    if (visible && !document.hidden && !paused()) frame = requestAnimationFrame(draw);
  }
  function refresh() {
    cancelAnimationFrame(frame); frame = 0; last = 0;
    if (paused()) { pointerX = pointerY = smoothX = smoothY = 0; }
    if (visible && !document.hidden && !lost) draw();
  }
  function resize() {
    const { width, height } = canvas.getBoundingClientRect();
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.position.z = camera.aspect < 0.9 ? 8.6 : 7.8;
    camera.updateProjectionMatrix(); refresh();
  }
  function move(event) {
    if (paused() || !fine.matches || event.pointerType === 'touch') return;
    const box = showcase.getBoundingClientRect();
    pointerX = (event.clientX - box.left) / box.width - 0.5;
    pointerY = (event.clientY - box.top) / box.height - 0.5;
  }
  const leave = () => { pointerX = pointerY = 0; };
  const contextLost = event => {
    event.preventDefault(); lost = true; cancelAnimationFrame(frame);
    canvas.parentElement.classList.remove('is-rendered');
  };
  const contextRestored = () => { lost = false; canvas.parentElement.classList.add('is-rendered'); resize(); };
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);
  const intersection = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; refresh(); });
  intersection.observe(showcase);
  const motionObserver = new MutationObserver(refresh);
  motionObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  reduced.addEventListener('change', refresh);
  document.addEventListener('visibilitychange', refresh);
  showcase.addEventListener('pointermove', move, { passive: true });
  showcase.addEventListener('pointerleave', leave);
  canvas.addEventListener('webglcontextlost', contextLost);
  canvas.addEventListener('webglcontextrestored', contextRestored);
  resize();

  return () => {
    destroyed = true; cancelAnimationFrame(frame);
    resizeObserver.disconnect(); intersection.disconnect(); motionObserver.disconnect();
    reduced.removeEventListener('change', refresh);
    document.removeEventListener('visibilitychange', refresh);
    showcase.removeEventListener('pointermove', move); showcase.removeEventListener('pointerleave', leave);
    canvas.removeEventListener('webglcontextlost', contextLost); canvas.removeEventListener('webglcontextrestored', contextRestored);
    geometry.dispose(); material.dispose(); satelliteGeometry.dispose(); satelliteMaterial.dispose(); renderer.dispose();
  };
}
