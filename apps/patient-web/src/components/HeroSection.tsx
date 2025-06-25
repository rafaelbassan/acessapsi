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
  Sparkles
} from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-blue-900">
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl top-20 left-20 animate-float-slow" />
        <div className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl bottom-32 right-32 animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute w-64 h-64 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl top-1/2 left-1/4 animate-float-slow" style={{ animationDelay: '4s' }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Main Content */}
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Main Heading */}
          <LiquidGlassCard 
            variant="light" 
            intensity="medium"
            className="p-8 backdrop-blur-xl bg-white/5 border border-white/10"
            cornerRadius={32}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <Heart className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                  PsiClin
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Transforme sua vida
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  com apoio psicológico
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                Cuidado profissional e humanizado para seu bem-estar emocional. 
                Dê o primeiro passo rumo a uma vida mais equilibrada.
              </p>

              <div className="flex items-center justify-center space-x-2 p-4 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-300 font-medium">
                  Primeira consulta com 50% de desconto
                </span>
              </div>
            </div>
          </LiquidGlassCard>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <LiquidGlassButton 
              variant="primary" 
              size="lg"
              onClick={() => console.log('Agendar consulta')}
              className="flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Agendar Consulta</span>
              <ArrowRight className="w-5 h-5" />
            </LiquidGlassButton>

            <LiquidGlassButton 
              variant="ghost" 
              size="lg"
              onClick={() => console.log('Ver como funciona')}
              className="flex items-center justify-center space-x-2"
            >
              <PlayCircle className="w-5 h-5" />
              <span>Ver Como Funciona</span>
            </LiquidGlassButton>
          </div>

          {/* Simple Trust Indicators */}
          <div className="flex items-center justify-center space-x-8 text-neutral-400">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">98% Satisfação</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">1000+ Vidas Transformadas</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">Profissionais Qualificados</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 