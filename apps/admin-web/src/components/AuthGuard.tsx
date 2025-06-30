"use client";
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (pathname === '/login') {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      if (!user) {
        setAuthorized(false);
        setLoading(false);
        router.replace('/login');
        return;
      }
      // Buscar role no Firestore
      const userDoc = await getDoc(doc(db, 'professionals', user.uid));
      const data = userDoc.data();
      if (data && data.role === 'admin') {
        setAuthorized(true);
      } else {
        setAuthorized(false);
        router.replace('/login');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [pathname, router]);

  if (loading) return null;
  if (!authorized) return null;
  return <>{children}</>;
} 