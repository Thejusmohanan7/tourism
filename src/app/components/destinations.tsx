import Reveal from './Reveal';
import { INTERNATIONAL, DOMESTIC, type Destination } from '../lib/destination'
import { SITE } from '../lib/site';
import { container, eyebrow, gradients, h2, link, linkArrow, section } from '../lib/ui';

function Group({ id, title, items }: { id: string; title: string; items: Destination[] }) {
    return (
        <div aria-labelledby={id}>
            <Reveal className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-gold/50 pb-4">
                <h3 id={id} className="font-display text-[clamp(1.7rem,3.2vw,2.6rem)] leading-[1.1] text-forest">
                    {title}
                </h3>
                <span className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                    {items.length} destinations
                </span>
            </Reveal>

            <div className="mb-20 grid grid-cols-[repeat(auto-fill,minmax(15.5rem,1fr))] gap-[1.4rem] 3xl:grid-cols-[repeat(auto-fill,minmax(17rem,1fr))] max-sm:grid-cols-2 max-sm:gap-3.5 max-[26rem]:grid-cols-1">
                {items.map((d, i) => (
                    <Reveal
                        key={d.slug}
                        delay={(i % 4) * 80}
                        as="article"
                        className={`group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[1.1rem] p-[1.4rem] text-ivory hover:-translate-y-2 hover:shadow-[0_28px_55px_rgba(6,39,31,0.4)] max-sm:p-4 before:absolute before:inset-0 before:z-[-1] before:bg-[linear-gradient(to_top,rgba(6,39,31,0.95)_6%,rgba(6,39,31,0.45)_52%,rgba(6,39,31,0.04))] after:pointer-events-none after:absolute after:inset-[0.7rem] after:scale-[0.96] after:rounded-[0.8rem] after:border after:border-gold after:opacity-0 after:transition-all after:duration-500 after:ease-premium hover:after:scale-100 hover:after:opacity-100 ${gradients[i % 4]}`}
                    >
                        <div
                            role="img"
                            aria-label={`${d.name} – ${d.caption}`}
                            className="absolute inset-0 z-[-2] bg-cover bg-center transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.12]"
                            style={{ backgroundImage: `url(/destinations/${d.slug}.jpg)` }}
                        />
                        <span className="mb-3 self-start rounded-full bg-gold-light px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-forest-deep transition-colors duration-500 group-hover:bg-gold">
                            {d.caption}
                        </span>
                        <h4 className="font-display text-[1.85rem] font-semibold leading-[1.1] max-sm:text-[1.35rem]">{d.name}</h4>
                        <p className="mt-2 mb-3.5 text-[0.85rem] leading-[1.55] text-ivory/85 max-sm:text-[0.78rem]">{d.desc}</p>
                        <a href="#contact" aria-label={`Enquire about ${d.name}`} className={`${link} self-start`}>
                            Enquire <b className={linkArrow}>→</b>
                        </a>
                    </Reveal>
                ))}
            </div>
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
            image: `${SITE.url}/destinations/${d.slug}.jpg`,
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