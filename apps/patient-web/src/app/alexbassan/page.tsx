"use client"

import React from 'react'
import { MessageCircle, Calendar, Mail, MapPin, Award, Heart, Users, Zap, Phone } from 'lucide-react'

export default function AlexBassanPage() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5519988200585';
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta com o psicólogo Alex Bassan.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+5519988200585', '_self');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-12">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-12 shadow-2xl">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-white/90 flex items-center justify-center">
                  <span className="text-4xl font-bold text-transparent bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text">AB</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Alex Gustavo Bassan
              </h1>
              <p className="text-2xl text-blue-300 font-medium mb-2">Psicólogo Clínico e Social</p>
              <p className="text-lg text-slate-300 mb-8">CRP 06/115097</p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>WhatsApp</span>
                </button>
                
                <button
                  onClick={handleCallClick}
                  className="flex items-center justify-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                >
                  <Phone className="w-6 h-6" />
                  <span>Ligar Agora</span>
                </button>
                
                <button className="flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-sm">
                  <Calendar className="w-6 h-6" />
                  <span>Agendar</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* About Section */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Sobre</h2>
            </div>
            
            <div className="text-slate-200 space-y-4 leading-relaxed">
              <p>
                Alex Bassan é formado em <span className="text-blue-300 font-semibold">Psicologia pela Universidade Paulista (UNIP)</span> e atua na área clínica e social desde <span className="text-purple-300 font-semibold">2014</span>.
              </p>
              <p>
                É especialista em <span className="text-blue-300 font-semibold">Psicologia Sistêmica</span> e possui formação em <span className="text-purple-300 font-semibold">Análise do Comportamento Aplicada</span>.
              </p>
              <p>
                Desde 2019, está inserido no programa de cursos integrados em <span className="text-blue-300 font-semibold">Psicologia Positiva</span>, mantendo-se atualizado com as mais recentes abordagens terapêuticas.
              </p>
              <p>
                Utiliza jogos para o desenvolvimento socioemocional, acreditando no poder do brincar como ferramenta terapêutica. Atualmente, integra o corpo clínico da <span className="text-purple-300 font-semibold">Clínica Raízes em Campinas/SP</span>.
              </p>
            </div>
          </div>

          {/* Qualifications Section */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Qualificações</h2>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-blue-300 flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Formação Acadêmica</span>
                </h3>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-slate-200">• Graduação em Psicologia - UNIP (2012)</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-purple-300 flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Especializações</span>
                </h3>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2">
                  <p className="text-slate-200">• Psicologia Sistêmica</p>
                  <p className="text-slate-200">• Análise do Comportamento Aplicada</p>
                  <p className="text-slate-200">• Psicologia Positiva (desde 2019)</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-green-300 flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Áreas de Atuação</span>
                </h3>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2">
                  <p className="text-slate-200">• Psicologia Clínica</p>
                  <p className="text-slate-200">• Psicologia Social</p>
                  <p className="text-slate-200">• Desenvolvimento Socioemocional</p>
                  <p className="text-slate-200">• Ludoterapia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-xl mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-pink-500 flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Informações de Contato</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-200">
                <Mail className="w-5 h-5 text-blue-300" />
                <span><strong className="text-white">Email:</strong> alex.bassan@acessapsi.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-200">
                <Award className="w-5 h-5 text-purple-300" />
                <span><strong className="text-white">CRP:</strong> 06/115097</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-200">
                <Phone className="w-5 h-5 text-green-300" />
                <span><strong className="text-white">WhatsApp:</strong> (19) 98820-0585</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-200">
                <Calendar className="w-5 h-5 text-indigo-300" />
                <span><strong className="text-white">Experiência:</strong> Desde 2014</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-200">
                <MapPin className="w-5 h-5 text-pink-300" />
                <span><strong className="text-white">Local:</strong> Clínica Raízes - Campinas/SP</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Entre em contato agora:</h3>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Conversar no WhatsApp</span>
              </button>
              
              <button
                onClick={handleCallClick}
                className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Ligar Diretamente</span>
              </button>
              
              <a
                href="mailto:alex.bassan@acessapsi.com"
                className="flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                <span>Enviar Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
          <p className="text-sm text-slate-400">
            Informações obtidas de fontes públicas verificadas: Clínica Raízes Campinas, LinkedIn, Escavador
          </p>
        </footer>
      </div>
    </main>
  )
}
