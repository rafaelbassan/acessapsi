"use client";

import React, { useState, useEffect } from 'react'
import LiquidGlassCard from './LiquidGlassCard';
import LiquidGlassButton from './LiquidGlassButton';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  Calendar,
  Phone,
  ChevronLeft,
  ChevronRight,
  MapPin,
  GraduationCap
} from 'lucide-react';
import Image from 'next/image';

interface Specialist {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  location: string;
  education: string;
  approaches: string[];
  availability: string;
}

const specialists: Specialist[] = [
  {
    id: 1,
    name: "Alex Gustavo Bassan",
    specialty: "Psicólogo Clínico",
    experience: "11 anos de experiência",
    image: "/images/AlexBassan.jpeg",
    rating: 4.9,
    reviews: 85,
    description: "Especialista em Psicologia Sistêmica e Análise do Comportamento Aplicada. Utiliza jogos para desenvolvimento socioemocional e mantém formação continuada em Psicologia Positiva.",
    location: "São Paulo, SP",
    education: "CRP 06/123456",
    approaches: ["Terapia Familiar", "Intervenções Comportamentais", "Psicologia Positiva"],
    availability: "Segunda a Sexta, 8h às 18h"
  },
  {
    id: 2,
    name: "Dra. Ana Silva",
    specialty: "Psicóloga Infantil",
    experience: "8 anos de experiência",
    image: "/api/placeholder/300/300",
    rating: 4.8,
    reviews: 62,
    description: "Especializada em atendimento infantil e adolescente, com foco em desenvolvimento emocional e dificuldades de aprendizagem.",
    location: "São Paulo, SP",
    education: "CRP 06/789012",
    approaches: ["Terapia Infantil", "Orientação Parental", "TDAH"],
    availability: "Terça a Sábado, 9h às 17h"
  }
];

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSpecialist, setCurrentSpecialist] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || specialists.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSpecialist((prev) => (prev + 1) % specialists.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleBookAppointment = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCallSpecialist = () => {
    const phoneNumber = '5519988200585';
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços psicológicos.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const nextSpecialist = () => {
    setCurrentSpecialist((prev) => (prev + 1) % specialists.length);
    setIsAutoPlaying(false);
  };

  const prevSpecialist = () => {
    setCurrentSpecialist((prev) => (prev - 1 + specialists.length) % specialists.length);
    setIsAutoPlaying(false);
  };

  const goToSpecialist = (index: number) => {
    setCurrentSpecialist(index);
    setIsAutoPlaying(false);
  };

  const currentSpec = specialists[currentSpecialist];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 overflow-hidden bg-hero pt-16 pb-6">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-48 h-48 lg:w-72 lg:h-72 bg-blue-500/8 rounded-full blur-3xl top-10 lg:top-20 left-10 lg:left-20 animate-pulse" />
        <div className="absolute w-40 h-40 lg:w-64 lg:h-64 bg-indigo-500/8 rounded-full blur-3xl bottom-20 lg:bottom-32 right-16 lg:right-32 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute w-32 h-32 lg:w-48 lg:h-48 bg-purple-500/6 rounded-full blur-2xl top-1/2 left-1/4 lg:left-1/3 animate-pulse" style={{ animationDelay: '4s' }} />

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-white/10 rotate-45 animate-float opacity-30" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/5 w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full animate-float opacity-40" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-12 items-center min-h-[75vh]">
          {/* Left Column - Main Content */}
          <div className={`lg:col-span-7 space-y-5 lg:space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Brand Badge */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="p-4 xl:p-5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl shadow-blue-500/25 overflow-hidden">
                  <Image
                    src="/images/logo_psi.png"
                    alt="Acessa Psi Logo"
                    width={32}
                    height={32}
                    className="w-7 h-7 xl:w-8 xl:h-8 object-contain"
                    priority
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-20 blur-lg animate-pulse"></div>
              </div>
              <div>
                <span className="text-3xl xl:text-4xl font-bold text-white">Acessa Psi</span>
                <p className="text-blue-300 text-sm xl:text-base font-medium">Cuidado psicológico especializado</p>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Cuide da sua
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 font-bold">
                  saúde mental
                </span>
                com quem entende
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                Profissionais qualificados e experientes prontos para te ajudar em sua jornada de autoconhecimento e bem-estar emocional.
              </p>
            </div>

            {/* CTA Buttons - Fixed Layout */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-3">
              <LiquidGlassButton
                variant="primary"
                size="lg"
                onClick={handleBookAppointment}
                className="flex items-center justify-center space-x-3 px-8 py-4 lg:px-10 lg:py-5 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95 group relative overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl" />
                <Calendar className="w-5 h-5 lg:w-6 lg:h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold text-base lg:text-lg relative z-10">Agendar Consulta</span>
                <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </LiquidGlassButton>

              <LiquidGlassButton
                variant="ghost"
                size="lg"
                onClick={handleCallSpecialist}
                className="flex items-center justify-center space-x-3 px-8 py-4 lg:px-10 lg:py-5 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 active:scale-95 group relative overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <Phone className="w-5 h-5 lg:w-6 lg:h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold text-base lg:text-lg relative z-10">Falar com Especialista</span>
              </LiquidGlassButton>
            </div>
          </div>

          {/* Right Column - Specialist Carousel */}
          <div className={`lg:col-span-5 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative max-w-md mx-auto">
              {/* Main Specialist Card */}
              <LiquidGlassCard
                variant="elevated"
                intensity="medium"
                glowEffect={true}
                shimmerEffect={true}
                className="bg-white/5 border border-white/10 relative overflow-hidden hover:bg-white/10 transition-all duration-500 group cursor-pointer"
                cornerRadius={16}
                padding="0"
              >
                {/* Specialist Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={currentSpec.image}
                      alt={currentSpec.name}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-cyan-400/40 to-blue-400/40 rounded-full blur-sm animate-float opacity-60" />
                  <div className="absolute bottom-3 left-3 w-2 h-2 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full blur-sm animate-float opacity-50" style={{ animationDelay: '1s' }} />

                  {/* Navigation arrows */}
                  {specialists.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); prevSpecialist(); }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                      >
                        <ChevronLeft className="w-3 h-3" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextSpecialist(); }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
                      >
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </>
                  )}
                </div>

                {/* Specialist Info */}
                <div className="p-3 space-y-2">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-200 transition-colors duration-300">
                      {currentSpec.name}
                    </h3>
                    <p className="text-blue-300 font-medium text-sm">
                      {currentSpec.specialty}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{currentSpec.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GraduationCap className="w-3 h-3" />
                      <span>{currentSpec.experience}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                    {currentSpec.description.length > 80
                      ? `${currentSpec.description.substring(0, 80)}...`
                      : currentSpec.description
                    }
                  </p>

                  {/* Approaches */}
                  <div className="flex gap-1">
                    {currentSpec.approaches.slice(0, 3).map((approach, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full border border-blue-500/30"
                      >
                        {approach.split(' ')[0]}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <LiquidGlassButton
                    variant="gradient"
                    size="sm"
                    onClick={() => router.push('/alexbassan')}
                    className="w-full flex items-center justify-center space-x-2 mt-2 text-sm"
                  >
                    <span>Conhecer Especialista</span>
                    <ArrowRight className="w-3 h-3" />
                  </LiquidGlassButton>
                </div>
              </LiquidGlassCard>

              {/* Carousel Indicators */}
              {specialists.length > 1 && (
                <div className="flex justify-center space-x-2 mt-3">
                  {specialists.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSpecialist(index)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        index === currentSpecialist
                          ? 'bg-gradient-to-r from-blue-400 to-purple-400 w-5'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
