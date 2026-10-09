import type { Metadata } from 'next';
import Nav from './components/nav';
import Hero from './components/hero';
import Offerings from './components/offerings';
import Destinations from './components/destinations';
import Packages from './components/package';
import WhyUs from './components/why-us';
import Cta from './components/cta';
import Footer from './components/footer';
import { SITE } from './lib/site';

export const metadata: Metadata = {
  title: { absolute: `Hotels, Houseboats, Kayaking & Holiday Packages | ${SITE.name}` },
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Offerings />
        <Destinations />
        <Packages />
        <WhyUs />
        <Cta />
      </main>
      <Footer />
    </>
  );
}