import React from 'react'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProfessionalsSection from '../components/ProfessionalsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-900 relative overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10">
        <section id="home">
          <HeroSection />
        </section>
        <AboutSection />
        <ProfessionalsSection />
        <ContactSection />
        <Footer />
      </div>
      
      {/* TODO: Implement remaining sections */}
      {/* <SpecialtiesSection /> */}
      {/* <HowItWorksSection /> */}
    </main>
  )
} 