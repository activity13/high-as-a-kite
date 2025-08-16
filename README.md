# Viure Web

Página web para **Viure**, una agencia de aventuras para nómadas digitales. Desarrollada con Next.js 15, TypeScript, Tailwind CSS, y DaisyUI. Soporta 2 idiomas (español e inglés) y está optimizada para SEO.

## Propósito

Ofrecer una experiencia digital moderna y responsiva que promueva viajes en grupo para nómadas digitales, con un diseño inspirado en nomatribe.co, formularios de contacto, y un blog para SEO.

## Tecnologías

- **Next.js 15**: Framework principal (App Router).
- **TypeScript**: Tipado estático para robustez.
- **Tailwind CSS + DaisyUI**: Estilizado moderno y personalizable.
- **next-intl**: Multilenguaje (es, en, fr, pt).
- **Framer Motion**: Animaciones suaves.
- **EmailJS**: Formularios sin backend.
- **next-seo**: Optimización SEO.
- **@vercel/analytics**: Analíticas de rendimiento.

## Instalación

1. Clona el repositorio: `git clone https://github.com/activity13/viure-experience.git`
2. Instala dependencias: `npm install`
3. Configura variables de entorno (`.env.local` para EmailJS).
4. Ejecuta en desarrollo: `npm run dev`

## Estructura

viure-web/
├── /src
| ├── /app
│ | ├── /[...locale] (rutas: /es, /en)
| │ ├── layout.tsx
| │ ├── page.tsx
| │ ├── global.css
| │ └── /terms-conditions
| | | └── page.tsx
│ | └──/components (Hero.tsx, DestinationCard.tsx, etc.)
| └──/i18n
| | └── navigation.ts
| | ├── request.ts
| | └── routing.ts
├── /public (imágenes, videos)
├── /locales (es.json, en.json)
├── /lib (emailjs.ts, seo.ts)
├── next.config.js
├── tsconfig.json
├── tailwind.config.js
├── .eslintrc.json
├── .prettierrc
├── .env.local
└── README.md
text## Despliegue

- **Plataforma**: Vercel (URL: `viure-web.vercel.app`).
- **Dominio**: Configurado con GoDaddy (pendiente: `viure.com`).

## Propiedad

Código exclusivo para Viure. Desarrollado por [Tu Nombre/VeryFazty]. Transferible al cliente al finalizar.

## Contribución

- Reporta issues en GitHub.
- Contacto: [tu-email@veryfazty.com].

## Licencia

Sin licencia pública. Propiedad exclusiva de Viure (ver acuerdo con el cliente).
