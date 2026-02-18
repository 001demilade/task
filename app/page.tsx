import Hero from './components/Hero'
import Features from './components/Features'
import PricingSection from './components/PricingSection'
// import { i } from 'framer-motion/client'
import Testimonial from './components/Testimonial'
import MobileSection from './components/MobileSection'
import Footer from './components/Footer'


export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <PricingSection />
      <Testimonial />
      <MobileSection />
      <Footer />
      {/* Other sections like Pricing, FAQ, etc. */}
    </main>
  )
}