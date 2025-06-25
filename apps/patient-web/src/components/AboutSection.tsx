"use client";

import React, { useState, useEffect, useRef } from 'react';
import LiquidGlassCard from './LiquidGlassCard';
import LiquidGlassButton from './LiquidGlassButton';
import { 
  Heart, 
  Users, 
  Shield, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Target,
  Zap,
  UserCheck,
  Star
} from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Cuidado Humano",
      description: "Tratamento personalizado com foco no bem-estar integral de cada paciente.",
      gradient: "from-rose-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Sigilo Profissional",
      description: "Ambiente seguro e confidencial onde você pode se expressar livremente.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Target,
      title: "Resultados Efetivos",
      description: "Metodologias comprovadas para alcançar mudanças duradouras.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: UserCheck,
      title: "Profissionais Qualificados",
      description: "Equipe especializada com formação em renomadas instituições.",
      gradient: "from-purple-500 to-violet-600"
    }
  ];

  const achievements = [
    {
      number: "1000+",
      title: "Vidas Transformadas",
      description: "Pessoas que encontraram equilíbrio emocional",
      icon: Users
    },
    {
      number: "98%",
      title: "Taxa de Satisfação",
      description: "Pacientes que recomendam nossos serviços",
      icon: Star
    },
    {
      number: "15+",
      title: "Anos de Experiência",
      description: "Dedicação ao cuidado da saúde mental",
      icon: Award
    },
    {
      number: "24/7",
      title: "Suporte Disponível",
      description: "Atendimento quando você precisar",
      icon: Clock
    }
  ];

  const specialties = [
    "Ansiedade e Transtornos do Humor",
    "Terapia de Casal e Relacionamentos",
    "Psicologia Infantil e Adolescente",
    "Desenvolvimento Pessoal",
    "Tratamento de Traumas",
    "Transtornos Alimentares"
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-purple-900">
      
      {/* Background with floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl top-20 right-20 animate-float-slow" />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl bottom-32 left-32 animate-float-slow" style={{ animationDelay: '3s' }} />
        <div className="absolute w-64 h-64 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl top-1/2 right-1/3 animate-float-slow" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <LiquidGlassCard 
            variant="light" 
            intensity="medium"
            className="inline-block px-8 py-4 mb-6 bg-white/5 border border-white/10"
            cornerRadius={20}
          >
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
              Sobre Nós
            </span>
          </LiquidGlassCard>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transformamos vidas através do
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              cuidado psicológico especializado
            </span>
          </h2>
          
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Nossa missão é oferecer tratamento psicológico de excelência, 
            combinando expertise profissional com acolhimento humano em um ambiente seguro e moderno.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <LiquidGlassCard
              key={index}
              variant="light"
              intensity="medium"
              interactive
              className={`p-6 text-center hover:scale-105 transition-all duration-700 delay-${index * 100} bg-white/5 border border-white/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              cornerRadius={24}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${value.gradient} flex items-center justify-center`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                {value.description}
              </p>
            </LiquidGlassCard>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left Column - Story */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <LiquidGlassCard 
              variant="gradient" 
              intensity="strong"
              className="p-8 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-400/30"
              cornerRadius={32}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
                    Nossa História
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white">
                  Pioneiros em Saúde Mental Digital
                </h3>
                
                <p className="text-neutral-300 leading-relaxed">
                  Fundada em 2019, a PsiClin nasceu da visão de democratizar o acesso à 
                  saúde mental de qualidade. Combinamos a tradição da psicologia clínica 
                  com inovação tecnológica para criar experiências terapêuticas transformadoras.
                </p>
                
                <div className="space-y-3">
                  {[
                    "Atendimento presencial e online",
                    "Equipe multidisciplinar especializada", 
                    "Metodologias baseadas em evidências",
                    "Acompanhamento personalizado"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-neutral-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </LiquidGlassCard>
          </div>

          {/* Right Column - Stats */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {achievements.map((achievement, index) => (
              <LiquidGlassCard
                key={index}
                variant="light"
                intensity="medium"
                interactive
                className="p-6 hover:scale-102 transition-all duration-300 bg-white/5 border border-white/10"
                cornerRadius={20}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-white mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-lg font-semibold text-blue-400 mb-1">
                      {achievement.title}
                    </div>
                    <div className="text-neutral-400 text-sm">
                      {achievement.description}
                    </div>
                  </div>
                </div>
              </LiquidGlassCard>
            ))}
          </div>
        </div>

        {/* Specialties Section */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <LiquidGlassCard 
            variant="gradient" 
            intensity="strong"
            className="p-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30"
            cornerRadius={32}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Áreas de Especialização
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                  <span className="text-neutral-300 font-medium">{specialty}</span>
                </div>
              ))}
            </div>
          </LiquidGlassCard>
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <LiquidGlassCard 
            variant="gradient" 
            intensity="strong"
            className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30"
            cornerRadius={32}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para começar sua jornada?
            </h3>
            <p className="text-neutral-300 mb-6">
              Nossa equipe está preparada para acompanhá-lo em cada passo 
              rumo ao seu bem-estar emocional e crescimento pessoal.
            </p>
            <LiquidGlassButton 
              variant="primary" 
              size="lg"
              className="flex items-center gap-2 group mx-auto"
            >
              <Heart className="w-5 h-5" />
              Agendar Primeira Consulta
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </LiquidGlassButton>
          </LiquidGlassCard>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 