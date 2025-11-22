import { AnimatedHero } from '@/components/AnimatedHero'
import { Testimonials } from '@/components/Testimonials'
import ContactSection from '@/components/ContactSection'
import { AboutSection } from './home/AboutSection'
import { ServicesSection } from './home/ServicesSection'
import { PortfolioGridSection } from './home/PortfolioGridSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <AnimatedHero />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Portfolio Grid Section */}
      <PortfolioGridSection />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Section */}
      <ContactSection />
    </main>
  )
}

