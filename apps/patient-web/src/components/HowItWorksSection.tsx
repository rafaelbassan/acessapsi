"use client";

import React, { useState, useEffect } from 'react';
import {
  Calendar,
  MessageCircle,
  User,
  CheckCircle,
  ArrowRight,
  Clock,
  Shield
} from 'lucide-react';

const HowItWorksSection = () => {
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

    const section = document.getElementById('how-it-works');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: MessageCircle,
      title: "Contato Inicial",
      description: "Entre em contato conosco através do WhatsApp ou formulário. Conversaremos sobre suas necessidades e expectativas.",
      duration: "Imediato",
      color: "text-blue-600"
    },
    {
      icon: Calendar,
      title: "Agendamento",
      description: "Agendamos sua primeira consulta em um horário conveniente, considerando sua disponibilidade e preferências.",
      duration: "1-2 dias",
      color: "text-green-600"
    },
    {
      icon: User,
      title: "Primeira Sessão",
      description: "Conheceremos melhor sua história, objetivos e definiremos juntos o plano terapêutico mais adequado.",
      duration: "50 minutos",
      color: "text-purple-600"
    },
    {
      icon: CheckCircle,
      title: "Acompanhamento",
      description: "Iniciamos as sessões regulares com acompanhamento contínuo do seu progresso e ajustes quando necessário.",
      duration: "Contínuo",
      color: "text-indigo-600"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Horários Flexíveis",
      description: "Atendimento de segunda a sábado, incluindo horários noturnos para sua comodidade."
    },
    {
      icon: Shield,
      title: "Sigilo Absoluto",
      description: "Todas as informações são tratadas com total confidencialidade e respeito ao código de ética profissional."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Como Funciona a Psicoterapia
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            O processo terapêutico é simples, humanizado e adaptado às suas necessidades individuais.
            Conheça as etapas para iniciar seu acompanhamento psicológico.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Step Number */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 mx-auto rounded-full bg-slate-50 border-2 border-slate-200 flex items-center justify-center group-hover:border-blue-300 transition-colors duration-300`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {step.description}
              </p>
              <div className="text-sm text-slate-500 font-medium">
                {step.duration}
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-slate-200 transform translate-x-4">
                  <ArrowRight className="w-4 h-4 text-slate-400 absolute right-0 top-1/2 transform -translate-y-1/2" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-slate-50 rounded-xl p-6 border border-slate-200 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 4) * 200}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Está pronto para dar o primeiro passo?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              A terapia é uma jornada de autoconhecimento e crescimento. Entre em contato hoje mesmo
              e vamos conversar sobre como podemos te ajudar nessa jornada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const phoneNumber = '5519988200585';
                  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre como funciona a psicoterapia e agendar uma consulta inicial.');
                  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-sm hover:shadow-md group"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Falar pelo WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Enviar Mensagem
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
