import Clients from './components/clients';
import CtaFooter from './components/ctaFooter';
import Features from './components/features';
import Footer from './components/footer';
import Hero from './components/hero';
import { Testimonials } from './components/testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Clients />
      <Testimonials />
      <CtaFooter />
    </>
  )
}
