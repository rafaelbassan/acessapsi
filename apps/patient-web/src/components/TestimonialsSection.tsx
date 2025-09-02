"use client";

import React, { useState, useEffect } from 'react';
import LiquidGlassCard from './LiquidGlassCard';
import { Star, Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  treatment: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Carolina",
    role: "Professora",
    content: "O acompanhamento psicológico foi fundamental para eu lidar com o estresse do trabalho. Hoje me sinto muito mais equilibrada e consigo separar melhor minha vida profissional da pessoal.",
    rating: 5,
    treatment: "Ansiedade e Estresse",
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 2,
    name: "Roberto Silva",
    role: "Empresário",
    content: "Depois de anos lutando com questões familiares, encontrei no Dr. Alex alguém que realmente entende e sabe guiar o processo terapêutico de forma profissional e humana.",
    rating: 5,
    treatment: "Terapia Familiar",
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 3,
    name: "Marina Costa",
    role: "Designer",
    content: "A terapia online foi uma experiência surpreendentemente positiva. O ambiente virtual não diminuiu em nada a qualidade do atendimento e a confidencialidade foi totalmente preservada.",
    rating: 5,
    treatment: "Depressão",
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 4,
    name: "Carlos Eduardo",
    role: "Engenheiro",
    content: "Recomendo fortemente o trabalho do Dr. Alex. Sua abordagem sistêmica e o uso de jogos para terapia foram inovadores e muito efetivos no meu processo de autoconhecimento.",
    rating: 5,
    treatment: "Desenvolvimento Pessoal",
    avatar: "/api/placeholder/60/60"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/5 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-yellow-300">Depoimentos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            O que nossos
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              pacientes dizem
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Histórias reais de transformação e bem-estar
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative mb-8">
          <LiquidGlassCard
            variant="heavy"
            intensity="medium"
            className="max-w-4xl mx-auto p-8 lg:p-12 relative overflow-hidden"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-20">
              <Quote className="w-12 h-12 text-blue-400" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">

                {/* Avatar and Info */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto lg:mx-0">
                      <User className="w-10 h-10 text-slate-900" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 blur-lg"></div>
                  </div>

                  <h4 className="text-xl font-semibold text-slate-900 mb-1">
                    {currentTestimonial.name}
                  </h4>

                  <p className="text-slate-600 text-sm mb-2">
                    {currentTestimonial.role}
                  </p>

                  <div className="flex items-center justify-center lg:justify-start space-x-1 mb-3">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-medium px-3 py-1 rounded-full">
                    {currentTestimonial.treatment}
                  </span>
                </div>

                {/* Testimonial Text */}
                <div className="flex-1">
                  <blockquote className="text-lg lg:text-xl text-slate-700 leading-relaxed mb-6 relative">
                    <span className="absolute -top-2 -left-2 text-4xl text-blue-600 opacity-30">"</span>
                    {currentTestimonial.content}
                    <span className="absolute -bottom-4 -right-2 text-4xl text-blue-600 opacity-30">"</span>
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-100 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-100 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </LiquidGlassCard>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-blue-400 to-purple-400 w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { number: "500+", label: "Pacientes Atendidos" },
            { number: "4.9", label: "Avaliação Média" },
            { number: "95%", label: "Taxa de Satisfação" },
            { number: "11+", label: "Anos de Experiência" }
          ].map((stat, index) => (
            <LiquidGlassCard
              key={index}
              variant="light"
              intensity="subtle"
              className="text-center p-4 hover:scale-105 transition-all duration-300"
            >
              <div className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-slate-600">
                {stat.label}
              </div>
            </LiquidGlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
