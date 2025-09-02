"use client";

import React, { useState, useEffect } from 'react';
import LiquidGlassCard from './LiquidGlassCard';
import LiquidGlassButton from './LiquidGlassButton';
import AnimatedParticles from './AnimatedParticles';
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
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'qualifications', 'specialties', 'differentials', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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

      {/* Navigation Menu */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full px-6 py-3 shadow-lg">
        <div className="flex space-x-6">
          {[
            { id: 'hero', label: 'Início', icon: Heart },
            { id: 'experience', label: 'Experiência', icon: Award },
            { id: 'qualifications', label: 'Qualificações', icon: CheckCircle },
            { id: 'specialties', label: 'Especialidades', icon: Zap },
            { id: 'contact', label: 'Contato', icon: MessageCircle }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
                activeSection === id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div id="hero" className={`mb-16 pt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/30 to-slate-700/30 rounded-3xl blur-2xl"></div>
              <LiquidGlassCard
                variant="elevated"
                intensity="subtle"
                glowEffect={false}
                shimmerEffect={false}
                className="bg-white/5 backdrop-blur-sm border border-slate-600/30 relative overflow-hidden"
                cornerRadius={24}
                padding="3rem"
              >
                <div className="flex flex-col space-y-8">
                  {/* Top Section - Photo and Info */}
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                    {/* Professional Avatar - Left Side */}
                    <div className="flex justify-center lg:justify-start">
                      <div className="relative">
                        <div className="w-48 h-48 rounded-full bg-slate-700/50 border-4 border-slate-600/30 flex items-center justify-center shadow-2xl">
                          {professional.avatar ? (
                            <Image
                              src={professional.avatar}
                              alt={professional.name}
                              width={192}
                              height={192}
                              className="w-full h-full rounded-full object-cover"
                            />
                          ) : (
                            <span className="text-6xl font-bold text-slate-700">
                              {professional.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          )}
                        </div>
                        {/* Professional Badge Overlay */}
                        <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 border-4 border-slate-800">
                          <CheckCircle className="w-6 h-6 text-slate-900" />
                        </div>
                      </div>
                    </div>

                    {/* Professional Information - Right Side */}
                    <div className="text-center lg:text-left flex-1">
                      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-1">
                        {professional.name}
                      </h1>
                      <p className="text-xl text-slate-600 font-medium mb-4">{professional.title}</p>
                      <div className="space-y-2 mb-4">
                        <p className="text-lg text-slate-500 flex items-center justify-center lg:justify-start">
                          <Award className="w-5 h-5 mr-2 text-blue-600" />
                          {professional.crp}
                        </p>
                        <p className="text-base text-slate-500 flex items-center justify-center lg:justify-start">
                          <Clock className="w-4 h-4 mr-2 text-green-600" />
                          {professional.experience}
                        </p>
                      </div>

                      {/* Professional Credentials */}
                      <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                        <div className="bg-slate-700/40 border border-slate-600/40 rounded-lg px-3 py-1 flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-slate-300 text-sm font-medium">Verificado</span>
                        </div>
                        <div className="bg-slate-700/40 border border-slate-600/40 rounded-lg px-3 py-1 flex items-center space-x-2">
                          <Award className="w-4 h-4 text-blue-400" />
                          <span className="text-slate-300 text-sm font-medium">Certificado</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section - Action Buttons Bar */}
                  <div className="border-t border-slate-600/30 pt-6">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <LiquidGlassButton
                        variant="primary"
                        size="lg"
                        onClick={handleWhatsAppClick}
                        className="flex items-center justify-center space-x-3 px-8 py-4 bg-green-600 hover:bg-green-700 border border-green-600 text-white font-medium transition-all duration-300 flex-1 sm:flex-initial"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>Agendar Consulta</span>
                      </LiquidGlassButton>

                      <LiquidGlassButton
                        variant="secondary"
                        size="lg"
                        onClick={handleCallClick}
                        className="flex items-center justify-center space-x-3 px-8 py-4 bg-transparent border border-slate-600 text-slate-600 hover:text-slate-900 hover:border-slate-500 font-medium transition-all duration-300 flex-1 sm:flex-initial"
                      >
                        <Phone className="w-5 h-5" />
                        <span>Ligar Agora</span>
                      </LiquidGlassButton>

                      <LiquidGlassButton
                        variant="secondary"
                        size="lg"
                        onClick={() => window.open(`mailto:${professional.contact.email}`, '_self')}
                        className="flex items-center justify-center space-x-3 px-8 py-4 bg-transparent border border-slate-600 text-slate-600 hover:text-slate-900 hover:border-slate-500 font-medium transition-all duration-300 flex-1 sm:flex-initial"
                      >
                        <Mail className="w-5 h-5" />
                        <span>Enviar Email</span>
                      </LiquidGlassButton>
                    </div>
                  </div>
                </div>
              </LiquidGlassCard>
            </div>
          </div>

          {/* Professional Experience Section */}
          <div id="experience" className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <LiquidGlassCard
              variant="elevated"
              intensity="medium"
              glowEffect={true}
              className="bg-white/10 backdrop-blur-sm border border-white/20"
              cornerRadius={24}
              padding="2.5rem"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center">
                  <Award className="w-6 h-6 text-slate-900" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Experiência Profissional</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-4 border border-blue-400/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-300 font-semibold">Anos de Experiência</span>
                    </div>
                    <p className="text-slate-900 text-2xl font-bold">{professional.experience}</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-4 border border-green-400/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <Users className="w-5 h-5 text-green-400" />
                      <span className="text-green-300 font-semibold">Pacientes Atendidos</span>
                    </div>
                    <p className="text-slate-900 text-2xl font-bold">+500</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-4 border border-orange-400/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <Heart className="w-5 h-5 text-orange-400" />
                      <span className="text-orange-300 font-semibold">Especialidades</span>
                    </div>
                    <p className="text-slate-900 text-lg font-semibold">{professional.specializations.length} áreas de atuação</p>
                  </div>
                </div>
              </div>
            </LiquidGlassCard>
          </div>

          {/* Main Content Grid */}
          <div className={`grid lg:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Qualifications Section */}
            <div id="qualifications">
            <LiquidGlassCard
              variant="elevated"
              intensity="medium"
              className="bg-white/10 backdrop-blur-sm border border-white/20"
              cornerRadius={24}
              padding="2.5rem"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <Award className="w-6 h-6 text-slate-900" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Qualificações</h2>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-blue-300 flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Formação Acadêmica</span>
                  </h3>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2">
                    {professional.education.map((edu, index) => (
                      <p key={index} className="text-slate-200">• {edu.degree} — {edu.institution}</p>
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
                        <p className="text-slate-200 font-medium">{approach.title}</p>
                        <p className="text-slate-300 text-sm">{approach.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </LiquidGlassCard>
            </div>

            {/* Specialties Section */}
            <div id="specialties">
            <LiquidGlassCard
              variant="elevated"
              intensity="medium"
              className="bg-white/10 backdrop-blur-sm border border-white/20"
              cornerRadius={24}
              padding="2.5rem"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                  <Users className="w-6 h-6 text-slate-900" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">O que posso te ajudar</h2>
              </div>

              <div className="space-y-4">
                {professional.specializations.map((spec, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">{spec.title}</h4>
                    <p className="text-slate-700">{spec.description}</p>
                  </div>
                ))}
              </div>
            </LiquidGlassCard>
            </div>

          {/* Differentials Section */}
          <div id="differentials" className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
                  <Award className="w-6 h-6 text-slate-900" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Por que me escolher</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {professional.differentials.map((diff, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-lg font-semibold text-yellow-600 mb-2">{diff.title}</h4>
                    <p className="text-slate-700">{diff.description}</p>
                  </div>
                ))}
              </div>
            </LiquidGlassCard>
          </div>

          {/* FAQ Section */}
          <div className={`mb-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <LiquidGlassCard
              variant="elevated"
              intensity="medium"
              glowEffect={true}
              className="bg-white/10 backdrop-blur-sm border border-white/20"
              cornerRadius={24}
              padding="2.5rem"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-slate-900" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Perguntas Frequentes</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-blue-600 mb-3">Como funciona a primeira consulta?</h4>
                  <p className="text-slate-700 leading-relaxed">A primeira sessão é dedicada ao acolhimento e avaliação inicial. Conversaremos sobre seus objetivos, histórico e expectativas para construir um plano terapêutico personalizado.</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">Qual a frequência ideal das sessões?</h4>
                  <p className="text-slate-200 leading-relaxed">Recomendo sessões semanais no início do tratamento para estabelecer uma base sólida. Posteriormente, podemos ajustar para quinzenal ou mensal conforme sua evolução.</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">O atendimento é confidencial?</h4>
                  <p className="text-slate-200 leading-relaxed">Absolutamente. Todas as informações compartilhadas durante as sessões são protegidas pelo sigilo profissional, garantido pelo Código de Ética do Psicólogo.</p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-yellow-300 mb-3">Quanto tempo dura o tratamento?</h4>
                  <p className="text-slate-200 leading-relaxed">A duração varia conforme suas necessidades individuais. Alguns pacientes se beneficiam de tratamento curto (3-6 meses), enquanto outros optam por acompanhamento contínuo.</p>
                </div>
              </div>
            </LiquidGlassCard>
          </div>
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
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Vamos Conversar?</h2>
                  <p className="text-slate-600">Estou aqui para ajudar você</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-4 border border-green-400/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-green-600 font-semibold">WhatsApp</p>
                        <p className="text-slate-900 text-sm">Resposta em até 2h</p>
                      </div>
                    </div>
                    <p className="text-slate-700 ml-13">{professional.contact.whatsapp}</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-4 border border-blue-400/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-blue-600 font-semibold">Localização</p>
                        <p className="text-slate-900 text-sm">Atendimento presencial</p>
                      </div>
                    </div>
                    <p className="text-slate-700 ml-13">{professional.contact.address}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-400/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-purple-600 font-semibold">Registro CRP</p>
                        <p className="text-slate-900 text-sm">Profissional verificado</p>
                      </div>
                    </div>
                    <p className="text-slate-700 ml-13">{professional.crp}</p>
                  </div>

                  <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-4 border border-orange-400/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-orange-600 font-semibold">Horário de Atendimento</p>
                        <p className="text-slate-900 text-sm">Segunda a Sexta</p>
                      </div>
                    </div>
                    <p className="text-slate-700 ml-13">8h às 18h</p>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              {/* Seção de preços removida por solicitação */}

              {/* Quick Actions */}
              <div className="pt-6 border-t border-slate-200">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Pronto para começar sua jornada?</h3>
                  <p className="text-slate-600">Agende sua primeira consulta e dê o primeiro passo rumo ao seu bem-estar</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <LiquidGlassButton
                    variant="gradient"
                    size="lg"
                    onClick={handleWhatsAppClick}
                    className="flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    <MessageCircle className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-semibold text-base lg:text-lg relative z-10">Agendar Consulta</span>
                  </LiquidGlassButton>

                  <LiquidGlassButton
                    variant="primary"
                    size="lg"
                    onClick={handleCallClick}
                    className="flex items-center justify-center space-x-3 px-8 py-4 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    <Phone className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-semibold text-base lg:text-lg relative z-10">Ligar Agora</span>
                  </LiquidGlassButton>
                </div>

                <div className="text-center">
                  <a
                    href={`mailto:${professional.contact.email}`}
                    className="inline-flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors duration-300 group"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">{professional.contact.email}</span>
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
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-slate-600">Profissional registrado e verificado no CRP</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Heart className="w-5 h-5 text-red-600" />
                  <span className="text-sm text-slate-600">Atendimento ético e confidencial</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-slate-600">Formação continuada e atualizada</span>
                </div>
              </div>
            </LiquidGlassCard>
          </footer>
        </div>
      </div>
    </main>
  );
};

export default ProfessionalPage;
