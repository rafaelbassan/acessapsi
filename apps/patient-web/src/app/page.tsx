import React from 'react'
import SimpleNavigation from '../components/SimpleNavigation'
import SimpleHeroSection from '../components/SimpleHeroSection'
import HowTherapyWorksSection from '../components/HowTherapyWorksSection'
import SpecialtiesSection from '../components/SpecialtiesSection'
import SimpleBenefitsSection from '../components/SimpleBenefitsSection'
import SimpleProfessionalsSection from '../components/SimpleProfessionalsSection'
import SimpleFAQSection from '../components/SimpleFAQSection'
import PsicoterapiaSection from '../components/PsicoterapiaSection'
import TerapiaCasalSection from '../components/TerapiaCasalSection'
import AvaliacoesSection from '../components/AvaliacoesSection'
import SimpleAboutSection from '../components/SimpleAboutSection'
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
        <HowTherapyWorksSection />
        <SpecialtiesSection />
        <SimpleBenefitsSection />
        <SimpleProfessionalsSection />
        <SimpleFAQSection />
        <PsicoterapiaSection />
        <TerapiaCasalSection />
        <AvaliacoesSection />
        <SimpleAboutSection />
        <SimpleContactSection />
        <SimpleFooter />
      </div>
    </main>
  )
} 