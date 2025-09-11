"use client";

import React from 'react';

interface LoadingSkeletonProps {
  height?: string;
  className?: string;
}

export default function LoadingSkeleton({ height = "h-96", className = "" }: LoadingSkeletonProps) {
  return (
    <div className={`${height} bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 animate-pulse ${className}`}>
      <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
    </div>
  );
}
