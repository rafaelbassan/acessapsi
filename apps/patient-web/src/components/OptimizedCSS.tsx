'use client'

import { useEffect } from 'react'

export function OptimizedCSS() {
  useEffect(() => {
    // Carregamento assíncrono de CSS não crítico
    const loadDeferredStyles = () => {
      const addStylesheet = (href: string) => {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = href
        link.media = 'all'
        document.head.appendChild(link)
      }

      // Se houver CSS não crítico, carregue aqui
      // addStylesheet('/path/to/non-critical.css')
    }

    // Aguardar o load para carregar CSS não crítico
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadDeferredStyles)
    } else {
      loadDeferredStyles()
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', loadDeferredStyles)
    }
  }, [])

  return null
}
