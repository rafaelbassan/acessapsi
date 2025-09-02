"use client";

import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Calendar,
  Heart,
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const HowTherapyWorksSection = () => {
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

    const section = document.getElementById('how-therapy-works');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: MessageCircle,
      number: "01",
      title: "Primeiro Contato",
      description: "Entre em contato via WhatsApp ou telefone. Conversaremos sobre suas necessidades e agendaremos a primeira consulta.",
      highlight: "Sem compromisso inicial"
    },
    {
      icon: Calendar,
      number: "02", 
      title: "Primeira Sessão",
      description: "Conhecimento mútuo, esclarecimento de dúvidas e definição de objetivos terapêuticos personalizados para você.",
      highlight: "Avaliação gratuita"
    },
    {
      icon: Heart,
      number: "03",
      title: "Processo Terapêutico",
      description: "Sessões regulares de 50 minutos, onde trabalharemos juntos em seu autoconhecimento e bem-estar emocional.",
      highlight: "Acompanhamento contínuo"
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Evolução e Crescimento",
      description: "Desenvolvimento gradual de novas perspectivas, habilidades emocionais e maior qualidade de vida.",
      highlight: "Transformação real"
    }
  ];

  const benefits = [
    "Ambiente seguro e confidencial",
    "Flexibilidade de horários",
    "Atendimento presencial ou online",
    "Abordagens baseadas em evidências",
    "Foco na sua singularidade",
    "Sigilo profissional absoluto"
  ];

  const handleWhatsApp = () => {
    const phoneNumber = '5519987654321';
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre como funciona a psicoterapia.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="how-therapy-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Como funciona a Psicoterapia?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A psicoterapia é um processo colaborativo entre você e o psicólogo, focado em promover 
            autoconhecimento, bem-estar emocional e mudanças positivas em sua vida.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-center space-y-4 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Step Number & Icon */}
              <div className="relative inline-block">
                <div className="w-20 h-20 bg-white border-2 border-therapy-200 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <step.icon className="w-8 h-8 text-therapy-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-therapy-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-800">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
                <div className="inline-block bg-therapy-50 text-therapy-700 px-3 py-1 rounded-full text-xs font-medium">
                  {step.highlight}
                </div>
              </div>

              {/* Arrow connector (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 text-slate-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* What you can expect */}
        <div className={`bg-white rounded-2xl p-8 shadow-lg border border-slate-100 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left side - Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                O que você pode esperar?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-therapy-600 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - CTA */}
            <div className="text-center lg:text-left">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-slate-800">
                  Pronto para começar?
                </h4>
                <p className="text-slate-600">
                  Entre em contato para esclarecer suas dúvidas e agendar uma primeira conversa. 
                  Estou aqui para ajudar você em sua jornada de bem-estar.
                </p>
                <button 
                  onClick={handleWhatsApp}
                  className="bg-therapy-600 hover:bg-therapy-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Vamos conversar</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <blockquote className="text-xl italic text-slate-600 max-w-3xl mx-auto">
            "A psicoterapia é um espaço de encontro consigo mesmo, onde é possível 
            descobrir recursos internos que você nem sabia que tinha."
          </blockquote>
          <p className="text-therapy-600 font-medium mt-4">AcessaPsi</p>
        </div>

      </div>
    </section>
  );
};

export default HowTherapyWorksSection;
