'use client';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import Reveal from './Reveal';
import { INTERNATIONAL, DOMESTIC, type Destination } from '../lib/destination'
import { SITE } from '../lib/site';
import { container, eyebrow, gradients, h2, link, linkArrow, section } from '../lib/ui';

type Size = { collapsed: number; full: number; perRow: number };

function Group({ id, title, items }: { id: string; title: string; items: Destination[] }) {
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState<Size | null>(null);
    const groupRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const gridId = useId();

    // measure the first row (height + how many cards fit) and the full grid height
    const measure = useCallback(() => {
        const grid = gridRef.current;
        const first = grid?.firstElementChild as HTMLElement | null;
        if (!grid || !first) return;
        const padBottom = parseFloat(getComputedStyle(grid).paddingBottom) || 0;
        const rowTop = first.offsetTop;
        const perRow = Array.from(grid.children).filter((c) => (c as HTMLElement).offsetTop === rowTop).length;
        const next = { collapsed: rowTop + first.offsetHeight + padBottom, full: grid.offsetHeight, perRow };
        setSize((prev) =>
            prev && prev.collapsed === next.collapsed && prev.full === next.full && prev.perRow === next.perRow ? prev : next
        );
    }, []);

    useEffect(() => {
        measure();
        const grid = gridRef.current;
        if (!grid) return;
        const ro = new ResizeObserver(measure);
        ro.observe(grid);
        return () => ro.disconnect();
    }, [measure]);

    // cards in the hidden rows: not reachable by keyboard, and fully hidden once the slide-up has finished
    // (so none of them can peek out below the first row)
    useEffect(() => {
        const grid = gridRef.current;
        const first = grid?.firstElementChild as HTMLElement | null;
        if (!grid || !first) return;
        const cards = Array.from(grid.children) as HTMLElement[];
        const inHiddenRow = (el: HTMLElement) => el.offsetTop > first.offsetTop;
        cards.forEach((el) => { el.inert = !open && inHiddenRow(el); });
        const apply = () => cards.forEach((el) => { el.style.visibility = !open && inHiddenRow(el) ? 'hidden' : ''; });
        if (open) {
            apply();
            return;
        }
        const timer = setTimeout(apply, 950);
        return () => clearTimeout(timer);
    }, [open, size]);

    const toggle = () => {
        if (open) groupRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setOpen(!open);
    };

    const hidden = size ? items.length - size.perRow : 0;
    const needsToggle = !!size && size.full - size.collapsed > 8;

    return (
        <div ref={groupRef} aria-labelledby={id} className="mb-20 scroll-mt-28">
            <Reveal className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-gold/50 pb-4">
                <h3 id={id} className="font-display text-[clamp(1.7rem,3.2vw,2.6rem)] leading-[1.1] text-forest">
                    {title}
                </h3>
                <span className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                    {items.length} destinations
                </span>
            </Reveal>

            {/* only the first row is visible until "See more" is pressed */}
            <div
                className="-mx-3 -mt-6 overflow-hidden transition-[max-height] duration-[900ms] ease-premium motion-reduce:transition-none"
                style={size ? { maxHeight: open ? size.full : size.collapsed } : undefined}
            >
                <div
                    ref={gridRef}
                    id={gridId}
                    className="relative grid grid-cols-[repeat(auto-fill,minmax(15.5rem,1fr))] gap-[1.4rem] px-3 pt-6 pb-10 3xl:grid-cols-[repeat(auto-fill,minmax(17rem,1fr))] max-sm:grid-cols-2 max-sm:gap-3.5 max-[26rem]:grid-cols-1"
                >
                    {items.map((d, i) => (
                        <Reveal
                            key={d.slug}
                            delay={(i % 4) * 80}
                            as="article"
                            className={`group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[1.1rem] p-[1.4rem] text-ivory hover:-translate-y-2 hover:shadow-[0_28px_55px_rgba(6,39,31,0.4)] max-sm:p-4 before:absolute before:inset-0 before:z-[-1] before:bg-[linear-gradient(to_top,rgba(6,39,31,0.95)_6%,rgba(6,39,31,0.45)_52%,rgba(6,39,31,0.04))] after:pointer-events-none after:absolute after:inset-[0.7rem] after:scale-[0.96] after:rounded-[0.8rem] after:border after:border-gold after:opacity-0 after:transition-all after:duration-500 after:ease-premium hover:after:scale-100 hover:after:opacity-100 ${gradients[i % 4]}`}
                        >
                            {/* card photo: public/<slug>/<slug>.jpg  (e.g. public/sri-lanka/sri-lanka.jpg) */}
                            <div
                                role="img"
                                aria-label={`${d.name} – ${d.caption}`}
                                className="absolute inset-0 z-[-2] bg-cover bg-center transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.12]"
                                style={{ backgroundImage: `url(/${d.slug}/${d.slug}.jpg)` }}
                            />
                            <span className="mb-3 self-start rounded-full bg-gold-light px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-forest-deep transition-colors duration-500 group-hover:bg-gold">
                                {d.caption}
                            </span>
                            <h4 className="font-display text-[1.85rem] font-semibold leading-[1.1] max-sm:text-[1.35rem]">{d.name}</h4>
                            <p className="mt-2 mb-3.5 text-[0.85rem] leading-[1.55] text-ivory/85 max-sm:text-[0.78rem]">{d.desc}</p>
                            <Link href={`/destinations/${d.slug}`} aria-label={`Explore ${d.name}`} className={`${link} self-start`}>
                                Explore <b className={linkArrow}>→</b>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>

            {needsToggle && (
                <div className="mt-2 flex justify-center">
                    <button
                        type="button"
                        onClick={toggle}
                        aria-expanded={open}
                        aria-controls={gridId}
                        className="group/more inline-flex items-center gap-3 rounded-full border border-forest/30 px-8 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-forest transition-all duration-500 ease-premium hover:-translate-y-0.5 hover:border-forest hover:bg-forest hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                    >
                        <span>{open ? 'Show less' : `See ${hidden} more`}</span>
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className={`size-4 fill-none stroke-current transition-transform duration-500 ease-premium ${open ? 'rotate-180' : 'group-hover/more:translate-y-0.5'}`}
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 9l6 6 6-6" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
}

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Popular destinations by ${SITE.name}`,
    itemListElement: [...INTERNATIONAL, ...DOMESTIC].map((d, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
            '@type': 'TouristDestination',
            name: d.name,
            description: d.desc,
            image: `${SITE.url}/${d.slug}/${d.slug}.jpg`,
        },
    })),
};

export default function Destinations() {
    return (
        <section id="destinations" aria-labelledby="dest-title" className={`${section} bg-ivory-deep`}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <div className={container}>
                <Reveal>
                    <p className={eyebrow.dark}>Destinations</p>
                    <h2 id="dest-title" className={`${h2} mb-12`}>Where to next?</h2>
                    <p className="-mt-6 mb-14 max-w-[38rem] text-[1.05rem] text-[#4b5d55]">
                        From island escapes to Himalayan roads, pick a place and we will plan the rest.
                    </p>
                </Reveal>
                <Group id="intl" title="International Escapes" items={INTERNATIONAL} />
                <Group id="india" title="Incredible India" items={DOMESTIC} />
            </div>
        </section>
    );
}