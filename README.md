# Advance Cycling

Sitio web de **Advance Cycling Team**, el programa costarricense de desarrollo de ciclismo juvenil que es parte de Advance Talent Hub.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, Cache Components)
- [shadcn/ui](https://ui.shadcn.com) sobre Base UI + Tailwind CSS v4
- [Zustand](https://zustand.docs.pmnd.rs) para el idioma (EN/ES, inglés por defecto), persistido en `localStorage`

## Desarrollo

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

```bash
npm run build && npm start
```

Variable opcional: `NEXT_PUBLIC_SITE_URL` (URL pública, para las imágenes de Open Graph).

## Páginas

| Ruta | Contenido |
| --- | --- |
| `/` | Portada: hero, contexto, el problema y enlaces a cada página |
| `/project` | Qué es Advance Cycling |
| `/talent-hub` | Advance Cycling Team es parte de Advance Talent Hub |
| `/method` | Los 4 pasos del método |
| `/riders` | Los atletas |
| `/growth` | Plan de crecimiento 2026–2028 |
| `/team` | El equipo |
| `/partners` | Cómo apoyar el proyecto (botón "Support the project") |

El orden del menú y de la navegación anterior/siguiente sale de `navItems` en `src/lib/site.ts`.

## Estructura

```
src/
  app/                 layout (header + footer), una carpeta por página y tema global (globals.css)
  components/
    sections/          el contenido de cada página (hero, riders, talent-hub, ...)
    site/              header, footer, logo AdvanceMark, CtaLink, toggle de idioma, ExploreGrid, PageNav
    ui/                componentes de shadcn
  content/dictionary.ts  todo el texto del sitio en español e inglés
  store/language-store.ts  store de Zustand del idioma
  hooks/use-dictionary.ts  devuelve el texto del idioma activo
public/images/         fotos y logo
```

### Editar textos

Todo el contenido vive en `src/content/dictionary.ts`. El objeto `en` está tipado contra `es`, así que TypeScript avisa si falta una traducción.

### Colores y tipografía

Los tokens de marca (`--ink`, `--lime`, `--sky`, ...) están en `src/app/globals.css` y alimentan también los tokens de shadcn (`--primary`, `--card`, ...).
