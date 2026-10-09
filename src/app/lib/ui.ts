// Shared Tailwind class strings, so the same look is not repeated in every file.

export const container = 'mx-auto w-[92%] max-w-[88rem] 3xl:max-w-[110rem]';
export const section = 'py-[clamp(4rem,9vw,8rem)]';
export const h2 = 'font-display text-[clamp(2rem,4.4vw,3.6rem)] font-semibold leading-[1.1]';

const eyebrowBase =
    'mb-5 flex items-center gap-3.5 text-[0.78rem] uppercase tracking-[0.3em] before:h-px before:w-10 before:bg-current';
export const eyebrow = {
    gold: `${eyebrowBase} text-gold`,
    dark: `${eyebrowBase} text-gold-deep`,
};

export const link =
    'group/link relative text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-gold';
export const linkArrow =
    'inline-block transition-transform duration-500 group-hover/link:translate-x-2';

// Card background fallbacks (shown until a photo is added)
export const gradients = [
    'bg-[linear-gradient(160deg,#145240,#06271f)]',
    'bg-[linear-gradient(160deg,#1b4f55,#08262b)]',
    'bg-[linear-gradient(160deg,#2a5a3a,#0b2a1a)]',
    'bg-[linear-gradient(160deg,#4a4a22,#1e2210)]',
];

// Premium buttons: btn('gold') or btn('ghost', 'sm')
const btnShape =
    'relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border font-semibold uppercase tracking-[0.14em] transition-all duration-500 ease-premium hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold [&>span]:relative [&>span]:z-10';

const btnSizes = {
    md: 'px-8 py-4 text-[0.82rem] max-sm:w-full',
    sm: 'px-5 py-2.5 text-[0.72rem]',
};

const btnVariants = {
    gold:
        'border-transparent text-forest-deep bg-[linear-gradient(135deg,var(--color-gold-light),var(--color-gold)_50%,var(--color-gold-deep))] shadow-[0_6px_20px_rgba(201,169,97,0.35),inset_0_1px_0_rgba(255,255,255,0.5)] hover:shadow-[0_14px_34px_rgba(201,169,97,0.5),inset_0_1px_0_rgba(255,255,255,0.6)] before:absolute before:top-0 before:-left-[120%] before:h-full before:w-3/5 before:-skew-x-20 before:bg-[linear-gradient(100deg,transparent,rgba(255,255,255,0.65),transparent)] before:transition-[left] before:duration-700 before:ease-premium hover:before:left-[140%]',
    ghost:
        'border-gold-light/60 text-ivory hover:border-gold hover:text-forest-deep after:absolute after:inset-0 after:translate-y-full after:rounded-full after:bg-gold after:transition-transform after:duration-500 after:ease-premium hover:after:translate-y-0',
};

export const btn = (variant: 'gold' | 'ghost', size: 'md' | 'sm' = 'md') =>
    `${btnShape} ${btnSizes[size]} ${btnVariants[variant]}`;