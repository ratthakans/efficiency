export default function sitemap() {
  const base = 'https://efficiency.co.th';
  const now  = new Date().toISOString();

  const routes = [
    { url: '/',         priority: 1.0,  changeFrequency: 'weekly' },
    { url: '/services', priority: 0.9,  changeFrequency: 'monthly' },
    { url: '/work',     priority: 0.85, changeFrequency: 'monthly' },
    { url: '/pricing',  priority: 0.88, changeFrequency: 'monthly' },
    { url: '/process',  priority: 0.8,  changeFrequency: 'monthly' },
    { url: '/stack',    priority: 0.75, changeFrequency: 'monthly' },
    { url: '/about',    priority: 0.7,  changeFrequency: 'monthly' },
    { url: '/contact',  priority: 0.9,  changeFrequency: 'yearly' },
  ];

  return routes.map(r => ({
    url:             `${base}${r.url}`,
    lastModified:    now,
    changeFrequency: r.changeFrequency,
    priority:        r.priority,
  }));
}
