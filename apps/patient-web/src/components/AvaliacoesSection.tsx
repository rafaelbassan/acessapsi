"use client";

import React, { useState, useEffect } from 'react';
import { FileText, ArrowRight, MessageCircle, CheckCircle, Brain, Target, BarChart3 } from 'lucide-react';

const AvaliacoesSection = () => {
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

    const section = document.getElementById('avaliacoes');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '5519988200585';
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre Avaliações Psicológicas e Análise de Perfil.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="avaliacoes" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-wisdom-50 via-white to-wisdom-25">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center mb-6">
            <div className="bg-wisdom-100 p-4 rounded-full">
              <FileText className="w-12 h-12 text-wisdom-600" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Avaliações Psicológicas e Análise de Perfil
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Avaliação completa do seu perfil psicológico para melhor compreensão de suas
            características, potencialidades e áreas de desenvolvimento. Utilizamos testes
            científicos e entrevistas especializadas para oferecer insights valiosos.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">

          {/* Left Column - Benefits */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">O que oferecemos:</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-wisdom-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800">Avaliação Completa</h4>
                  <p className="text-slate-600">Bateria completa de testes psicológicos validados cientificamente.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-wisdom-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800">Relatório Detalhado</h4>
                  <p className="text-slate-600">Análise completa com recomendações personalizadas e acionáveis.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-wisdom-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800">Orientação Profissional</h4>
                  <p className="text-slate-600">Discussão dos resultados com psicólogo especializado.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-wisdom-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-800">Aplicações Práticas</h4>
                  <p className="text-slate-600">Insights aplicáveis à carreira, relacionamentos e desenvolvimento pessoal.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-wisdom-100">
              <div className="flex items-center space-x-3 mb-4">
                <Brain className="w-8 h-8 text-wisdom-600" />
                <h4 className="text-xl font-semibold text-slate-800">Avaliação Cognitiva</h4>
              </div>
              <p className="text-slate-600">Avaliação de funções cognitivas, inteligência e potencial de aprendizagem.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-wisdom-100">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="w-8 h-8 text-wisdom-600" />
                <h4 className="text-xl font-semibold text-slate-800">Perfil de Personalidade</h4>
              </div>
              <p className="text-slate-600">Análise de traços de personalidade e padrões comportamentais.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-wisdom-100">
              <div className="flex items-center space-x-3 mb-4">
                <BarChart3 className="w-8 h-8 text-wisdom-600" />
                <h4 className="text-xl font-semibold text-slate-800">Relatórios Completos</h4>
              </div>
              <p className="text-slate-600">Documentação profissional com todas as análises e recomendações.</p>
            </div>

          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center bg-gradient-to-r from-wisdom-100 to-wisdom-200 rounded-2xl p-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Conheça melhor a si mesmo
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Agende sua avaliação psicológica e descubra insights valiosos sobre seu perfil,
            potencialidades e caminhos para seu desenvolvimento pessoal e profissional.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-wisdom-600 hover:bg-wisdom-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 mx-auto group shadow-lg hover:shadow-xl"
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

export default AvaliacoesSection;
