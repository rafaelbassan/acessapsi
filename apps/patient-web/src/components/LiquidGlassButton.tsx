"use client";

import React from 'react';

interface LiquidGlassButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const LiquidGlassButton: React.FC<LiquidGlassButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  className = '',
  type = 'button',
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
    color: variant === 'primary' ? '#ffffff' : 
           variant === 'secondary' ? '#f8fafc' : 
           '#ffffff',
  };

  const combinedClassName = `
    glass-button
    glass-button-${variant}
    glass-button-${size}
    ${disabled ? 'glass-button-disabled' : 'glass-button-interactive'}
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
      disabled={disabled}
    >
      {/* Liquid Glass shimmer effect */}
      <div className="glass-button-shimmer" />
      
      {/* Content with proper z-index */}
      <span className="glass-button-content">
        {children}
      </span>
      
      {/* Hover effect overlay */}
      {!disabled && (
        <div className="glass-button-hover" />
      )}
    </button>
  );
};

export default LiquidGlassButton; 