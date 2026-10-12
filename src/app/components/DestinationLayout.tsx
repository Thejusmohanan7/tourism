/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';

import Reveal from './Reveal';
import { SITE } from '../lib/site';
import { btn, container, eyebrow, h2, section } from '../lib/ui';
import Nav from './nav';
import Footer from './footer';

// Used by every destination page: destinations/<name>/page.tsx
// Photos for a destination live in /public/<slug>/
//   <slug>.jpg                          -> big photo behind the quote   (e.g. bali.jpg)
//   <slug>1.jpg <slug>2.jpg <slug>3.jpg -> the three photos in the About section

type Props = {
    slug: string;
    name: string;
    caption: string;
    quote: string;
    about: string[];
};

// SEO tags for a destination page
export function destinationMetadata({ slug, name, description }: { slug: string; name: string; description: string }): Metadata {
    const title = `${name} Tour Packages`;
    return {
        title,
        description,
        alternates: { canonical: `/destinations/${slug}/` },
        openGraph: {
            title,
            description,
            url: `/destinations/${slug}/`,
            images: [{ url: `/${slug}/${slug}.jpg`, alt: name }],
        },
    };
}

export default function DestinationLayout({ slug, name, caption, quote, about }: Props) {
    const folder = `/${slug}`;
    const hero = `${folder}/${slug}.jpg`;

    // opens the home page enquiry form with this destination already selected
    const enquire = `/?destination=${encodeURIComponent(name)}#contact`;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'TouristDestination',
        name,
        description: about[0],
        image: `${SITE.url}${hero}`,
        url: `${SITE.url}/destinations/${slug}/`,
    };

    return (
        <>
            <Nav />
            <main id="top">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

                {/* hero: photo + quote */}
                <section className="relative isolate flex min-h-[85svh] items-center justify-center overflow-hidden bg-[linear-gradient(160deg,#145240,#06271f)] px-6 pt-32 pb-20 text-center text-ivory">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 -z-20 bg-cover bg-center"
                        style={{ backgroundImage: `url(${hero})` }}
                    />
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(6,39,31,0.55),rgba(6,39,31,0.35)_45%,rgba(6,39,31,0.85))]"
                    />
                    <div className="mx-auto max-w-4xl">
                        <p className="animate-fade-up mb-5 text-[0.78rem] uppercase tracking-[0.3em] text-gold">{caption}</p>
                        <h1 className="animate-fade-up font-display text-[clamp(3.5rem,10vw,8rem)] font-semibold leading-none [animation-delay:.1s]">
                            {name}
                        </h1>
                        <span aria-hidden="true" className="animate-fade-up mx-auto my-8 block h-px w-20 bg-gold/70 [animation-delay:.2s]" />
                        <p className="animate-fade-up font-display text-[clamp(1.4rem,3vw,2.2rem)] italic leading-snug text-gold-light [animation-delay:.3s]">
                            “{quote}”
                        </p>
                    </div>
                </section>

                {/* about + 3 photos */}
                <section aria-labelledby="about-title" className={section}>
                    <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}>
                        <Reveal>
                            <p className={eyebrow.dark}>About {name}</p>
                            <h2 id="about-title" className={`${h2} mb-6`}>Discover {name}</h2>
                            <div className="space-y-4 text-[1.05rem] leading-relaxed text-[#4b5d55]">
                                {about.map((p) => <p key={p}>{p}</p>)}
                            </div>
                        </Reveal>

                        <Reveal delay={150}>
                            <div className="grid h-[26rem] grid-cols-2 grid-rows-2 gap-4 sm:h-[32rem]">
                                {[1, 2, 3].map((n) => (
                                    <div
                                        key={n}
                                        className={`group relative overflow-hidden rounded-[1.1rem] bg-[linear-gradient(160deg,#145240,#06271f)] ${n === 1 ? 'row-span-2' : ''}`}
                                    >
                                        <img
                                            src={`${folder}/${slug}${n}.jpg`}
                                            alt={`${name} photo ${n}`}
                                            loading="lazy"
                                            decoding="async"
                                            className="absolute inset-0 size-full object-cover text-transparent transition-transform duration-[1200ms] ease-premium group-hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* enquire */}
                <section className="bg-[linear-gradient(135deg,var(--color-forest-deep),var(--color-forest)_60%,var(--color-forest-soft))] py-[clamp(4rem,9vw,7rem)] text-center text-ivory">
                    <Reveal className={container}>
                        <h2 className={`${h2} mb-4`}>Plan your {name} trip</h2>
                        <p className="mx-auto mb-8 max-w-xl text-ivory/80">
                            Tell us your dates and group size, and our team will put together the stays, transfers and experiences.
                        </p>
                        <Link href={enquire} className={btn('gold')}><span>Enquire about {name}</span></Link>
                    </Reveal>
                </section>
            </main>
            <Footer />
        </>
    );
}