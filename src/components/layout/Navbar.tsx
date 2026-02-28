"use client"

import React from 'react';
import Link from 'next/link';
import { ShoppingBag, User, Heart, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full px-4 py-3 flex justify-center">
      <div className="max-w-[1280px] w-full glass-panel rounded-full px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-headline text-2xl font-bold tracking-widest text-secondary">
            TAAT <span className="text-primary font-normal">ELEGANCE</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium uppercase tracking-wider">
            <Link href="/products" className="hover:text-primary transition-colors">Catalog</Link>
            <Link href="/collections" className="hover:text-primary transition-colors">Collections</Link>
            <Link href="/heritage" className="hover:text-primary transition-colors">Heritage</Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="w-5 h-5" />
          </Button>
          <Link href="/wishlist">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Heart className="w-5 h-5 text-primary" />
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <ShoppingBag className="w-5 h-5 text-secondary" />
              <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 glass-panel mt-2">
              <DropdownMenuItem asChild>
                <Link href="/dashboard">My Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/orders">My Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/admin">Admin Panel</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon" className="md:hidden rounded-full">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}