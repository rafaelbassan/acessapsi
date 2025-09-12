'use client'

import { lazy, Suspense, useState, useRef, useEffect } from 'react'
import ElegantLoader from './ElegantLoader'

interface LazyComponentProps {
  componentPath: string
  fallback?: React.ComponentType
  [key: string]: any
}

export function LazyComponent({ 
  componentPath, 
  fallback: Fallback = ElegantLoader,
  ...props 
}: LazyComponentProps) {
  const Component = lazy(() => import(componentPath))
  
  return (
    <Suspense fallback={<Fallback />}>
      <Component {...props} />
    </Suspense>
  )
}

// Hook para lazy loading baseado em intersecção
export function useLazyLoad(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}
