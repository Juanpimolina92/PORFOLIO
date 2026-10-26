import { useEffect, useRef } from 'react';

export function HeroScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas.parentElement;
    const showcase = host.closest('.hero-showcase');
    let disposed = false;
    let cleanup = () => {};

    import('./hero-webgl.js').then(({ createHeroScene }) => {
      if (disposed) return;
      try {
        cleanup = createHeroScene(canvas, showcase);
        host.classList.add('is-rendered');
      } catch (error) {
        // The CSS sculpture remains visible on devices without WebGL.
        console.info('El hero usa su alternativa sin WebGL.', error.message);
      }
    }).catch(() => {});

    return () => { disposed = true; cleanup(); host.classList.remove('is-rendered'); };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}
