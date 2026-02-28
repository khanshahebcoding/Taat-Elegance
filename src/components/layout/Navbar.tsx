
"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, User, Heart, Search, Menu, X, Trash2, ChevronRight, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cartItemCount = 2;
  const wishlistCount = 3;

  return (
    <nav className={cn(
      "fixed top-0 z-50 w-full px-4 py-4 flex justify-center transition-all duration-500",
      isScrolled ? "py-2" : "py-4"
    )}>
      <div className={cn(
        "max-w-[1280px] w-full glass-panel rounded-full px-4 sm:px-8 py-2 flex items-center justify-between transition-all duration-500",
        isScrolled ? "shadow-2xl border-white/60" : "shadow-xl border-white/30"
      )}>
        <div className="flex items-center gap-4 lg:gap-12">
          {/* MOBILE MENU TRIGGER */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden rounded-full hover:bg-primary/10 text-secondary">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="glass-panel border-r-white/40 w-[280px] sm:w-[350px] rounded-r-[3rem]">
              <SheetHeader className="mb-8 text-left">
                <SheetTitle className="font-headline text-3xl text-secondary italic">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-secondary">
                <Link href="/products" className="hover:text-primary transition-colors flex items-center justify-between group">
                  Catalog <ChevronRight className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/collections" className="hover:text-primary transition-colors flex items-center justify-between group">
                  Collections <ChevronRight className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/heritage" className="hover:text-primary transition-colors flex items-center justify-between group">
                  Heritage <ChevronRight className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-transform" />
                </Link>
              </nav>
              <div className="mt-12 pt-8 border-t border-primary/10 space-y-4">
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Account</p>
                <Link href="/dashboard" className="block text-xs font-medium text-secondary hover:text-primary">My Profile</Link>
                <Link href="/dashboard/orders" className="block text-xs font-medium text-secondary hover:text-primary">My Orders</Link>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="font-headline text-lg sm:text-2xl font-bold tracking-widest text-secondary group transition-all shrink-0">
            TAAT <span className="text-primary font-normal group-hover:text-accent transition-colors">ELEGANCE</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-secondary/80">
            <Link href="/products" className="hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all">Catalog</Link>
            <Link href="/collections" className="hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all">Collections</Link>
            <Link href="/heritage" className="hover:text-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all">Heritage</Link>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-3">
          {/* SEARCH SYSTEM */}
          <div className="relative flex items-center justify-end">
            <div className={cn(
              "overflow-hidden transition-all duration-500 ease-in-out flex items-center",
              isSearchOpen ? "w-[150px] sm:w-[300px] opacity-100" : "w-0 opacity-0"
            )}>
              <Input
                type="text"
                placeholder="Search..."
                className="bg-white/40 border-primary/20 rounded-full h-8 sm:h-9 pl-3 sm:pl-4 pr-8 sm:pr-10 focus-visible:ring-accent italic text-[10px] sm:text-xs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "rounded-full hover:bg-primary/10 transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10",
                isSearchOpen ? "absolute right-0.5 text-primary" : "text-secondary"
              )}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {isSearchOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Search className="w-4 h-4 sm:w-5 sm:h-5" />}
            </Button>
            
            {/* Search Results Dropdown (Simulated) */}
            {isSearchOpen && searchQuery.length > 2 && (
              <div className="absolute top-10 sm:top-12 right-0 w-[280px] sm:w-[350px] glass-panel rounded-[2rem] p-4 animate-fade-in shadow-2xl">
                <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-3 px-2">Suggested for you</p>
                <div className="space-y-3">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-4 p-2 rounded-2xl hover:bg-primary/5 transition-colors cursor-pointer group">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 relative rounded-xl overflow-hidden shadow-sm">
                        <Image src={PlaceHolderImages[i]?.imageUrl || ''} alt="Saree" fill className="object-cover" sizes="(max-width: 640px) 40px, 48px" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] sm:text-xs font-bold text-secondary group-hover:text-primary transition-colors">Royal Jamdani Weave</p>
                        <p className="text-[9px] sm:text-[10px] text-accent font-bold">৳ 12,500</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* WISHLIST DRAWER - Hidden on mobile, shown on large screens */}
          <div className="hidden lg:flex">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full relative hover:bg-primary/10 group w-8 h-8 sm:w-10 sm:h-10">
                  <Heart className={cn("w-4 h-4 sm:w-5 sm:h-5 transition-all group-hover:scale-110", wishlistCount > 0 ? "text-primary fill-primary/10" : "text-secondary")} />
                  {wishlistCount > 0 && (
                    <span className="absolute top-0 right-0 sm:-top-0.5 sm:-right-0.5 bg-primary text-white text-[7px] sm:text-[8px] font-bold w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center animate-pulse border-2 border-white/80">
                      {wishlistCount}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="glass-panel border-l-white/40 w-full sm:max-w-md rounded-l-[3rem]">
                <SheetHeader className="mb-8">
                  <SheetTitle className="font-headline text-3xl text-secondary italic">Your Treasures</SheetTitle>
                </SheetHeader>
                <div className="space-y-6">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex gap-4 p-4 glass-card rounded-3xl group">
                      <div className="w-20 aspect-[3/4] relative rounded-2xl overflow-hidden shadow-md">
                        <Image src={PlaceHolderImages[i]?.imageUrl || ''} alt="Saree" fill className="object-cover" sizes="80px" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-headline font-bold text-secondary">Crimson Rose Jamdani</p>
                        <p className="text-xs text-accent font-bold">৳ 18,900</p>
                        <div className="flex gap-2 pt-2">
                          <Button size="sm" variant="outline" className="h-8 rounded-full text-[10px] font-bold border-primary/20 hover:bg-primary/10">Add to Bag</Button>
                          <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full text-destructive hover:bg-destructive/10"><Trash2 className="w-3.5 h-3.5" /></Button>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="pt-8">
                    <Button className="w-full h-14 rounded-full bg-secondary hover:bg-secondary/90 text-white font-headline tracking-widest shadow-xl">
                      View Entire Wishlist
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* CART DRAWER - Hidden on mobile, shown on large screens */}
          <div className="hidden lg:flex">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full relative hover:bg-primary/10 group w-8 h-8 sm:w-10 sm:h-10">
                  <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-secondary group-hover:scale-110 transition-all" />
                  <span className="absolute top-0 right-0 sm:-top-0.5 sm:-right-0.5 bg-accent text-white text-[7px] sm:text-[8px] font-bold w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center border-2 border-white/80">
                    {cartItemCount}
                  </span>
                </Button>
              </SheetTrigger>
              <SheetContent className="glass-panel border-l-white/40 w-full sm:max-w-md rounded-l-[3rem] flex flex-col h-full">
                <SheetHeader className="mb-8">
                  <SheetTitle className="font-headline text-3xl text-secondary italic">Shopping Bag</SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto space-y-6 pr-2">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex gap-4 p-4 glass-card rounded-3xl group relative">
                      <div className="w-20 aspect-[3/4] relative rounded-2xl overflow-hidden shadow-md">
                        <Image src={PlaceHolderImages[i]?.imageUrl || ''} alt="Saree" fill className="object-cover" sizes="80px" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between items-start">
                          <p className="text-sm font-headline font-bold text-secondary">Heritage Silk Weave</p>
                          <button className="text-muted-foreground hover:text-destructive"><X className="w-4 h-4" /></button>
                        </div>
                        <p className="text-xs text-accent font-bold">৳ 12,500</p>
                        <div className="flex items-center gap-3 glass-panel rounded-full w-fit px-3 py-1">
                          <button className="text-xs hover:text-primary">-</button>
                          <span className="text-[10px] font-bold w-4 text-center">1</span>
                          <button className="text-xs hover:text-primary">+</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-8 space-y-4">
                  <div className="flex justify-between items-center px-2">
                    <p className="text-sm font-bold text-secondary tracking-widest uppercase">Subtotal</p>
                    <p className="text-xl font-headline font-bold text-primary">৳ 25,000</p>
                  </div>
                  <Link href="/checkout" className="block">
                    <Button className="w-full h-14 rounded-full bg-secondary hover:bg-secondary/90 text-white font-headline tracking-widest shadow-xl group">
                      PROCEED TO CHECKOUT <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-all" />
                    </Button>
                  </Link>
                  <p className="text-center text-[10px] text-muted-foreground italic">Complimentary Express Shipping within Bangladesh</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* PROFILE SYSTEM - Hidden on mobile, shown on large screens */}
          <div className="hidden lg:flex">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 group w-8 h-8 sm:w-10 sm:h-10">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-secondary group-hover:scale-110 transition-all" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 glass-panel rounded-[2rem] p-4 mt-4 shadow-2xl border-white/60 animate-fade-in">
                <div className="flex flex-col items-center gap-3 p-4 border-b border-primary/10 mb-2">
                  <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-primary bg-primary/5">
                    <User className="w-8 h-8" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-secondary tracking-widest uppercase">Welcome, Guest</p>
                    <p className="text-[10px] text-muted-foreground italic">Elegance is a journey</p>
                  </div>
                </div>
                <DropdownMenuItem asChild className="rounded-2xl cursor-pointer hover:bg-primary/5 p-3">
                  <Link href="/dashboard" className="flex items-center gap-3 text-secondary">
                    <div className="w-8 h-8 rounded-full bg-secondary/5 flex items-center justify-center"><User className="w-4 h-4" /></div>
                    <span className="text-xs font-bold uppercase tracking-widest">My Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-2xl cursor-pointer hover:bg-primary/5 p-3">
                  <Link href="/dashboard/orders" className="flex items-center gap-3 text-secondary">
                    <div className="w-8 h-8 rounded-full bg-secondary/5 flex items-center justify-center"><ShoppingBag className="w-4 h-4" /></div>
                    <span className="text-xs font-bold uppercase tracking-widest">Order History</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-2xl cursor-pointer hover:bg-primary/5 p-3">
                  <Link href="/wishlist" className="flex items-center gap-3 text-secondary">
                    <div className="w-8 h-8 rounded-full bg-secondary/5 flex items-center justify-center"><Heart className="w-4 h-4" /></div>
                    <span className="text-xs font-bold uppercase tracking-widest">Loved Pieces</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-2 bg-primary/10" />
                <DropdownMenuItem className="rounded-2xl cursor-pointer hover:bg-destructive/5 p-3 text-destructive">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-destructive/5 flex items-center justify-center"><LogIn className="w-4 h-4" /></div>
                    <span className="text-xs font-bold uppercase tracking-widest">Sign Out</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
