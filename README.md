# Herramientas utilizadas

- HTML5
- CSS3
- SCSS / Sass
- JavaScript
- React y React DOM
- AOS (Animate On Scroll)
- Node.js y npm
- esbuild
- Git y GitHub
- Visual Studio Code

## Hero 3D y animaciones

El hero combina una escultura WebGL en Three.js con las capturas reales de los proyectos. React controla la escena, la navegación y el brillo/inclinación de las cards. La escena se detiene fuera de pantalla, al ocultar la pestaña o al pausar las animaciones. Respeta movimiento reducido y tiene una alternativa CSS si WebGL no está disponible.

### Ejecutar con Next.js

Requisitos: Node.js 20.9 o posterior y npm.

```sh
npm ci
npm run dev
```

Abrir http://127.0.0.1:3000. `app/` contiene el App Router. `index.html` sigue siendo la fuente del contenido: Next la renderiza durante la compilación y monta los efectos React después de hidratar. Los recursos de `public/` son copias generadas; editá los originales en `assets/` y `proyectos/` y reiniciá `npm run dev` para sincronizarlos. Para recompilar cambios de SCSS durante el desarrollo, ejecutá `npm run build:css` y `node scripts/prepare-next.mjs`.

### Archivos para entregar

```sh
npm run build
npm run check
```

- `out/`: exportación estática de Next.js, con su runtime React.
- `dist/`: versión HTML con los mismos efectos; no necesita un servidor Next.
- `npm start`: vista previa local de los archivos originales en http://127.0.0.1:4177. Usar después de `npm run build:static`. Los módulos JavaScript necesitan HTTP; no abrir con `file://`.

Ninguno de estos comandos publica ni sube archivos.

### Geometría con Python

```sh
npm run generate:hero
```

`scripts/generate-hero.py` crea `src/generated/hero-mesh.json`: un nudo tubular cerrado de 3.840 vértices. Usa solo la biblioteca estándar de Python 3. El JSON está incluido en el repositorio, por lo que Python solo es necesario para regenerar la geometría; no se ejecuta en el navegador ni hace falta un backend.

Los estilos de profundidad están en `scss/_depth.scss`, la escena en `src/hero-webgl.js` y las interacciones en `src/interactive-effects.jsx`. Las bibliotecas se empaquetan localmente, sin CDN.
