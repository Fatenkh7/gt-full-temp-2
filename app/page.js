import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import FooterSection from '@/components/FooterSection'
import Header from '@/components/HeaderSection'
import Hero from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import TeamSection from '@/components/TeamSection'

import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}
