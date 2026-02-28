"use client"

import React from 'react';
import { ProductCard } from '../products/ProductCard';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

const FEATURED_PRODUCTS = [
  { id: '1', name: 'Royal Gold Jamdani', price: 12500, category: 'Jamdani', image: PlaceHolderImages.find(i => i.id === 'product-1')?.imageUrl || '', isNew: true },
  { id: '2', name: 'Crimson Rose Katan', price: 18900, category: 'Katan', image: PlaceHolderImages.find(i => i.id === 'product-2')?.imageUrl || '', isNew: false },
  { id: '3', name: 'Zari Border Banarasi', price: 24500, category: 'Banarasi', image: PlaceHolderImages.find(i => i.id === 'product-3')?.imageUrl || '', isNew: true },
  { id: '4', name: 'Heritage Handloom', price: 8500, category: 'Handloom', image: PlaceHolderImages.find(i => i.id === 'product-1')?.imageUrl || '', isNew: false },
];

export function FeaturedProducts() {
  return (
    <section className="py-24 px-6 max-w-[1280px] mx-auto w-full text-center">
      <div className="mb-16 space-y-4">
        <h2 className="text-4xl md:text-5xl font-headline text-secondary font-bold">The Signature Collection</h2>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        <p className="text-muted-foreground max-w-2xl mx-auto font-body">
          Our most sought-after masterpieces, hand-selected for their exceptional craftsmanship and timeless design.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {FEATURED_PRODUCTS.map((product) => (
          <div key={product.id} className="animate-fade-in">
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      <div className="mt-16">
        <Button variant="outline" size="lg" className="rounded-full px-12 glass-panel text-secondary font-headline tracking-widest hover:bg-primary/10">
          View All Masterpieces
        </Button>
      </div>
    </section>
  );
}