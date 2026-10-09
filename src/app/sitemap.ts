import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  // Add each new page (e.g. /hotels, /houseboats, /kayaking) here.
  return [{ url: `${SITE.url}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 }];
}
