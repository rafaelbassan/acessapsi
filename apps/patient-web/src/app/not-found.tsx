import React from 'react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-neutral-300 mb-6">
          Página não encontrada
        </h2>
        <p className="text-neutral-400 mb-8">
          A página que você está procurando não existe.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
        >
          Voltar ao início
        </a>
      </div>
    </div>
  )
} 