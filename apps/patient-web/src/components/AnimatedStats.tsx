"use client";

import React, { useState, useEffect, useRef } from 'react';
import LiquidGlassCard from './LiquidGlassCard';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

interface StatItem {
  id: number;
  icon: React.ComponentType<any>;
  value: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
}

const statsData: StatItem[] = [
  {
    id: 1,
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Pacientes Atendidos',
    description: 'Pessoas que confiaram em nosso cuidado',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 2,
    icon: Award,
    value: 4.9,
    suffix: '',
    label: 'Avaliação Média',
    description: 'Satisfação dos nossos pacientes',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 3,
    icon: Clock,
    value: 11,
    suffix: '+',
    label: 'Anos de Experiência',
    description: 'Dedicação à psicologia clínica',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    icon: TrendingUp,
    value: 95,
    suffix: '%',
    label: 'Taxa de Satisfação',
    description: 'Pacientes recomendariam nossos serviços',
    color: 'from-green-500 to-teal-500'
  }
];

export default function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>(new Array(statsData.length).fill(0));
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

  useEffect(() => {
    if (!isVisible) return;

    const animateValue = (start: number, end: number, duration: number, index: number) => {
      const startTime = Date.now();
      const endTime = startTime + duration;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(start + (end - start) * easeOutQuart);

        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[index] = currentValue;
          return newValues;
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    };

    // Animate each stat with staggered timing
    statsData.forEach((stat, index) => {
      setTimeout(() => {
        animateValue(0, stat.value, 2000, index);
      }, index * 200);
    });
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium text-green-300">Nossos Números</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Resultados que
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              falam por si
            </span>
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Números que refletem nosso compromisso com a excelência no cuidado psicológico
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;
            const isVisible = animatedValues[index] > 0;

            return (
              <LiquidGlassCard
                key={stat.id}
                variant="elevated"
                intensity="medium"
                className={`text-center transform transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
                glowEffect={true}
              >
                <div className="p-6 lg:p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center transform transition-all duration-500 ${
                    isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Value */}
                  <div className="mb-4">
                    <div className={`text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} transition-all duration-500 ${
                      isVisible ? 'scale-100' : 'scale-0'
                    }`}>
                      {animatedValues[index]}{stat.suffix}
                    </div>
                  </div>

                  {/* Label */}
                  <h3 className={`text-xl font-semibold text-white mb-2 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className={`text-slate-300 text-sm transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`} style={{ transitionDelay: '200ms' }}>
                    {stat.description}
                  </p>

                  {/* Progress bar */}
                  <div className="mt-6">
                    <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? '100%' : '0%',
                          transitionDelay: `${index * 200 + 400}ms`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </LiquidGlassCard>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <LiquidGlassCard
            variant="gradient"
            intensity="strong"
            className="inline-block p-8 hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              Pronto para começar sua jornada?
            </h3>
            <p className="text-slate-300 mb-4">
              Junte-se aos centenas de pacientes que transformaram suas vidas conosco
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              Agendar Consulta
            </button>
          </LiquidGlassCard>
        </div>
      </div>
    </section>
  );
}
