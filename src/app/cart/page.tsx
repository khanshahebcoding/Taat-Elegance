import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function CartPage() {
  const p1 = PlaceHolderImages.find(i => i.id === 'product-1');

  return (
    <main className="flex-1">
      <Navbar />
      
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-headline text-secondary font-bold flex items-center justify-center gap-4">
             Your <span className="text-primary italic">Selection</span>
             <ShoppingBag className="w-10 h-10 text-primary" />
          </h1>
          <p className="text-muted-foreground mt-4 font-body">Review your chosen treasures before we begin the journey to your doorstep.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-6">
            {[1, 2].map((item) => (
              <div key={item} className="glass-panel rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-8 animate-fade-in">
                <div className="relative w-32 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg shrink-0">
                  <Image 
                    src={p1?.imageUrl || ''} 
                    alt="Product" 
                    fill 
                    className="object-cover" 
                    sizes="128px"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left space-y-2">
                  <h3 className="text-xl font-headline text-secondary font-bold">Royal Gold Jamdani</h3>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Category: Jamdani</p>
                  <p className="text-lg font-bold text-accent">৳ 12,500</p>
                </div>
                <div className="flex items-center gap-4 glass-panel rounded-full px-4 py-2">
                  <button className="text-secondary hover:text-primary transition-colors"><Minus className="w-4 h-4" /></button>
                  <span className="font-bold text-secondary w-4 text-center">1</span>
                  <button className="text-secondary hover:text-primary transition-colors"><Plus className="w-4 h-4" /></button>
                </div>
                <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10 rounded-full">
                  <Trash2 className="w-5 h-5" />
                </Button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="glass-panel rounded-[2rem] p-8 space-y-8 animate-fade-in delay-200">
              <h3 className="text-2xl font-headline text-secondary font-bold text-center">Order Summary</h3>
              <div className="space-y-4 font-body">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>৳ 25,000</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-primary font-bold">FREE</span>
                </div>
                <div className="pt-4 border-t border-primary/10 flex justify-between text-xl font-bold text-secondary">
                  <span>Total</span>
                  <span className="text-accent font-headline">৳ 25,000</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="glass-panel rounded-full px-4 py-2 flex items-center gap-2">
                  <input type="text" placeholder="Coupon Code" className="bg-transparent border-none focus:ring-0 text-sm flex-1 outline-none" />
                  <Button variant="ghost" size="sm" className="text-primary font-bold">Apply</Button>
                </div>
                <Link href="/checkout" className="block w-full">
                  <Button className="w-full rounded-full bg-secondary hover:bg-secondary/90 h-14 text-lg font-headline tracking-widest group">
                    Proceed to Checkout <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <p className="text-center text-xs text-muted-foreground italic">
               * Estimated Delivery: 2-4 Business Days within Bangladesh
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
