"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const SimpleFAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como funciona a primeira consulta?",
      answer: "A primeira consulta é um momento de conhecimento mútuo. Conversamos sobre o que você está buscando, suas expectativas e como posso ajudar. É também uma oportunidade para você conhecer minha abordagem e tirar dúvidas sobre o processo terapêutico."
    },
    {
      question: "Qual a frequência recomendada das sessões?",
      answer: "Geralmente recomendo sessões semanais, mas a frequência pode variar conforme suas necessidades específicas. Algumas pessoas se beneficiam de encontros quinzenais, enquanto outras podem necessitar de um acompanhamento mais intensivo inicialmente."
    },
    {
      question: "Como sei se a terapia está funcionando?",
      answer: "Os sinais de progresso incluem maior clareza sobre seus sentimentos, melhoria na capacidade de lidar com situações difíceis, mudanças positivas nos relacionamentos e uma sensação geral de maior bem-estar. Fazemos avaliações periódicas juntos para acompanhar sua evolução."
    },
    {
      question: "Quanto tempo dura o processo terapêutico?",
      answer: "O tempo varia muito de pessoa para pessoa. Algumas questões podem ser trabalhadas em poucos meses, enquanto outros processos mais profundos podem levar mais tempo. O importante é que você se sinta confortável com o ritmo e sempre tenha autonomia para decidir sobre a continuidade."
    },
    {
      question: "As consultas são online ou presenciais?",
      answer: "Ofereço tanto atendimento presencial quanto online, conforme sua preferência e necessidade. Ambas as modalidades têm a mesma eficácia terapêutica e mantêm total confidencialidade."
    },
    {
      question: "Como é garantido o sigilo profissional?",
      answer: "O sigilo profissional é garantido pelo código de ética da psicologia. Tudo o que é conversado nas sessões é estritamente confidencial. Só pode ser compartilhado com autorização expressa sua ou em situações muito específicas previstas em lei."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-slate-600 font-light">
            Algumas perguntas comuns sobre o processo terapêutico
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-slate-200"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
              >
                <span className="font-medium text-slate-800">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 transition-transform duration-200 ${
                    openQuestion === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {openQuestion === index && (
                <div className="px-6 pb-4">
                  <p className="text-slate-600 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Note */}
        <div className="text-center mt-8">
          <p className="text-slate-600 font-light">
            Não encontrou sua dúvida aqui?{' '}
            <a
              href="#contact"
              className="text-therapy-600 hover:text-therapy-700 font-medium transition-colors duration-200"
            >
              Entre em contato
            </a>{' '}
            para conversarmos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SimpleFAQSection;
