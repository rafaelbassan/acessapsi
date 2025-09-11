import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import SimpleNavigation from '../components/SimpleNavigation'
import SimpleHeroSection from '../components/SimpleHeroSection'
import LoadingSkeleton from '../components/LoadingSkeleton'

// Lazy load dos componentes pesados
const HowTherapyWorksSection = dynamic(() => import('../components/HowTherapyWorksSection'), {
  loading: () => <LoadingSkeleton />
})
const SpecialtiesSection = dynamic(() => import('../components/SpecialtiesSection'), {
  loading: () => <LoadingSkeleton />
})
const SimpleBenefitsSection = dynamic(() => import('../components/SimpleBenefitsSection'), {
  loading: () => <LoadingSkeleton />
})
const SimpleProfessionalsSection = dynamic(() => import('../components/SimpleProfessionalsSection'), {
  loading: () => <LoadingSkeleton />
})
const SimpleFAQSection = dynamic(() => import('../components/SimpleFAQSection'), {
  loading: () => <LoadingSkeleton />
})
const PsicoterapiaSection = dynamic(() => import('../components/PsicoterapiaSection'), {
  loading: () => <LoadingSkeleton />
})
const TerapiaCasalSection = dynamic(() => import('../components/TerapiaCasalSection'), {
  loading: () => <LoadingSkeleton />
})
const AvaliacoesSection = dynamic(() => import('../components/AvaliacoesSection'), {
  loading: () => <LoadingSkeleton />
})
const SimpleAboutSection = dynamic(() => import('../components/SimpleAboutSection'), {
  loading: () => <LoadingSkeleton />
})
const SimpleContactSection = dynamic(() => import('../components/SimpleContactSection'), {
  loading: () => <LoadingSkeleton />
})
const SimpleFooter = dynamic(() => import('../components/SimpleFooter'), {
  loading: () => <LoadingSkeleton />
})

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation - sempre carregado para UX */}
      <SimpleNavigation />

      {/* Main Content */}
      <div className="relative z-10">
        <SimpleHeroSection />

        <Suspense fallback={<LoadingSkeleton />}>
          <HowTherapyWorksSection />
        </Suspense>

        <Suspense fallback={<LoadingSkeleton />}>
          <SpecialtiesSection />
        </Suspense>

        <Suspense fallback={<LoadingSkeleton />}>
          <SimpleBenefitsSection />
        </Suspense>

        <Suspense fallback={<LoadingSkeleton />}>
          <SimpleProfessionalsSection />
        </Suspense>

        <Suspense fallback={<LoadingSkeleton />}>
          <SimpleFAQSection />
        </Suspense>

        <Suspense fallback={<LoadingSkeleton />}>
          <PsicoterapiaSection />
        </Suspense>

        <Suspense fallback={<LoadingSkeleton />}>
          <TerapiaCasalSection />
        </Suspense>

        <Suspense fallback={<LoadingSkeleton />}>
          <AvaliacoesSection />
        </Suspense>

        <Suspense fallback={<LoadingSkeleton />}>
          <SimpleAboutSection />
        </Suspense>

        <Suspense fallback={<LoadingSkeleton />}>
          <SimpleContactSection />
        </Suspense>

        <Suspense fallback={<LoadingSkeleton />}>
          <SimpleFooter />
        </Suspense>
      </div>
    </main>
  )
} 