# Juan Pablo Molina · Diseño Web

Portfolio comercial en español, con HTML, SCSS, JavaScript y animaciones AOS. Diseño adaptable a celulares, galería filtrable, fichas de proyectos, servicios, habilidades, preguntas frecuentes y consultas por WhatsApp.

## Ver el portfolio

El CSS y AOS ya están incluidos. Para ver la portada se puede abrir `index.html` directamente. Para recorrer todas las demos —incluidos los módulos de JavaScript de Mawe— y exportar imágenes, conviene usar el servidor local:

```sh
npm start
```

Abrir **http://localhost:4177**. No hace falta instalar dependencias para iniciar el servidor.

## Editar y compilar SCSS

```sh
npm install
npm run build
npm run check
```

- `scss/_tokens.scss`: colores y utilidades.
- `scss/main.scss`: estilos, animaciones, estados de interacción y reglas responsive.
- `assets/styles.css`: CSS compilado y listo para usar.
- `assets/app.js`: filtros, menú, fichas, selección de servicios, contacto y preferencias de animación.
- `dist/`: resultado de `npm run build`, preparado para hosting estático. Generar esta carpeta no publica el sitio.

## Proyectos incluidos

1. **Mawe**: catálogo de imprimibles y kits, filtros, detalle de productos y consultas.
2. **Federico Molina · Contador Público**: presentación profesional y panel interactivo de demostración con datos ficticios.
3. **Valen & amigos**: experiencia de palabras, colores, números y sonidos.

Las demos se encuentran en `proyectos/` y tienen un enlace de regreso al portfolio. Conservan los contactos originales de cada negocio. El panel del contador es ilustrativo, sin base de datos ni gestión real conectada.

## Datos del portfolio

- Nombre: Juan Pablo Molina · Diseño Web.
- WhatsApp: +54 9 264 415 1881.
- Correo: molinapablo72@gmail.com.
- GitHub: https://github.com/Juanpimolina92.

Los datos se muestran en `index.html`, y el destino del formulario está en `assets/app.js`. El formulario valida los campos y abre WhatsApp con el texto preparado. La persona revisa y envía el mensaje desde WhatsApp. No hay envío automático ni almacenamiento de consultas.

React figura en la sección de habilidades y herramientas solicitada por el autor. Este portfolio está implementado en HTML, SCSS y JavaScript; las demos conservan su tecnología original.

## Animaciones y estados

Entradas al hacer scroll con AOS local, elementos flotantes, movimiento de fondo, franja continua, paralaje suave con el cursor, subrayado dibujado y barra de avance de lectura. La referencia de movimiento fue https://nestjs.com/; no se reutilizaron su código ni sus recursos.

Los enlaces, botones y formularios tienen estados `hover`, `active` y `focus-visible`; el texto tiene `::selection`. El menú y los filtros muestran su selección. El menú admite Escape y las fichas usan un diálogo nativo con cierre por Escape.

La preferencia del dispositivo `prefers-reduced-motion` tiene prioridad. El botón del pie permite pausar las animaciones y guarda esta preferencia en el navegador.

## Kit para Instagram

Abrir `instagram.html` desde la vista previa local para ver, regenerar y descargar las piezas. Los PNG finales ya están guardados:

- `instagram/01-presentacion.png`
- `instagram/02-mawe.png`
- `instagram/03-contador.png`
- `instagram/04-valen.png`
- `instagram/05-contacto.png`
- `instagram/06-historia.png`
- `instagram/texto-publicacion.txt`

Las cinco primeras piezas son un carrusel de **1080 × 1350 px**. La sexta es una historia de **1080 × 1920 px**. El generador está en `assets/social.js` y dibuja texto e imágenes en Canvas. La exportación ocurre en el navegador.

## Recursos y publicación

AOS 2.3.4 se distribuye localmente con su licencia MIT en `assets/vendor/`. Montserrat conserva su licencia OFL en `assets/fonts/`. Las demos incluyen sus bibliotecas y licencias, y los materiales visuales proceden de los proyectos originales. El contenido de cada marca pertenece a sus titulares.

No se incluye configuración de despliegue automático. Al elegir un dominio y autorizar la publicación, completar las URLs absolutas de Open Graph y agregar la URL canónica.

`npm run check` verifica referencias locales, sintaxis JavaScript y dimensiones de las piezas PNG. Se revisaron en el navegador la portada, los filtros, las fichas, la precarga del servicio en el formulario, la validación del nombre, el menú móvil y las piezas de Instagram. No se enviaron consultas de prueba a los números de contacto.
