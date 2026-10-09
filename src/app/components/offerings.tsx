import type { ReactNode } from 'react';
import Reveal from './Reveal';
import { container, eyebrow, gradients, h2, link, linkArrow, section } from '../lib/ui';

// ---------- Artwork (inline SVG, no image files needed) ----------
const GOLD = '#c9a961';
const GOLD_L = '#e6d3a3';
const IVORY = '#faf6ea';

function Frame({ children }: { children: ReactNode }) {
    return (
        <svg
            className="absolute inset-x-0 top-0 h-[64%] w-full transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.08]"
            viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"
        >
            {children}
        </svg>
    );
}

/** Hill station: layered mountains, tea terraces, sun */
function IndiaTrips() {
    return (
        <Frame>
            <circle cx="300" cy="86" r="34" fill={GOLD_L} opacity=".9" />
            <path d="M0 200 L90 112 L150 165 L232 82 L335 186 L400 138 V300 H0Z" fill="#1e7a5c" opacity=".6" />
            <path d="M0 238 L72 168 L140 214 L222 148 L312 228 L400 184 V300 H0Z" fill="#145240" />
            {[256, 268, 280].map((y, i) => (
                <path key={y} d={`M0 ${y} Q100 ${y - 22} 200 ${y} T400 ${y - 6}`} fill="none"
                    stroke={GOLD} strokeWidth="1.6" opacity={0.55 - i * 0.12} />
            ))}
            <path d="M60 152 l10 -22 l10 22Z M84 160 l9 -18 l9 18Z" fill="#0b3b2e" opacity=".8" />
        </Frame>
    );
}

/** International: skyline with tall tower and a flight path */
function International() {
    return (
        <Frame>
            <circle cx="86" cy="84" r="24" fill={GOLD_L} opacity=".85" />
            <path d="M30 150 Q200 20 370 118" fill="none" stroke={IVORY} strokeWidth="1.6"
                strokeDasharray="3 7" opacity=".7" />
            <path d="M362 112 l18 6 l-18 6 l4 -6Z" fill={IVORY} />
            <g fill="#1e7a5c" opacity=".7">
                <rect x="40" y="190" width="40" height="110" /><rect x="96" y="170" width="34" height="130" />
                <rect x="270" y="176" width="40" height="124" /><rect x="324" y="198" width="46" height="102" />
            </g>
            <g fill="#145240">
                <rect x="70" y="214" width="36" height="86" /><rect x="236" y="204" width="38" height="96" />
                <rect x="150" y="196" width="44" height="104" />
            </g>
            <path d="M205 300 V120 L212 70 L219 120 V300Z" fill="#0b3b2e" />
            <circle cx="212" cy="128" r="9" fill={GOLD} />
            <path d="M212 70 V48" stroke={GOLD} strokeWidth="2" />
            <g fill={GOLD_L} opacity=".6">
                {[[160, 214], [176, 214], [160, 232], [176, 232], [248, 224], [248, 242], [52, 214], [66, 232]].map(([x, y]) => (
                    <rect key={`${x}-${y}`} x={x} y={y} width="6" height="8" />
                ))}
            </g>
        </Frame>
    );
}

/** Kayaking: sunrise, calm water, kayaker with paddle */
function Kayaking() {
    return (
        <Frame>
            <path d="M130 170 A70 70 0 0 1 270 170Z" fill={GOLD_L} opacity=".9" />
            <path d="M0 170 H400 V300 H0Z" fill="#145240" opacity=".85" />
            {[184, 200, 222, 248].map((y, i) => (
                <path key={y} d={`M${20 + i * 14} ${y} q20 -7 40 0 t40 0 t40 0 t40 0 t40 0 t40 0 t40 0`} fill="none"
                    stroke={GOLD} strokeWidth="1.5" opacity={0.6 - i * 0.1} />
            ))}
            <path d="M104 210 Q200 238 304 204 Q204 222 104 210Z" fill={GOLD} />
            <circle cx="205" cy="166" r="9" fill={IVORY} />
            <path d="M205 176 L200 206" stroke={IVORY} strokeWidth="9" strokeLinecap="round" />
            <path d="M150 160 L262 236" stroke={GOLD_L} strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="146" cy="157" rx="13" ry="5" transform="rotate(38 146 157)" fill={GOLD_L} />
            <ellipse cx="266" cy="239" rx="13" ry="5" transform="rotate(38 266 239)" fill={GOLD_L} />
            <path d="M0 170 Q60 140 120 170 Q180 150 240 170 Q320 138 400 170" fill="#0b3b2e" opacity=".8" />
        </Frame>
    );
}

/** Houseboat: thatched roof, palms, sunset on backwaters */
function Houseboats() {
    const palm = (x: number, flip = 1) => (
        <g key={x} stroke="#0b3b2e" fill="none" strokeLinecap="round">
            <path d={`M${x} 214 Q${x + 8 * flip} 160 ${x + 2 * flip} 118`} strokeWidth="5" />
            {[-40, -20, 0, 20, 40].map((a) => (
                <path key={a} d={`M${x + 2 * flip} 118 q${a} -14 ${a * 1.5} 6`} strokeWidth="3.5" />
            ))}
        </g>
    );
    return (
        <Frame>
            <circle cx="200" cy="168" r="62" fill={GOLD_L} opacity=".85" />
            <path d="M0 168 H400 V300 H0Z" fill="#145240" opacity=".9" />
            {palm(56)}{palm(346, -1)}
            <path d="M0 168 H400" stroke={GOLD} strokeWidth="1" opacity=".5" />
            <path d="M96 214 H306 L290 238 H112Z" fill="#0b3b2e" />
            <path d="M108 214 V196 Q200 150 294 196 V214Z" fill={GOLD} />
            <path d="M108 196 Q200 150 294 196" fill="none" stroke={IVORY} strokeWidth="2" opacity=".6" />
            <g fill="#0b3b2e" opacity=".85">
                <rect x="146" y="200" width="22" height="10" rx="2" /><rect x="190" y="200" width="22" height="10" rx="2" />
                <rect x="234" y="200" width="22" height="10" rx="2" />
            </g>
            {[252, 268, 284].map((y, i) => (
                <path key={y} d={`M${100 + i * 12} ${y} h${190 - i * 24}`} stroke={GOLD} strokeWidth="1.5" opacity={0.5 - i * 0.12} />
            ))}
        </Frame>
    );
}

const OFFERING_ART: Record<string, () => ReactNode> = {
    'india-trips': IndiaTrips,
    international: International,
    kayaking: Kayaking,
    houseboats: Houseboats,
};

const items = [
    { n: '01', slug: 'india-trips', t: 'India Trips', d: 'Hill stations, heritage cities and coastlines, planned end to end.' },
    { n: '02', slug: 'international', t: 'International', d: 'Dubai, Singapore, Bali and beyond with visas and stays handled.' },
    { n: '03', slug: 'kayaking', t: 'Kayaking', d: 'Paddle through quiet backwaters and mangrove channels at sunrise.' },
    { n: '04', slug: 'houseboats', t: 'Houseboats', d: 'Private Kerala houseboats with chef, deck and slow sunsets.' },
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
                    {items.map((x, i) => {
                        const Art = OFFERING_ART[x.slug];
                        return (
                            <Reveal
                                key={x.t}
                                delay={i * 90}
                                as="article"
                                className={`group relative flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-[1.2rem] p-8 text-ivory hover:-translate-y-2.5 hover:shadow-[0_30px_60px_rgba(6,39,31,0.35)] after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:bg-[linear-gradient(to_top,rgba(6,39,31,0.94),rgba(6,39,31,0.5)_38%,transparent_64%)] ${gradients[i % 4]}`}
                            >
                                <Art />
                                {/* Optional: add /public/offerings/<slug>.jpg and it will cover the artwork */}
                                <div
                                    role="img"
                                    aria-label={x.t}
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.08]"
                                    style={{ backgroundImage: `url(/offerings/${x.slug}.jpg)` }}
                                />
                                <span className="absolute top-5 right-6 z-[2] font-display text-[4.5rem] font-semibold italic leading-none text-gold-light/25 transition-all duration-700 ease-premium group-hover:translate-y-1.5 group-hover:scale-115 group-hover:text-gold-light/50">
                                    {x.n}
                                </span>
                                <h3 className="relative z-[2] font-display text-[1.9rem] leading-[1.1]">{x.t}</h3>
                                <p className="relative z-[2] mt-2.5 mb-5 text-[0.95rem] text-ivory/80">{x.d}</p>
                                <a href="#contact" className={`${link} z-[2]`}>
                                    Discover <b className={linkArrow}>→</b>
                                </a>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}