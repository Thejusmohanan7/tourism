import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { SITE } from './lib/site'

const display = Cormorant_Garamond({
  subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display', display: 'swap',
});
const body = Inter({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} | ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  keywords: [...SITE.keywords],
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  alternates: { canonical: '/' },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website', locale: 'en_IN', url: '/', siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`, description: SITE.description,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `${SITE.name} travel` }],
  },
  twitter: {
    card: 'summary_large_image', title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description, images: ['/og-image.jpg'],
  },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
  // verification: { google: 'YOUR_SEARCH_CONSOLE_CODE' },
};

export const viewport: Viewport = {
  width: 'device-width', initialScale: 1, themeColor: '#0b3b2e',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TravelAgency',
      '@id': `${SITE.url}/#organization`,
      name: SITE.name, url: SITE.url, description: SITE.description,
      telephone: SITE.phone, email: SITE.email,
      areaServed: ['India', 'Worldwide'],
      priceRange: '₹₹',
      address: { '@type': 'PostalAddress', addressRegion: 'Kerala', addressCountry: 'IN' },
      // sameAs: ['https://www.instagram.com/...', 'https://www.facebook.com/...'],
    },
    {
      '@type': 'WebSite', '@id': `${SITE.url}/#website`, url: SITE.url, name: SITE.name,
      publisher: { '@id': `${SITE.url}/#organization` }, inLanguage: 'en-IN',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
