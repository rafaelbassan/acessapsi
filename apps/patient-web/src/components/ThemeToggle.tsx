"use client";

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import LiquidGlassButton from './LiquidGlassButton';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light' | 'system'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | 'system' || 'dark';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: 'dark' | 'light' | 'system') => {
    const root = document.documentElement;

    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.setAttribute('data-theme', systemTheme);
    } else {
      root.setAttribute('data-theme', newTheme);
    }

    localStorage.setItem('theme', newTheme);
  };

  const toggleTheme = () => {
    const themes: ('dark' | 'light' | 'system')[] = ['dark', 'light', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4" />;
      case 'system':
        return <Monitor className="w-4 h-4" />;
      default:
        return <Moon className="w-4 h-4" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Modo Claro';
      case 'system':
        return 'Sistema';
      default:
        return 'Modo Escuro';
    }
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <LiquidGlassButton
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-[9999] p-3 rounded-full hover:scale-110 transition-all duration-300 group"
    >
      <div className="relative" title={getLabel()}>
        {getIcon()}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>
    </LiquidGlassButton>
  );
}
