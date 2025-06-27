"use client";

import React, { useState, useEffect, useRef } from 'react';
import LiquidGlassCard from './LiquidGlassCard';
import LiquidGlassButton from './LiquidGlassButton';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Clock, 
  ArrowRight,
  Send,
  MessageCircle,
  Heart,
  CheckCircle2,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(11) 9999-8888",
      description: "Seg a Sex, 8h às 18h",
      action: "tel:+5511999998888",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@psiclin.com.br",
      description: "Resposta em até 24h",
      action: "mailto:contato@psiclin.com.br",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "Rua das Flores, 123",
      description: "São Paulo, SP",
      action: "#",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Seg a Sex: 8h às 18h",
      description: "Sáb: 8h às 12h",
      action: "#",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const services = [
    "Psicoterapia Individual",
    "Terapia de Casal",
    "Psicologia Infantil",
    "Tratamento de Ansiedade",
    "Tratamento de Depressão",
    "Orientação Familiar"
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", color: "from-pink-500 to-purple-600" },
    { icon: Facebook, href: "#", color: "from-blue-600 to-indigo-600" },
    { icon: Linkedin, href: "#", color: "from-blue-700 to-cyan-600" }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-section"
    >
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl top-20 right-20 animate-float-slow" />
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl bottom-32 left-32 animate-float-slow" style={{ animationDelay: '3s' }} />
        <div className="absolute w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl top-1/2 left-1/3 animate-float-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <LiquidGlassCard 
            variant="light" 
            intensity="medium"
            className="inline-block px-8 py-4 mb-6 bg-white/5 border border-white/10"
            cornerRadius={20}
          >
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
              Entre em Contato
            </span>
          </LiquidGlassCard>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Estamos aqui para
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              ajudar você
            </span>
          </h2>
          
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Dê o primeiro passo rumo ao seu bem-estar. Nossa equipe está pronta para 
            acolhê-lo e oferecer o suporte que você precisa.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <LiquidGlassCard
              key={index}
              variant="light"
              intensity="medium"
              interactive
              className={`p-6 text-center hover:scale-105 transition-all duration-700 delay-${index * 100} bg-white/5 border border-white/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              cornerRadius={24}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${info.gradient} flex items-center justify-center`}>
                {React.createElement(info.icon, { className: "w-8 h-8 text-white" })}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {info.title}
              </h3>
              <p className="text-neutral-300 font-medium mb-1">
                {info.value}
              </p>
              <p className="text-neutral-400 text-sm">
                {info.description}
              </p>
            </LiquidGlassCard>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <LiquidGlassCard 
              variant="gradient" 
              intensity="strong"
              className="p-8 bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-400/30"
              cornerRadius={32}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
                    Agende sua Consulta
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6">
                  Vamos conversar sobre seu bem-estar?
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-300 text-sm font-medium mb-2">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 backdrop-blur-sm transition-all duration-300"
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-300 text-sm font-medium mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 backdrop-blur-sm transition-all duration-300"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-neutral-300 text-sm font-medium mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 backdrop-blur-sm transition-all duration-300"
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-300 text-sm font-medium mb-2">
                        Serviço de interesse
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 backdrop-blur-sm transition-all duration-300"
                        required
                      >
                        <option value="" className="bg-neutral-800">Selecione um serviço</option>
                        {services.map((service, index) => (
                          <option key={index} value={service} className="bg-neutral-800">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-300 text-sm font-medium mb-2">
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 backdrop-blur-sm transition-all duration-300 resize-none"
                      placeholder="Conte-nos um pouco sobre o que você está buscando..."
                      required
                    />
                  </div>

                  <LiquidGlassButton 
                    variant="primary" 
                    size="lg"
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 group"
                  >
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </LiquidGlassButton>
                </form>
              </div>
            </LiquidGlassCard>
          </div>

          {/* Additional Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            {/* Quick Actions */}
            <LiquidGlassCard 
              variant="light" 
              intensity="medium"
              className="p-6 bg-white/5 border border-white/10"
              cornerRadius={24}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-blue-400" />
                <span>Ações Rápidas</span>
              </h3>
              <div className="space-y-3">
                <LiquidGlassButton 
                  variant="ghost" 
                  size="md"
                  className="w-full justify-start"
                >
                  <Phone className="w-5 h-5" />
                  <span>Ligar Agora</span>
                </LiquidGlassButton>
                <LiquidGlassButton 
                  variant="ghost" 
                  size="md"
                  className="w-full justify-start"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat Online</span>
                </LiquidGlassButton>
                <LiquidGlassButton 
                  variant="ghost" 
                  size="md"
                  className="w-full justify-start"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Online</span>
                </LiquidGlassButton>
              </div>
            </LiquidGlassCard>

            {/* FAQ */}
            <LiquidGlassCard 
              variant="gradient" 
              intensity="strong"
              className="p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30"
              cornerRadius={24}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Perguntas Frequentes
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-white font-medium">Como funciona a primeira consulta?</h4>
                  <p className="text-neutral-300 text-sm">
                    A primeira consulta é um momento de acolhimento onde conhecemos sua história e definimos juntos o melhor caminho.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-medium">Vocês atendem por convênio?</h4>
                  <p className="text-neutral-300 text-sm">
                    Sim, trabalhamos com os principais convênios médicos. Entre em contato para verificar sua cobertura.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-medium">Fazem atendimento online?</h4>
                  <p className="text-neutral-300 text-sm">
                    Oferecemos tanto atendimento presencial quanto online, conforme sua preferência e necessidade.
                  </p>
                </div>
              </div>
            </LiquidGlassCard>

            {/* Social Media */}
            <LiquidGlassCard 
              variant="light" 
              intensity="medium"
              className="p-6 bg-white/5 border border-white/10"
              cornerRadius={24}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Siga-nos nas Redes Sociais
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center text-white hover:scale-110 transition-all duration-300`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
              <p className="text-neutral-400 text-sm mt-4">
                Acompanhe dicas de saúde mental e novidades da PsiClin
              </p>
            </LiquidGlassCard>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <LiquidGlassCard 
            variant="gradient" 
            intensity="strong"
            className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30"
            cornerRadius={24}
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Heart className="w-6 h-6 text-red-400" />
              <h3 className="text-xl font-bold text-white">
                Precisa de Ajuda Urgente?
              </h3>
            </div>
            <p className="text-neutral-300 mb-4">
              Se você está passando por uma crise, não hesite em buscar ajuda imediatamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <LiquidGlassButton 
                variant="secondary" 
                size="md"
                className="flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>CVV: 188</span>
              </LiquidGlassButton>
              <LiquidGlassButton 
                variant="secondary" 
                size="md"
                className="flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>SAMU: 192</span>
              </LiquidGlassButton>
            </div>
          </LiquidGlassCard>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 