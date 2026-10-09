import Reveal from './Reveal';
import { SITE } from '../lib/site';
import { btn, container, h2 } from '../lib/ui';

export default function Cta() {
    return (
        <section
            id="contact"
            aria-labelledby="cta-title"
            className="bg-[linear-gradient(135deg,var(--color-forest-deep),var(--color-forest)_60%,var(--color-forest-soft))] py-[clamp(4rem,9vw,7rem)] text-center text-ivory"
        >
            <Reveal className={container}>
                <h2 id="cta-title" className={`${h2} mb-4`}>Ready for your next escape?</h2>
                <p className="mb-8 text-ivory/80">Tell us where, and our team will craft the rest.</p>
                <div className="flex flex-wrap justify-center gap-4 max-sm:flex-col">
                    <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className={btn('gold')}>
                        <span>Call {SITE.phone}</span>
                    </a>
                    <a href={`mailto:${SITE.email}`} className={btn('ghost')}><span>Email Us</span></a>
                </div>
            </Reveal>
        </section>
    );
}