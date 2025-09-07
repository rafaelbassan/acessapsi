"use client";

import React, { useState, useEffect } from 'react';
import { Heart, ArrowRight, MessageCircle, CheckCircle, Users, Home } from 'lucide-react';

const TerapiaCasalSection = () => {
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

    const section = document.getElementById('terapia-casal');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '5519988200585';
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre Terapia de Casal e Terapia Familiar.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="terapia-casal" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-trust-50 via-white to-trust-25">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center mb-6">
            <div className="bg-trust-100 p-4 rounded-full">
              <Heart className="w-12 h-12 text-trust-600" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Terapia de Casal e Terapia Familiar
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Fortalecimento de vínculos afetivos e resolução de conflitos em relacionamentos.
            Trabalhamos com casais e famílias para melhorar a comunicação, resolver conflitos
            e construir relacionamentos mais saudáveis e satisfatórios.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">

          {/* Left Column - Benefits */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">O que oferecemos:</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-trust-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800">Comunicação Não-Violenta</h4>
                  <p className="text-slate-600">Aprenda a se expressar de forma clara e respeitosa em seus relacionamentos.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-trust-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800">Resolução de Conflitos</h4>
                  <p className="text-slate-600">Estratégias práticas para lidar com desentendimentos e diferenças.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-trust-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800">Fortalecimento de Vínculos</h4>
                  <p className="text-slate-600">Técnicas para aumentar a intimidade e conexão emocional.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-trust-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800">Dinâmicas Familiares</h4>
                  <p className="text-slate-600">Trabalho com padrões familiares e papéis dentro do sistema familiar.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-trust-100">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-8 h-8 text-trust-600" />
                <h4 className="text-xl font-semibold text-slate-800">Para Casais</h4>
              </div>
              <p className="text-slate-600">Sessões conjuntas para casais que desejam melhorar sua relação e comunicação.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-trust-100">
              <div className="flex items-center space-x-3 mb-4">
                <Home className="w-8 h-8 text-trust-600" />
                <h4 className="text-xl font-semibold text-slate-800">Para Famílias</h4>
              </div>
              <p className="text-slate-600">Atendimento para famílias que enfrentam desafios na dinâmica familiar.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-trust-100">
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="w-8 h-8 text-trust-600" />
                <h4 className="text-xl font-semibold text-slate-800">Abordagem Sistêmica</h4>
              </div>
              <p className="text-slate-600">Visão holística dos relacionamentos e dinâmicas familiares.</p>
            </div>

          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center bg-gradient-to-r from-trust-100 to-trust-200 rounded-2xl p-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Vamos fortalecer seus vínculos?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Entre em contato para agendar uma sessão e começar a construir relacionamentos
            mais saudáveis e satisfatórios.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-trust-600 hover:bg-trust-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 mx-auto group shadow-lg hover:shadow-xl"
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

export default TerapiaCasalSection;
