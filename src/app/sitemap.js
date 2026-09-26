export default function sitemap() {
  const base = 'https://efficiency.co.th';
  const now = new Date().toISOString();

  const routes = [
    { url: '/',         priority: 1.0,  changeFrequency: 'monthly' },
    { url: '/work',            priority: 0.95, changeFrequency: 'monthly' },
    { url: '/standard',        priority: 0.9,  changeFrequency: 'monthly' },
    { url: '/approach',        priority: 0.85, changeFrequency: 'monthly' },
    { url: '/taste-and-intent',priority: 0.8,  changeFrequency: 'monthly' },
    { url: '/studio',          priority: 0.7,  changeFrequency: 'yearly' },
    { url: '/contact',  priority: 0.8,  changeFrequency: 'yearly' },
    { url: '/terms',    priority: 0.3,  changeFrequency: 'yearly' },
    { url: '/privacy',  priority: 0.3,  changeFrequency: 'yearly' },
  ];

  return routes.map((r) => ({
    url: `${base}${r.url}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
