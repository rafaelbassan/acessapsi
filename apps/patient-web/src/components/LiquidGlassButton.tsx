"use client";

import React from 'react';

interface LiquidGlassButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient' | 'elevated' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  glowEffect?: boolean;
  shimmerEffect?: boolean;
}

const LiquidGlassButton: React.FC<LiquidGlassButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  className = '',
  type = 'button',
  glowEffect = false,
  shimmerEffect = false,
}) => {

  // Configurações por tamanho
  const getSizeStyles = () => {
    const sizes = {
      sm: {
        padding: '0.75rem 1.5rem',
        borderRadius: '12px',
        fontSize: '0.875rem',
        fontWeight: '500',
      },
      md: {
        padding: '1rem 2rem',
        borderRadius: '16px',
        fontSize: '1rem',
        fontWeight: '600',
      },
      lg: {
        padding: '1.25rem 2.5rem',
        borderRadius: '20px',
        fontSize: '1.125rem',
        fontWeight: '600',
      }
    };

    return sizes[size];
  };

  const sizeStyles = getSizeStyles();

  const buttonStyle: React.CSSProperties = {
    ...sizeStyles,
    position: 'relative',
    overflow: 'hidden',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    outline: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontFamily: 'inherit',
    textDecoration: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    // Dynamic background based on variant
    background: variant === 'primary' ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(99, 102, 241, 0.8) 100%)' :
                variant === 'secondary' ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.8) 0%, rgba(147, 51, 234, 0.8) 100%)' :
                variant === 'gradient' ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)' :
                variant === 'elevated' ? 'rgba(255, 255, 255, 0.15)' :
                variant === 'minimal' ? 'transparent' :
                'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: '#ffffff',
    // Dynamic box shadow based on variant
    boxShadow: variant === 'elevated' ? '0 12px 48px rgba(0, 0, 0, 0.25), 0 0 24px rgba(59, 130, 246, 0.1)' :
               variant === 'gradient' ? '0 8px 32px rgba(59, 130, 246, 0.2)' :
               variant === 'primary' ? '0 4px 16px rgba(59, 130, 246, 0.3)' :
               variant === 'secondary' ? '0 4px 16px rgba(168, 85, 247, 0.3)' :
               '0 2px 8px rgba(0, 0, 0, 0.1)',
  };

  const combinedClassName = `
    glass-button
    glass-button-${variant}
    glass-button-${size}
    ${disabled ? 'glass-button-disabled' : 'glass-button-interactive'}
    ${glowEffect ? 'glow' : ''}
    ${shimmerEffect ? 'shimmer' : ''}
    ${loading ? 'glass-button-loading' : ''}
    ${className}
  `.trim();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      // Efeito de ripple aprimorado
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ripple = document.createElement('span');
      ripple.className = 'glass-ripple';
      ripple.style.left = `${x - 10}px`;
      ripple.style.top = `${y - 10}px`;
      ripple.style.width = '20px';
      ripple.style.height = '20px';
      
      button.appendChild(ripple);
      
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.remove();
        }
      }, 600);
      
      onClick();
    }
  };

  return (
    <button
      type={type}
      className={combinedClassName}
      style={buttonStyle}
      onClick={handleClick}
      disabled={disabled || loading}
    >
      {/* Liquid Glass shimmer effect */}
      {shimmerEffect && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
      )}

      {/* Glow effect */}
      {glowEffect && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[inherit] blur-lg opacity-0 hover:opacity-100 transition-opacity duration-500" />
      )}

      {/* Content with proper z-index */}
      <span className="glass-button-content relative z-10">
        {loading ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Carregando...</span>
          </div>
        ) : (
          children
        )}
      </span>

      {/* Hover effect overlay */}
      {!disabled && !loading && (
        <div className="glass-button-hover absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-[inherit]" />
      )}
    </button>
  );
};

export default LiquidGlassButton; 