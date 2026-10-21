'use client';
import { useEffect, useId, useRef, useState, type FormEvent, type KeyboardEvent } from 'react';
import Reveal from './Reveal';
import { INTERNATIONAL, DOMESTIC } from '../lib/destination';
import { SITE } from '../lib/site';
import { btn, container, eyebrow, h2, section } from '../lib/ui';

// TODO: client's WhatsApp number with country code, digits only (e.g. 919876543210)
const WHATSAPP_NUMBER = '919567730666';

const tripTypes = [
    'Honeymoon package',
    'Family package',
    'Group tour',
    'Hotel bookings',
    'Cab booking',
    'Domestic & International package',
];

const hotelCategories = ['5 Star Luxury', '4 Star Premium', '3 Star Deluxe'];

const field =
    'w-full rounded-xl border border-ivory-deep bg-white px-4 py-3 text-[0.95rem] text-ink outline-none transition-all duration-300 placeholder:text-ink/40 focus:border-gold focus:ring-4 focus:ring-gold/20';
const label = 'mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#5b6b64]';

// ---------- Animated dropdown (used for Trip type, Destination and Hotel category) ----------
type Group = { label?: string; options: string[] };

type Props = {
    id: string;
    name: string;
    label: string;
    groups: Group[];
    defaultValue?: string;
    emptyLabel?: string; // adds a first "nothing selected" choice with this text
};

function Dropdown({ id, name, label, groups, defaultValue = '', emptyLabel }: Props) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(defaultValue);
    const [active, setActive] = useState(0);
    const rootRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
    const listId = useId();

    // every selectable value, in display order
    const flat: string[] = emptyLabel ? [''] : [];
    groups.forEach((g) => flat.push(...g.options));

    const shown = value === '' ? emptyLabel ?? '' : value;

    const openMenu = () => {
        setActive(Math.max(flat.indexOf(value), 0));
        setOpen(true);
    };

    const select = (v: string) => {
        setValue(v);
        setOpen(false);
        buttonRef.current?.focus();
    };

    // close when clicking outside
    useEffect(() => {
        const onDown = (e: MouseEvent) => {
            if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener('mousedown', onDown);
        return () => document.removeEventListener('mousedown', onDown);
    }, []);

    // go back to the default when the parent form is reset
    useEffect(() => {
        const form = rootRef.current?.closest('form');
        const onReset = () => setValue(defaultValue);
        form?.addEventListener('reset', onReset);
        return () => form?.removeEventListener('reset', onReset);
    }, [defaultValue]);

    // keep the highlighted option visible while using the arrow keys
    useEffect(() => {
        if (open) itemRefs.current[active]?.scrollIntoView({ block: 'nearest' });
    }, [active, open]);

    const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            if (!open) return openMenu();
            setActive((a) => (e.key === 'ArrowDown' ? (a + 1) % flat.length : (a - 1 + flat.length) % flat.length));
        } else if (e.key === 'Home' && open) {
            e.preventDefault();
            setActive(0);
        } else if (e.key === 'End' && open) {
            e.preventDefault();
            setActive(flat.length - 1);
        } else if (e.key === 'Escape') {
            setOpen(false);
        } else if ((e.key === 'Enter' || e.key === ' ') && open) {
            e.preventDefault();
            select(flat[active]);
        }
    };

    let index = -1;

    return (
        <div ref={rootRef} className="relative">
            <label htmlFor={id} className="mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#5b6b64]">
                {label}
            </label>
            <input type="hidden" name={name} value={value} />

            <button
                ref={buttonRef}
                id={id}
                type="button"
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded={open}
                aria-controls={listId}
                aria-activedescendant={open ? `${listId}-${active}` : undefined}
                onClick={() => (open ? setOpen(false) : openMenu())}
                onKeyDown={onKeyDown}
                className={`flex w-full items-center justify-between gap-3 rounded-xl border bg-white px-4 py-3 text-left text-[0.95rem] text-ink outline-none transition-all duration-300 focus-visible:border-gold focus-visible:ring-4 focus-visible:ring-gold/20 ${open ? 'border-gold ring-4 ring-gold/20' : 'border-ivory-deep hover:border-gold/60'
                    }`}
            >
                <span className="truncate">{shown}</span>
                <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className={`size-4 shrink-0 fill-none stroke-gold-deep transition-transform duration-300 ease-premium ${open ? 'rotate-180' : ''}`}
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>

            <ul
                id={listId}
                role="listbox"
                aria-labelledby={id}
                className={`absolute inset-x-0 top-full z-30 mt-2 max-h-72 origin-top overflow-y-auto rounded-xl border border-gold/40 bg-ivory p-1.5 shadow-[0_24px_50px_rgba(6,39,31,0.25)] transition-[opacity,translate,scale,visibility] duration-300 ease-premium [scrollbar-width:thin] ${open ? 'visible translate-y-0 scale-100 opacity-100' : 'pointer-events-none invisible -translate-y-2 scale-95 opacity-0'
                    }`}
            >
                {[...(emptyLabel ? [{ options: [''] } as Group] : []), ...groups].map((g, gi) => (
                    <li key={gi} role="presentation">
                        {g.label && (
                            <p className="px-3 pt-3 pb-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">
                                {g.label}
                            </p>
                        )}
                        <ul role="presentation">
                            {g.options.map((opt) => {
                                index += 1;
                                const i = index;
                                const selected = opt === value;
                                return (
                                    <li
                                        key={opt || 'empty'}
                                        id={`${listId}-${i}`}
                                        ref={(el) => { itemRefs.current[i] = el; }}
                                        role="option"
                                        aria-selected={selected}
                                        onMouseEnter={() => setActive(i)}
                                        onClick={() => select(opt)}
                                        className={`cursor-pointer rounded-lg px-3 py-2.5 text-[0.95rem] transition-colors duration-200 ${active === i ? 'bg-gold/20 text-forest' : 'text-ink/80'
                                            } ${selected ? 'font-semibold text-forest' : ''}`}
                                    >
                                        <span
                                            className={`flex items-center justify-between gap-3 transition-[opacity,translate] duration-300 ease-premium ${open ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                                                }`}
                                            style={{ transitionDelay: open ? `${Math.min(i * 18, 260)}ms` : '0ms' }}
                                        >
                                            {opt === '' ? emptyLabel : opt}
                                            {selected && (
                                                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 shrink-0 fill-none stroke-gold-deep" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                                                </svg>
                                            )}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function EnquiryForm() {
    const [sent, setSent] = useState(false);

    // arriving from a destination page (/?destination=Bali#contact) preselects that destination
    const [preset, setPreset] = useState('');
    useEffect(() => {
        const d = new URLSearchParams(window.location.search).get('destination');
        if (d && [...DOMESTIC, ...INTERNATIONAL].some((x) => x.name === d)) setPreset(d);
    }, []);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const f = new FormData(form);
        const get = (k: string) => String(f.get(k) ?? '').trim() || '-';

        const message = [
            `Hello ${SITE.name}, I would like to enquire about a trip.`,
            '',
            `Name: ${get('name')}`,
            `Phone: ${get('phone')}`,
            `Email: ${get('email')}`,
            `Trip type: ${get('type')}`,
            `Destination: ${get('destination')}`,
            `Hotel category: ${get('hotel')}`,
            `Travel month: ${get('month')}`,
            `Travellers: ${get('guests')}`,
            `Message: ${get('message')}`,
        ].join('\n');

        // No backend needed: opens WhatsApp with the enquiry filled in.
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
        setSent(true);
        form.reset();
    };

    return (
        <section
            id="contact"
            aria-labelledby="enquiry-title"
            className={`${section} flex min-h-screen items-center bg-[linear-gradient(135deg,var(--color-forest-deep),var(--color-forest)_60%,var(--color-forest-soft))] text-ivory`}
        >
            <div className={`${container} grid items-start gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20`}>
                {/* left: invitation + contact */}
                <Reveal>
                    <p className={eyebrow.gold}>Plan your trip</p>
                    <h2 id="enquiry-title" className={`${h2} mb-5`}>Ready for your next escape?</h2>
                    <p className="mb-10 max-w-md text-[1.05rem] text-ivory/80">
                        Tell us where you would like to go, and our team will craft the rest.
                    </p>

                    <ul className="space-y-6">
                        <li>
                            <p className="mb-1 text-[0.7rem] uppercase tracking-[0.2em] text-gold">Call us</p>
                            <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="font-display text-[1.7rem] transition-colors hover:text-gold-light">
                                {SITE.phone}
                            </a>
                        </li>
                        <li>
                            <p className="mb-1 text-[0.7rem] uppercase tracking-[0.2em] text-gold">Email us</p>
                            <a href={`mailto:${SITE.email}`} className="font-display text-[1.7rem] break-all transition-colors hover:text-gold-light">
                                {SITE.email}
                            </a>
                        </li>
                        <li>
                            <p className="mb-1 text-[0.7rem] uppercase tracking-[0.2em] text-gold">Based in</p>
                            <p className="font-display text-[1.7rem]">Kerala, India</p>
                        </li>
                    </ul>
                </Reveal>

                {/* right: form */}
                <Reveal delay={150}>
                    <form
                        onSubmit={onSubmit}
                        className="rounded-[1.4rem] border border-gold/40 bg-ivory p-6 text-ink shadow-[0_30px_70px_rgba(0,0,0,0.35)] sm:p-9"
                    >
                        <h3 className="mb-6 font-display text-[1.8rem] leading-[1.1] text-forest">Send an enquiry</h3>

                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className={label}>Your name *</label>
                                <input id="name" name="name" required autoComplete="name" placeholder="Full name" className={field} />
                            </div>
                            <div>
                                <label htmlFor="phone" className={label}>Phone *</label>
                                <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+91" className={field} />
                            </div>
                            <div>
                                <label htmlFor="email" className={label}>Email</label>
                                <input id="email" name="email" type="email" autoComplete="email" placeholder="you@email.com" className={field} />
                            </div>
                            <Dropdown
                                id="type"
                                name="type"
                                label="Trip type"
                                emptyLabel="Select trip type"
                                groups={[{ options: tripTypes }]}
                            />
                            <Dropdown
                                key={preset}
                                id="destination"
                                name="destination"
                                label="Destination"
                                emptyLabel="Not sure yet, suggest me"
                                defaultValue={preset}
                                groups={[
                                    { label: 'India', options: DOMESTIC.map((d) => d.name) },
                                    { label: 'International', options: INTERNATIONAL.map((d) => d.name) },
                                ]}
                            />
                            <Dropdown
                                id="hotel"
                                name="hotel"
                                label="Hotel category"
                                emptyLabel="No preference"
                                groups={[{ options: hotelCategories }]}
                            />
                            <div>
                                <label htmlFor="month" className={label}>Travel month</label>
                                <input id="month" name="month" placeholder="e.g. December" className={field} />
                            </div>
                            <div>
                                <label htmlFor="guests" className={label}>Travellers</label>
                                <input id="guests" name="guests" type="number" min={1} max={50} defaultValue={2} className={field} />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className={label}>Message</label>
                                <textarea id="message" name="message" rows={4} placeholder="Tell us about your plans..." className={`${field} resize-y`} />
                            </div>
                        </div>

                        <button type="submit" className={`${btn('gold')} mt-7 w-full`}>
                            <span>Send enquiry on WhatsApp</span>
                        </button>

                        <p role="status" aria-live="polite" className="mt-4 min-h-6 text-center text-[0.85rem] text-forest-soft">
                            {sent && 'Thank you! WhatsApp should open with your enquiry. If it did not, please call us.'}
                        </p>
                    </form>
                </Reveal>
            </div>
        </section>
    );
}