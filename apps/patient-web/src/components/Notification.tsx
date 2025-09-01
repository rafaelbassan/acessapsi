"use client";

import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';
import LiquidGlassCard from './LiquidGlassCard';

interface NotificationProps {
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  onClose?: () => void;
}

const notificationStyles = {
  success: {
    icon: CheckCircle,
    bgColor: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/30',
    iconColor: 'text-green-400',
    titleColor: 'text-green-200'
  },
  error: {
    icon: XCircle,
    bgColor: 'from-red-500/20 to-rose-500/20',
    borderColor: 'border-red-500/30',
    iconColor: 'text-red-400',
    titleColor: 'text-red-200'
  },
  warning: {
    icon: AlertCircle,
    bgColor: 'from-yellow-500/20 to-orange-500/20',
    borderColor: 'border-yellow-500/30',
    iconColor: 'text-yellow-400',
    titleColor: 'text-yellow-200'
  },
  info: {
    icon: Info,
    bgColor: 'from-blue-500/20 to-indigo-500/20',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-400',
    titleColor: 'text-blue-200'
  }
};

export function Notification({
  type,
  title,
  message,
  duration = 5000,
  onClose
}: NotificationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const style = notificationStyles[type];
  const IconComponent = style.icon;

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-4 right-4 z-[1000] max-w-sm w-full transform transition-all duration-300 ${
        isExiting
          ? 'translate-x-full opacity-0'
          : 'translate-x-0 opacity-100'
      }`}
    >
      <LiquidGlassCard
        variant="elevated"
        intensity="medium"
        className={`bg-gradient-to-r ${style.bgColor} ${style.borderColor} border backdrop-blur-xl`}
      >
        <div className="p-4">
          <div className="flex items-start space-x-3">
            <div className={`flex-shrink-0 ${style.iconColor}`}>
              <IconComponent className="w-6 h-6" />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className={`text-sm font-semibold ${style.titleColor} mb-1`}>
                {title}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {message}
              </p>
            </div>

            <button
              onClick={handleClose}
              className="flex-shrink-0 text-slate-400 hover:text-white transition-colors duration-200 p-1 hover:bg-white/10 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Progress bar for auto-dismiss */}
          {duration > 0 && (
            <div className="mt-3">
              <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${style.bgColor} transition-all duration-100 ease-linear`}
                  style={{
                    width: isExiting ? '0%' : '100%',
                    transitionDuration: `${duration}ms`
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </LiquidGlassCard>
    </div>
  );
}

// Notification Manager Component
interface NotificationItem extends NotificationProps {
  id: string;
}

export function NotificationManager() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  const addNotification = (notification: Omit<NotificationItem, 'id'>) => {
    const id = Date.now().toString();
    setNotifications(prev => [...prev, { ...notification, id }]);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Expose addNotification globally for easy use
  useEffect(() => {
    (window as any).showNotification = addNotification;
  }, []);

  return (
    <div className="fixed top-0 right-0 z-[1000] pointer-events-none">
      {notifications.map((notification, index) => (
        <div
          key={notification.id}
          className="pointer-events-auto mb-4"
          style={{ marginTop: `${index * 20 + 16}px` }}
        >
          <Notification
            {...notification}
            onClose={() => removeNotification(notification.id)}
          />
        </div>
      ))}
    </div>
  );
}

// Example usage functions
export const showSuccessNotification = (title: string, message: string) => {
  (window as any).showNotification?.({
    type: 'success',
    title,
    message
  });
};

export const showErrorNotification = (title: string, message: string) => {
  (window as any).showNotification?.({
    type: 'error',
    title,
    message
  });
};

export const showWarningNotification = (title: string, message: string) => {
  (window as any).showNotification?.({
    type: 'warning',
    title,
    message
  });
};

export const showInfoNotification = (title: string, message: string) => {
  (window as any).showNotification?.({
    type: 'info',
    title,
    message
  });
}
