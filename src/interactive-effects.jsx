import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { HeroScene } from './hero-scene.jsx';

function useProjectSpotlights() {
  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const cleanups = [...document.querySelectorAll('.project-visual')].map(card => {
      let frame = 0;
      const move = event => {
        if (!finePointer.matches || reducedMotion.matches || document.documentElement.classList.contains('no-motion')) return;
        cancelAnimationFrame(frame);
        const box = card.getBoundingClientRect();
        const x = event.clientX - box.left;
        const y = event.clientY - box.top;
        frame = requestAnimationFrame(() => {
          card.style.setProperty('--spot-x', `${x}px`);
          card.style.setProperty('--spot-y', `${y}px`);
          card.style.setProperty('--tilt-x', `${-(y / box.height - 0.5) * 7}deg`);
          card.style.setProperty('--tilt-y', `${(x / box.width - 0.5) * 9}deg`);
        });
      };
      const leave = () => {
        cancelAnimationFrame(frame);
        card.style.removeProperty('--tilt-x');
        card.style.removeProperty('--tilt-y');
        card.style.removeProperty('--spot-x');
        card.style.removeProperty('--spot-y');
      };
      const resetOnPause = () => { if (reducedMotion.matches || document.documentElement.classList.contains('no-motion')) leave(); };
      const observer = new MutationObserver(resetOnPause);
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
      reducedMotion.addEventListener('change', resetOnPause);
      card.addEventListener('pointermove', move, { passive: true });
      card.addEventListener('pointerleave', leave);
      card.addEventListener('blur', leave);
      return () => {
        leave(); observer.disconnect();
        reducedMotion.removeEventListener('change', resetOnPause);
        card.removeEventListener('pointermove', move);
        card.removeEventListener('pointerleave', leave);
        card.removeEventListener('blur', leave);
      };
    });
    return () => cleanups.forEach(cleanup => cleanup());
  }, []);
}

function NavigationAccent({ navigation }) {
  const [indicator, setIndicator] = useState({ x: 0, y: 0, width: 0, height: 0, visible: false });

  useEffect(() => {
    let hovered = null;
    let focused = null;
    let frame = 0;
    let disposed = false;
    const desktop = window.matchMedia('(min-width: 761px)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const linkFor = element => element instanceof Element ? element.closest('#navigation a') : null;

    const measure = () => {
      if (disposed) return;
      const link = hovered || focused || navigation.querySelector('a[aria-current]');
      if (!link || !navigation.getClientRects().length || !link.getClientRects().length) {
        setIndicator(previous => previous.visible ? { ...previous, visible: false } : previous);
        return;
      }
      const navBox = navigation.getBoundingClientRect();
      const linkBox = link.getBoundingClientRect();
      const padding = desktop.matches ? 11 : 0;
      const height = desktop.matches ? 42 : linkBox.height;
      const next = {
        x: Math.round(linkBox.left - navBox.left - padding),
        y: Math.round(desktop.matches ? (navBox.height - height) / 2 : linkBox.top - navBox.top),
        width: Math.round(linkBox.width + padding * 2),
        height: Math.round(height),
        visible: true
      };
      setIndicator(previous => Object.keys(next).every(key => previous[key] === next[key]) ? previous : next);
    };
    const schedule = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(measure); };
    const pointerOver = event => {
      if (!finePointer.matches || event.pointerType === 'touch') return;
      hovered = linkFor(event.target);
      schedule();
    };
    const pointerLeave = () => { hovered = null; schedule(); };
    const focusIn = event => { hovered = null; focused = linkFor(event.target); schedule(); };
    const focusOut = event => { focused = linkFor(event.relatedTarget); schedule(); };
    const observer = new MutationObserver(schedule);
    observer.observe(navigation, { subtree: true, attributes: true, attributeFilter: ['aria-current', 'class'] });
    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(navigation);
    navigation.addEventListener('pointerover', pointerOver);
    navigation.addEventListener('pointerleave', pointerLeave);
    navigation.addEventListener('focusin', focusIn);
    navigation.addEventListener('focusout', focusOut);
    window.addEventListener('resize', schedule, { passive: true });
    navigation.classList.add('has-react-effects');
    document.fonts.ready.then(schedule);
    schedule();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      navigation.removeEventListener('pointerover', pointerOver);
      navigation.removeEventListener('pointerleave', pointerLeave);
      navigation.removeEventListener('focusin', focusIn);
      navigation.removeEventListener('focusout', focusOut);
      window.removeEventListener('resize', schedule);
      navigation.classList.remove('has-react-effects');
    };
  }, [navigation]);

  return <span
    className="nav-react-indicator"
    data-visible={indicator.visible}
    style={{ width: indicator.width, height: indicator.height, transform: `translate3d(${indicator.x}px, ${indicator.y}px, 0)` }}
  />;
}

export function InteractiveEffects() {
  const [targets, setTargets] = useState(null);
  useProjectSpotlights();
  useEffect(() => {
    const navigation = document.querySelector('#navigation');
    const hero = document.querySelector('#hero-scene');
    const mount = document.createElement('div');
    mount.className = 'nav-react-layer';
    mount.setAttribute('aria-hidden', 'true');
    navigation?.prepend(mount);
    setTargets({ navigation, mount, hero });
    return () => mount.remove();
  }, []);
  if (!targets) return null;
  return <>
    {targets.navigation && createPortal(<NavigationAccent navigation={targets.navigation} />, targets.mount)}
    {targets.hero && createPortal(<HeroScene />, targets.hero)}
  </>;
}
