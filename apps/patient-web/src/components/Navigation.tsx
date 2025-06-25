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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-neutral-900/80 border-b border-white/10' 
          : 'backdrop-blur-sm bg-neutral-900/60'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                PsiClin
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-neutral-300 hover:text-white transition-all duration-300 font-medium relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => scrollToSection('#contact')}
                className="text-neutral-300 hover:text-white transition-colors duration-300 flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">(11) 9999-8888</span>
              </button>
              
              <LiquidGlassButton 
                variant="primary" 
                size="sm"
                onClick={() => scrollToSection('#contact')}
                className="flex items-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar</span>
              </LiquidGlassButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
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
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`absolute top-16 left-4 right-4 bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'translate-y-0 scale-100' 
            : '-translate-y-4 scale-95'
        }`}>
          
          {/* Navigation Items */}
          <div className="space-y-4 mb-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="w-full text-left py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-between group"
              >
                <span className="font-medium">{item.label}</span>
                <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <button 
              onClick={() => {
                scrollToSection('#contact');
                window.open('tel:+5511999998888');
              }}
              className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>(11) 9999-8888</span>
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