import fs from 'fs';
import path from 'path';

function getGuides() {
  const guideFiles = fs.readdirSync(path.join(process.cwd(), 'app/guides/content'));
  return guideFiles.map(filename => ({
    slug: filename.replace('.md', ''),
    lastModified: new Date().toISOString(),
  }));
}

export default function sitemap() {
  const baseUrl = 'https://push-startup-hub.vercel.app';
  
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/services',
    '/ai-tools',
    '/guides',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const guides = getGuides().map(guide => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: guide.lastModified,
  }));

  return [...staticPages, ...guides];
}
