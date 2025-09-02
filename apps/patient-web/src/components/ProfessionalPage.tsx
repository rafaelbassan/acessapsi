"use client";

import React, { useState, useEffect } from 'react';
import LiquidGlassCard from '../components/LiquidGlassCard';
import LiquidGlassButton from '../components/LiquidGlassButton';
import AnimatedParticles from '../components/AnimatedParticles';
import {
  MessageCircle,
  Calendar,
  Mail,
  MapPin,
  Award,
  Heart,
  Users,
  Zap,
  Phone,
  Star,
  Clock,
  CheckCircle,
  ArrowRight,
  Quote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';

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
  testimonials: {
    id: number;
    name: string;
    content: string;
    rating: number;
    treatment: string;
  }[];
}

interface ProfessionalPageProps {
  professional: ProfessionalData;
}

const ProfessionalPage: React.FC<ProfessionalPageProps> = ({ professional }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || professional.testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % professional.testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, professional.testimonials.length]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Olá! Gostaria de agendar uma consulta com o ${professional.title} ${professional.name}.`);
    window.open(`https://wa.me/${professional.contact.whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    window.open(`tel:${professional.contact.phone}`, '_self');
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % professional.testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + professional.testimonials.length) % professional.testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated Particles Background */}
      <AnimatedParticles />

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl top-0 left-0 animate-pulse" />
        <div className="absolute w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl bottom-20 right-0 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute w-64 h-64 bg-purple-500/5 rounded-full blur-2xl top-1/2 left-1/4 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className={`text-center mb-16 pt-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
              <LiquidGlassCard
                variant="elevated"
                intensity="medium"
                glowEffect={true}
                shimmerEffect={true}
                className="bg-white/10 backdrop-blur-sm border border-white/20 relative overflow-hidden"
                cornerRadius={32}
                padding="3rem"
              >
                {/* Avatar */}
                <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 relative">
                  <div className="w-full h-full rounded-full bg-white/90 flex items-center justify-center shadow-2xl">
                    {professional.avatar ? (
                      <Image
                        src={professional.avatar}
                        alt={professional.name}
                        width={120}
                        height={120}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-4xl font-bold text-transparent bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text">
                        {professional.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    )}
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-20 blur-lg animate-pulse"></div>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
                  {professional.name}
                </h1>
                <p className="text-2xl text-blue-600 font-medium mb-2">{professional.title}</p>
                <p className="text-lg text-slate-600 mb-2">{professional.crp}</p>
                <p className="text-lg text-slate-600 mb-8">{professional.experience}</p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <LiquidGlassButton
                    variant="primary"
                    size="lg"
                    onClick={handleWhatsAppClick}
                    className="flex items-center justify-center space-x-3 px-8 py-4 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95 group relative overflow-hidden w-full sm:w-auto"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl" />
                    <MessageCircle className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-semibold text-base lg:text-lg relative z-10">WhatsApp</span>
                  </LiquidGlassButton>

                  <LiquidGlassButton
                    variant="secondary"
                    size="lg"
                    onClick={handleCallClick}
                    className="flex items-center justify-center space-x-3 px-8 py-4 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95 group relative overflow-hidden w-full sm:w-auto"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl" />
                    <Phone className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold text-base lg:text-lg relative z-10">Ligar Agora</span>
                  </LiquidGlassButton>

                  <LiquidGlassButton
                    variant="ghost"
                    size="lg"
                    className="flex items-center justify-center space-x-3 px-8 py-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 active:scale-95 group relative overflow-hidden w-full sm:w-auto"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    <Calendar className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-semibold text-base lg:text-lg relative z-10">Agendar</span>
                  </LiquidGlassButton>
                </div>
              </LiquidGlassCard>
            </div>
          </div>

          {/* About Section */}
          <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <LiquidGlassCard
              variant="elevated"
              intensity="medium"
              glowEffect={true}
              className="bg-white/10 backdrop-blur-sm border border-white/20"
              cornerRadius={24}
              padding="2.5rem"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Sobre</h2>
              </div>

              <div className="text-slate-700 space-y-4 leading-relaxed">
                <p className="text-lg">{professional.about}</p>
              </div>
            </LiquidGlassCard>
          </div>

          {/* Main Content Grid */}
          <div className={`grid lg:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Qualifications Section */}
            <LiquidGlassCard
              variant="elevated"
              intensity="medium"
              className="bg-white/10 backdrop-blur-sm border border-white/20"
              cornerRadius={24}
              padding="2.5rem"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Qualificações</h2>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-blue-600 flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Formação Acadêmica</span>
                  </h3>
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2">
                    {professional.education.map((edu, index) => (
                      <p key={index} className="text-slate-700">• {edu.degree} — {edu.institution}</p>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-purple-300 flex items-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Abordagens Terapêuticas</span>
                  </h3>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2">
                    {professional.approaches.map((approach, index) => (
                      <div key={index}>
                        <p className="text-slate-700 font-medium">{approach.title}</p>
                        <p className="text-slate-600 text-sm">{approach.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </LiquidGlassCard>

            {/* Specialties Section */}
            <LiquidGlassCard
              variant="elevated"
              intensity="medium"
              className="bg-white/10 backdrop-blur-sm border border-white/20"
              cornerRadius={24}
              padding="2.5rem"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">O que posso te ajudar</h2>
              </div>

              <div className="space-y-4">
                {professional.specializations.map((spec, index) => (
                  <div key={index} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">{spec.title}</h4>
                    <p className="text-slate-700">{spec.description}</p>
                  </div>
                ))}
              </div>
            </LiquidGlassCard>
          </div>

          {/* Differentials Section */}
          <div className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <LiquidGlassCard
              variant="elevated"
              intensity="medium"
              glowEffect={true}
              className="bg-white/10 backdrop-blur-sm border border-white/20"
              cornerRadius={24}
              padding="2.5rem"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Por que me escolher</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {professional.differentials.map((diff, index) => (
                  <div key={index} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <h4 className="text-lg font-semibold text-yellow-600 mb-2">{diff.title}</h4>
                    <p className="text-slate-700">{diff.description}</p>
                  </div>
                ))}
              </div>
            </LiquidGlassCard>
          </div>

          {/* Testimonials Section */}
          {professional.testimonials.length > 0 && (
            <div className={`mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Depoimentos</h2>
                <p className="text-xl text-slate-600">O que meus pacientes dizem</p>
              </div>

              <div className="relative max-w-4xl mx-auto">
                <LiquidGlassCard
                  variant="elevated"
                  intensity="medium"
                  glowEffect={true}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 relative overflow-hidden"
                  cornerRadius={24}
                  padding="3rem"
                >
                  <div className="text-center">
                    <Quote className="w-12 h-12 text-blue-300 mx-auto mb-6" />
                    <p className="text-xl text-slate-200 mb-6 italic leading-relaxed">
                      "{professional.testimonials[currentTestimonial].content}"
                    </p>
                    <div className="flex items-center justify-center space-x-1 mb-4">
                      {[...Array(professional.testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg font-semibold text-slate-900 mb-2">
                      {professional.testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-blue-600">
                      {professional.testimonials[currentTestimonial].treatment}
                    </p>
                  </div>

                  {/* Navigation */}
                  {professional.testimonials.length > 1 && (
                    <>
                      <button
                        onClick={prevTestimonial}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-200 hover:bg-slate-300 rounded-full flex items-center justify-center text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-110"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-200 hover:bg-slate-300 rounded-full flex items-center justify-center text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-110"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </LiquidGlassCard>

                {/* Indicators */}
                {professional.testimonials.length > 1 && (
                  <div className="flex justify-center space-x-2 mt-6">
                    {professional.testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentTestimonial(index);
                          setIsAutoPlaying(false);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentTestimonial
                            ? 'bg-gradient-to-r from-blue-400 to-purple-400 w-8'
                            : 'bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Contact Section */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <LiquidGlassCard
              variant="elevated"
              intensity="medium"
              glowEffect={true}
              shimmerEffect={true}
              className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20"
              cornerRadius={24}
              padding="3rem"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-pink-500 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Agende sua Consulta</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-slate-700">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span><strong className="text-slate-900">WhatsApp:</strong> {professional.contact.whatsapp}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-700">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span><strong className="text-slate-900">Endereço:</strong> {professional.contact.address}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-700">
                    <Award className="w-5 h-5 text-purple-600" />
                    <span><strong className="text-slate-900">CRP:</strong> {professional.crp}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-slate-700">
                    <Calendar className="w-5 h-5 text-indigo-600" />
                    <span><strong className="text-slate-900">Modalidades:</strong> Presencial e Online</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-700">
                    <Clock className="w-5 h-5 text-pink-600" />
                    <span><strong className="text-slate-900">Horários:</strong> Seg a Sex, 8h às 18h</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-700">
                    <Mail className="w-5 h-5 text-yellow-600" />
                    <span><strong className="text-slate-900">Email:</strong> {professional.contact.email}</span>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              {/* Seção de preços removida por solicitação */}

              {/* Quick Actions */}
              <div className="pt-6 border-t border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Entre em contato para agendar sua avaliação inicial</h3>
                <div className="flex flex-wrap gap-4">
                  <LiquidGlassButton
                    variant="gradient"
                    size="lg"
                    onClick={handleWhatsAppClick}
                    className="flex items-center space-x-2 px-6 py-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Conversar no WhatsApp</span>
                  </LiquidGlassButton>

                  <LiquidGlassButton
                    variant="primary"
                    size="lg"
                    onClick={handleCallClick}
                    className="flex items-center space-x-2 px-6 py-3"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Ligar Diretamente</span>
                  </LiquidGlassButton>

                  <a
                    href={`mailto:${professional.contact.email}`}
                    className="flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Enviar Email</span>
                  </a>
                </div>
              </div>
            </LiquidGlassCard>
          </div>

          {/* Footer */}
          <footer className={`text-center transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <LiquidGlassCard
              variant="minimal"
              className="bg-white/5 backdrop-blur-sm border border-white/10"
              cornerRadius={16}
              padding="2rem"
            >
              <p className="text-sm text-slate-400">
                Informações verificadas e atualizadas. Profissional registrado no CRP.
              </p>
            </LiquidGlassCard>
          </footer>
        </div>
      </div>
    </main>
  );
};

export default ProfessionalPage;
