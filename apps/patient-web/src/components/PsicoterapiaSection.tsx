"use client";

import React, { useState, useEffect } from 'react';
import { Stethoscope, ArrowRight, MessageCircle, CheckCircle, Clock, Shield } from 'lucide-react';

const PsicoterapiaSection = () => {
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

    const section = document.getElementById('psicoterapia');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '5519988200585';
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre Atendimento Psicológico e Psicoterapia.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="psicoterapia" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-therapy-50 via-white to-therapy-25">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center mb-6">
            <div className="bg-therapy-100 p-4 rounded-full">
              <Stethoscope className="w-12 h-12 text-therapy-600" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Atendimento Psicológico e Psicoterapia
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Cuidado psicológico profissional e humanizado para adultos, adolescentes e idosos.
            Através da psicoterapia, trabalhamos juntos para compreender suas emoções,
            desenvolver estratégias de enfrentamento e promover seu bem-estar emocional.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">

          {/* Left Column - Benefits */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">O que oferecemos:</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-therapy-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800">Abordagem Personalizada</h4>
                  <p className="text-slate-600">Cada pessoa é única. Adaptamos nossa abordagem às suas necessidades específicas.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-therapy-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800">Ambiente Seguro</h4>
                  <p className="text-slate-600">Espaço confidencial e acolhedor para você se expressar livremente.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-therapy-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800">Técnicas Evidenciadas</h4>
                  <p className="text-slate-600">Utilizamos abordagens terapêuticas baseadas em evidências científicas.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-therapy-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800">Acompanhamento Contínuo</h4>
                  <p className="text-slate-600">Suporte consistente na sua jornada de crescimento pessoal.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-therapy-100">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-8 h-8 text-therapy-600" />
                <h4 className="text-xl font-semibold text-slate-800">Duração das Sessões</h4>
              </div>
              <p className="text-slate-600">50 minutos por sessão, com frequência semanal ou quinzenal conforme sua necessidade.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-therapy-100">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-8 h-8 text-therapy-600" />
                <h4 className="text-xl font-semibold text-slate-800">Sigilo Profissional</h4>
              </div>
              <p className="text-slate-600">Garantimos total confidencialidade conforme o código de ética profissional.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-therapy-100">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="w-8 h-8 text-therapy-600" />
                <h4 className="text-xl font-semibold text-slate-800">Modalidades</h4>
              </div>
              <p className="text-slate-600">Atendimento presencial em São Paulo/SP e online para todo o Brasil.</p>
            </div>

          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center bg-gradient-to-r from-therapy-100 to-therapy-200 rounded-2xl p-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Pronto para começar sua jornada?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Entre em contato conosco para agendar sua primeira consulta e dar o primeiro passo
            rumo ao seu bem-estar emocional.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-therapy-600 hover:bg-therapy-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 mx-auto group shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Falar no WhatsApp</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PsicoterapiaSection;
