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
  MessageCircle
} from 'lucide-react';
import Image from 'next/image';
import { clinicData } from '../data/clinic';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

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
    const phoneNumber = '5519987654321';
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da AcessaPsi.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white pt-20 pb-12">
      
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Clinic Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            
            {/* Clinic Header */}
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
                  <h3 className="text-lg font-semibold text-slate-800">{clinicData.name}</h3>
                  <p className="text-therapy-600 text-sm">{clinicData.description}</p>
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                {clinicData.tagline.split(' ')[0]}
                <span className="block text-therapy-600">
                  {clinicData.tagline.split(' ')[1]}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                {clinicData.subtitle}
              </p>
            </div>

            {/* Professional Highlights */}
            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5 text-therapy-600" />
                  <span className="text-sm font-medium text-slate-600">11+ Anos</span>
                </div>
                <p className="text-xs text-slate-500">de experiência clínica</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-trust-600" />
                  <span className="text-sm font-medium text-slate-600">Sigilo</span>
                </div>
                <p className="text-xs text-slate-500">profissional garantido</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-wisdom-600" />
                  <span className="text-sm font-medium text-slate-600">Horários</span>
                </div>
                <p className="text-xs text-slate-500">flexíveis disponíveis</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-therapy-600" />
                  <span className="text-sm font-medium text-slate-600">São Paulo</span>
                </div>
                <p className="text-xs text-slate-500">presencial e online</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleCallSpecialist}
                className="bg-therapy-600 hover:bg-therapy-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl group"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Conversar no WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={handleBookAppointment}
                className="border-2 border-therapy-600 text-therapy-600 hover:bg-therapy-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Consulta</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="border-t border-slate-200 pt-6">
              <p className="text-sm text-slate-500 mb-2">Atendimento</p>
              <p className="text-slate-700 font-medium">Segunda a Sexta: 8h às 18h</p>
              <p className="text-slate-700">Modalidades: Presencial e Online</p>
            </div>
          </div>

          {/* Right Column - Clinic Services Card */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
              
              {/* Clinic Logo */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <Image
                    src="/images/logo_psi.png"
                    alt="AcessaPsi - Plataforma de Psicoterapia"
                    width={120}
                    height={120}
                    className="w-28 h-28 object-contain mx-auto"
                    priority
                  />
                </div>
              </div>

              {/* Clinic Info */}
              <div className="text-center space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">{clinicData.name}</h3>
                  <p className="text-therapy-600 font-medium">{clinicData.description}</p>
                </div>

                <div className="space-y-2">
                  <p className="text-slate-600 text-sm">Especialidades:</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="bg-therapy-50 text-therapy-700 px-3 py-1 rounded-full text-xs font-medium">
                      Terapia Familiar
                    </span>
                    <span className="bg-trust-50 text-trust-700 px-3 py-1 rounded-full text-xs font-medium">
                      Psicologia Clínica
                    </span>
                    <span className="bg-wisdom-50 text-wisdom-700 px-3 py-1 rounded-full text-xs font-medium">
                      Atendimento Infantil
                    </span>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    "{clinicData.mission}"
                  </p>
                </div>
              </div>
            </div>

            {/* Floating elements - more subtle */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-therapy-100 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-trust-100 rounded-full opacity-20 -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
