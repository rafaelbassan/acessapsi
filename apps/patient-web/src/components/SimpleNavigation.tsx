"use client";

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone
} from 'lucide-react';
import Image from 'next/image';

const SimpleNavigation = () => {
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
    { href: "#specialties", label: "Especialidades" },
    { href: "#professionals", label: "Profissional" },
    { href: "#contact", label: "Contato" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleContact = () => {
    const phoneNumber = '5519988200585';
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-therapy-50 flex items-center justify-center">
                <Image 
                  src="/images/logo_psi.png"
                  alt="Acessa Psi Logo"
                  width={20}
                  height={20}
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                  priority
                />
              </div>
              <span className="text-lg sm:text-xl font-medium text-slate-800">
                Acessa Psi
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-600 hover:text-therapy-600 transition-colors duration-200 font-light"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={handleContact}
                className="bg-therapy-600 hover:bg-therapy-700 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2 font-medium btn-mobile-sm"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-sm sm:text-base">Contato</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-therapy-600 hover:bg-therapy-50 transition-colors duration-200"
                aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-white border-t border-slate-200">
            <div className="px-3 sm:px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-3 text-slate-600 hover:text-therapy-600 hover:bg-therapy-50 rounded-lg transition-colors duration-200 font-light text-sm sm:text-base"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleContact}
                className="w-full bg-therapy-600 hover:bg-therapy-700 text-white px-3 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 font-medium mt-2 btn-mobile-sm"
              >
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-sm sm:text-base">Entrar em contato</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-14 sm:h-16"></div>
    </>
  );
};

export default SimpleNavigation;
