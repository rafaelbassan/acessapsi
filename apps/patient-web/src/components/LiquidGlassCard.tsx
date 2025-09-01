"use client";

import React, { forwardRef } from 'react';

interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'heavy' | 'gradient' | 'colored' | 'elevated' | 'minimal';
  intensity?: 'subtle' | 'medium' | 'strong';
  interactive?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  padding?: string;
  cornerRadius?: number;
  glowEffect?: boolean;
  shimmerEffect?: boolean;
}

const LiquidGlassCard = forwardRef<HTMLDivElement, LiquidGlassCardProps>(function LiquidGlassCard({
  children,
  className = '',
  variant = 'light',
  intensity = 'medium',
  interactive = false,
  onClick,
  style,
  padding = '1.5rem',
  cornerRadius = 24,
  glowEffect = false,
  shimmerEffect = false,
  ...props
}, ref) {

  // Configurações baseadas na variante e intensidade
  const getGlassStyles = () => {
    const baseStyles = {
      borderRadius: `${cornerRadius}px`,
      padding: padding,
      position: 'relative' as const,
      overflow: 'hidden' as const,
      border: '1px solid rgba(255, 255, 255, 0.2)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      minHeight: 'auto',
      minWidth: 'auto',
    };

    const variants = {
      light: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
      heavy: {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(40px)',
        boxShadow: '0 12px 48px rgba(0, 0, 0, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
      },
      gradient: {
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)',
        backdropFilter: 'blur(30px)',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.12)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
      },
      colored: {
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
        backdropFilter: 'blur(25px)',
        boxShadow: '0 10px 40px rgba(59, 130, 246, 0.2)',
        border: '1px solid rgba(147, 51, 234, 0.2)',
      },
      elevated: {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(35px)',
        boxShadow: '0 20px 80px rgba(0, 0, 0, 0.2), 0 0 40px rgba(59, 130, 246, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        transform: 'translateY(-4px)',
      },
      minimal: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }
    };

    const intensityMultipliers = {
      subtle: 0.7,
      medium: 1,
      strong: 1.3
    };

    const multiplier = intensityMultipliers[intensity];
    const variantStyle = variants[variant as keyof typeof variants];

    // Aplicar multiplicador de intensidade
    if (variantStyle.boxShadow) {
      const shadowMatch = variantStyle.boxShadow.match(/rgba\(([^)]+)\)/);
      if (shadowMatch) {
        const rgbaValues = shadowMatch[1].split(',').map((s: string) => parseFloat(s.trim()));
        if (rgbaValues.length >= 4) {
          const [r, g, b, a] = rgbaValues;
          variantStyle.boxShadow = variantStyle.boxShadow.replace(
            /rgba\([^)]+\)/,
            `rgba(${r}, ${g}, ${b}, ${(a * multiplier).toFixed(2)})`
          );
        }
      }
    }

    return { ...baseStyles, ...variantStyle };
  };

  const handleClick = () => {
    if (interactive && onClick) {
      onClick();
    }
  };

  const glassStyles = getGlassStyles();

  const combinedClassName = `
    glass-card
    ${interactive ? 'glass-interactive cursor-pointer hover:scale-[1.02] active:scale-[0.98]' : ''}
    ${glowEffect ? 'glow' : ''}
    ${shimmerEffect ? 'shimmer' : ''}
    ${className}
  `.trim();

  return (
    <div
      ref={ref}
      className={combinedClassName}
      style={{ ...glassStyles, ...style }}
      onClick={handleClick}
      {...props}
    >
      {/* Glass shimmer effect */}
      {shimmerEffect && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" />
      )}

      {/* Glow effect */}
      {glowEffect && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[inherit] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Interactive hover effect */}
      {interactive && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-[inherit]" />
      )}
    </div>
  );
});

LiquidGlassCard.displayName = 'LiquidGlassCard';

export default LiquidGlassCard; 