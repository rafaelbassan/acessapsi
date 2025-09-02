"use client";

import React, { useState, useEffect } from 'react';
import {
  Heart,
  Brain,
  Users,
  Target,
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const BenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('benefits');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Brain,
      title: "Saúde Mental Integral",
      description: "Redução de sintomas de ansiedade, depressão e outros transtornos através de técnicas terapêuticas baseadas em evidências científicas.",
      color: "text-therapy-600"
    },
    {
      icon: Heart,
      title: "Bem-estar Emocional",
      description: "Desenvolvimento de inteligência emocional, autocontrole e habilidades para lidar com situações desafiadoras de forma saudável.",
      color: "text-trust-600"
    },
    {
      icon: Users,
      title: "Relacionamentos Saudáveis",
      description: "Melhoria na comunicação interpessoal, resolução de conflitos e construção de vínculos mais autênticos e satisfatórios.",
      color: "text-wisdom-600"
    },
    {
      icon: Target,
      title: "Autoconhecimento Profundo",
      description: "Maior consciência de si mesmo, padrões comportamentais, valores pessoais e descoberta do seu potencial de crescimento.",
      color: "text-therapy-700"
    },
    {
      icon: Shield,
      title: "Resiliência e Fortalecimento",
      description: "Construção de recursos internos para enfrentar adversidades, superar traumas e desenvolver maior estabilidade emocional.",
      color: "text-trust-700"
    },
    {
      icon: CheckCircle,
      title: "Qualidade de Vida",
      description: "Transformação positiva em todas as esferas da vida: pessoal, profissional, familiar e social, resultando em maior realização.",
      color: "text-wisdom-700"
    }
  ];

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-therapy-50 via-slate-50 to-trust-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Benefícios da Psicoterapia
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A psicoterapia oferece benefícios cientificamente comprovados para sua saúde mental e qualidade de vida.
            Descubra como o acompanhamento psicológico pode transformar sua relação consigo mesmo e com o mundo.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-therapy-100 hover:shadow-lg hover:border-therapy-200 transition-all duration-300 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-therapy-50 to-trust-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {benefit.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Pronto para começar sua jornada?
            </h3>
            <p className="text-slate-600 mb-6">
              Agende uma consulta inicial sem compromisso e conheça melhor como podemos te ajudar.
            </p>
            <button
              onClick={() => {
                const phoneNumber = '5519988200585';
                const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta inicial para conhecer melhor os serviços.');
                window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 mx-auto shadow-sm hover:shadow-md group"
            >
              <span>Agendar Consulta Inicial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;
