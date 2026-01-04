import type { APIRoute } from 'astro';

const siteUrl = 'https://hovue.dev';

const staticPages = [
  '',
  '/docs',
  '/docs/installation',
  '/docs/quick-start',
  '/docs/api',
  '/docs/animations',
  '/docs/examples',
];

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (path) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
