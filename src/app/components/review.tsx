import Reveal from './Reveal';
import { btn, container, eyebrow, h2, section } from '../lib/ui';

// TODO: replace with the client's real Google reviews link
const GOOGLE_REVIEWS_URL = 'https://g.page/r/your-google-review-link';

const reviews = [
    {
        name: 'Rijo Joseph',
        text: 'We took 5D package, they provided us best hotels for stay and excellent trip from starting to end. Staff is very humble and the food is delicious in house boat. I recommend.',
    },
    {
        name: 'Avinash Rohith',
        text: 'Had a nice trip in Munnar. Very friendly guide and perfect planning. Overall nice package and service. We enjoyed a lot.',
    },
    {
        name: 'Thanseela V N',
        text: 'Over-all service provided was very nice and too professional. The driver was genuine and too much friendly. He guided us the whole tour and made it awesome experience.',
    },
];

export default function Reviews() {
    return (
        <section id="reviews" aria-labelledby="reviews-title" className={`${section} bg-ivory-deep`}>
            <div className={container}>
                <Reveal className="mx-auto mb-14 max-w-2xl text-center">
                    <p className={`${eyebrow.dark} justify-center before:hidden`}>Testimonials</p>
                    <h2 id="reviews-title" className={`${h2} mb-4`}>Stories from our happy travellers</h2>
                    <p className="text-[1.05rem] text-[#4b5d55]">
                        Kind words from guests who explored Kerala with us.
                    </p>
                </Reveal>

                {/* mobile: swipe sideways, desktop: three columns */}
                <div className="-my-4 flex snap-x snap-mandatory gap-5 overflow-x-auto py-4 [scrollbar-width:none] md:grid md:grid-cols-3 md:gap-6 md:overflow-visible [&::-webkit-scrollbar]:hidden">
                    {reviews.map((r, i) => (
                        <Reveal
                            key={r.name}
                            delay={i * 110}
                            as="article"
                            className="group relative flex min-w-[85%] snap-center flex-col rounded-[1.2rem] border border-gold/30 bg-white p-8 shadow-[0_10px_30px_rgba(6,39,31,0.06)] hover:-translate-y-2 hover:border-gold hover:shadow-[0_26px_60px_rgba(6,39,31,0.15)] md:min-w-0 after:absolute after:inset-x-8 after:top-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-700 after:ease-premium hover:after:scale-x-100"
                        >
                            <span aria-hidden="true" className="select-none font-display text-7xl leading-[0.6] text-gold/50">“</span>
                            <blockquote className="mt-4 mb-8 font-display text-[1.3rem] leading-[1.55] text-ink">
                                {r.text}
                            </blockquote>
                            <div className="mt-auto flex items-center gap-4 border-t border-ivory-deep pt-5">
                                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,var(--color-forest-soft),var(--color-forest-deep))] font-display text-xl font-semibold text-gold-light ring-2 ring-gold/40 transition-transform duration-500 ease-premium group-hover:scale-110">
                                    {r.name.charAt(0)}
                                </span>
                                <div>
                                    <p className="font-semibold text-forest">{r.name}</p>
                                    <p className="text-[0.75rem] uppercase tracking-[0.14em] text-gold-deep">Happy Client</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mt-12 text-center">
                    <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className={btn('gold')}>
                        <span>Read more on Google</span>
                    </a>
                </Reveal>
            </div>
        </section>
    );
}