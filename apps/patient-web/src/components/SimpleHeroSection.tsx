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
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white pt-8 pb-12">
      
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="text-center">
          
          {/* Main Content - Centered */}
          <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Logo and Main Headline */}
            <div className="flex items-center justify-center space-x-6 mb-6">
              <Image
                src="/images/logo_psi.png"
                alt="AcessaPsi"
                width={80}
                height={80}
                className="w-20 h-20 object-contain"
                priority
              />
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight" style={{ color: '#5156b4' }}>
                Acessa<span className="text-slate-800">Psi</span>
              </h1>
            </div>

            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 leading-relaxed max-w-4xl mx-auto">
              {clinicData.description}
            </p>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mt-4">
              {clinicData.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col lg:flex-row gap-6 pt-6 justify-center">
              <button
                onClick={handlePsicoterapiaClick}
                className="bg-gradient-to-br from-therapy-500 to-therapy-700 hover:from-therapy-600 hover:to-therapy-800 text-white font-bold px-8 py-8 rounded-xl transition-all duration-300 flex flex-col items-center justify-center space-y-3 shadow-xl hover:shadow-2xl group flex-1 max-w-sm min-h-[140px] border border-therapy-400"
              >
                <div className="bg-white/20 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="w-8 h-8" />
                </div>
                <span className="text-center text-sm leading-tight font-medium">Atendimento Psicológico<br/>e Psicoterapia</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 opacity-80" />
              </button>

              <button
                onClick={handleTerapiaCasalClick}
                className="bg-gradient-to-br from-trust-500 to-trust-700 hover:from-trust-600 hover:to-trust-800 text-white font-bold px-8 py-8 rounded-xl transition-all duration-300 flex flex-col items-center justify-center space-y-3 shadow-xl hover:shadow-2xl group flex-1 max-w-sm min-h-[140px] border border-trust-400"
              >
                <div className="bg-white/20 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8" />
                </div>
                <span className="text-center text-sm leading-tight font-medium">Terapia de Casal<br/>e Terapia Familiar</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 opacity-80" />
              </button>

              <button
                onClick={handleAvaliacoesClick}
                className="bg-gradient-to-br from-wisdom-500 to-wisdom-700 hover:from-wisdom-600 hover:to-wisdom-800 text-white font-bold px-8 py-8 rounded-xl transition-all duration-300 flex flex-col items-center justify-center space-y-3 shadow-xl hover:shadow-2xl group flex-1 max-w-sm min-h-[140px] border border-wisdom-400"
              >
                <div className="bg-white/20 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8" />
                </div>
                <span className="text-center text-sm leading-tight font-medium">Avaliações Psicológicas<br/>e Análise de Perfil</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 opacity-80" />
              </button>
            </div>

            {/* Secondary CTA Button */}
            <div className="flex justify-center pt-4">
              <button
                onClick={handleDuvidasClick}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-800 font-medium px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group border border-slate-300 hover:border-slate-400"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Tem dúvidas? Entre em Contato</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
