"use client";

import React, { useState, useEffect } from 'react'
import LiquidGlassCard from './LiquidGlassCard';
import LiquidGlassButton from './LiquidGlassButton';
import { 
  ArrowRight, 
  Calendar, 
  Heart, 
  Star,
  CheckCircle,
  PlayCircle,
  Shield,
  Clock,
  Users,
  Award,
  Phone,
  MessageCircle,
  Brain,
  Smile
} from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBookAppointment = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCallSpecialist = () => {
    window.open('tel:+5511999998888', '_self');
  };

  return (
    <section className="relative h-screen max-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 overflow-hidden bg-hero pt-16 pb-4">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-48 h-48 lg:w-72 lg:h-72 bg-blue-500/10 rounded-full blur-3xl top-10 lg:top-20 left-10 lg:left-20 animate-pulse" />
        <div className="absolute w-40 h-40 lg:w-64 lg:h-64 bg-indigo-500/10 rounded-full blur-3xl bottom-20 lg:bottom-32 right-16 lg:right-32 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute w-32 h-32 lg:w-48 lg:h-48 bg-purple-500/10 rounded-full blur-2xl top-1/2 left-1/4 lg:left-1/3 animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl xl:max-w-7xl 2xl:max-w-6xl mx-auto h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 items-center">
          
          {/* Left Column - Main Content */}
          <div className={`space-y-4 lg:space-y-5 xl:space-y-6 max-w-2xl lg:max-w-none transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            
            {/* Brand Badge */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="p-4 xl:p-5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-xl shadow-blue-500/25">
                  <Brain className="w-7 h-7 xl:w-8 xl:h-8" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-20 blur-lg animate-pulse"></div>
              </div>
              <div>
                <span className="text-3xl xl:text-4xl font-bold text-white">PsiClin</span>
                <p className="text-blue-300 text-sm xl:text-base font-medium">Cuidado psicológico especializado</p>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3 lg:space-y-4 xl:space-y-5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-5xl font-bold text-white leading-tight">
                Cuide da sua
                <span className="block text-cyan-300 font-bold">
                  saúde mental
                </span>
                com quem entende
              </h1>

              <p className="text-lg lg:text-xl xl:text-xl 2xl:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Profissionais qualificados e experientes prontos para te ajudar em sua jornada de autoconhecimento e bem-estar emocional.
              </p>
            </div>



            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 xl:gap-6">
              <LiquidGlassButton 
                variant="primary" 
                size="lg"
                onClick={handleBookAppointment}
                className="flex items-center justify-center space-x-3 px-8 py-4 xl:px-10 xl:py-5 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 xl:w-6 xl:h-6" />
                <span className="font-semibold xl:text-lg">Agendar Consulta</span>
                <ArrowRight className="w-5 h-5 xl:w-6 xl:h-6" />
              </LiquidGlassButton>

              <LiquidGlassButton 
                variant="ghost" 
                size="lg"
                onClick={handleCallSpecialist}
                className="flex items-center justify-center space-x-3 px-8 py-4 xl:px-10 xl:py-5 hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="w-5 h-5 xl:w-6 xl:h-6" />
                <span className="font-semibold xl:text-lg">Falar com Especialista</span>
              </LiquidGlassButton>
            </div>

            
          </div>

          {/* Right Column - Visual Elements */}
          <div className={`space-y-2 lg:space-y-3 xl:space-y-4 max-w-2xl lg:max-w-none xl:max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            
            {/* Main Image Card */}
            <LiquidGlassCard 
              variant="heavy" 
              intensity="medium"
              className="bg-white/5 border border-white/10 relative overflow-hidden hover:bg-white/10 transition-all duration-500 mt-20 lg:mt-24 xl:mt-28"
              cornerRadius={12}
              padding="0.5em"
            >
              {/* Therapy session image */}
              <div className="aspect-[2/1] lg:aspect-[5/3] xl:aspect-[4/3] rounded-xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Sessão de terapia em ambiente acolhedor"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 lg:bottom-4 lg:left-4 lg:right-4 xl:bottom-5 xl:left-5 xl:right-5">
                  <p className="text-white font-medium text-xs lg:text-sm xl:text-base bg-black/20 backdrop-blur-sm rounded-lg px-2 py-1 lg:px-3 lg:py-2 xl:px-4 xl:py-3">
                    Ambiente acolhedor e profissional
                  </p>
                </div>
              </div>
            </LiquidGlassCard>

            {/* Trust Indicators Grid */}
            <div className="grid grid-cols-4 gap-2 xl:gap-3">
              <LiquidGlassCard 
                variant="light" 
                intensity="subtle"
                className="bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 group"
                padding="0.5rem 0.25rem"
              >
                <div className="space-y-1 xl:space-y-2">
                  <div className="w-6 h-6 xl:w-8 xl:h-8 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-3 h-3 xl:w-4 xl:h-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-xs xl:text-sm">100% Sigiloso</h4>
                  </div>
                </div>
              </LiquidGlassCard>

              <LiquidGlassCard 
                variant="light" 
                intensity="subtle"
                className="bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 group"
                padding="0.5rem 0.25rem"
              >
                <div className="space-y-1 xl:space-y-2">
                  <div className="w-6 h-6 xl:w-8 xl:h-8 mx-auto bg-green-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-3 h-3 xl:w-4 xl:h-4 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-xs xl:text-sm">Certificado CRP</h4>
                  </div>
                </div>
              </LiquidGlassCard>

              <LiquidGlassCard 
                variant="light" 
                intensity="subtle"
                className="bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 group"
                padding="0.5rem 0.25rem"
              >
                <div className="space-y-1 xl:space-y-2">
                  <div className="w-6 h-6 xl:w-8 xl:h-8 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-3 h-3 xl:w-4 xl:h-4 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-xs xl:text-sm">Suporte 24/7</h4>
                  </div>
                </div>
              </LiquidGlassCard>

              <LiquidGlassCard 
                variant="light" 
                intensity="subtle"
                className="bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-all duration-300 group"
                padding="0.5rem 0.25rem"
              >
                <div className="space-y-1 xl:space-y-2">
                  <div className="w-6 h-6 xl:w-8 xl:h-8 mx-auto bg-yellow-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-3 h-3 xl:w-4 xl:h-4 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-xs xl:text-sm">Cuidado Humano</h4>
                  </div>
                </div>
              </LiquidGlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 