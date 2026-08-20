# Franck Vukelic — Portfolio (Astro)

Clone de [fvukelic.com](https://fvukelic.com/) reconstruido con **Astro** (estático, sin frameworks de UI). Es un portfolio personal de desarrollador full-stack con las mismas secciones, textos, imágenes y estilos que el sitio original.

## Páginas

| Ruta            | Contenido                                              |
| --------------- | ------------------------------------------------------ |
| `/`             | Inicio: Hero, About + Stack, Projects, Experience, Certification, Contact |
| `/gallery`      | Galería completa de proyectos con filtros (💜, App, Design, Next, React, Mobile) |
| `/privacy`      | Política de privacidad                                 |
| `/legal-notice` | Aviso legal                                            |

## Stack

- [Astro](https://astro.build) (salida estática)
- CSS puro con variables de diseño (sin Tailwind)
- Fuente [Poppins](https://fontsource.org/fonts/poppins) autoalojada vía `@fontsource/poppins`
- JavaScript vanilla para: reveal al hacer scroll, menú lateral con sección activa, modales de proyectos y filtros de la galería

## Desarrollo

```bash
npm install
npm run dev        # servidor de desarrollo
npm run build      # build estático en dist/
npm run preview    # previsualizar el build
```

## Notas sobre el clon

- **Un solo idioma (inglés)**: el sitio original tiene versión EN/FR con selector de idioma. Este clon incluye solo la versión en inglés; el selector de idioma del navbar se omitió.
- Las animaciones de la web original (framer-motion/GSAP) se recrearon con CSS y JavaScript vanilla.
- Los 78 proyectos de la galería y sus imágenes (`public/gallery/`) se descargaron del sitio original.
- Los enlaces externos (CV, Calendly, repos de GitHub, demos) apuntan a los destinos originales.
