import Reveal from './Reveal';
import { container, eyebrow, gradients, h2, link, linkArrow, section } from '../lib/ui';

// img = photo path inside the /public folder
const items = [
    { n: '01', t: 'India Trips', img: '/india-trips.jpg', d: 'Hill stations, heritage cities and coastlines, planned end to end.' },
    { n: '02', t: 'International', img: '/international.jpg', d: 'Dubai, Singapore, Bali and beyond with visas and stays handled.' },
    { n: '03', t: 'Trekking', img: '/trekking.jpg', d: 'Walk through misty hills, forest trails and mountain villages with friendly local guides.' },
    { n: '04', t: 'Houseboats', img: '/houseboats.jpg', d: 'Private Kerala houseboats with chef, deck and slow sunsets.' },
];

export default function Offerings() {
    return (
        <section id="experiences" aria-labelledby="exp-title" className={section}>
            <div className={container}>
                <Reveal>
                    <p className={eyebrow.dark}>What we offer</p>
                    <h2 id="exp-title" className={`${h2} mb-12`}>Four ways to travel</h2>
                </Reveal>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-6">
                    {items.map((x, i) => (
                        <Reveal
                            key={x.t}
                            delay={i * 90}
                            as="article"
                            className={`group relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-[1.2rem] p-8 text-ivory hover:-translate-y-2.5 hover:shadow-[0_30px_60px_rgba(6,39,31,0.35)] after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:bg-[linear-gradient(to_top,rgba(6,39,31,0.94),rgba(6,39,31,0.5)_38%,transparent_64%)] ${gradients[i % 4]}`}
                        >
                            {/* photo */}
                            <div
                                role="img"
                                aria-label={x.t}
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.08]"
                                style={{ backgroundImage: `url(${x.img})` }}
                            />
                            {/* number badge: hidden on mobile */}
                            <span className="absolute top-5 right-6 z-[2] font-display text-[4.5rem] font-semibold italic leading-none text-gold-light/25 transition-all duration-700 ease-premium group-hover:translate-y-1.5 group-hover:scale-115 group-hover:text-gold-light/50 max-sm:hidden">
                                {x.n}
                            </span>
                            <h3 className="relative z-[2] font-display text-[1.9rem] leading-[1.1]">{x.t}</h3>
                            <p className="relative z-[2] mt-2.5 mb-5 text-[0.95rem] text-ivory/80">{x.d}</p>
                            <a href="#contact" className={`${link} z-[2]`}>
                                Discover <b className={linkArrow}>→</b>
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}