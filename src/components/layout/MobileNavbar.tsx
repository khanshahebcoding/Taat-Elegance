'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Heart, ShoppingBag, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export function MobileNavbar() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', icon: Home, href: '/' },
    { label: 'Wishlist', icon: Heart, href: '/wishlist' },
    { label: 'Cart', icon: ShoppingBag, href: '/cart' },
    { label: 'Profile', icon: '/dashboard', isProfile: true },
  ];

  // Map the navigation items to their paths
  const isActive = (path: string) => pathname === path;

  return (
    <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[400px]">
      <div className="glass-panel rounded-full px-4 py-3 flex items-center justify-around shadow-2xl border-white/60">
        <Link href="/" className="flex flex-col items-center gap-1 group relative">
          <div className={cn(
            "p-3 rounded-full transition-all duration-500",
            isActive('/') ? "bg-secondary text-white -translate-y-6 scale-125 shadow-xl shadow-secondary/40 ring-4 ring-background" : "text-secondary/60 hover:text-secondary"
          )}>
            <Home className="w-5 h-5" />
          </div>
          <span className={cn(
            "text-[10px] font-headline font-bold uppercase tracking-widest transition-opacity duration-300",
            isActive('/') ? "opacity-100 mt-[-18px] text-secondary" : "opacity-0"
          )}>Home</span>
        </Link>

        <Link href="/wishlist" className="flex flex-col items-center gap-1 group relative">
          <div className={cn(
            "p-3 rounded-full transition-all duration-500",
            isActive('/wishlist') ? "bg-secondary text-white -translate-y-6 scale-125 shadow-xl shadow-secondary/40 ring-4 ring-background" : "text-secondary/60 hover:text-secondary"
          )}>
            <Heart className="w-5 h-5" />
          </div>
          <span className={cn(
            "text-[10px] font-headline font-bold uppercase tracking-widest transition-opacity duration-300",
            isActive('/wishlist') ? "opacity-100 mt-[-18px] text-secondary" : "opacity-0"
          )}>Loved</span>
        </Link>

        <Link href="/cart" className="flex flex-col items-center gap-1 group relative">
          <div className={cn(
            "p-3 rounded-full transition-all duration-500",
            isActive('/cart') ? "bg-secondary text-white -translate-y-6 scale-125 shadow-xl shadow-secondary/40 ring-4 ring-background" : "text-secondary/60 hover:text-secondary"
          )}>
            <ShoppingBag className="w-5 h-5" />
          </div>
          <span className={cn(
            "text-[10px] font-headline font-bold uppercase tracking-widest transition-opacity duration-300",
            isActive('/cart') ? "opacity-100 mt-[-18px] text-secondary" : "opacity-0"
          )}>Bag</span>
        </Link>

        <Link href="/dashboard" className="flex flex-col items-center gap-1 group relative">
          <div className={cn(
            "p-3 rounded-full transition-all duration-500",
            isActive('/dashboard') ? "bg-secondary text-white -translate-y-6 scale-125 shadow-xl shadow-secondary/40 ring-4 ring-background" : "text-secondary/60 hover:text-secondary"
          )}>
            <User className="w-5 h-5" />
          </div>
          <span className={cn(
            "text-[10px] font-headline font-bold uppercase tracking-widest transition-opacity duration-300",
            isActive('/dashboard') ? "opacity-100 mt-[-18px] text-secondary" : "opacity-0"
          )}>Profile</span>
        </Link>
      </div>
    </div>
  );
}
