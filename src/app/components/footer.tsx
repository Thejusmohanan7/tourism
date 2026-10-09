import Year from './year';
import { SITE } from '../lib/site';
import { container } from '../lib/ui';

export default function Footer() {
    return (
        <footer className="border-t border-gold/25 bg-forest-deep py-8 text-[0.85rem] text-ivory/70">
            <div className={`${container} flex flex-wrap items-center justify-between gap-4 max-sm:justify-center max-sm:text-center`}>
                <span className="inline-flex items-center gap-2 font-display text-[1.4rem] font-bold capitalize text-ivory">
                    <span className="text-[0.9rem] text-gold">◆</span>
                    {SITE.name}
                </span>
                <p>© <Year /> {SITE.name}. All rights reserved.</p>
            </div>
        </footer>
    );
}