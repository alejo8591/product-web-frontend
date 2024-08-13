export default function sitemap() {
  return [
    {
      url: 'http:me.com/register',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2
    },
    {
      url: 'http:me.com/products/list',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: 'http:me.com/products/about',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5
    }
  ]
}