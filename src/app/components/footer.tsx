import Year from './year';
import { SITE } from '../lib/site';
import { btn, container, h2 } from '../lib/ui';

// TODO: replace with the client's real links
const INSTAGRAM_URL = 'https://www.instagram.com/your_handle';
const GOOGLE_REVIEWS_URL = 'https://g.page/r/your-google-review-link';

const explore: [label: string, href: string][] = [
    ['Experiences', '#experiences'],
    ['Destinations', '#destinations'],
    ['Packages', '#packages'],
    ['Why us', '#why'],
    ['Contact', '#contact'],
];

const linkClass =
    'relative inline-block py-0.5 transition-colors duration-300 hover:text-gold-light after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 after:ease-premium hover:after:origin-left hover:after:scale-x-100';

const headingClass = 'mb-5 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-gold';

function Star() {
    return (
        <svg viewBox="0 0 24 24" className="size-5 fill-gold" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="1.8" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle cx="17.3" cy="6.7" r="1" className="fill-current stroke-none" />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="border-t border-gold/25 bg-forest-deep text-[0.92rem] text-ivory/70">
            {/* quote band */}
            <div className="border-b border-gold/15 py-14 text-center">
                <div className={container}>
                    <span className="mx-auto mb-5 block h-px w-16 bg-gold/60" aria-hidden="true" />
                    <p className={`${h2} text-ivory italic`}>Slow down. The backwaters are waiting.</p>
                    <p className="mt-4 text-[0.78rem] uppercase tracking-[0.3em] text-gold">Travel with grace</p>
                </div>
            </div>

            {/* columns */}
            <div className={`${container} grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]`}>
                {/* brand */}
                <div>
                    <span className="inline-flex items-center gap-2 font-display text-[1.7rem] font-bold capitalize text-ivory">
                        <span className="text-[0.9rem] text-gold">◆</span>
                        {SITE.name}
                    </span>
                    <p className="mt-4 max-w-xs leading-relaxed">
                        Hotels, houseboats, kayaking and holiday packages across India and the world, planned with care.
                    </p>
                </div>

                {/* explore */}
                <div>
                    <h3 className={headingClass}>Explore</h3>
                    <ul className="space-y-2.5">
                        {explore.map(([label, href]) => (
                            <li key={href}>
                                <a href={href} className={linkClass}>{label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* contact */}
                <div>
                    <h3 className={headingClass}>Contact</h3>
                    <ul className="space-y-2.5">
                        <li><a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className={linkClass}>{SITE.phone}</a></li>
                        <li><a href={`mailto:${SITE.email}`} className={linkClass}>{SITE.email}</a></li>
                        <li>Kerala, India</li>
                    </ul>
                </div>

                {/* follow + reviews */}
                <div>
                    <h3 className={headingClass}>Follow &amp; Reviews</h3>

                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow us on Instagram"
                        className="group/ig mb-6 inline-flex items-center gap-3"
                    >
                        <span className="grid size-11 place-items-center rounded-full border border-gold-light/50 text-gold-light transition-all duration-500 ease-premium group-hover/ig:-translate-y-1 group-hover/ig:border-gold group-hover/ig:bg-gold group-hover/ig:text-forest-deep group-hover/ig:shadow-[0_10px_24px_rgba(201,169,97,0.35)]">
                            <InstagramIcon />
                        </span>
                        <span className="transition-colors duration-300 group-hover/ig:text-gold-light">Follow us on Instagram</span>
                    </a>

                    <div className="rounded-2xl border border-gold/25 bg-forest/60 p-5 transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-gold">
                        <div className="mb-2 flex gap-1" role="img" aria-label="5 out of 5 stars">
                            {[0, 1, 2, 3, 4].map((i) => <Star key={i} />)}
                        </div>
                        <p className="mb-4 text-ivory/80">Loved by travellers. See what they say about us on Google.</p>
                        <a
                            href={GOOGLE_REVIEWS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={btn('ghost', 'sm')}
                        >
                            <span>Google Reviews</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* bottom bar */}
            <div className="border-t border-gold/15 py-6 text-[0.82rem]">
                <div className={`${container} flex flex-wrap items-center justify-between gap-3 max-sm:justify-center max-sm:text-center`}>
                    <p>© <Year /> {SITE.name}. All rights reserved.</p>
                    <p className="text-ivory/50">Crafted in Kerala, for travellers everywhere.</p>
                </div>
            </div>
        </footer>
    );
}