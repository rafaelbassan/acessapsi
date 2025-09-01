"use client";

import React, { useState } from 'react';
import LiquidGlassCard from './LiquidGlassCard';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: "Como funciona o processo de terapia online?",
    answer: "A terapia online funciona através de videochamadas seguras e confidenciais. Você pode agendar sessões do conforto da sua casa, mantendo a mesma qualidade e eficácia do atendimento presencial.",
    category: "Processo"
  },
  {
    question: "Quanto tempo dura cada sessão?",
    answer: "Cada sessão tem duração de 50 minutos, seguindo os padrões éticos da psicologia. Este tempo é otimizado para um trabalho terapêutico efetivo e focado.",
    category: "Sessões"
  },
  {
    question: "Quais são as especialidades atendidas?",
    answer: "Atendemos diversas especialidades incluindo ansiedade, depressão, terapia de casal, terapia familiar, transtornos alimentares, estresse pós-traumático e desenvolvimento pessoal.",
    category: "Especialidades"
  },
  {
    question: "Como é garantida a confidencialidade?",
    answer: "Seguimos rigorosamente o Código de Ética dos Psicólogos, garantindo total sigilo profissional. Todas as sessões são realizadas em plataformas criptografadas e certificadas.",
    category: "Confidencialidade"
  },
  {
    question: "Qual o valor das consultas?",
    answer: "Os valores variam de acordo com a especialidade e modalidade. Entre em contato conosco para obter informações específicas sobre preços e condições de pagamento.",
    category: "Valores"
  },
  {
    question: "Posso cancelar ou reagendar uma sessão?",
    answer: "Sim, é possível cancelar ou reagendar sessões com até 24 horas de antecedência, sem custo adicional. Para reagendamentos de última hora, aplicam-se políticas específicas.",
    category: "Agendamento"
  }
];

export default function InteractiveFAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = ['Todos', ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQs = selectedCategory === 'Todos'
    ? faqData
    : faqData.filter(item => item.category === selectedCategory);

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Perguntas Frequentes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Dúvidas
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Comuns
            </span>
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Encontre respostas para as perguntas mais frequentes sobre nossos serviços
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((item, index) => {
            const isOpen = openItems.has(index);
            return (
              <LiquidGlassCard
                key={index}
                variant="light"
                intensity="subtle"
                className="cursor-pointer transition-all duration-300 hover:bg-white/15"
                onClick={() => toggleItem(index)}
                interactive={true}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                          : 'bg-white/20'
                      }`}>
                        <span className="text-sm font-bold text-white">
                          {index + 1}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-xs font-medium text-blue-300 bg-blue-500/20 px-2 py-1 rounded-full">
                            {item.category}
                          </span>
                        </div>

                        <h3 className="text-lg font-semibold text-white mb-2">
                          {item.question}
                        </h3>

                        <div className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <p className="text-slate-300 leading-relaxed pt-2">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={`transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}>
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    </div>
                  </div>
                </div>
              </LiquidGlassCard>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <LiquidGlassCard
            variant="gradient"
            intensity="medium"
            className="inline-block p-8 hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              Ainda tem dúvidas?
            </h3>
            <p className="text-slate-300 mb-4">
              Entre em contato conosco para esclarecer qualquer questão
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 text-blue-300 hover:text-blue-200 font-medium transition-colors duration-300"
            >
              <span>Falar com Especialista</span>
              <ChevronDown className="w-4 h-4" />
            </a>
          </LiquidGlassCard>
        </div>
      </div>
    </section>
  );
}
