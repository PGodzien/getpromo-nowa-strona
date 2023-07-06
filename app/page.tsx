import Clients from './components/clients';
import CtaFooter from './components/ctaFooter';
import Features from './components/features';
import Hero from './components/hero';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Clients />
      <CtaFooter />
    </>
  )
}
