/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Psychology Clinic Specialized Colors - Optimized for WCAG AA compliance
        'therapy': {
          50: '#f0fdf4',   // Very light green
          100: '#dcfce7',  // Light green
          200: '#bbf7d0',  // Lighter green
          300: '#86efac',  // Light-medium green
          400: '#4ade80',  // Medium green
          500: '#10b981',  // Psychology green light
          600: '#065f46',  // Psychology green (primary) - Much darker for optimal contrast
          700: '#064e3b',  // Psychology green dark
          800: '#022c22',  // Darker green
          900: '#001a14',  // Very dark green
          950: '#000d0a',  // Almost black green
        },
        'trust': {
          50: '#f0f9ff',   // Very light blue
          100: '#e0f2fe',  // Light blue
          200: '#bae6fd',  // Lighter blue
          300: '#7dd3fc',  // Light-medium blue
          400: '#38bdf8',  // Medium blue
          500: '#0ea5e9',  // Psychology blue light
          600: '#075985',  // Psychology blue (primary) - Much darker for optimal contrast
          700: '#0c4a6e',  // Psychology blue dark
          800: '#082f49',  // Darker blue
          900: '#051a2e',  // Very dark blue
          950: '#041018',  // Almost black blue
        },
        'wisdom': {
          50: '#faf5ff',   // Very light purple
          100: '#f3e8ff',  // Light purple
          200: '#e9d5ff',  // Lighter purple
          300: '#d8b4fe',  // Light-medium purple
          400: '#c084fc',  // Medium purple
          500: '#a855f7',  // Purple medium
          600: '#6b21b6',  // Psychology purple (primary) - Much darker for optimal contrast
          700: '#581c87',  // Psychology purple dark
          800: '#3b0764',  // Very dark purple
          900: '#2a0845',  // Almost black purple
          950: '#1a0530',  // Deepest purple
        },
        // Elegant professional color palette (mantido para compatibilidade)
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9', 
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        secondary: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Enhanced green colors for better contrast
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#047857', // Much darker green for better contrast
          700: '#065f46',
          800: '#064e3b',
          900: '#022c22',
          950: '#001a14',
        }
      },
      fontFamily: {
        sans: ['SF Pro Display', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        // Tamanhos otimizados para mobile
        'mobile-xs': ['0.7rem', { lineHeight: '1rem' }],
        'mobile-sm': ['0.8rem', { lineHeight: '1.2rem' }],
        'mobile-base': ['0.9rem', { lineHeight: '1.4rem' }],
        'mobile-lg': ['1rem', { lineHeight: '1.5rem' }],
        'mobile-xl': ['1.125rem', { lineHeight: '1.6rem' }],
        'mobile-2xl': ['1.25rem', { lineHeight: '1.75rem' }],
        'mobile-3xl': ['1.5rem', { lineHeight: '2rem' }],
        'mobile-4xl': ['1.875rem', { lineHeight: '2.25rem' }],
        'mobile-5xl': ['2.25rem', { lineHeight: '2.5rem' }],
        'mobile-6xl': ['3rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'elegant': '0 4px 16px 0 rgba(0, 0, 0, 0.08)',
        'elegant-lg': '0 8px 32px 0 rgba(0, 0, 0, 0.12)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px', 
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      borderRadius: {
        'xs': '0.125rem',
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in-down': 'fadeInDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
} 