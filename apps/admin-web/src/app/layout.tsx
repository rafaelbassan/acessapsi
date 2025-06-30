import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
import AuthGuard from '@/components/AuthGuard'
import AppLayoutClient from '@/components/layout/AppLayoutClient'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PsiClin Admin - Gestão de Clínica',
  description: 'Sistema administrativo para gestão de clínicas de psicologia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AppLayoutClient>
          {children}
        </AppLayoutClient>
      </body>
    </html>
  )
} 