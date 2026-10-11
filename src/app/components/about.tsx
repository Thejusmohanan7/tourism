import Reveal from './Reveal';
import { btn, container, eyebrow, h2, section } from '../lib/ui';

// Photo from /public. Swap for a team or office photo later (e.g. '/about.jpg').
const ABOUT_IMG = '/houseboats.jpg';

const points = [
    ['Handpicked stays', 'Hotels and houseboats we trust, chosen for comfort and service.'],
    ['Friendly local experts', 'Guides and drivers who know every road, view and hidden corner.'],
    ['Planned end to end', 'Stays, transfers and experiences arranged so you can simply enjoy the trip.'],
];

export default function About() {
    return (
        <section id="about" aria-labelledby="about-title" className={`${section} flex min-h-screen items-center bg-ivory-deep`}>            <div className={`${container} grid items-center gap-14 lg:grid-cols-2 lg:gap-20`}>
            {/* text */}
            <Reveal>
                <p className={eyebrow.dark}>About us</p>
                <h2 id="about-title" className={`${h2} mb-6`}>
                    Local experts, <span className="italic text-forest-soft">unforgettable</span> journeys
                </h2>
                <div className="space-y-4 text-[1.05rem] text-[#4b5d55]">
                    {/* TODO: replace with the client's real story */}
                    <p>
                        We are a Kerala-based travel team who plan trips across India and around the world, from misty hill
                        stations and quiet backwaters to island getaways overseas.
                    </p>
                    <p>
                        Whether it is a family holiday, a honeymoon, a houseboat stay or a morning on the water in a kayak,
                        we take care of the details so you can slow down and enjoy every moment.
                    </p>
                </div>

                <ul className="mt-8 space-y-5">
                    {points.map(([title, text]) => (
                        <li key={title} className="flex gap-4">
                            <span aria-hidden="true" className="mt-1 text-[0.9rem] text-gold">◆</span>
                            <p className="text-[#4b5d55]">
                                <strong className="block font-display text-[1.3rem] font-semibold text-forest">{title}</strong>
                                {text}
                            </p>
                        </li>
                    ))}
                </ul>

                <a href="#contact" className={`${btn('gold')} mt-10`}><span>Plan my trip</span></a>
            </Reveal>

            {/* photo */}
            <Reveal delay={150} className="relative mx-auto w-full max-w-lg pr-4 pb-4 lg:max-w-none">
                <div aria-hidden="true" className="absolute top-4 right-0 bottom-0 left-4 rounded-[1.4rem] border border-gold/60" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-[linear-gradient(160deg,#145240,#06271f)] shadow-[0_30px_60px_rgba(6,39,31,0.25)]">
                    <div
                        role="img"
                        aria-label="Kerala backwaters"
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-premium hover:scale-105"
                        style={{ backgroundImage: `url(${ABOUT_IMG})` }}
                    />
                </div>
                <div className="absolute bottom-0 left-8 rounded-2xl bg-forest px-6 py-4 text-ivory shadow-[0_16px_40px_rgba(6,39,31,0.35)]">
                    <p className="text-[0.7rem] uppercase tracking-[0.2em] text-gold">Based in</p>
                    <p className="font-display text-[1.5rem] leading-none">Kerala, India</p>
                </div>
            </Reveal>
        </div>
        </section>
    );
}