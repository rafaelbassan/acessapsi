'use client'

import { useEffect } from 'react'

interface CriticalCSSProps {
  children: React.ReactNode
}

export function CriticalCSS({ children }: CriticalCSSProps) {
  useEffect(() => {
    // Carregar CSS não crítico de forma assíncrona após o carregamento inicial
    const loadNonCriticalCSS = () => {
      const links = document.querySelectorAll('link[rel="preload"][as="style"]')
      links.forEach(link => {
        const linkElement = link as HTMLLinkElement
        linkElement.rel = 'stylesheet'
      })
    }

    // Carregar após o primeiro paint
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadNonCriticalCSS)
    } else {
      setTimeout(loadNonCriticalCSS, 100)
    }
  }, [])

  return <>{children}</>
}
