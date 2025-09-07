"use client";

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  Calendar,
  Phone,
  MapPin,
  GraduationCap,
  Shield,
  Award,
  Clock,
  MessageCircle,
  Brain,
  Users,
  Heart,
  FileText,
  Stethoscope
} from 'lucide-react';
import Image from 'next/image';
import { clinicData } from '../data/clinic';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePsicoterapiaClick = () => {
    const psicoterapiaSection = document.getElementById('psicoterapia');
    if (psicoterapiaSection) {
      psicoterapiaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTerapiaCasalClick = () => {
    const terapiaCasalSection = document.getElementById('terapia-casal');
    if (terapiaCasalSection) {
      terapiaCasalSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAvaliacoesClick = () => {
    const avaliacoesSection = document.getElementById('avaliacoes');
    if (avaliacoesSection) {
      avaliacoesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDuvidasClick = () => {
    const phoneNumber = '5519988200585';
    const message = encodeURIComponent('Olá! Tenho algumas dúvidas sobre os serviços da AcessaPsi. Poderia me ajudar?');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-2 sm:px-4 lg:px-8 bg-gradient-to-b from-slate-50 to-white pt-4 pb-8 sm:pt-8 sm:pb-12">
      
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="text-center">
          
          {/* Main Content - Centered */}
          <div className={`space-y-3 sm:space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Logo and Main Headline */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 mb-2 sm:mb-6">
              <Image
                src="/images/logo_psi.png"
                alt="AcessaPsi"
                width={60}
                height={60}
                className="w-12 h-12 sm:w-20 sm:h-20 object-contain"
                priority
              />
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight text-center sm:text-left" style={{ color: '#5156b4' }}>
                Acessa<span className="text-slate-800">Psi</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-slate-800 leading-relaxed max-w-4xl mx-auto px-4 sm:px-0 text-center text-no-overflow">
              {clinicData.description}
            </p>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mt-2 sm:mt-4 px-4 sm:px-0 text-center text-no-overflow">
              {clinicData.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-2 sm:pt-6 justify-center px-4 sm:px-0">
              <button
                onClick={handlePsicoterapiaClick}
                className="bg-gradient-to-br from-therapy-500 to-therapy-700 hover:from-therapy-600 hover:to-therapy-800 text-white font-bold px-3 sm:px-6 lg:px-8 py-3 sm:py-6 lg:py-8 rounded-xl transition-all duration-300 flex flex-col items-center justify-center space-y-1 sm:space-y-2 lg:space-y-3 shadow-xl hover:shadow-2xl group flex-1 max-w-sm min-h-[80px] sm:min-h-[120px] lg:min-h-[140px] border border-therapy-400 btn-mobile"
              >
                <div className="bg-white/20 p-1 sm:p-2 lg:p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                </div>
                <span className="text-center text-xs sm:text-sm leading-tight font-medium text-no-overflow px-1">
                  Atendimento Psicológico<br/>e Psicoterapia
                </span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300 opacity-80" />
              </button>

              <button
                onClick={handleTerapiaCasalClick}
                className="bg-gradient-to-br from-trust-500 to-trust-700 hover:from-trust-600 hover:to-trust-800 text-white font-bold px-3 sm:px-6 lg:px-8 py-3 sm:py-6 lg:py-8 rounded-xl transition-all duration-300 flex flex-col items-center justify-center space-y-1 sm:space-y-2 lg:space-y-3 shadow-xl hover:shadow-2xl group flex-1 max-w-sm min-h-[80px] sm:min-h-[120px] lg:min-h-[140px] border border-trust-400 btn-mobile"
              >
                <div className="bg-white/20 p-1 sm:p-2 lg:p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                </div>
                <span className="text-center text-xs sm:text-sm leading-tight font-medium text-no-overflow px-1">
                  Terapia de Casal<br/>e Terapia Familiar
                </span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300 opacity-80" />
              </button>

              <button
                onClick={handleAvaliacoesClick}
                className="bg-gradient-to-br from-wisdom-500 to-wisdom-700 hover:from-wisdom-600 hover:to-wisdom-800 text-white font-bold px-3 sm:px-6 lg:px-8 py-3 sm:py-6 lg:py-8 rounded-xl transition-all duration-300 flex flex-col items-center justify-center space-y-1 sm:space-y-2 lg:space-y-3 shadow-xl hover:shadow-2xl group flex-1 max-w-sm min-h-[80px] sm:min-h-[120px] lg:min-h-[140px] border border-wisdom-400 btn-mobile"
              >
                <div className="bg-white/20 p-1 sm:p-2 lg:p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                </div>
                <span className="text-center text-xs sm:text-sm leading-tight font-medium text-no-overflow px-1">
                  Avaliações Psicológicas<br/>e Análise de Perfil
                </span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300 opacity-80" />
              </button>
            </div>

            {/* Secondary CTA Button */}
            <div className="flex justify-center pt-2 sm:pt-4">
              <button
                onClick={handleDuvidasClick}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-800 font-medium px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group border border-slate-300 hover:border-slate-400 btn-mobile-sm"
              >
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-sm sm:text-base text-no-overflow">Tem dúvidas?</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
