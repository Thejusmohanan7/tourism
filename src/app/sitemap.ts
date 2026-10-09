import type { MetadataRoute } from 'next';
import { SITE } from './lib/site';

// Update this date whenever you publish meaningful changes.
const LAST_UPDATED = '2026-10-10';

export default function sitemap(): MetadataRoute.Sitemap {
  // Add each new page (e.g. /hotels, /houseboats, /kayaking) here.
  return [{ url: `${SITE.url}/`, lastModified: LAST_UPDATED, changeFrequency: 'weekly', priority: 1 }];
}