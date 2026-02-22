# 🌊 HAAK – High As A Kite

Sitio web oficial de **High As A Kite – Kite School**, una escuela de deportes acuáticos enfocada en kitesurf, surf y experiencias en el mar.

---

## 🚀 Tecnologías principales

- [Next.js 15](https://nextjs.org/) – framework React con SSR/SSG.
- [React 19](https://react.dev/) – librería principal para UI.
- [Tailwind CSS 4](https://tailwindcss.com/) – estilos utilitarios.
- [DaisyUI 5](https://daisyui.com/) – componentes sobre Tailwind.
- [Framer Motion 12](https://www.framer.com/motion/) – animaciones fluidas.
- [Lucide React](https://lucide.dev/) y [React Icons](https://react-icons.github.io/react-icons/) – íconos.
- [next-intl](https://next-intl-docs.vercel.app/) – internacionalización (multilenguaje).
- [next-sitemap](https://www.npmjs.com/package/next-sitemap) – generación de sitemap para SEO.
- [EmailJS](https://www.emailjs.com/) – envío de formularios vía email.
- [Vercel Analytics](https://vercel.com/analytics) – métricas de uso y rendimiento.

---

## 📂 Estructura inicial del proyecto

```bash
├── public/          # Recursos estáticos (favicon, imágenes, etc.)
├── src/
│   ├── app/         # Páginas y layouts de Next.js (App Router)
│   ├── components/  # Componentes reutilizables
│   ├── lib/         # Funciones auxiliares y hooks
│   └── styles/      # Estilos globales y configuraciones
├── package.json
└── README.md

🎨 Identidad de marca

Arquetipo: El Explorador → aventura, libertad, conexión con la naturaleza.

Paleta de colores:

Azul claro #92C2D2

Azul intenso #0186B8

Coral #EE715E

Amarillo claro #FFE9A7

Tipografías: font-archivo-black Pro (primaria), Helvetica (secundaria).

Eslogan: “Tan alto como una cometa”.

📌 Funcionalidades previstas

🌐 Landing page con secciones dinámicas.

🏄 Información sobre la escuela, deportes y experiencias.

🎥 Galería multimedia (fotos + videos).

📨 Formulario de contacto / reservas (via EmailJS).

🌍 Internacionalización (next-intl).

📈 SEO optimizado (next-sitemap).

📊 Analítica integrada (@vercel/analytics).

📱 Integración con redes sociales (Instagram feed).

⚡ Instalación y uso
        # Clonar el repositorio
        git clone https://github.com/activity13/high-as-a-kite.git

        # Instalar dependencias
        npm install

        # Ejecutar en desarrollo
        npm run dev

        # Build de producción
        npm run build

        # Generar sitemap
        npm run postbuild

📦 Deploy

Hosting recomendado: Vercel

Compatible con despliegue automático mediante integración con GitHub.

👥 Créditos

Cliente: High As A Kite – Kite School

Diseño y branding: estrategas.pe

Desarrollo web:

📌 Notas técnicas

El proyecto usa Turbopack (next dev --turbopack) para desarrollo rápido.

ESLint y Prettier configurados para mantener buenas prácticas.

Soporte completo para TypeScript.

## 🤝 Contribución

¡Gracias por tu interés en contribuir al proyecto!
Sigue estas pautas para mantener un flujo de trabajo claro y ordenado.

### 🐛 Issues
- Usa los **issues de GitHub** para reportar bugs, proponer nuevas funcionalidades o mejoras.
- Sé claro y específico al describir el problema, agrega pasos para reproducirlo o mockups si aplica.

### 🔀 Pull Requests
1. Haz un fork del repositorio.
2. Crea una nueva rama para tu feature/fix:

   git checkout -b feature/nombre-funcionalidad
Realiza tus cambios siguiendo las guías de estilo.

Asegúrate de que el proyecto compile sin errores:

Copiar código
npm run build
npm run lint
Envía tu PR con una descripción clara de los cambios.

📝 Convenciones de commits
    Usamos Conventional Commits para mantener un historial legible:

    feat: nueva funcionalidad

    fix: corrección de errores

    docs: cambios en documentación

    style: cambios de formato/estilo (sin lógica)

    refactor: refactorización de código

    test: agregar o corregir tests

    chore: mantenimiento general

    Ejemplos:

    Copiar código
    feat: agregar sección de galería multimedia
    fix: corregir bug en formulario de contacto
    docs: actualizar instrucciones de despliegue

📐 Estilo de código
Se recomienda usar Prettier para mantener un formato uniforme.

ESLint está configurado para buenas prácticas de React/Next.js.

Usa TypeScript en nuevos módulos y componentes.


```
