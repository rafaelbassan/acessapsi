"use client";

import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle
} from 'lucide-react';

const SimpleContactSection = () => {
  const handleWhatsApp = () => {
    const phoneNumber = '5519988200585';
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta ou saber mais sobre os atendimentos.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:contato@acessapsi.com.br?subject=Interesse em consulta psicológica', '_blank');
  };

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-800 mb-3 sm:mb-4">
            Vamos conversar?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light max-w-2xl mx-auto text-no-overflow px-2 sm:px-0">
            Estou aqui para esclarecer suas dúvidas e ajudar você a dar o primeiro passo 
            em direção ao seu bem-estar emocional.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          
          {/* WhatsApp */}
          <div className="bg-slate-50 rounded-lg p-4 sm:p-6 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-slate-800 mb-2">
              WhatsApp
            </h3>
            <p className="text-slate-600 font-light mb-2 text-sm sm:text-base">
              (19) 98820-0585
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-light mb-3 sm:mb-4">
              Resposta rápida e direta
            </p>
            <button
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-colors duration-200 font-medium btn-mobile-sm"
            >
              Enviar mensagem
            </button>
          </div>

          {/* Email */}
          <div className="bg-slate-50 rounded-lg p-4 sm:p-6 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-slate-800 mb-2">
              E-mail
            </h3>
            <p className="text-slate-600 font-light mb-2 text-sm sm:text-base">
              contato@acessapsi.com.br
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-light mb-3 sm:mb-4">
              Para informações detalhadas
            </p>
            <button
              onClick={handleEmail}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-colors duration-200 font-medium btn-mobile-sm"
            >
              Enviar e-mail
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 text-center">
          
          {/* Location */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-3">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-therapy-600 flex-shrink-0" />
            <div>
              <p className="font-medium text-slate-800 text-sm sm:text-base">Localização</p>
              <p className="text-slate-600 font-light text-sm sm:text-base">Campinas/SP</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-3">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-therapy-600 flex-shrink-0" />
            <div>
              <p className="font-medium text-slate-800 text-sm sm:text-base">Horário de Atendimento</p>
              <p className="text-slate-600 font-light text-sm sm:text-base">Segunda a Sexta, 8h às 18h</p>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="text-center mt-6 sm:mt-8 p-4 sm:p-6 bg-therapy-50 rounded-lg">
          <p className="text-slate-700 font-light text-sm sm:text-base text-no-overflow px-2 sm:px-0">
            <strong>Primeira conversa sem compromisso:</strong> Antes de iniciarmos o processo terapêutico, 
            conversamos para entender suas necessidades e esclarecer como posso ajudar você.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SimpleContactSection;
