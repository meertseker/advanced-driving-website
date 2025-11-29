const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ileri-surus-egitimi.example.com';

const generateSitemap = () => {
  // Static pages
  const staticPages = [
    '/',
  ];

  const allPages = [...staticPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map((page) => {
      return `
    <url>
      <loc>${SITE_URL}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${page === '/' ? '1.0' : '0.8'}</priority>
    </url>
  `;
    })
    .join('')}
</urlset>`;

  const filePath = path.resolve(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(filePath, sitemap, 'utf-8');
  console.log('✅ sitemap.xml generated!');
};

generateSitemap();

