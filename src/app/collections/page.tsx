'use client';

import React, { useEffect, useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, Heart, Users } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const COLLECTIONS = [
  {
    id: 'bridal',
    title: 'Bridal Heritage',
    description: 'A tribute to the timeless grace of the Bengali bride. These heavy Jamdani and Katan weaves feature intricate gold Zari work that takes months to complete.',
    stats: '12 Masterpieces | Katan & Jamdani | Limited Edition',
    image: PlaceHolderImages.find(i => i.id === 'product-3')?.imageUrl || '',
    previews: [
      { name: 'Royal Crimson Katan', price: '৳ 45,000', image: PlaceHolderImages.find(i => i.id === 'product-2')?.imageUrl || '' },
      { name: 'Gold Leaf Jamdani', price: '৳ 38,500', image: PlaceHolderImages.find(i => i.id === 'product-3')?.imageUrl || '' },
      { name: 'Ivory Zari Masterpiece', price: '৳ 52,000', image: PlaceHolderImages.find(i => i.id === 'product-1')?.imageUrl || '' },
    ]
  },
  {
    id: 'festive',
    title: 'Festive Radiance',
    description: 'Celebrate the vibrant spirit of festivities with our lighter, yet incredibly opulent silk blends. Designed for movement, grace, and effortless elegance.',
    stats: '24 Designs | Silk Blends | New Arrival',
    image: PlaceHolderImages.find(i => i.id === 'product-2')?.imageUrl || '',
    previews: [
      { name: 'Emerald Silk Weave', price: '৳ 18,500', image: PlaceHolderImages.find(i => i.id === 'product-1')?.imageUrl || '' },
      { name: 'Sunset Bloom Saree', price: '৳ 22,000', image: PlaceHolderImages.find(i => i.id === 'product-2')?.imageUrl || '' },
      { name: 'Midnight Rose Saree', price: '৳ 21,500', image: PlaceHolderImages.find(i => i.id === 'product-3')?.imageUrl || '' },
    ]
  },
  {
    id: 'everyday',
    title: 'Everyday Elegance',
    description: 'Breathtakingly soft cotton Taat sarees for the woman who finds beauty in simplicity. Breathable, durable, and perfect for the tropical climate.',
    stats: '40 Designs | Pure Cotton | Hand-Loomed',
    image: PlaceHolderImages.find(i => i.id === 'product-1')?.imageUrl || '',
    previews: [
      { name: 'Simple Pastel Taat', price: '৳ 6,500', image: PlaceHolderImages.find(i => i.id === 'product-3')?.imageUrl || '' },
      { name: 'Morning Dew Cotton', price: '৳ 7,200', image: PlaceHolderImages.find(i => i.id === 'product-1')?.imageUrl || '' },
      { name: 'Classic Tangail Border', price: '৳ 8,000', image: PlaceHolderImages.find(i => i.id === 'product-2')?.imageUrl || '' },
    ]
  }
];

export default function CollectionsPage() {
  const heroImage = PlaceHolderImages.find(i => i.id === 'hero-saree');
  const artisanImage = PlaceHolderImages.find(i => i.id === 'artisan');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="flex-1 bg-background overflow-x-hidden">
      <Navbar />

      {/* 1. HERO SECTION (Editorial Style) */}
      <section className="relative min-h-[70vh] flex items-center px-6 py-20 max-w-[1280px] mx-auto overflow-visible">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8 text-center md:text-left animate-fade-in order-2 md:order-1">
            <Badge variant="outline" className="border-accent text-accent font-headline tracking-widest uppercase px-6 py-1 rounded-full">
              OUR COLLECTIONS
            </Badge>
            <h1 className="text-5xl md:text-7xl font-headline font-bold text-secondary leading-tight">
              Curated Expressions <br />
              <span className="text-primary italic">of Heritage</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground italic max-w-lg mx-auto md:mx-0 leading-relaxed">
              Each collection celebrates a distinct chapter of Bengal’s weaving tradition, from the royal courts to the humble handlooms of Tangail.
            </p>
            <div className="pt-4">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-10 h-14 text-lg font-headline tracking-widest group">
                Begin the Journey <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="relative aspect-[4/5] max-w-[450px] mx-auto rounded-[3rem] overflow-hidden shadow-2xl animate-float">
              <Image 
                src={heroImage?.imageUrl || ''} 
                alt="Editorial Saree" 
                fill 
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
            </div>
            {/* Soft decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </section>

      {/* 2. STICKY NAV BAR */}
      <div className={cn(
        "sticky top-[4.5rem] z-40 w-full transition-all duration-300 flex justify-center px-6 pointer-events-none",
        isSticky ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      )}>
        <div className="glass-panel rounded-full px-4 py-2 flex items-center gap-2 pointer-events-auto shadow-lg border-white/50">
          {['Bridal', 'Festive', 'Everyday', 'Exclusive'].map((nav) => (
            <button
              key={nav}
              onClick={() => scrollToSection(nav.toLowerCase())}
              className="px-6 py-1.5 rounded-full text-xs font-headline font-bold tracking-widest text-secondary hover:bg-primary/20 transition-all uppercase"
            >
              {nav}
            </button>
          ))}
        </div>
      </div>

      {/* 3. FEATURED COLLECTION BLOCKS */}
      <section className="px-6 py-24 space-y-32 max-w-[1280px] mx-auto">
        {COLLECTIONS.map((collection, idx) => (
          <div key={collection.id} id={collection.id} className="space-y-16 animate-fade-in" style={{ animationDelay: `${idx * 200}ms` }}>
            <div className={cn(
              "glass-panel rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 md:gap-20 transition-all hover:shadow-2xl",
              idx % 2 !== 0 && "md:flex-row-reverse"
            )}>
              <div className="relative w-full md:w-1/2 aspect-[16/10] md:aspect-square rounded-[2rem] overflow-hidden shadow-xl group">
                <Image 
                  src={collection.image} 
                  alt={collection.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-secondary/5 group-hover:bg-transparent transition-colors" />
              </div>
              
              <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                <Badge variant="outline" className="border-primary/30 text-primary uppercase tracking-[0.2em] px-4 py-1">Featured Collection</Badge>
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-secondary">{collection.title}</h2>
                <p className="font-body text-lg text-muted-foreground italic leading-relaxed">
                  {collection.description}
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 py-4 border-y border-primary/10">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> {collection.stats.split('|')[0]}
                  </span>
                  <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{collection.stats.split('|')[1]}</span>
                  <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">{collection.stats.split('|')[2]}</span>
                </div>
                <Button variant="outline" className="rounded-full border-primary/20 text-secondary font-headline tracking-widest px-8 h-12 hover:bg-primary/10 transition-all group">
                  Explore Collection <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Collection Preview Grid (Minimal) */}
            <div className="space-y-8 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">Preview the Selection</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {collection.previews.map((item, pIdx) => (
                  <div key={pIdx} className="glass-card rounded-[2rem] p-3 group">
                    <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden mb-4">
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="100vw" />
                      <button className="absolute top-4 right-4 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all hover:scale-110">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="text-center space-y-1 pb-2">
                      <h4 className="font-headline font-bold text-secondary text-lg">{item.name}</h4>
                      <p className="text-accent font-bold tracking-widest text-sm">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Button variant="link" className="text-primary font-headline tracking-widest text-lg hover:no-underline hover:text-secondary transition-colors group">
                  View All in This Collection <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 4. ARTISAN STORY SECTION */}
      <section className="py-24 px-6 bg-secondary/5 overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <div className="glass-panel rounded-[3rem] p-12 relative">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image 
                  src={artisanImage?.imageUrl || ''} 
                  alt="Artisan Story" 
                  fill 
                  className="object-cover" 
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-secondary/10" />
              </div>
              <div className="space-y-8 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-headline font-bold text-secondary">The Hands Behind <br /><span className="text-primary">the Heritage</span></h2>
                <div className="w-16 h-1 bg-accent rounded-full mx-auto md:mx-0" />
                <p className="font-body text-xl text-muted-foreground italic leading-relaxed">
                  "Every saree is a conversation between the weaver and the thread. We don't just make clothes; we preserve a heartbeat that has lived for generations in Tangail."
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 justify-center md:justify-start text-primary">
                      <Users className="w-5 h-5" />
                      <p className="text-2xl font-headline font-bold">50+</p>
                    </div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Master Weavers</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-headline font-bold text-primary">100%</p>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Hand-Loomed</p>
                  </div>
                </div>
                <Button className="rounded-full bg-secondary hover:bg-secondary/90 text-white font-headline tracking-widest px-8 h-12">
                  Meet Our Artisans
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LIMITED EDITION SPOTLIGHT */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-10 animate-fade-in">
          <Badge className="bg-accent/20 text-accent border-none px-6 py-2 rounded-full font-headline tracking-widest uppercase text-sm">
             Exclusive Release
          </Badge>
          <h2 className="text-5xl md:text-7xl font-headline font-bold text-secondary italic">
            Artisan Exclusive Series
          </h2>
          <div className="w-32 h-0.5 bg-accent mx-auto" />
          <p className="text-2xl font-body text-muted-foreground italic leading-snug">
            “Only 25 Pieces Crafted This Season”
          </p>
          <div className="pt-6">
             <Button className="rounded-full bg-accent hover:bg-accent/90 px-12 h-14 text-white font-headline tracking-widest text-lg shadow-xl hover:scale-105 transition-all">
                REQUEST ACCESS
             </Button>
          </div>
          <p className="text-xs uppercase tracking-widest text-primary animate-pulse font-bold">
            ✨ Rediscover the Rare Weaves
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
