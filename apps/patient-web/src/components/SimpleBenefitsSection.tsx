"use client";

import React, { useState, useEffect } from 'react';
import {
  Heart,
  Brain,
  Users,
  Target,
  Shield,
  CheckCircle
} from 'lucide-react';

const SimpleBenefitsSection = () => {
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
      title: "Redução da Ansiedade",
      description: "Técnicas eficazes para gerenciar ansiedade e desenvolver maior tranquilidade no dia a dia."
    },
    {
      icon: Heart,
      title: "Bem-estar Emocional",
      description: "Desenvolvimento de habilidades para lidar melhor com as emoções e desafios da vida."
    },
    {
      icon: Users,
      title: "Melhores Relacionamentos",
      description: "Aprimoramento da comunicação e fortalecimento dos vínculos afetivos importantes."
    },
    {
      icon: Target,
      title: "Maior Autoconhecimento",
      description: "Compreensão mais profunda de si mesmo, seus padrões e potenciais de crescimento."
    },
    {
      icon: Shield,
      title: "Fortalecimento Interior",
      description: "Desenvolvimento de recursos internos para enfrentar dificuldades com mais segurança."
    },
    {
      icon: CheckCircle,
      title: "Qualidade de Vida",
      description: "Melhoria geral no bem-estar e satisfação pessoal em diferentes áreas da vida."
    }
  ];

  return (
    <section id="benefits" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-800 mb-3 sm:mb-4">
            Como a psicoterapia pode te ajudar
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-light text-no-overflow px-2 sm:px-0">
            A psicoterapia oferece um espaço seguro para explorar seus sentimentos, 
            desenvolver novas perspectivas e encontrar caminhos para o bem-estar.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-therapy-50 flex items-center justify-center">
                <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-therapy-600" />
              </div>

              <h3 className="text-lg sm:text-xl font-medium text-slate-800 mb-2 sm:mb-3">
                {benefit.title}
              </h3>

              <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base text-no-overflow">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleBenefitsSection;
