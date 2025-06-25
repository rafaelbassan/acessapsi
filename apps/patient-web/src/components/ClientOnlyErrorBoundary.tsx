"use client";

import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

interface ClientOnlyErrorBoundaryProps {
  children: React.ReactNode;
}

export function ClientOnlyErrorBoundary({ children }: ClientOnlyErrorBoundaryProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // On the server, just render children without error boundary
  if (!isClient) {
    return <>{children}</>;
  }

  // On the client, wrap with error boundary
  return (
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  );
} 