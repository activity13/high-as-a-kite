/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://highasakite.pe',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000, // Number of URLs per sitemap file
  exclude: ['/api/*', '/en/api/*', '/es/api/*'], // Excluir rutas API localizadas

  // Configuración por defecto para las páginas
  changefreq: 'weekly',
  priority: 0.7,

  // Configuraciones específicas por ruta
  transform: async (config, path) => {
    // Prioridad alta para la home y páginas principales
    if (path === '/' || path === '/es' || path === '/en') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      };
    }

    if (path.includes('/sports') || path.includes('/spots')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      };
    }

    // Prioridad baja para legales
    if (path.includes('/privacidad') || path.includes('/terminos')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.3,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      };
    }

    // Default transformation
    return {
      loc: path, // Use the path provided by default crawler
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/*?*', '/_next/*'], // Disallow query strings y next internals si fuera necesario
      },
    ],
  },
};
