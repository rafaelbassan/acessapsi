"use client";

import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Heart
} from 'lucide-react';
import Image from 'next/image';

const SimpleFooter = () => {
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
    { name: "Sobre", href: "#about" },
    { name: "Especialidades", href: "#specialties" },
    { name: "Profissional", href: "#professionals" },
    { name: "Contato", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-therapy-50 flex items-center justify-center">
                <Image 
                  src="/images/logo_psi.png"
                  alt="Acessa Psi Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-xl font-medium text-slate-800">
                AcessaPsi
              </span>
            </div>
            
            <p className="text-slate-600 font-light leading-relaxed mb-4">
              Cuidado psicológico humanizado para o seu bem-estar emocional. 
              Transformando vidas através da psicoterapia.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium text-slate-800 mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-slate-600 font-light text-sm hover:text-therapy-600 transition-colors duration-200">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-slate-800 mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-600 font-light text-sm hover:text-therapy-600 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-slate-800 mb-4">Contato</h4>
            <div className="space-y-3">
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-therapy-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-600 font-light text-sm">
                    Clínica Raízes<br />
                    Campinas/SP
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-therapy-600 flex-shrink-0" />
                <a 
                  href="https://wa.me/5519987654321" 
                  className="text-slate-600 font-light text-sm hover:text-therapy-600 transition-colors duration-200"
                >
                  (19) 98765-4321
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-therapy-600 flex-shrink-0" />
                <a 
                  href="mailto:contato@acessapsi.com.br" 
                  className="text-slate-600 font-light text-sm hover:text-therapy-600 transition-colors duration-200"
                >
                  contato@acessapsi.com.br
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-therapy-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-600 font-light text-sm">
                    Segunda à Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            <div className="text-center md:text-left">
              <p className="text-slate-600 font-light text-sm">
                © {currentYear} AcessaPsi. Todos os direitos reservados.
              </p>
            </div>

            <div className="flex space-x-6">
              <button className="text-slate-500 hover:text-therapy-600 font-light text-sm transition-colors duration-200">
                Política de Privacidade
              </button>
              <button className="text-slate-500 hover:text-therapy-600 font-light text-sm transition-colors duration-200">
                Termos de Uso
              </button>
            </div>
          </div>

          {/* Professional Note */}
          <div className="mt-6 p-4 bg-therapy-50 rounded-lg">
            <p className="text-slate-700 font-light text-sm text-center">
              <strong>AcessaPsi</strong> - Plataforma de Psicoterapia
              <span className="mx-2">•</span>
              Conectando você aos melhores profissionais de psicologia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
