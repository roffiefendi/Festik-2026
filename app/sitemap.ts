import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://festival-teknik-2026.vercel.app', lastModified: new Date() },
    { url: 'https://festival-teknik-2026.vercel.app/studio', lastModified: new Date() },
  ];
}
