"use client";

import React from 'react';
import { 
  Phone,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SimpleProfessionalsSection = () => {
  const router = useRouter();
  
  const professionals = [
    {
      id: "alexbassan",
      name: "Alex Gustavo Bassan",
      title: "Psicólogo Clínico",
      crp: "CRP 06/115097",
      experience: "11 anos de experiência",
      image: "/images/AlexBassan.jpeg",
      specialties: [
        "Terapia Individual",
        "Psicologia Sistêmica", 
        "Análise do Comportamento",
        "Desenvolvimento Socioemocional"
      ],
      description: "Especialista em Psicologia Sistêmica e Análise do Comportamento Aplicada, com foco no desenvolvimento socioemocional.",
      location: "Campinas/SP",
      whatsapp: "5519988200585"
    }
  ];

  const handleViewProfile = (professionalId: string) => {
    router.push(`/${professionalId}`);
  };

  const handleContact = (whatsapp: string) => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os atendimentos psicológicos.');
    window.open(`https://wa.me/${whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="professionals" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4">
            Nossos Profissionais
          </h2>
          <p className="text-lg text-slate-600 font-light">
            Conheça quem irá acompanhar você nesta jornada de autoconhecimento
          </p>
        </div>

        {/* Professionals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((professional) => (
            <div key={professional.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
              
              {/* Photo */}
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-slate-100">
                  <Image
                    src={professional.image}
                    alt={professional.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="text-center space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-1">
                    {professional.name}
                  </h3>
                  <p className="text-therapy-600 font-medium text-sm">
                    {professional.title}
                  </p>
                  <p className="text-slate-500 text-sm">
                    {professional.crp}
                  </p>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {professional.description}
                </p>

                {/* Specialties */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-slate-800">Especialidades</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {professional.specialties.slice(0, 2).map((specialty, index) => (
                      <span key={index} className="bg-therapy-50 text-therapy-700 px-2 py-1 rounded text-xs">
                        {specialty}
                      </span>
                    ))}
                    {professional.specialties.length > 2 && (
                      <span className="text-therapy-600 text-xs">+{professional.specialties.length - 2} mais</span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleViewProfile(professional.id)}
                    className="w-full bg-therapy-600 hover:bg-therapy-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Ver Perfil</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={() => handleContact(professional.whatsapp)}
                    className="w-full bg-white border border-therapy-600 text-therapy-600 hover:bg-therapy-50 font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Contato</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center mt-12">
          <p className="text-slate-600 text-sm">
            Todos os nossos profissionais são registrados no Conselho Regional de Psicologia
          </p>
        </div>

      </div>
    </section>
  );
};

export default SimpleProfessionalsSection;
