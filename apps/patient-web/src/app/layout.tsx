import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClientOnlyErrorBoundary } from '../components/ClientOnlyErrorBoundary'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Acessa Psi - Psicologia Clínica Especializada',
  description: 'Cuidado psicológico profissional e humanizado. Atendimento especializado em psicoterapia para adultos, adolescentes e casais. Agende sua consulta.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" data-theme="light">
      <body className={inter.className}>
        <ClientOnlyErrorBoundary>
          {children}
        </ClientOnlyErrorBoundary>
      </body>
    </html>
  )
} 