
'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronDown, 
  Filter, 
  LayoutGrid, 
  List, 
  SlidersHorizontal,
  X
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Slider } from "@/components/ui/slider";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";

// Mock data for catalog display
const PRODUCTS = [
  { id: '1', name: 'Royal Gold Jamdani', price: 12500, category: 'Jamdani', image: PlaceHolderImages.find(i => i.id === 'product-1')?.imageUrl || '', isNew: true },
  { id: '2', name: 'Crimson Rose Katan', price: 18900, category: 'Katan', image: PlaceHolderImages.find(i => i.id === 'product-2')?.imageUrl || '', isNew: false },
  { id: '3', name: 'Zari Border Banarasi', price: 24500, category: 'Banarasi', image: PlaceHolderImages.find(i => i.id === 'product-3')?.imageUrl || '', isNew: true },
  { id: '4', name: 'Heritage Handloom', price: 8500, category: 'Handloom', image: PlaceHolderImages.find(i => i.id === 'product-1')?.imageUrl || '', isNew: false },
  { id: '5', name: 'Midnight Silk Jamdani', price: 15600, category: 'Jamdani', image: PlaceHolderImages.find(i => i.id === 'product-2')?.imageUrl || '', isNew: false, isLimited: true },
  { id: '6', name: 'Emerald Weave', price: 11200, category: 'Tangail', image: PlaceHolderImages.find(i => i.id === 'product-3')?.imageUrl || '', isNew: true },
  { id: '7', name: 'Sunset Bloom Saree', price: 9800, category: 'Pabna', image: PlaceHolderImages.find(i => i.id === 'product-1')?.imageUrl || '', isNew: false },
  { id: '8', name: 'Ivory Elegance', price: 21000, category: 'Jamdani', image: PlaceHolderImages.find(i => i.id === 'product-2')?.imageUrl || '', isNew: false, isLimited: true },
  { id: '9', name: 'Peacock Motif Silk', price: 17500, category: 'Katan', image: PlaceHolderImages.find(i => i.id === 'product-3')?.imageUrl || '', isNew: true },
  { id: '10', name: 'Vintage Rose Saree', price: 13200, category: 'Heritage', image: PlaceHolderImages.find(i => i.id === 'product-1')?.imageUrl || '', isNew: false },
];

const COLORS = [
  { name: 'Rose Pink', hex: '#E88CA8' },
  { name: 'Deep Wine', hex: '#8B1E3F' },
  { name: 'Royal Gold', hex: '#C6A75E' },
  { name: 'Midnight Blue', hex: '#1A2A44' },
  { name: 'Emerald', hex: '#1B4D3E' },
];

export default function CatalogPage() {
  const [priceRange, setPriceRange] = useState([5000, 30000]);
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <main className="flex-1 bg-background">
      <Navbar />

      {/* 1. HERO STRIP */}
      <section className="pt-20 pb-12 px-6 text-center animate-fade-in">
        <div className="max-w-3xl mx-auto space-y-4">
          <Badge variant="outline" className="border-accent text-accent font-headline tracking-widest uppercase px-6 py-1 rounded-full">
            OUR CATALOG
          </Badge>
          <h1 className="text-5xl md:text-6xl font-headline font-bold text-secondary">
            Discover Timeless <span className="text-primary italic">Masterpieces</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground italic max-w-xl mx-auto">
            Each weave carries a story of Bengal’s rich textile heritage, meticulously crafted for the woman of grace.
          </p>
        </div>
      </section>

      {/* 2. FILTER + SORT SECTION (Desktop) */}
      <section className="px-6 mb-12 hidden md:block">
        <div className="max-w-[1280px] mx-auto">
          <div className="glass-panel rounded-[2rem] p-6 flex items-center justify-between shadow-sm border-white/50">
            <div className="flex items-center gap-8">
              {/* Filter Dropdowns */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="font-headline text-secondary tracking-widest uppercase text-xs flex items-center gap-2 hover:bg-primary/10 rounded-full px-6">
                    Category <ChevronDown className="w-3 h-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="glass-panel border-none p-2 rounded-2xl w-48">
                  {['All', 'Jamdani', 'Katan', 'Tangail', 'Pabna', 'Heritage'].map((cat) => (
                    <DropdownMenuItem 
                      key={cat} 
                      onClick={() => setActiveCategory(cat)}
                      className="rounded-xl cursor-pointer hover:bg-primary/20 text-secondary font-medium"
                    >
                      {cat}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="font-headline text-secondary tracking-widest uppercase text-xs flex items-center gap-2 hover:bg-primary/10 rounded-full px-6">
                    Region <ChevronDown className="w-3 h-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="glass-panel border-none p-2 rounded-2xl w-48">
                  {['Tangail', 'Pabna', 'Dhaka', 'Rajshahi'].map((reg) => (
                    <DropdownMenuItem key={reg} className="rounded-xl cursor-pointer hover:bg-primary/20 text-secondary font-medium">
                      {reg}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Price Popover - Simple slider example */}
              <div className="flex flex-col gap-2 min-w-[150px] px-4">
                <div className="flex justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">
                  <span>Price Range</span>
                  <span>৳ {priceRange[1]}</span>
                </div>
                <Slider 
                  defaultValue={[5000, 30000]} 
                  max={50000} 
                  step={1000} 
                  value={priceRange} 
                  onValueChange={setPriceRange}
                  className="w-full"
                />
              </div>

              {/* Color Swatches */}
              <div className="flex items-center gap-2 pl-4 border-l border-primary/10">
                {COLORS.map((color) => (
                  <button 
                    key={color.name}
                    title={color.name}
                    className="w-5 h-5 rounded-full border border-white shadow-sm hover:scale-125 transition-transform"
                    style={{ backgroundColor: color.hex }}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="rounded-full glass-panel border-primary/20 font-headline text-secondary text-xs tracking-widest px-6 h-10">
                    Sort By: Newest <ChevronDown className="ml-2 w-3 h-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="glass-panel border-none p-2 rounded-2xl w-48">
                  <DropdownMenuItem className="rounded-xl">Newest</DropdownMenuItem>
                  <DropdownMenuItem className="rounded-xl">Price: Low to High</DropdownMenuItem>
                  <DropdownMenuItem className="rounded-xl">Price: High to Low</DropdownMenuItem>
                  <DropdownMenuItem className="rounded-xl">Most Loved</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="flex gap-2 p-1 glass-panel rounded-full">
                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full bg-primary text-white"><LayoutGrid className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-secondary"><List className="w-4 h-4" /></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filter Button */}
      <section className="px-6 mb-8 md:hidden text-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="w-full h-12 rounded-full glass-panel border-primary/20 text-secondary font-headline tracking-widest flex items-center justify-center gap-2">
              <Filter className="w-4 h-4 text-primary" /> Filter & Sort
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="rounded-t-[3rem] h-[80vh] bg-background border-t-primary/20 p-8">
            <SheetHeader className="mb-8">
              <SheetTitle className="font-headline text-3xl text-secondary text-center">Refine Your Selection</SheetTitle>
            </SheetHeader>
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Price Range: ৳ {priceRange[1]}</p>
                <Slider defaultValue={[5000, 30000]} max={50000} step={1000} value={priceRange} onValueChange={setPriceRange} />
              </div>
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Categories</p>
                <div className="flex flex-wrap gap-2">
                  {['Jamdani', 'Katan', 'Tangail', 'Pabna', 'Heritage'].map(c => (
                    <Badge key={c} variant="outline" className="px-4 py-2 rounded-full border-primary/20 text-secondary">{c}</Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Colors</p>
                <div className="flex gap-4">
                  {COLORS.map(c => (
                    <div key={c.name} className="w-8 h-8 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: c.hex }} />
                  ))}
                </div>
              </div>
              <Button className="w-full h-14 rounded-full bg-secondary text-white font-headline tracking-widest text-lg">Apply Filters</Button>
            </div>
          </SheetContent>
        </Sheet>
      </section>

      {/* 3. PRODUCT GRID */}
      <section className="px-6 mb-24">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {/* First Row */}
            {PRODUCTS.slice(0, 8).map((product, idx) => (
              <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <ProductCard 
                   id={product.id}
                   name={product.name}
                   price={product.price}
                   category={product.category}
                   image={product.image}
                   isNew={product.isNew}
                />
              </div>
            ))}
          </div>

          {/* 4. FEATURED BANNER INSERT */}
          <div className="my-24 glass-panel rounded-[3rem] p-12 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center md:text-left">
                <div className="w-12 h-1 bg-accent rounded-full" />
                <h3 className="text-4xl font-headline font-bold text-secondary">Limited Heritage Collection</h3>
                <p className="font-body text-lg text-muted-foreground leading-relaxed italic">
                  A tribute to the ancient looms of Pabna. Only 15 pieces of these rare ivory-silk weaves are created each season. 
                </p>
                <div className="pt-4 flex items-center justify-center md:justify-start gap-4">
                  <Button className="rounded-full bg-accent hover:bg-accent/90 px-8 h-12 text-white font-headline tracking-widest">
                    EXPLORE COLLECTION
                  </Button>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-primary animate-pulse">
                    ✨ Sparkle of Authenticity
                  </p>
                </div>
              </div>
              <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden shadow-2xl animate-float">
                 <img src={PlaceHolderImages.find(i => i.id === 'product-3')?.imageUrl} alt="Heritage Collection" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
            </div>
          </div>

          {/* Remaining Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {PRODUCTS.slice(8).map((product, idx) => (
              <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <ProductCard 
                   id={product.id}
                   name={product.name}
                   price={product.price}
                   category={product.category}
                   image={product.image}
                   isNew={product.isNew}
                />
              </div>
            ))}
          </div>

          {/* 5. LOAD MORE SECTION */}
          <div className="mt-20 text-center">
             <Button variant="outline" size="lg" className="rounded-full px-16 h-14 glass-panel border-primary/20 text-secondary font-headline tracking-widest hover:bg-primary/10 transition-all hover:scale-105 active:scale-95 shadow-sm">
                View More Masterpieces
             </Button>
             <p className="mt-4 text-xs text-muted-foreground italic font-body">Showing 10 of 48 Treasured Weaves</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
