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
    const phoneNumber = '5519987654321';
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta ou saber mais sobre os atendimentos.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:contato@acessapsi.com.br?subject=Interesse em consulta psicológica', '_blank');
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
            Vamos conversar?
          </h2>
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
            Estou aqui para esclarecer suas dúvidas e ajudar você a dar o primeiro passo 
            em direção ao seu bem-estar emocional.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* WhatsApp */}
          <div className="bg-slate-50 rounded-lg p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-medium text-slate-800 mb-2">
              WhatsApp
            </h3>
            <p className="text-slate-600 font-light mb-2">
              (19) 98820-0585
            </p>
            <p className="text-sm text-slate-500 font-light mb-4">
              Resposta rápida e direta
            </p>
            <button
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
            >
              Enviar mensagem
            </button>
          </div>

          {/* Email */}
          <div className="bg-slate-50 rounded-lg p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-medium text-slate-800 mb-2">
              E-mail
            </h3>
            <p className="text-slate-600 font-light mb-2">
              contato@acessapsi.com.br
            </p>
            <p className="text-sm text-slate-500 font-light mb-4">
              Para informações detalhadas
            </p>
            <button
              onClick={handleEmail}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
            >
              Enviar e-mail
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 text-center">
          
          {/* Location */}
          <div className="flex items-center justify-center space-x-3">
            <MapPin className="w-5 h-5 text-therapy-600" />
            <div>
              <p className="font-medium text-slate-800">Localização</p>
              <p className="text-slate-600 font-light">Campinas/SP</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center justify-center space-x-3">
            <Clock className="w-5 h-5 text-therapy-600" />
            <div>
              <p className="font-medium text-slate-800">Horário de Atendimento</p>
              <p className="text-slate-600 font-light">Segunda a Sexta, 8h às 18h</p>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="text-center mt-8 p-6 bg-therapy-50 rounded-lg">
          <p className="text-slate-700 font-light">
            <strong>Primeira conversa sem compromisso:</strong> Antes de iniciarmos o processo terapêutico, 
            conversamos para entender suas necessidades e esclarecer como posso ajudar você.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SimpleContactSection;
