"use client";

import React from 'react';
import { Loader2 } from 'lucide-react';

interface ElegantLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots' | 'pulse' | 'glass';
  text?: string;
  className?: string;
}

export default function ElegantLoader({
  size = 'md',
  variant = 'glass',
  text,
  className = ''
}: ElegantLoaderProps) {

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const renderLoader = () => {
    switch (variant) {
      case 'spinner':
        return (
          <div className="relative">
            <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-400`} />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
          </div>
        );

      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse`}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        );

      case 'pulse':
        return (
          <div className="relative">
            <div className={`${sizeClasses[size]} bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse`}></div>
            <div className={`absolute inset-0 ${sizeClasses[size]} bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse opacity-50`} style={{ animationDelay: '0.5s' }}></div>
          </div>
        );

      case 'glass':
      default:
        return (
          <div className="relative">
            <div className={`${sizeClasses[size]} border-2 border-white/20 border-t-blue-400 rounded-full animate-spin`}></div>
            <div className="absolute inset-1 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-sm animate-pulse"></div>
          </div>
        );
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
      {renderLoader()}
      {text && (
        <p className="text-sm text-slate-300 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}

// Loading overlay component
export function LoadingOverlay({
  isVisible,
  text = "Carregando..."
}: {
  isVisible: boolean;
  text?: string;
}) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20">
        <ElegantLoader variant="glass" size="lg" text={text} />
      </div>
    </div>
  );
}

// Skeleton loader for content
export function SkeletonLoader({
  className = '',
  lines = 3
}: {
  className?: string;
  lines?: number;
}) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded animate-pulse"
          style={{
            width: `${Math.random() * 40 + 60}%`,
            animationDelay: `${i * 0.1}s`
          }}
        />
      ))}
    </div>
  );
}
