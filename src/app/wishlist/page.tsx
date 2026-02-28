'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/products/ProductCard';
import { Heart, ArrowRight, ShoppingBag } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function WishlistPage() {
  // Mock wishlist items for display
  const wishlistItems = [
    { id: '1', name: 'Royal Gold Jamdani', price: 12500, category: 'Jamdani', image: PlaceHolderImages.find(i => i.id === 'product-1')?.imageUrl || '' },
    { id: '2', name: 'Crimson Rose Katan', price: 18900, category: 'Katan', image: PlaceHolderImages.find(i => i.id === 'product-2')?.imageUrl || '' },
    { id: '3', name: 'Zari Border Banarasi', price: 24500, category: 'Banarasi', image: PlaceHolderImages.find(i => i.id === 'product-3')?.imageUrl || '' },
  ];

  return (
    <main className="flex-1 bg-background">
      <Navbar />
      
      <div className="max-w-[1280px] mx-auto px-6 py-20 mt-16">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 glass-panel rounded-full text-[10px] font-bold tracking-[0.2em] text-secondary uppercase border-primary/20 mb-4 animate-fade-in">
            Your Personal Gallery
          </div>
          <h1 className="text-5xl md:text-7xl font-headline text-secondary font-bold flex items-center justify-center gap-4 animate-fade-in">
             Your <span className="text-primary italic">Treasures</span>
             <Heart className="w-10 h-10 md:w-16 md:h-16 text-primary fill-primary/10" />
          </h1>
          <p className="text-muted-foreground font-body text-xl italic animate-fade-in delay-100 max-w-2xl mx-auto leading-relaxed">
            "A curated collection of your most loved pieces, hand-selected from our artisanal looms."
          </p>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 animate-fade-in delay-200">
            {wishlistItems.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 glass-panel rounded-[3rem] space-y-8 animate-fade-in max-w-2xl mx-auto shadow-2xl">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
              <Heart className="w-12 h-12" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-headline font-bold text-secondary italic">Your wishlist is empty</h2>
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
        <div className="mt-32 p-12 md:p-20 glass-panel rounded-[4rem] text-center space-y-8 relative overflow-hidden group shadow-2xl border-white/60">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
           
           <div className="relative z-10 space-y-6">
             <h3 className="text-3xl md:text-4xl font-headline font-bold text-secondary italic">Looking for a specific weave?</h3>
             <p className="text-muted-foreground max-w-2xl mx-auto font-body text-xl italic leading-relaxed">
               Our master weavers in Tangail and Pabna are always breathing life into new threads. If you have a specific vision or heritage motif in mind, let us know.
             </p>
             <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
               <Link href="/products">
                 <Button variant="outline" className="rounded-full border-primary/30 text-secondary px-10 h-14 font-headline tracking-widest text-lg hover:bg-primary/10 transition-all hover:scale-105">
                   BROWSE NEW ARRIVALS
                 </Button>
               </Link>
               <Link href="/cart">
                 <Button className="rounded-full bg-accent hover:bg-accent/90 text-white px-10 h-14 font-headline tracking-widest text-lg shadow-xl flex items-center gap-3 hover:scale-105 transition-all">
                   VIEW SHOPPING BAG <ShoppingBag className="w-5 h-5" />
                 </Button>
               </Link>
             </div>
           </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 flex justify-center opacity-20">
           <div className="w-24 h-0.5 bg-accent rounded-full" />
        </div>
      </div>

      <Footer />
    </main>
  );
}
