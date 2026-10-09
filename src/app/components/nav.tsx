'use client';
import { useEffect, useState } from 'react';
import { SITE } from '../lib/site';
import { btn, container } from '../lib/ui';

const links: [label: string, href: string][] = [
    ['Experiences', '#experiences'],
    ['Destinations', '#destinations'],
    ['Packages', '#packages'],
    ['Why us', '#why'],
    ['Contact', '#contact'],
];

export default function Nav() {
    const [solid, setSolid] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const on = () => setSolid(window.scrollY > 40);
        on();
        window.addEventListener('scroll', on, { passive: true });
        return () => window.removeEventListener('scroll', on);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 text-ivory transition-all duration-500 ease-premium ${solid || open
                ? 'bg-forest-deep/95 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-md'
                : 'py-[1.1rem]'
                }`}
        >
            <div className={`${container} flex items-center justify-between`}>
                <a
                    href="#top"
                    aria-label={`${SITE.name} home`}
                    className="group/logo inline-flex items-center gap-2 font-display text-[1.7rem] font-bold capitalize tracking-[0.02em]"
                >
                    <span className="text-[0.9rem] text-gold transition-transform duration-700 ease-premium group-hover/logo:rotate-180">
                        ◆
                    </span>
                    {SITE.name}
                </a>

                <nav
                    id="nav"
                    aria-label="Primary"
                    className={`absolute inset-x-0 top-full flex flex-col items-center gap-6 bg-forest-deep/95 py-8 transition-all duration-500 ease-premium md:pointer-events-auto md:static md:flex-row md:gap-8 md:bg-transparent md:p-0 md:opacity-100 md:[clip-path:none] ${open
                        ? 'opacity-100 [clip-path:inset(0)]'
                        : 'pointer-events-none opacity-0 [clip-path:inset(0_0_100%_0)]'
                        }`}
                >
                    {links.map(([label, href]) => (
                        <a
                            key={href}
                            href={href}
                            onClick={() => setOpen(false)}
                            className="relative py-1 text-[0.92rem] tracking-[0.04em] transition-colors hover:text-gold-light after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-500 after:ease-premium hover:after:origin-left hover:after:scale-x-100"
                        >
                            {label}
                        </a>
                    ))}
                    <a href="#contact" onClick={() => setOpen(false)} className={btn('gold', 'sm')}>
                        <span>Book Now</span>
                    </a>
                </nav>

                <button
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    aria-controls="nav"
                    onClick={() => setOpen(!open)}
                    className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
                >
                    <i className={`block h-0.5 w-6 bg-gold transition-all duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
                    <i className={`block h-0.5 w-6 bg-gold transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
                    <i className={`block h-0.5 w-6 bg-gold transition-all duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
                </button>
            </div>
        </header>
    );
}