"use client";

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  Calendar,
  Phone,
  ChevronLeft,
  ChevronRight,
  MapPin,
  GraduationCap,
  Shield,
  Award,
  Clock
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
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 bg-gradient-to-br from-slate-50 via-white to-therapy-50 pt-16 pb-6">
      {/* Therapeutic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-64 h-64 bg-therapy-100 rounded-full blur-3xl top-20 left-20 opacity-40" />
        <div className="absolute w-48 h-48 bg-trust-100 rounded-full blur-3xl bottom-32 right-32 opacity-30" />
        <div className="absolute w-32 h-32 bg-wisdom-100 rounded-full blur-3xl top-1/2 right-1/4 opacity-20" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[75vh]">
          {/* Left Column - Main Content */}
          <div className={`lg:col-span-7 space-y-6 lg:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Professional Brand Badge */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="p-3 rounded-xl bg-therapy-50 border border-therapy-100">
                  <Image
                    src="/images/logo_psi.png"
                    alt="Acessa Psi Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                    priority
                  />
                </div>
              </div>
              <div>
                <span className="text-3xl font-bold text-slate-800">Acessa Psi</span>
                <p className="text-therapy-600 text-sm font-medium">Psicologia Clínica Especializada</p>
              </div>
            </div>

            {/* Professional Main Headline */}
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Cuidando da sua mente,
                <span className="block text-therapy-600">
                  transformando sua vida
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                Psicoterapia humanizada com profissionais especializados. Acompanhamos você na 
                jornada de autoconhecimento e bem-estar emocional em um ambiente seguro e acolhedor.
              </p>
            </div>

            {/* Professional CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-4">
              <button
                onClick={handleBookAppointment}
                className="bg-therapy-600 hover:bg-therapy-700 text-white font-semibold px-8 py-4 lg:px-10 lg:py-5 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl group"
              >
                <Calendar className="w-5 h-5 lg:w-6 lg:h-6" />
                <span>Agende sua Consulta</span>
                <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={handleCallSpecialist}
                className="border-2 border-therapy-600 text-therapy-600 hover:bg-therapy-50 font-semibold px-8 py-4 lg:px-10 lg:py-5 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
                <span>Conversar no WhatsApp</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-therapy-600" />
                <span>Sigilo profissional garantido</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-trust-600" />
                <span>Profissionais CRP qualificados</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-wisdom-600" />
                <span>Horários flexíveis</span>
              </div>
            </div>
          </div>

          {/* Right Column - Professional Specialist Card */}
          <div className={`lg:col-span-5 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative max-w-md mx-auto">
              {/* Professional Specialist Card */}
              <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                {/* Specialist Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                  <Image
                    src={currentSpec.image}
                    alt={currentSpec.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Specialist Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">
                      {currentSpec.name}
                    </h3>
                    <p className="text-blue-600 font-medium text-sm mb-2">
                      {currentSpec.specialty}
                    </p>
                    <p className="text-slate-600 text-sm">
                      {currentSpec.experience}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{currentSpec.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GraduationCap className="w-3 h-3" />
                      <span>{currentSpec.education}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {currentSpec.description}
                  </p>

                  {/* Approaches */}
                  <div className="flex flex-wrap gap-2">
                    {currentSpec.approaches.slice(0, 2).map((approach, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100"
                      >
                        {approach}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => router.push('/alexbassan')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                  >
                    <span>Conhecer Especialista</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

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
