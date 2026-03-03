export default function sitemap() {
  const base = 'https://efficiency.co.th';
  const now  = new Date().toISOString();

  return [
    { url: `${base}/`,        lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/about`,   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services`,lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/work`,    lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/stack`,   lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
