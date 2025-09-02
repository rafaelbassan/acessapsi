"use client";

import React, { useState, useEffect } from 'react';
import {
  Heart,
  Shield,
  Users,
  Award,
  CheckCircle,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import { clinicData } from '../data/clinic';

const SimpleAboutSection = () => {
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

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Acolhimento",
      description: "Ambiente seguro onde você pode se expressar livremente, sem julgamentos."
    },
    {
      icon: Shield,
      title: "Sigilo",
      description: "Confidencialidade absoluta, conforme o código de ética profissional."
    },
    {
      icon: Users,
      title: "Humanização",
      description: "Cuidado personalizado respeitando sua singularidade e ritmo."
    },
    {
      icon: Award,
      title: "Qualificação",
      description: "Profissionais com formação continuada e técnicas baseadas em evidências científicas."
    }
  ];

  const handleWhatsApp = () => {
    const phoneNumber = '5519987654321';
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da AcessaPsi.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Sobre a {clinicData.name}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {clinicData.mission}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left side - Clinic info */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-6">
              
              {/* Clinic logo and intro */}
              <div className="flex items-start space-x-6">
                <Image
                  src="/images/logo_psi.png"
                  alt="AcessaPsi"
                  width={120}
                  height={120}
                  className="w-24 h-24 object-contain flex-shrink-0"
                />
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {clinicData.name}
                  </h3>
                  <p className="text-therapy-600 font-medium mb-1">
                    {clinicData.description}
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Nossa plataforma conecta você aos melhores profissionais de psicologia, 
                    oferecendo atendimento presencial e online com foco no seu bem-estar e desenvolvimento pessoal.
                  </p>
                </div>
              </div>

              {/* Mission quote */}
              <div className="bg-therapy-50 border-l-4 border-therapy-500 p-6 rounded-r-lg">
                <blockquote className="text-slate-700 italic">
                  "{clinicData.mission}"
                </blockquote>
              </div>

              {/* Specialties */}
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-4">
                  Nossas Especialidades
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {clinicData.specialties.map((specialty, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-therapy-600 flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Values */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-8">
                Nossos valores no atendimento
              </h3>
              
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-therapy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-therapy-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center bg-white rounded-2xl shadow-lg p-8 border border-slate-100 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Vamos conversar?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Entre em contato conosco para esclarecer suas dúvidas sobre nossos serviços e 
            descobrir como podemos ajudar você em sua jornada de bem-estar.
          </p>
          <button 
            onClick={handleWhatsApp}
            className="bg-therapy-600 hover:bg-therapy-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 mx-auto group"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Conversar no WhatsApp</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default SimpleAboutSection;
