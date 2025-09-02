"use client";

import React, { useState, useEffect } from 'react';
import LiquidGlassButton from './LiquidGlassButton';
import { 
  Menu, 
  X, 
  Heart, 
  Calendar,
  Phone,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Início" },
    { href: "#about", label: "Sobre" },
    { href: "#benefits", label: "Benefícios" },
    { href: "#how-it-works", label: "Como Funciona" },
    { href: "#professionals", label: "Equipe" },
    { href: "#contact", label: "Contato" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-nav-scrolled border-b border-white/10 shadow-2xl shadow-slate-900/20' 
          : 'backdrop-blur-sm bg-nav'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Professional Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                <Image 
                  src="/images/logo_psi.png"
                  alt="Acessa Psi Logo"
                  width={32}
                  height={32}
                  className="w-6 h-6 object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-slate-800">
                Acessa Psi
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-700 hover:text-blue-600 transition-all duration-300 font-medium relative group px-3 py-2 rounded-lg hover:bg-blue-50"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => {
                  const phoneNumber = '5519988200585';
                  const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços psicológicos.');
                  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                }}
                className="text-slate-700 hover:text-blue-600 transition-all duration-300 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-blue-50 group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-medium">(19) 98820-0585</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('#contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Agendar Consulta
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-xl bg-slate-100 backdrop-blur-sm border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[9998] md:hidden transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-slate-100/90 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl p-6 shadow-2xl transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'translate-y-0 scale-100' 
            : '-translate-y-4 scale-95'
        }`}>
          
          {/* Navigation Items */}
          <div className="space-y-3 mb-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="w-full text-left py-4 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 transition-all duration-300 flex items-center justify-between group"
              >
                <span className="font-medium text-lg">{item.label}</span>
                <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="space-y-3 pt-4 border-t border-slate-200">
            <button 
              onClick={() => {
                const phoneNumber = '5519988200585';
                const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços psicológicos.');
                window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-4 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-medium">(19) 98820-0585</span>
            </button>
            
            <LiquidGlassButton 
              variant="primary" 
              size="md"
              onClick={() => scrollToSection('#contact')}
              className="w-full flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Agendar Consulta</span>
            </LiquidGlassButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation; 