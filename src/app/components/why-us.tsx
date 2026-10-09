import Reveal from './Reveal';
import { SITE } from '../lib/site';
import { container, eyebrow, h2, section } from '../lib/ui';

const stats: [string, string][] = [
    ['12k+', 'Happy travellers'],
    ['250+', 'Handpicked stays'],
    ['40+', 'Destinations'],
    ['24/7', 'Trip support'],
];

export default function WhyUs() {
    return (
        <section id="why" aria-labelledby="why-title" className={section}>
            <div className={container}>
                <Reveal>
                    <p className={eyebrow.dark}>Why {SITE.name}</p>
                    <h2 id="why-title" className={`${h2} mb-12`}>Travel, made effortless</h2>
                </Reveal>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(11rem,1fr))] gap-6">
                    {stats.map(([value, label], i) => (
                        <Reveal
                            key={label}
                            delay={i * 80}
                            className="rounded-[1.2rem] border border-ivory-deep bg-white px-4 py-9 text-center hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_18px_40px_rgba(201,169,97,0.25)]"
                        >
                            <strong className="block font-display text-5xl font-semibold text-forest">{value}</strong>
                            <span className="text-[0.8rem] uppercase tracking-[0.12em] text-[#5b6b64]">{label}</span>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}