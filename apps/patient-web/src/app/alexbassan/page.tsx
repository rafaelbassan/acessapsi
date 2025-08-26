"use client"

import React from 'react'

export default function AlexBassanPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-3xl p-8 shadow-lg">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Alex Gustavo Bassan</h1>
          <p className="text-xl text-purple-600 font-medium">Psicólogo Clínico e Social</p>
          <p className="text-sm text-slate-600 mt-2">CRP 06/115097</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 border-b-2 border-purple-200 pb-2">Sobre</h2>
            <div className="text-slate-700 space-y-3">
              <p>
                Alex Bassan é formado em Psicologia pela <strong>Universidade Paulista (UNIP)</strong> e atua na área clínica e social desde <strong>2014</strong>.
              </p>
              <p>
                É especialista em <strong>Psicologia Sistêmica</strong> e possui formação em <strong>Análise do Comportamento Aplicada</strong>.
              </p>
              <p>
                Desde 2019, está inserido no programa de cursos integrados em <strong>Psicologia Positiva</strong>, mantendo-se atualizado com as mais recentes abordagens terapêuticas.
              </p>
              <p>
                Utiliza jogos para o desenvolvimento socioemocional, acreditando no poder do brincar como ferramenta terapêutica. Atualmente, integra o corpo clínico da Clínica Raízes em Campinas/SP.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 border-b-2 border-purple-200 pb-2">Formação e Especialidades</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Formação Acadêmica</h3>
                <p className="text-slate-700">• Graduação em Psicologia - UNIP (2012)</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Especializações</h3>
                <ul className="text-slate-700 space-y-1">
                  <li>• Psicologia Sistêmica</li>
                  <li>• Análise do Comportamento Aplicada</li>
                  <li>• Psicologia Positiva (desde 2019)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Áreas de Atuação</h3>
                <ul className="text-slate-700 space-y-1">
                  <li>• Psicologia Clínica</li>
                  <li>• Psicologia Social</li>
                  <li>• Desenvolvimento Socioemocional</li>
                  <li>• Ludoterapia</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-8 bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Contato</h2>
          <div className="grid md:grid-cols-2 gap-4 text-slate-700">
            <div>
              <p><strong>Email:</strong> alex.bassan@acessapsi.com</p>
              <p><strong>CRP:</strong> 06/115097</p>
            </div>
            <div>
              <p><strong>Experiência:</strong> Desde 2014</p>
              <p><strong>Local:</strong> Campinas/SP</p>
            </div>
          </div>
        </section>

        <footer className="mt-8 pt-6 border-t border-slate-200">
          <p className="text-xs text-slate-500 text-center">
            Informações obtidas de fontes públicas verificadas: Clínica Raízes Campinas, LinkedIn, Escavador
          </p>
        </footer>
      </div>
    </main>
  )
}
