"use client";

import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Calendar,
  Mail,
  MapPin,
  Award,
  Heart,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Star,
  Clock
} from 'lucide-react';
import Image from 'next/image';
import SimpleNavigation from './SimpleNavigation';
import SimpleFooter from './SimpleFooter';

interface ProfessionalData {
  id: string;
  name: string;
  title: string;
  crp: string;
  avatar?: string;
  experience: string;
  description: string;
  about: string;
  education: {
    degree: string;
    institution: string;
  }[];
  specializations: {
    title: string;
    description: string;
  }[];
  approaches: {
    title: string;
    description: string;
  }[];
  differentials: {
    title: string;
    description: string;
  }[];
  contact: {
    whatsapp: string;
    phone: string;
    email: string;
    address: string;
  };
}

interface SimpleProfessionalPageProps {
  professional: ProfessionalData;
}

const SimpleProfessionalPage: React.FC<SimpleProfessionalPageProps> = ({ professional }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsApp = () => {
    const phoneNumber = professional.contact.whatsapp.replace(/\D/g, '');
    const message = encodeURIComponent(`Olá! Gostaria de agendar uma consulta com ${professional.name}.`);
    window.open(`https://wa.me/55${phoneNumber}?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    window.open(`mailto:${professional.contact.email}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-white">
      <SimpleNavigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white pt-20 pb-12">
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Professional Info */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              
              {/* Professional Header */}
              <div className="space-y-2">
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src="/images/logo_psi.png"
                    alt="AcessaPsi"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                    priority
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{professional.name}</h3>
                    <p className="text-therapy-600 text-sm">{professional.title} - {professional.crp}</p>
                  </div>
                </div>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Psicoterapia
                  <span className="block text-therapy-600">
                    especializada
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                  {professional.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="bg-therapy-600 hover:bg-therapy-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Agendar Consulta</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button
                  onClick={handleEmail}
                  className="bg-white border-2 border-therapy-600 text-therapy-600 hover:bg-therapy-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Enviar E-mail</span>
                </button>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-200">
                <div>
                  <p className="text-sm text-slate-500 mb-2">Experiência</p>
                  <p className="text-slate-700 font-medium">{professional.experience}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-2">Atendimento</p>
                  <p className="text-slate-700 font-medium">Presencial e Online</p>
                </div>
              </div>
            </div>

            {/* Right Column - Professional Image/Card */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                
                {/* Professional Photo */}
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <Image
                      src={professional.avatar || "/images/default-avatar.jpg"}
                      alt={professional.name}
                      width={200}
                      height={200}
                      className="w-48 h-48 object-cover rounded-full border-4 border-therapy-100 shadow-lg"
                      priority
                    />
                    <div className="absolute -bottom-2 -right-2 bg-therapy-600 text-white p-2 rounded-full">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Professional Info */}
                <div className="text-center space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">{professional.name}</h3>
                    <p className="text-therapy-600 font-medium">{professional.title}</p>
                    <p className="text-slate-500 text-sm">{professional.crp}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-slate-600 text-sm">Principais especialidades:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {professional.specializations.slice(0, 3).map((spec, index) => (
                        <span key={index} className="bg-therapy-50 text-therapy-700 px-3 py-1 rounded-full text-xs font-medium">
                          {spec.title}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {professional.about.length > 120 ? `${professional.about.substring(0, 120)}...` : professional.about}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-therapy-100 rounded-full opacity-20 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-trust-100 rounded-full opacity-20 -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Sobre minha abordagem
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {professional.about}
            </p>
          </div>

          {/* Education & Specializations */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Formação</h3>
              <div className="space-y-4">
                {professional.education.map((edu, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                    <h4 className="font-semibold text-slate-800 mb-2">{edu.degree}</h4>
                    <p className="text-slate-600">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specializations */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Especialidades</h3>
              <div className="space-y-4">
                {professional.specializations.map((spec, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                    <h4 className="font-semibold text-slate-800 mb-2">{spec.title}</h4>
                    <p className="text-slate-600">{spec.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Approaches */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Abordagens Terapêuticas</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {professional.approaches.map((approach, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                  <h4 className="font-semibold text-slate-800 mb-3">{approach.title}</h4>
                  <p className="text-slate-600">{approach.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Vamos conversar?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Estou aqui para esclarecer suas dúvidas sobre o processo terapêutico e 
              entender como posso ajudar você em sua jornada de bem-estar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleWhatsApp}
                className="bg-therapy-600 hover:bg-therapy-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={handleEmail}
                className="bg-white border-2 border-therapy-600 text-therapy-600 hover:bg-therapy-50 font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>E-mail</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      <SimpleFooter />
    </main>
  );
};

export default SimpleProfessionalPage;
