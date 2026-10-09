'use client';
import { useEffect, useState } from 'react';
import { SITE } from '../lib/site';

const links: [label: string, href: string][] = [
  ['Destinations', '#destinations'], ['Experiences', '#experiences'],
  ['Packages', '#packages'], ['Why us', '#why'], ['Contact', '#contact'],
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <header className={`header ${solid ? 'solid' : ''} ${open ? 'open' : ''}`}>
      <div className="container header-in">
        <a href="#top" className="logo" aria-label={`${SITE.name} home`}>
          <span className="logo-mark">◆</span>{SITE.name}
        </a>
        <nav id="nav" className="nav" aria-label="Primary">
          {links.map(([t, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)}>{t}</a>
          ))}
          <a href="#book" className="btn btn-gold btn-sm" onClick={() => setOpen(false)}><span>Book Now</span></a>
        </nav>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open}
          aria-controls="nav" onClick={() => setOpen(!open)}>
          <i /><i /><i />
        </button>
      </div>
    </header>
  );
}
