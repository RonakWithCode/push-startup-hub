export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://push-startup-hub.vercel.app/sitemap.xml',
  };
}
