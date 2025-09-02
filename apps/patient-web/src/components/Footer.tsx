"use client";

import React from 'react';
import LiquidGlassCard from './LiquidGlassCard';
import LiquidGlassButton from './LiquidGlassButton';
import { 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
  Send
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Psicoterapia Individual",
    "Terapia de Casal",
    "Psicologia Infantil", 
    "Tratamento de Ansiedade",
    "Tratamento de Depressão",
    "Desenvolvimento Pessoal"
  ];

  const quickLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre Nós", href: "#about" },
    { name: "Nossa Equipe", href: "#professionals" },
    { name: "Contato", href: "#contact" },
    { name: "Blog", href: "#blog" },
    { name: "Agendamento", href: "#schedule" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="relative py-20 bg-section overflow-hidden">
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl top-10 left-10 animate-float-slow" />
        <div className="absolute w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl bottom-20 right-20 animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute w-72 h-72 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl top-1/2 right-1/4 animate-float-slow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 mb-8 lg:mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <LiquidGlassCard 
              variant="light" 
              intensity="medium"
              className="p-6 bg-white/5 backdrop-blur-xl border border-white/10"
              cornerRadius={24}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">AcessaPsi</h3>
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                Transformando vidas através do cuidado psicológico especializado. 
                Mais de 15 anos dedicados ao seu bem-estar emocional.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:scale-110 hover:bg-white/20 transition-all duration-300 group border border-white/10"
                    >
                      <Icon className="w-5 h-5 text-slate-600 group-hover:text-slate-800 transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </LiquidGlassCard>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <LiquidGlassCard 
              variant="light" 
              intensity="medium"
              className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 h-full"
              cornerRadius={24}
            >
              <h4 className="text-xl font-bold text-slate-800 mb-6">Nossos Serviços</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#"
                      className="text-slate-600 hover:text-slate-800 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </LiquidGlassCard>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <LiquidGlassCard 
              variant="light" 
              intensity="medium"
              className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 h-full"
              cornerRadius={24}
            >
              <h4 className="text-xl font-bold text-slate-800 mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-slate-600 hover:text-slate-800 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </LiquidGlassCard>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <LiquidGlassCard 
              variant="light" 
              intensity="medium"
              className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 h-full"
              cornerRadius={24}
            >
              <h4 className="text-xl font-bold text-slate-800 mb-6">Contato</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-600 leading-relaxed">
                      Rua das Flores, 123<br />
                      Centro, São Paulo - SP<br />
                      CEP: 01234-567
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-600">(11) 99999-9999</p>
                    <p className="text-slate-600">(11) 3333-3333</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-slate-600">contato@acessapsi.com.br</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-600 leading-relaxed">
                      Segunda à Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </LiquidGlassCard>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-16">
          <LiquidGlassCard 
            variant="gradient" 
            intensity="strong"
            className="max-w-4xl mx-auto p-8 text-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-white/20"
            cornerRadius={32}
          >
            <h4 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Receba Dicas de Bem-Estar
            </h4>
            <p className="text-slate-600 mb-6">
              Inscreva-se em nossa newsletter e receba conteúdos exclusivos sobre saúde mental e bem-estar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                />
              </div>
              <LiquidGlassButton 
                variant="primary" 
                size="lg"
                className="flex items-center gap-2 group"
              >
                <Send className="w-5 h-5" />
                Inscrever-se
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </LiquidGlassButton>
            </div>
          </LiquidGlassCard>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-neutral-400">
                                <p>&copy; {currentYear} AcessaPsi. Todos os direitos reservados.</p>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-500 hover:text-slate-800 transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-800 transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="text-slate-500 hover:text-slate-800 transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 