"use client";

import React, { useState, useEffect } from 'react';
import {
  Brain,
  Heart,
  Users,
  Baby,
  Zap,
  Moon,
  Smile,
  ArrowRight
} from 'lucide-react';

const SpecialtiesSection = () => {
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

    const section = document.getElementById('specialties');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const specialties = [
    {
      icon: Brain,
      title: "Ansiedade e Transtornos de Humor",
      description: "Tratamento especializado para ansiedade, depressão, síndrome do pânico e transtornos de humor.",
      approaches: ["Terapia Cognitivo-Comportamental", "Mindfulness", "Técnicas de Relaxamento"],
      color: "therapy"
    },
    {
      icon: Users,
      title: "Terapia de Casal e Família",
      description: "Fortalecimento de vínculos afetivos e resolução de conflitos em relacionamentos familiares.",
      approaches: ["Terapia Sistêmica", "Comunicação Não-Violenta", "Dinâmicas Familiares"],
      color: "trust"
    },
    {
      icon: Baby,
      title: "Psicologia Infantil e Adolescente",
      description: "Acompanhamento especializado para crianças e adolescentes em desenvolvimento.",
      approaches: ["Ludoterapia", "Orientação Parental", "Psicoeducação"],
      color: "wisdom"
    },
    {
      icon: Heart,
      title: "Transtornos Alimentares",
      description: "Tratamento integrado para anorexia, bulimia e compulsão alimentar.",
      approaches: ["Abordagem Nutricional", "Terapia Familiar", "Grupos de Apoio"],
      color: "therapy"
    },
    {
      icon: Moon,
      title: "Luto e Perda",
      description: "Acompanhamento no processo de elaboração do luto e superação de perdas significativas.",
      approaches: ["Terapia do Luto", "Grupos de Apoio", "Rituais Terapêuticos"],
      color: "trust"
    },
    {
      icon: Smile,
      title: "Desenvolvimento Pessoal",
      description: "Autoconhecimento, crescimento pessoal e realização do potencial humano.",
      approaches: ["Psicologia Positiva", "Coaching Psicológico", "Mindfulness"],
      color: "wisdom"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'therapy':
        return {
          icon: 'text-therapy-600',
          bg: 'bg-therapy-50',
          border: 'border-therapy-200',
          hover: 'hover:border-therapy-300'
        };
      case 'trust':
        return {
          icon: 'text-trust-600',
          bg: 'bg-trust-50',
          border: 'border-trust-200',
          hover: 'hover:border-trust-300'
        };
      case 'wisdom':
        return {
          icon: 'text-wisdom-600',
          bg: 'bg-wisdom-50',
          border: 'border-wisdom-200',
          hover: 'hover:border-wisdom-300'
        };
      default:
        return {
          icon: 'text-therapy-600',
          bg: 'bg-therapy-50',
          border: 'border-therapy-200',
          hover: 'hover:border-therapy-300'
        };
    }
  };

  return (
    <section id="specialties" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Nossas Especialidades Clínicas
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos atendimento especializado em diversas áreas da psicologia clínica,
            com abordagens terapêuticas baseadas em evidências científicas e adaptadas às suas necessidades.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {specialties.map((specialty, index) => {
            const colors = getColorClasses(specialty.color);
            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-sm border ${colors.border} ${colors.hover} hover:shadow-lg transition-all duration-300 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <specialty.icon className={`w-7 h-7 ${colors.icon}`} />
                </div>

                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {specialty.title}
                </h3>

                <p className="text-slate-600 mb-4 leading-relaxed">
                  {specialty.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-slate-700 mb-2">Abordagens utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {specialty.approaches.map((approach, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-3 py-1 ${colors.bg} ${colors.icon} rounded-full font-medium`}
                      >
                        {approach}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className={`text-center bg-gradient-to-r from-therapy-50 via-trust-50 to-wisdom-50 rounded-2xl p-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Não encontrou sua necessidade específica?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Nossos profissionais estão preparados para atender diversas outras demandas psicológicas.
            Entre em contato para uma avaliação personalizada.
          </p>
          <button className="bg-therapy-600 hover:bg-therapy-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 mx-auto group">
            <span>Falar com um Especialista</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
