import { SITE } from '../lib/site';
import { btn, container, eyebrow } from '../lib/ui';

export default function Hero() {
    return (
        <section
            aria-labelledby="hero-title"
            className="relative flex min-h-svh flex-col justify-center gap-12 overflow-hidden bg-[radial-gradient(120%_90%_at_80%_10%,var(--color-forest-soft),var(--color-forest)_45%,var(--color-forest-deep))] pt-28 pb-16 text-ivory md:pt-32"
        >
            {/* background decoration */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <span className="animate-float absolute bottom-[10%] -left-24 size-88 rounded-full bg-[#1e7a5c] opacity-35 blur-[70px] [animation-delay:-6s]" />
                <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="absolute -bottom-px h-36 w-full fill-ivory opacity-[0.07]">
                    <path d="M0 120 C240 40 480 200 720 120 S1200 40 1440 120 V200 H0Z" />
                </svg>
            </div>

            <div className={`${container} relative`}>
                <div className="max-w-[60rem] 3xl:max-w-[75rem]">
                    <p className={`${eyebrow.gold} animate-fade-up`}>Curated travel · Kerala &amp; beyond</p>
                    <h1
                        id="hero-title"
                        className="animate-fade-up font-display text-[clamp(2.8rem,7vw,6.2rem)] font-semibold leading-[1.1] tracking-[-0.01em] [animation-delay:.12s]"
                    >
                        Journeys crafted{' '}
                        <em className="animate-shine bg-[linear-gradient(120deg,var(--color-gold-light),var(--color-gold),var(--color-gold-light))] bg-[length:200%] bg-clip-text italic text-transparent">
                            with grace
                        </em>
                    </h1>
                    <p className="animate-fade-up mt-6 mb-9 max-w-[40rem] text-[1.1rem] text-ivory/80 [animation-delay:.24s]">
                        {SITE.description}
                    </p>
                    <div className="animate-fade-up flex flex-wrap gap-4 max-sm:flex-col [animation-delay:.36s]">
                        <a href="#destinations" className={btn('gold')}><span>Explore Destinations</span></a>
                        <a href="#contact" className={btn('ghost')}><span>Talk to an Expert</span></a>
                    </div>
                </div>
            </div>
        </section>
    );
}