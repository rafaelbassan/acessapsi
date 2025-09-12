import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ClientOnlyErrorBoundary } from '../components/ClientOnlyErrorBoundary'
import { OptimizedCSS } from '../components/OptimizedCSS'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Importante: usar font-display swap para melhor performance
  preload: true,
  fallback: ['system-ui', 'arial'],
  variable: '--font-inter', // Usar variável CSS para melhor performance
  adjustFontFallback: false, // Desabilitar ajuste automático de fallback
})

export const metadata: Metadata = {
  title: 'Acessa Psi - Psicologia Clínica Especializada',
  description: 'Cuidado psicológico profissional e humanizado. Atendimento especializado em psicoterapia para adultos, adolescentes e casais. Agende sua consulta.',
  keywords: 'psicologia, psicoterapia, terapia, psicologia clínica, psicólogo, saúde mental',
  authors: [{ name: 'Acessa Psi' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Acessa Psi - Psicologia Clínica Especializada',
    description: 'Cuidado psicológico profissional e humanizado',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" data-theme="light">
      <head>
        {/* Critical Resource Hints - Ordem importa! */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Preload recursos críticos ANTES de qualquer outra coisa */}
        <link rel="preload" href="/images/logo_psi.png" as="image" type="image/png" />
        
        {/* DNS prefetch para outros recursos */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Meta tags para otimização */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        
        {/* Inline CSS crítico para evitar render blocking */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* CSS crítico inline para evitar FOUC e render blocking */
            :root {
              --bg-primary: 255, 255, 255;
              --bg-secondary: 248, 250, 252;
              --foreground-rgb: 30, 41, 59;
              --psychology-green: 5, 150, 105;
            }
            html { 
              font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; 
              line-height: 1.5;
            }
            body { 
              margin: 0; 
              padding: 0; 
              background-color: rgb(var(--bg-primary));
              color: rgb(var(--foreground-rgb));
            }
            .font-inter { font-family: var(--font-inter), system-ui, sans-serif; }
            /* Loading state para evitar FOUC */
            .loading { opacity: 0; }
            .loaded { opacity: 1; transition: opacity 0.2s ease-in; }
          `
        }} />
      </head>
      <body className={`${inter.className} ${inter.variable}`}>
        <OptimizedCSS />
        <ClientOnlyErrorBoundary>
          {children}
        </ClientOnlyErrorBoundary>
      </body>
    </html>
  )
} 