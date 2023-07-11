import Clients from './components/clients';
import CtaFooter from './components/ctaFooter';
import Features from './components/features';
import Footer from './components/footer';
import { Analytics } from '@vercel/analytics/react';
import Hero from './components/hero';
import { Testimonials } from './components/testimonials';

export default function Home() {
  return (
    <>
    <Analytics />
      <Hero />
      <Features />
      <Clients />
      <Testimonials />
      <CtaFooter />
    </>
  )
}
