import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClientOnlyErrorBoundary } from '../components/ClientOnlyErrorBoundary'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Acessa Psi - Psicologia Clínica Especializada',
  description: 'Cuidado psicológico profissional e humanizado. Atendimento especializado em psicoterapia para adultos, adolescentes e casais. Agende sua consulta.',
  keywords: 'psicologia, psicoterapia, terapia, psicologia clínica, psicólogo, saúde mental',
  authors: [{ name: 'Acessa Psi' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Acessa Psi - Psicologia Clínica Especializada',
    description: 'Cuidado psicológico profissional e humanizado',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" data-theme="light">
      <head>
        {/* Preload recursos críticos */}
        <link rel="preload" href="/images/logo_psi.png" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        {/* Preconnect para recursos externos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>
        <ClientOnlyErrorBoundary>
          {children}
        </ClientOnlyErrorBoundary>
      </body>
    </html>
  )
} 