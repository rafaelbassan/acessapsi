import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClientOnlyErrorBoundary } from '../components/ClientOnlyErrorBoundary'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Acessa Psi',
  description: 'Cuidado psicológico especializado para o seu bem-estar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ClientOnlyErrorBoundary>
          {children}
        </ClientOnlyErrorBoundary>
      </body>
    </html>
  )
} 