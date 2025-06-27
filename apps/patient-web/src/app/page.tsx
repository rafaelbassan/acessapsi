import React from 'react'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProfessionalsSection from '../components/ProfessionalsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl top-0 left-0 animate-pulse" />
        <div className="absolute w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl bottom-20 right-0 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute w-64 h-64 bg-purple-500/5 rounded-full blur-2xl top-1/2 left-1/4 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
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