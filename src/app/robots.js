export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://efficiency.co.th/sitemap.xml',
    host:    'https://efficiency.co.th',
  };
}
