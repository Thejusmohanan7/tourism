import type { Metadata } from 'next';
import Header from './components/Header';
import Reveal from './components/Reveal';
import SearchBar from './components/SearchBar';
import { SITE } from './lib/site';

type Destination = { n: string; t: string; d: string; c: string };
type Pkg = { t: string; m: string; p: string; tag: string };

const destinations: Destination[] = [
  { n: '01', t: 'India Trips', d: 'Hill stations, heritage cities and coastlines, planned end to end.', c: 'g1' },
  { n: '02', t: 'International', d: 'Dubai, Singapore, Bali and beyond with visas and stays handled.', c: 'g2' },
  { n: '03', t: 'Kayaking', d: 'Paddle through quiet backwaters and mangrove channels at sunrise.', c: 'g3' },
  { n: '04', t: 'Houseboats', d: 'Private Kerala houseboats with chef, deck and slow sunsets.', c: 'g4' },
];

const packages: Pkg[] = [
  { t: 'Munnar Misty Escape', m: '3 Nights · Hotel + Transfers', p: '₹14,999', tag: 'India' },
  { t: 'Alleppey Houseboat Retreat', m: '2 Nights · Full Board', p: '₹18,500', tag: 'Houseboat' },
  { t: 'Dubai Signature Getaway', m: '5 Nights · Flights + Hotel', p: '₹64,900', tag: 'International' },
];

const stats: [string, string][] = [['12k+', 'Happy travellers'], ['250+', 'Handpicked stays'], ['40+', 'Destinations'], ['24/7', 'Trip support']];

export const metadata: Metadata = {
  title: { absolute: `Hotels, Houseboats, Kayaking & Holiday Packages | ${SITE.name}` },
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        {/* HERO */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-bg" aria-hidden="true">
            <span className="orb o1" /><span className="orb o2" />
            <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="wave">
              <path d="M0 120 C240 40 480 200 720 120 S1200 40 1440 120 V200 H0Z" />
            </svg>
          </div>
          <div className="container hero-in">
            <p className="eyebrow">Curated travel · Kerala &amp; beyond</p>
            <h1 id="hero-title">Journeys crafted <em>with grace</em></h1>
            <p className="lead">{SITE.description}</p>
            <div className="cta-row">
              <a href="#packages" className="btn btn-gold"><span>Explore Packages</span></a>
              <a href="#contact" className="btn btn-ghost"><span>Talk to an Expert</span></a>
            </div>
          </div>
          <div className="container"><SearchBar /></div>
        </section>

        {/* DESTINATIONS */}
        <section id="destinations" className="section" aria-labelledby="dest-title">
          <div className="container">
            <Reveal><p className="eyebrow dark">What we offer</p>
              <h2 id="dest-title">Four ways to travel</h2></Reveal>
            <div className="grid cards" id="experiences">
              {destinations.map((x, i) => (
                <Reveal key={x.t} delay={i * 90} as="article" className={`card ${x.c}`}>
                  <span className="num">{x.n}</span>
                  <h3>{x.t}</h3><p>{x.d}</p>
                  <a href="#book" className="link">Discover <b>→</b></a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section id="packages" className="section alt" aria-labelledby="pkg-title">
          <div className="container">
            <Reveal><p className="eyebrow">Featured</p><h2 id="pkg-title">Signature packages</h2></Reveal>
            <div className="grid pk">
              {packages.map((x, i) => (
                <Reveal key={x.t} delay={i * 110} as="article" className="pkg">
                  <div className="pkg-img" aria-hidden="true"><span>{x.tag}</span></div>
                  <div className="pkg-body">
                    <h3>{x.t}</h3><p>{x.m}</p>
                    <div className="pkg-foot">
                      <div><small>from</small><strong>{x.p}</strong></div>
                      <a href="#book" className="btn btn-gold btn-sm"><span>Book</span></a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section id="why" className="section" aria-labelledby="why-title">
          <div className="container">
            <Reveal><p className="eyebrow dark">Why {SITE.name}</p>
              <h2 id="why-title">Travel, made effortless</h2></Reveal>
            <div className="grid stats">
              {stats.map(([a, b], i) => (
                <Reveal key={b} delay={i * 80} className="stat"><strong>{a}</strong><span>{b}</span></Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="cta" aria-labelledby="cta-title">
          <Reveal className="container cta-in">
            <h2 id="cta-title">Ready for your next escape?</h2>
            <p>Tell us where, and our team will craft the rest.</p>
            <div className="cta-row center">
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="btn btn-gold"><span>Call {SITE.phone}</span></a>
              <a href={`mailto:${SITE.email}`} className="btn btn-ghost"><span>Email Us</span></a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <div className="container foot-in">
          <span className="logo"><span className="logo-mark">◆</span>{SITE.name}</span>
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
