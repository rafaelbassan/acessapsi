"use client";

import React, { useState, useEffect } from 'react';
import {
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Monitor,
  Users,
  Shield,
  CreditCard,
  Calendar,
  ArrowRight
} from 'lucide-react';

const PracticalInfoSection = () => {
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

    const section = document.getElementById('practical-info');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const practicalInfo = [
    {
      icon: Clock,
      title: "Horários de Atendimento",
      items: [
        "Segunda a Sexta: 8h às 18h",
        "Sábados: 8h às 12h (ocasionalmente)",
        "Sessões de 50 minutos",
        "Intervalos de 7 ou 14 dias"
      ],
      color: "therapy"
    },
    {
      icon: MapPin,
      title: "Modalidades",
      items: [
        "Presencial: São Paulo/SP",
        "Online: Videochamada segura",
        "Flexibilidade conforme sua necessidade",
        "Ambiente acolhedor e privativo"
      ],
      color: "trust"
    },
    {
      icon: Users,
      title: "Público Atendido",
      items: [
        "Adolescentes (a partir de 13 anos)",
        "Adultos de todas as idades",
        "Terapia individual",
        "Terapia de casal e família"
      ],
      color: "wisdom"
    },
    {
      icon: CreditCard,
      title: "Investimento",
      items: [
        "Valores acessíveis",
        "Consulte condições especiais",
        "Primeira consulta: avaliação",
        "Formas de pagamento flexíveis"
      ],
      color: "therapy"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'therapy':
        return {
          bg: 'bg-therapy-50',
          border: 'border-therapy-200',
          icon: 'text-therapy-600',
          title: 'text-therapy-700'
        };
      case 'trust':
        return {
          bg: 'bg-trust-50',
          border: 'border-trust-200',
          icon: 'text-trust-600',
          title: 'text-trust-700'
        };
      case 'wisdom':
        return {
          bg: 'bg-wisdom-50',
          border: 'border-wisdom-200',
          icon: 'text-wisdom-600',
          title: 'text-wisdom-700'
        };
      default:
        return {
          bg: 'bg-therapy-50',
          border: 'border-therapy-200',
          icon: 'text-therapy-600',
          title: 'text-therapy-700'
        };
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = '5519988200585';
    const message = encodeURIComponent('Olá! Gostaria de informações sobre horários e valores das consultas.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+5519988200585';
  };

  return (
    <section id="practical-info" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Informações Práticas
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Tire suas dúvidas sobre horários, modalidades de atendimento, valores e 
            tudo que você precisa saber para começar sua jornada terapêutica.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {practicalInfo.map((info, index) => {
            const colors = getColorClasses(info.color);
            return (
              <div
                key={index}
                className={`${colors.bg} ${colors.border} border-2 rounded-xl p-6 transition-all duration-1000 hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-12 h-12 ${colors.bg} border ${colors.border} rounded-lg flex items-center justify-center mb-4`}>
                  <info.icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                
                <h3 className={`text-lg font-semibold ${colors.title} mb-4`}>
                  {info.title}
                </h3>
                
                <ul className="space-y-2">
                  {info.items.map((item, idx) => (
                    <li key={idx} className="text-slate-600 text-sm flex items-start">
                      <span className="text-slate-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className={`bg-gradient-to-r from-therapy-600 to-trust-600 rounded-2xl p-8 text-white transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            
            {/* Left side - Contact info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Entre em contato
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-white/80">(19) 98820-0585</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-white/80">Resposta rápida e prática</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">CRP 06/123456</p>
                    <p className="text-white/80">Registro ativo no Conselho</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - CTA */}
            <div className="text-center lg:text-left">
              <h4 className="text-xl font-semibold mb-4">
                Pronto para agendar sua consulta?
              </h4>
              <p className="text-white/90 mb-6">
                Entre em contato agora mesmo. Respondo rapidamente e esclareço 
                todas suas dúvidas sobre o processo terapêutico.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handleWhatsApp}
                  className="bg-white text-therapy-600 hover:bg-slate-50 font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button 
                  onClick={handleCall}
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Ligar</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Note */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-slate-50 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-slate-600 italic">
              "Estou disponível para esclarecer qualquer dúvida sobre o processo terapêutico. 
              Acredito que uma boa terapia começa com uma conversa aberta e honesta."
            </p>
            <p className="text-therapy-600 font-medium mt-3">Alex Gustavo Bassan</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PracticalInfoSection;
