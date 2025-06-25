"use client";

import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 ease-out transform focus:outline-none focus:ring-4 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-slate-800 hover:bg-slate-900 active:bg-slate-950 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus:ring-slate-500/20',
    secondary: 'bg-white hover:bg-gray-50 active:bg-gray-100 text-slate-800 border border-gray-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus:ring-slate-500/20',
    outline: 'border-2 border-gray-300 hover:border-slate-600 text-gray-700 hover:text-slate-800 bg-transparent hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.98] focus:ring-slate-500/20',
    ghost: 'bg-transparent hover:bg-gray-50 active:bg-gray-100 text-gray-700 hover:scale-[1.02] active:scale-[0.98] focus:ring-gray-500/20',
  };
  
  const sizeClasses = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  };
  
  const disabledClasses = disabled || loading ? 'opacity-50 cursor-not-allowed transform-none hover:transform-none' : '';
  
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  );
}; 