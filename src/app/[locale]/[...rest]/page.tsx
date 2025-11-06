import { notFound } from 'next/navigation';

/**
 * Catch all other routes not handled by Next.js and redirect to 404.
 */
// Descripción

// Página server (sin "use client") que actúa como ruta “catch-all” bajo un segmento de idioma.
// Llama a notFound() y fuerza un 404 para cualquier subruta no declarada dentro de un locale.
// Ubicación y patrón de ruta

// Ruta: page.tsx
// [locale]: segmento de idioma (p. ej., es, en).
// [...rest]: captura cualquier profundidad de subrutas (a, a/b, a/b/c).
// Comportamiento

// Al renderizar, ejecuta notFound() → Next.js muestra la UI 404 más cercana (not-found.ts del propio segmento o global).
// Código de estado 404 y layout envolvente habitual del App Router.
// No acepta props ni params (no los usa).
// Rutas afectadas (ejemplos)

// /es/cualquier/cosa → 404
// /en/otra/ruta/mas → 404
// Solo las rutas explícitas definidas bajo [locale] se renderizan; el resto cae aquí y se convierte en 404.
// Cuándo usarlo

// Para cerrar la superficie de rutas bajo un locale y evitar slugs no soportados.
// Para garantizar que solo páginas permitidas (definidas explícitamente) sean accesibles por idioma.
// Personalización

// Redirigir en lugar de 404: sustituye notFound() por redirect('/'), o a una página de aterrizaje del locale.
// Manejo condicional: si luego habilitas ciertos slugs, muévelos a rutas nombradas (app/[locale]/mi-pagina/page.tsx) y elimina/ajusta este catch-all.
// 404 custom: añade not-found.ts en app/[locale]/ para un 404 específico por idioma.
// Consideraciones

// Server Component: no usar hooks de cliente aquí.
// SEO: evita contenido duplicado; las rutas no válidas responden 404.
// Caching: por defecto no-cache para 404 en Next; si añades lógica, configura headers si es necesario.
export default function CatchAllPage() {
  notFound();
}
