import Reveal from './Reveal';
import { btn, container, eyebrow, h2, section } from '../lib/ui';

// img = photo path inside the /public folder (a card without its photo keeps the gold and green background)
const packages = [
    { t: 'Munnar Misty Escape', m: '3 Nights · Hotel + Transfers', p: '₹14,999', tag: 'India', img: '/sign1.jpg' },
    { t: 'Alleppey Houseboat Retreat', m: '2 Nights · Full Board', p: '₹18,500', tag: 'Houseboat', img: '/sign2.jpg' },
    { t: 'Dubai Signature Getaway', m: '5 Nights · Flights + Hotel', p: '₹64,900', tag: 'International', img: '/sign3.jpg' },
];

export default function Packages() {
    return (
        <section id="packages" aria-labelledby="pkg-title" className={`${section} bg-forest text-ivory`}>
            <div className={container}>
                <Reveal>
                    <p className={eyebrow.gold}>Featured</p>
                    <h2 id="pkg-title" className={`${h2} mb-12`}>Signature packages</h2>
                </Reveal>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-6">
                    {packages.map((x, i) => (
                        <Reveal
                            key={x.t}
                            delay={i * 110}
                            as="article"
                            className="group overflow-hidden rounded-[1.2rem] border border-gold/25 bg-forest-soft hover:-translate-y-2 hover:border-gold hover:shadow-[0_26px_60px_rgba(0,0,0,0.35)]"
                        >
                            {/* photo at the top of the card */}
                            <div className="relative h-52 overflow-hidden bg-[linear-gradient(135deg,var(--color-gold-deep),var(--color-forest-soft)_70%)]">
                                <div
                                    role="img"
                                    aria-label={x.t}
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-premium group-hover:scale-110"
                                    style={{ backgroundImage: `url(${x.img})` }}
                                />
                                <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,39,31,0.4),transparent_60%)]" />
                                <span className="absolute top-4 left-4 z-10 rounded-full bg-ivory px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-forest">
                                    {x.tag}
                                </span>
                            </div>

                            <div className="p-6">
                                <h3 className="font-display text-[1.6rem] leading-[1.1]">{x.t}</h3>
                                <p className="mt-1.5 mb-5.5 text-[0.9rem] text-ivory/75">{x.m}</p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <small className="block text-[0.7rem] uppercase tracking-[0.14em] text-gold-light">from</small>
                                        <strong className="font-display text-[1.7rem] font-semibold text-gold">{x.p}</strong>
                                    </div>
                                    <a href="#contact" className={btn('gold', 'sm')}><span>Book</span></a>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}