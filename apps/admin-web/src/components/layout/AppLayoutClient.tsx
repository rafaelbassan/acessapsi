"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import Header from './Header';
import AuthGuard from '@/components/AuthGuard';

interface Props {
  children: React.ReactNode;
}

const AppLayoutClient: React.FC<Props> = ({ children }) => {
  const pathname = usePathname();
  const isLogin = pathname === '/login';
  const isRegister = pathname === '/register';

  if (isLogin || isRegister) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        {children}
      </main>
    );
  }

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="flex-shrink-0">
        <Sidebar />
      </aside>
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <AuthGuard>
            {children}
          </AuthGuard>
        </main>
      </div>
    </div>
  );
};

export default AppLayoutClient; 