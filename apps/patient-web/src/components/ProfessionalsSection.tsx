"use client";

import React, { useState, useEffect, useRef } from 'react';
import LiquidGlassCard from './LiquidGlassCard';
import LiquidGlassButton from './LiquidGlassButton';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  Heart, 
  Users, 
  Star,
  ArrowRight,
  MessageCircle,
  Clock,
  CheckCircle2
} from 'lucide-react';

const ProfessionalsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProfessional, setSelectedProfessional] = useState(0);
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

  const professionals = [
    {
      id: 1,
      name: "Dra. Maria Silva",
      specialty: "Psicóloga Clínica",
      experience: "15 anos de experiência",
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 127,
      description: "Especialista em terapia cognitivo-comportamental com foco em ansiedade e depressão.",
      credentials: ["CRP 06/123456", "Mestre em Psicologia Clínica", "Especialista em TCC"],
      availability: "Segunda a Sexta, 8h às 18h",
      languages: ["Português", "Inglês"]
    },
    {
      id: 2,
      name: "Dr. João Santos",
      specialty: "Psicólogo Familiar",
      experience: "12 anos de experiência",
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 98,
      description: "Focado em terapia de casal e familiar, com abordagem sistêmica e humanística.",
      credentials: ["CRP 06/789012", "Doutor em Psicologia", "Especialista em Terapia Familiar"],
      availability: "Terça a Sábado, 9h às 19h",
      languages: ["Português", "Espanhol"]
    },
    {
      id: 3,
      name: "Dra. Ana Costa",
      specialty: "Psicóloga Infantil",
      experience: "10 anos de experiência",
      image: "/api/placeholder/300/300",
      rating: 5.0,
      reviews: 156,
      description: "Especializada em desenvolvimento infantil e adolescente, com técnicas lúdicas.",
      credentials: ["CRP 06/345678", "Especialista em Psicologia Infantil", "Formação em Ludoterapia"],
      availability: "Segunda a Quinta, 14h às 20h",
      languages: ["Português"]
    }
  ];

  const stats = [
    { number: "15+", label: "Profissionais", icon: Users },
    { number: "1000+", label: "Pacientes Atendidos", icon: Heart },
    { number: "98%", label: "Satisfação", icon: Star },
    { number: "24/7", label: "Suporte", icon: Clock }
  ];

  return (
    <section 
      id="professionals" 
      ref={sectionRef} 
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-indigo-900"
    >
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl top-32 left-20 animate-float-slow" />
        <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl bottom-20 right-32 animate-float-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl top-1/2 right-1/4 animate-float-slow" style={{ animationDelay: '4s' }} />
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
              Nossa Equipe
            </span>
          </LiquidGlassCard>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Profissionais dedicados ao
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              seu bem-estar
            </span>
          </h2>
          
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Nossa equipe multidisciplinar combina experiência clínica, formação acadêmica de 
            excelência e dedicação ao cuidado humanizado para oferecer o melhor tratamento.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <LiquidGlassCard
              key={index}
              variant="light"
              intensity="medium"
              interactive
              className={`p-6 text-center hover:scale-105 transition-all duration-700 bg-white/5 border border-white/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              cornerRadius={20}
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                {React.createElement(stat.icon, { className: "w-6 h-6 text-white" })}
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-neutral-400 text-sm">
                {stat.label}
              </div>
            </LiquidGlassCard>
          ))}
        </div>

        {/* Professional Selection */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Professional Cards */}
          <div className="lg:col-span-1 space-y-4">
            {professionals.map((professional, index) => (
              <LiquidGlassCard
                key={professional.id}
                variant={selectedProfessional === index ? "gradient" : "light"}
                intensity={selectedProfessional === index ? "strong" : "medium"}
                interactive
                onClick={() => setSelectedProfessional(index)}
                className={`p-6 cursor-pointer transition-all duration-500 ${
                  selectedProfessional === index 
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 scale-105' 
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                cornerRadius={20}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {professional.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {professional.name}
                    </h3>
                    <p className="text-blue-400 text-sm mb-2">
                      {professional.specialty}
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-neutral-300 text-sm font-medium">
                          {professional.rating}
                        </span>
                      </div>
                      <span className="text-neutral-500 text-sm">
                        ({professional.reviews} avaliações)
                      </span>
                    </div>
                  </div>
                </div>
              </LiquidGlassCard>
            ))}
          </div>

          {/* Selected Professional Details */}
          <div className="lg:col-span-2">
            <LiquidGlassCard
              variant="gradient"
              intensity="strong"
              className={`p-8 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              cornerRadius={32}
            >
              <div className="space-y-6">
                
                {/* Professional Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {professionals[selectedProfessional].name}
                    </h3>
                    <p className="text-blue-400 text-lg mb-4">
                      {professionals[selectedProfessional].specialty}
                    </p>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold">
                          {professionals[selectedProfessional].rating}
                        </span>
                        <span className="text-neutral-400">
                          ({professionals[selectedProfessional].reviews} avaliações)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                    {professionals[selectedProfessional].name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>

                {/* Description */}
                <p className="text-neutral-300 text-lg leading-relaxed">
                  {professionals[selectedProfessional].description}
                </p>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  
                  {/* Credentials */}
                  <div className="space-y-4">
                    <h4 className="text-white font-semibold flex items-center space-x-2">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <span>Credenciais</span>
                    </h4>
                    <div className="space-y-2">
                      {professionals[selectedProfessional].credentials.map((credential, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-neutral-300 text-sm">{credential}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="space-y-4">
                    <h4 className="text-white font-semibold flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <span>Disponibilidade</span>
                    </h4>
                    <p className="text-neutral-300 text-sm">
                      {professionals[selectedProfessional].availability}
                    </p>
                    <div className="space-y-2">
                      <p className="text-neutral-400 text-sm">
                        <span className="font-medium">Idiomas:</span> {professionals[selectedProfessional].languages.join(', ')}
                      </p>
                      <p className="text-neutral-400 text-sm">
                        <span className="font-medium">Experiência:</span> {professionals[selectedProfessional].experience}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <LiquidGlassButton 
                    variant="primary" 
                    size="lg"
                    className="flex items-center justify-center space-x-2 flex-1"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Agendar Consulta</span>
                    <ArrowRight className="w-5 h-5" />
                  </LiquidGlassButton>
                  
                  <LiquidGlassButton 
                    variant="ghost" 
                    size="lg"
                    className="flex items-center justify-center space-x-2 bg-white/10 border border-white/20 text-white hover:bg-white/20"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Enviar Mensagem</span>
                  </LiquidGlassButton>
                </div>
              </div>
            </LiquidGlassCard>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <LiquidGlassCard 
            variant="gradient" 
            intensity="strong"
            className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30"
            cornerRadius={32}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Encontre o profissional ideal para você
            </h3>
            <p className="text-neutral-300 mb-6">
              Nossa equipe está pronta para oferecer o suporte personalizado que você precisa 
              em sua jornada de crescimento e bem-estar.
            </p>
            <LiquidGlassButton 
              variant="primary" 
              size="lg"
              className="flex items-center gap-2 group mx-auto"
            >
              <Users className="w-5 h-5" />
              Ver Todos os Profissionais
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </LiquidGlassButton>
          </LiquidGlassCard>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsSection; 