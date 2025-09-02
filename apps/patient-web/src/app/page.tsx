import React from 'react'
import SimpleNavigation from '../components/SimpleNavigation'
import SimpleHeroSection from '../components/SimpleHeroSection'
import SimpleAboutSection from '../components/SimpleAboutSection'
import HowTherapyWorksSection from '../components/HowTherapyWorksSection'
import SpecialtiesSection from '../components/SpecialtiesSection'
import SimpleBenefitsSection from '../components/SimpleBenefitsSection'
import SimpleProfessionalsSection from '../components/SimpleProfessionalsSection'
import SimpleFAQSection from '../components/SimpleFAQSection'
import SimpleContactSection from '../components/SimpleContactSection'
import SimpleFooter from '../components/SimpleFooter'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <SimpleNavigation />

      {/* Main Content */}
      <div className="relative z-10">
        <SimpleHeroSection />
        <SimpleAboutSection />
        <HowTherapyWorksSection />
        <SpecialtiesSection />
        <SimpleBenefitsSection />
        <SimpleProfessionalsSection />
        <SimpleFAQSection />
        <SimpleContactSection />
        <SimpleFooter />
      </div>
    </main>
  )
} 