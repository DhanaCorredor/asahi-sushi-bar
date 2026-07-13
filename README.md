# Asahi Sushi Bar — Web

Sitio web del restaurante **Asahi Sushi Bar** (Leganés, Madrid).
_"El sol nace en cada bocado."_

Sushi vibrante y urbano. Identidad basada en el manual de marca oficial
("Breaking the Rules"): paleta rojo / amarillo / negro y estética wabi-sabi.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4** (configuración por CSS en `src/app/globals.css`)
- **TypeScript**
- Gestor de paquetes: **pnpm**
- Fuentes: Montserrat + Noto Sans JP (vía `next/font`, self-hosted)

## Desarrollo

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # build de producción
pnpm start      # servir el build
pnpm lint
```

## Estructura

```
src/
  app/
    layout.tsx        Layout raíz: fuentes, metadata, Navbar + Footer
    page.tsx          Portada (hero, destacados, nosotros, carta, contacto)
    carta/page.tsx    Carta completa
    globals.css       Sistema de diseño (paleta, tipografía, utilidades)
  components/          Navbar, Footer, Hero, SectionHeading, DishRow, CartaNav, icons
  data/
    menu.ts           Carta completa (fuente única de verdad)
    site.ts           Datos del negocio: contacto, horarios, redes
public/
  brand/              Logotipos (versiones claras/oscuras)
  icon.svg            Favicon
assets-marca/         Material original (manual de marca, menú PDF, logos)
```

## Cómo editar el contenido

- **Platos y precios** → `src/data/menu.ts`
- **Dirección, teléfono, horarios, redes** → `src/data/site.ts`
- **Destacados de la portada** → `signatureDishes` en `src/data/menu.ts`
- **Colores / tipografías** → `@theme` en `src/app/globals.css`

## Identidad de marca

| Color          | Hex       | Uso                         |
| -------------- | --------- | --------------------------- |
| Rojo Amanecer  | `#E64A41` | Acento principal, CTA       |
| Amarillo Sol   | `#FDB813` | Acento secundario, precios  |
| Negro Sumi-e   | `#1A1A1A` | Fondo, contraste dramático  |

Tipografía: Montserrat (Montserrat / Open Sans según el manual).

## Pendiente / mejoras futuras

- Sustituir el panel de marca de "Nosotros" por fotografía de plato real
  (estilo wabi-sabi: iluminación lateral, plano cenital, espacio negativo).
- Añadir fotos de platos a los destacados cuando estén disponibles.
- Considerar sistema de reservas online (actualmente vía WhatsApp).
