# Portfolio — Omar Diego

Portfolio personal de Omar Sebastián Diego Cortés, estudiante de Ingeniería en
Desarrollo de Software e IT Trainee. Sitio estático construido con **Astro**, sin
frameworks de UI, bilingüe (español / inglés) y desplegado en Vercel.

## Secciones

| Ruta            | Contenido                                                                     |
| --------------- | ---------------------------------------------------------------------------- |
| `/`             | Inicio: Hero, Sobre mí + Stack, Proyectos, Experiencia, Certificaciones, Contacto |
| `/gallery`      | Galería completa de proyectos con filtros por tecnología                     |
| `/privacy`      | Política de privacidad                                                       |
| `/legal-notice` | Aviso legal                                                                  |

Cada ruta tiene su equivalente en inglés bajo el prefijo `/en` (`/en/`, `/en/gallery`, …).

## Stack

- [Astro](https://astro.build) con `output: 'server'` y el adaptador de Vercel
- CSS puro con variables de diseño (sin Tailwind)
- Fuentes [Sora](https://fontsource.org/fonts/sora) y [Poppins](https://fontsource.org/fonts/poppins) autoalojadas vía `@fontsource/*`
- [astro-icon](https://www.astroicon.dev/) con el set de iconos de Lucide
- JavaScript vanilla para: reveal al hacer scroll, navegación lateral con sección activa, modales de proyectos, filtros de la galería y cambio de tema claro/oscuro

## Internacionalización

- Idioma por defecto: español. El contenido vive en `src/i18n/content.ts` y las cadenas de UI en `src/i18n/ui.ts`.
- `src/middleware.ts` corre en cada request en Vercel: lee el país del visitante (`x-vercel-ip-country`) y redirige a `/en` a quienes no vienen de un país hispanohablante, salvo que ya exista una preferencia guardada en la cookie `pf_lang`.

## Certificaciones

Las credenciales se definen en `src/i18n/content.ts`. Las que tienen insignia de
Credly enlazan a su página de verificación pública; las imágenes de las insignias
están en `public/badges/`.

## Créditos

El layout y la estructura de secciones de este portfolio se inspiran en el
portfolio de [Franck Vukelic](https://fvukelic.com/), usado como referencia. La
paleta de colores, la tipografía, el contenido, los proyectos, las
certificaciones, la internacionalización y la implementación en Astro son míos.

## Desarrollo

```bash
pnpm install
pnpm dev        # servidor de desarrollo
pnpm build      # build en dist/
pnpm preview    # previsualizar el build
```

## Estructura

```
src/
  components/   Hero, About, Projects, Experience, Certification, Navbar, Footer, ...
  layouts/      Base.astro
  pages/        rutas en español + carpeta en/ con las rutas en inglés
  i18n/         content.ts (contenido) y ui.ts (cadenas de interfaz)
  styles/       global.css
  middleware.ts redirección por idioma según geolocalización
public/
  badges/       insignias de Credly
  gallery/      imágenes de los proyectos
  docs/         CV
```
