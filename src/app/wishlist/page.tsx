
'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Heart, ArrowRight, ShoppingBag, Trash2, Sparkles } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function WishlistPage() {
  // Mock wishlist items for display - consistent with desktop "Your Treasures"
  const wishlistItems = [
    { id: '1', name: 'Royal Gold Jamdani', price: 12500, category: 'Jamdani', image: PlaceHolderImages.find(i => i.id === 'product-1')?.imageUrl || '' },
    { id: '2', name: 'Crimson Rose Katan', price: 18900, category: 'Katan', image: PlaceHolderImages.find(i => i.id === 'product-2')?.imageUrl || '' },
    { id: '3', name: 'Zari Border Banarasi', price: 24500, category: 'Banarasi', image: PlaceHolderImages.find(i => i.id === 'product-3')?.imageUrl || '' },
  ];

  return (
    <main className="flex-1 bg-background min-h-screen">
      <Navbar />
      
      <div className="max-w-[1280px] mx-auto px-6 py-24 mt-16 pb-32 lg:pb-24">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-panel rounded-full text-[10px] font-bold tracking-[0.2em] text-secondary uppercase border-primary/20 mb-2 animate-fade-in">
            <Sparkles className="w-3 h-3 text-accent" /> Your Personal Gallery
          </div>
          <h1 className="text-5xl md:text-7xl font-headline text-secondary font-bold flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 animate-fade-in">
             Your <span className="text-primary italic">Treasures</span>
             <Heart className="w-10 h-10 md:w-16 md:h-16 text-primary fill-primary/10" />
          </h1>
          <p className="text-muted-foreground font-body text-xl italic animate-fade-in delay-100 max-w-2xl mx-auto leading-relaxed">
            "A curated collection of your most loved pieces, hand-selected from our artisanal looms."
          </p>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="max-w-2xl mx-auto space-y-6 animate-fade-in delay-200">
            {wishlistItems.map((product) => (
              <div key={product.id} className="flex gap-4 sm:gap-8 p-4 sm:p-6 glass-panel rounded-[2.5rem] group relative hover:shadow-2xl transition-all border-white/60">
                <div className="w-24 sm:w-32 aspect-[3/4] relative rounded-[1.5rem] overflow-hidden shadow-lg shrink-0">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    sizes="(max-width: 640px) 96px, 128px" 
                  />
                  <div className="absolute inset-0 bg-secondary/5" />
                </div>
                <div className="flex-1 flex flex-col justify-center space-y-3 sm:space-y-4">
                  <div className="space-y-1">
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">{product.category}</p>
                    <h3 className="text-lg sm:text-2xl font-headline font-bold text-secondary italic">{product.name}</h3>
                    <p className="text-md sm:text-xl text-accent font-bold">৳ {product.price.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 pt-1">
                    <Button className="rounded-full bg-secondary hover:bg-secondary/90 text-white px-6 sm:px-8 h-10 sm:h-12 text-[10px] sm:text-xs font-headline tracking-widest shadow-xl group/btn">
                      ADD TO BAG <ShoppingBag className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:scale-110 transition-transform" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full text-destructive hover:bg-destructive/10 w-10 h-10 sm:w-12 sm:h-12">
                      <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 glass-panel rounded-[3rem] space-y-8 animate-fade-in max-w-2xl mx-auto shadow-2xl border-white/60">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
              <Heart className="w-12 h-12" />
            </div>
            <div className="space-y-2 px-6">
              <h2 className="text-3xl font-headline font-bold text-secondary italic">Your gallery is quiet...</h2>
              <p className="text-muted-foreground italic font-body text-lg">Every masterpiece begins with a spark of interest. Discover something beautiful to add to your collection.</p>
            </div>
            <Link href="/products">
              <Button className="rounded-full bg-secondary hover:bg-secondary/90 px-12 h-14 text-white font-headline tracking-widest text-lg shadow-xl hover:scale-105 transition-all">
                START EXPLORING <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        )}

        {/* Story/Inspiration Section */}
        <div className="mt-32 p-10 md:p-20 glass-panel rounded-[4rem] text-center space-y-8 relative overflow-hidden group shadow-2xl border-white/60">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
           
           <div className="relative z-10 space-y-6">
             <h3 className="text-3xl md:text-4xl font-headline font-bold text-secondary italic">Looking for a specific weave?</h3>
             <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg sm:text-xl italic leading-relaxed">
               Our master weavers in Tangail and Pabna are always breathing life into new threads. If you have a specific vision or heritage motif in mind, let us know.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6">
               <Link href="/products">
                 <Button variant="outline" className="rounded-full border-primary/30 text-secondary px-10 h-14 font-headline tracking-widest text-lg hover:bg-primary/10 transition-all hover:scale-105 w-full sm:w-auto">
                   BROWSE NEW ARRIVALS
                 </Button>
               </Link>
               <Link href="/cart">
                 <Button className="rounded-full bg-accent hover:bg-accent/90 text-white px-10 h-14 font-headline tracking-widest text-lg shadow-xl flex items-center justify-center gap-3 hover:scale-105 transition-all w-full sm:w-auto">
                   VIEW SHOPPING BAG <ShoppingBag className="w-5 h-5" />
                 </Button>
               </Link>
             </div>
           </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
