# Advance Cycling

Sitio web de **Advance Cycling Team**, el programa costarricense de desarrollo de ciclismo juvenil que es parte de Advance Talent Hub.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, Cache Components)
- [shadcn/ui](https://ui.shadcn.com) sobre Base UI + Tailwind CSS v4
- [Zustand](https://zustand.docs.pmnd.rs) para el idioma (ES/EN), persistido en `localStorage`

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

## Estructura

```
src/
  app/                 layout, página y tema global (globals.css)
  components/
    sections/          una sección del sitio por archivo (hero, riders, talent-hub, ...)
    site/              header, footer, logo AdvanceMark, CtaLink, toggle de idioma
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
