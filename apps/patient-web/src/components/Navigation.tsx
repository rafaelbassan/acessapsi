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
            
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/40 transition-all duration-300 overflow-hidden">
                <Image 
                  src="/images/logo_psi.png"
                  alt="Portal Psi Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Portal Psi
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-300 hover:text-white transition-all duration-300 font-medium relative group px-3 py-2 rounded-lg hover:bg-white/5"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="tel:+5511999998888"
                className="text-slate-300 hover:text-white transition-all duration-300 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-white/10 group"
              >
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-sm font-medium">(11) 9999-8888</span>
              </a>
              
              <LiquidGlassButton 
                variant="primary" 
                size="sm"
                onClick={() => scrollToSection('#contact')}
                className="flex items-center space-x-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
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
      <div className={`fixed inset-0 z-[9998] md:hidden transition-all duration-300 ${
        isMobileMenuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
      }`}>
        
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`absolute top-20 left-4 right-4 bg-nav-scrolled backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transition-all duration-300 ${
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
                className="w-full text-left py-4 px-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-between group"
              >
                <span className="font-medium text-lg">{item.label}</span>
                <ArrowRight className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <a 
              href="tel:+5511999998888"
              className="w-full py-4 px-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-medium">(11) 9999-8888</span>
            </a>
            
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