'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Heart, ShoppingBag, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export function MobileNavbar() {
  const pathname = usePathname();

  // Helper to determine if a path is currently active
  const isActive = (path: string) => pathname === path;

  return (
    <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[400px]">
      <div className="glass-panel rounded-full px-4 py-2 sm:py-3 flex items-center justify-around shadow-2xl border-white/60">
        {/* HOME LINK */}
        <Link href="/" className="flex flex-col items-center gap-1 group relative">
          <div className={cn(
            "p-2.5 sm:p-3 rounded-full transition-all duration-500",
            isActive('/') ? "bg-secondary text-white -translate-y-5 sm:-translate-y-6 scale-110 sm:scale-125 shadow-xl shadow-secondary/40 ring-4 ring-background" : "text-secondary/60 hover:text-secondary"
          )}>
            <Home className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className={cn(
            "text-[8px] sm:text-[10px] font-headline font-bold uppercase tracking-widest transition-opacity duration-300 absolute -bottom-1",
            isActive('/') ? "opacity-100 text-secondary" : "opacity-0"
          )}>Home</span>
        </Link>

        {/* WISHLIST LINK */}
        <Link href="/wishlist" className="flex flex-col items-center gap-1 group relative">
          <div className={cn(
            "p-2.5 sm:p-3 rounded-full transition-all duration-500",
            isActive('/wishlist') ? "bg-secondary text-white -translate-y-5 sm:-translate-y-6 scale-110 sm:scale-125 shadow-xl shadow-secondary/40 ring-4 ring-background" : "text-secondary/60 hover:text-secondary"
          )}>
            <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className={cn(
            "text-[8px] sm:text-[10px] font-headline font-bold uppercase tracking-widest transition-opacity duration-300 absolute -bottom-1",
            isActive('/wishlist') ? "opacity-100 text-secondary" : "opacity-0"
          )}>Wishlist</span>
        </Link>

        {/* CART LINK */}
        <Link href="/cart" className="flex flex-col items-center gap-1 group relative">
          <div className={cn(
            "p-2.5 sm:p-3 rounded-full transition-all duration-500",
            isActive('/cart') ? "bg-secondary text-white -translate-y-5 sm:-translate-y-6 scale-110 sm:scale-125 shadow-xl shadow-secondary/40 ring-4 ring-background" : "text-secondary/60 hover:text-secondary"
          )}>
            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className={cn(
            "text-[8px] sm:text-[10px] font-headline font-bold uppercase tracking-widest transition-opacity duration-300 absolute -bottom-1",
            isActive('/cart') ? "opacity-100 text-secondary" : "opacity-0"
          )}>Cart</span>
        </Link>

        {/* PROFILE LINK */}
        <Link href="/dashboard" className="flex flex-col items-center gap-1 group relative">
          <div className={cn(
            "p-2.5 sm:p-3 rounded-full transition-all duration-500",
            isActive('/dashboard') ? "bg-secondary text-white -translate-y-5 sm:-translate-y-6 scale-110 sm:scale-125 shadow-xl shadow-secondary/40 ring-4 ring-background" : "text-secondary/60 hover:text-secondary"
          )}>
            <User className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className={cn(
            "text-[8px] sm:text-[10px] font-headline font-bold uppercase tracking-widest transition-opacity duration-300 absolute -bottom-1",
            isActive('/dashboard') ? "opacity-100 text-secondary" : "opacity-0"
          )}>Profile</span>
        </Link>
      </div>
    </div>
  );
}
