import type { MetadataRoute } from 'next';
import { SITE } from './lib/site';
import { INTERNATIONAL, DOMESTIC } from './lib/destination';

export const dynamic = 'force-static';

// Update this date whenever you publish meaningful changes.
const LAST_UPDATED = '2026-10-10';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE.url}/`, lastModified: LAST_UPDATED, changeFrequency: 'weekly', priority: 1 },
    ...[...INTERNATIONAL, ...DOMESTIC].map((d) => ({
      url: `${SITE.url}/destinations/${d.slug}/`,
      lastModified: LAST_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}