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
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Alex Bassan - Psicólogo Clínico</h3>
              <p>
                Com mais de 10 anos de experiência, atuo com foco no bem-estar e no desenvolvimento humano de crianças, adolescentes, adultos, casais e famílias. Trabalho com atendimentos presenciais e online na região de Campinas e também atuo em contextos sociais e empresariais. Minha prática é humanizada, baseada em evidências e orientada para resultados concretos e observáveis na vida dos meus pacientes.
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
                  <p className="text-slate-200">• Bacharel em Psicologia — Universidade Paulista (UNIP)</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-purple-300 flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Pós-Graduações</span>
                </h3>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2">
                  <p className="text-slate-200">• Pós-graduado em Psicologia Sistêmica: Atendimento a Casais e Famílias (UNIARA)</p>
                  <p className="text-slate-200">• Pós-graduando em Intervenções da Análise do Comportamento Aplicada (ABA)</p>
                  <p className="text-slate-200">• Pós-graduando em Neuropsicologia</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-green-300 flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Abordagens Terapêuticas</span>
                </h3>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2">
                  <p className="text-slate-200">• TCC: terapia prática para identificar e modificar padrões de pensamento e comportamento que mantêm ansiedade e depressão.</p>
                  <p className="text-slate-200">• ABA: uso de estratégias baseadas em análise do comportamento para desenvolvimento de habilidades, especialmente em TEA e intervenções com crianças.</p>
                  <p className="text-slate-200">• Terapia Sistêmica: foco em relacionamentos e dinâmicas familiares — indicada para casais e famílias com conflitos e dificuldades de comunicação.</p>
                  <p className="text-slate-200">• Integro análise de perfil da personalidade e técnicas da Psicologia Positiva para promover habilidades e recursos do paciente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Grid - Specialties and Differentials */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Specialties Section */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">O que Posso te Ajudar</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Terapia para Casais e Famílias</h4>
                <p className="text-slate-200">Melhoria da comunicação, resolução de conflitos e reorganização de papéis.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-lg font-semibold text-green-300 mb-2">Tratamento de Ansiedade e Depressão</h4>
                <p className="text-slate-200">Adultos e adolescentes — uso de TCC para reduzir sintomas e retomar o controle.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-lg font-semibold text-purple-300 mb-2">Intervenções em TEA e Paralisia Cerebral</h4>
                <p className="text-slate-200">Estratégias ABA e apoio ao desenvolvimento de habilidades sociais e comunicativas.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-lg font-semibold text-yellow-300 mb-2">Atendimento a Crianças, Adolescentes e Adultos</h4>
                <p className="text-slate-200">Acompanhamento individualizado para cada fase da vida.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-lg font-semibold text-indigo-300 mb-2">Avaliações Psicológicas</h4>
                <p className="text-slate-200">Diagnósticos abrangentes, escolares, ocupacionais e de personalidade.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-lg font-semibold text-pink-300 mb-2">Supervisão Profissional</h4>
                <p className="text-slate-200">Atuação com supervisão de atendimentos e equipes desde 2014.</p>
              </div>
            </div>
          </div>

          {/* Differentials Section */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Por que me Escolher</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-lg font-semibold text-yellow-300 mb-2">Experiência Prática</h4>
                <p className="text-slate-200">Mais de 10 anos com acompanhamentos regulares e resultados monitorados.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Escuta Qualificada e Atendimento Humanizado</h4>
                <p className="text-slate-200">Garantia de segurança e acolhimento para criar uma conexão terapêutica efetiva.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-lg font-semibold text-purple-300 mb-2">Comunicação Aumentativa e Alternativa (CAA)</h4>
                <p className="text-slate-200">Uso quando indicado para trabalhar com diferentes necessidades de comunicação.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-lg font-semibold text-green-300 mb-2">Abordagem Integrativa</h4>
                <p className="text-slate-200">Combino TCC, ABA e Sistêmica conforme necessidades específicas.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-lg font-semibold text-indigo-300 mb-2">Foco em Metas Mensuráveis</h4>
                <p className="text-slate-200">Baseada em evidência e orientada para resultados concretos.</p>
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
            <h2 className="text-3xl font-bold text-white">Agende sua Consulta</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-200">
                <Phone className="w-5 h-5 text-green-300" />
                <span><strong className="text-white">WhatsApp:</strong> (19) 98820-0585</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-200">
                <MapPin className="w-5 h-5 text-blue-300" />
                <span><strong className="text-white">Endereço:</strong> Clínica Raízes, Rua Frei Antônio de Pádua, 1028, Campinas, SP</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-200">
                <Award className="w-5 h-5 text-purple-300" />
                <span><strong className="text-white">CRP:</strong> 06/115097</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-200">
                <Calendar className="w-5 h-5 text-indigo-300" />
                <span><strong className="text-white">Modalidades:</strong> Presencial e Online</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-200">
                <Heart className="w-5 h-5 text-pink-300" />
                <span><strong className="text-white">Opções:</strong> Avulso, Pacote Mensal, Pacote Semestral</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-200">
                <Mail className="w-5 h-5 text-yellow-300" />
                <span><strong className="text-white">Email:</strong> alex.bassan@acessapsi.com</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <h3 className="text-xl font-semibold text-white mb-4">Agende uma avaliação inicial para alinharmos objetivos e escolher a melhor abordagem — entre em contato pelo WhatsApp.</h3>
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
