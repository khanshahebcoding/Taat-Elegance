'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Clock, 
  Users, 
  CheckCircle, 
  Scissors, 
  Palette, 
  Layers, 
  Play,
  Quote
} from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function HeritagePage() {
  const heroImage = PlaceHolderImages.find(i => i.id === 'hero-saree');
  const artisanImage = PlaceHolderImages.find(i => i.id === 'artisan');
  const processImage = PlaceHolderImages.find(i => i.id === 'product-3');

  const TIMELINE_EVENTS = [
    { year: '1900s', title: 'Handloom Legacy Begins', desc: 'The traditional weaving centers of Tangail and Pabna establish their unique identities.' },
    { year: '1950s', title: 'Regional Expansion', desc: 'Saree weaving becomes the heartbeat of Bengali rural economy and cultural expression.' },
    { year: '1990s', title: 'Modern Boutique Evolution', desc: 'The transition from local looms to curated boutique experiences for the global woman.' },
    { year: 'Today', title: 'Taat Elegance Revival', desc: 'Preserving ancient techniques while embracing contemporary luxury and sustainable fashion.' },
  ];

  const STEPS = [
    { icon: Scissors, title: 'Cotton Selection', desc: 'Sourcing the finest natural fibers and mulberry silk from local farmers.' },
    { icon: Palette, title: 'Dyeing Process', desc: 'Master dyers create our signature wine and blush hues using age-old recipes.' },
    { icon: Layers, title: 'Handloom Weaving', desc: 'Each saree is painstakingly woven by hand, thread by thread, on traditional wooden looms.' },
    { icon: CheckCircle, title: 'Finishing & Detailing', desc: 'Final zari work and quality checks ensure a masterpiece ready for your collection.' },
  ];

  return (
    <main className="flex-1 bg-background overflow-x-hidden">
      <Navbar />

      {/* 1. HERO SECTION – Emotional & Cinematic */}
      <section className="relative min-h-[80vh] flex items-center px-6 py-20 max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8 text-center md:text-left animate-fade-in">
            <Badge variant="outline" className="border-accent text-accent font-headline tracking-widest uppercase px-6 py-1 rounded-full">
              OUR HERITAGE
            </Badge>
            <h1 className="text-5xl md:text-7xl font-headline font-bold text-secondary leading-tight">
              Threads of Legacy, <br />
              <span className="text-primary italic">Woven Through Generations</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground italic max-w-lg mx-auto md:mx-0 leading-relaxed">
              For centuries, Bengal’s weavers have preserved artistry in every thread. We invite you to discover the soul of our looms.
            </p>
          </div>
          
          <div className="relative animate-float">
            <div className="relative aspect-[4/5] max-w-[450px] mx-auto rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src={artisanImage?.imageUrl || ''} 
                alt="Bengali Weaver" 
                fill 
                className="object-cover"
                priority
                sizes="100vw"
                data-ai-hint="handloom weaving"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
            </div>
            {/* Soft decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </section>

      {/* 2. ORIGIN STORY SECTION */}
      <section className="px-6 py-24 max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-xl animate-fade-in">
            <Image 
              src="https://picsum.photos/seed/loom/800/1000" 
              alt="Handloom Detail" 
              fill 
              className="object-cover"
              sizes="100vw"
              data-ai-hint="weaving loom"
            />
            <div className="absolute inset-0 bg-secondary/5" />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-secondary">The Loom of Tradition</h2>
            <div className="w-16 h-1 bg-accent rounded-full" />
            <p className="font-body text-lg text-muted-foreground italic leading-relaxed">
              In the historic weaving hubs of Tangail, Pabna, and Dhaka, the click-clack of the handloom is a symphony that has played for centuries. The Taat saree is more than just fabric; it is the heartbeat of a culture that finds beauty in the patient rhythm of the hand.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-primary/10">
              <div className="text-center space-y-2">
                <CheckCircle className="w-6 h-6 mx-auto text-primary" />
                <p className="text-2xl font-headline font-bold text-secondary">100%</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Handwoven</p>
              </div>
              <div className="text-center space-y-2">
                <Clock className="w-6 h-6 mx-auto text-primary" />
                <p className="text-2xl font-headline font-bold text-secondary">48 Hours</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">To Weave One Piece</p>
              </div>
              <div className="text-center space-y-2">
                <Users className="w-6 h-6 mx-auto text-primary" />
                <p className="text-2xl font-headline font-bold text-secondary">50+</p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Master Artisans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TIMELINE SECTION */}
      <section className="py-24 px-6 bg-secondary/5 overflow-hidden">
        <div className="max-w-[1280px] mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-secondary">A Journey Through Time</h2>
            <p className="text-muted-foreground italic font-body text-lg">Evolution of our artisanal heritage</p>
          </div>
          
          <div className="relative pt-12">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2 hidden md:block" />
            
            <div className="grid md:grid-cols-4 gap-12 relative z-10">
              {TIMELINE_EVENTS.map((event, idx) => (
                <div key={idx} className="space-y-6 animate-fade-in" style={{ animationDelay: `${idx * 200}ms` }}>
                  <div className="relative flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-white border-4 border-primary shadow-xl flex items-center justify-center text-primary font-headline font-bold text-lg mb-4 md:mb-0 md:absolute md:top-1/2 md:-translate-y-1/2">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="glass-panel rounded-3xl p-8 pt-12 md:mt-16 space-y-4 hover:shadow-2xl transition-all hover:-translate-y-2">
                    <h3 className="text-2xl font-headline font-bold text-accent">{event.year}</h3>
                    <h4 className="text-lg font-bold text-secondary leading-tight">{event.title}</h4>
                    <p className="text-sm text-muted-foreground italic leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. ARTISAN FEATURE SECTION */}
      <section className="py-32 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="glass-panel rounded-[3rem] p-12 md:p-20 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1/4 h-full bg-primary/5 -skew-x-12 -translate-x-1/2" />
            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image 
                  src="https://picsum.photos/seed/artisan-portrait/600/800" 
                  alt="Senior Artisan" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  sizes="100vw"
                  data-ai-hint="artisan portrait"
                />
                <div className="absolute inset-0 bg-secondary/10" />
              </div>
              <div className="space-y-8 text-center md:text-left">
                <Quote className="w-12 h-12 text-primary/30 mx-auto md:mx-0" />
                <h3 className="text-3xl font-headline font-bold text-secondary italic leading-snug">
                  "Every saree carries the soul of the weaver. When you wear a Taat Elegance piece, you are wearing a part of our history."
                </h3>
                <div className="space-y-1">
                  <p className="text-xl font-headline font-bold text-secondary">Master Weaver Kashem Ali</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold italic">40 Years of Artistry in Tangail</p>
                </div>
                <div className="w-16 h-0.5 bg-accent mx-auto md:mx-0" />
                <p className="font-body text-muted-foreground leading-relaxed">
                  Having begun his journey at the age of 14, Kashem Ali is one of our senior-most artisans. His hands move with a grace that only decades of devotion can bring.
                </p>
                <div className="pt-4">
                  <span className="font-headline text-3xl text-primary/20 italic select-none">K. Ali</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section className="py-24 px-6 max-w-[1280px] mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-secondary">From Thread to Timeless Art</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-muted-foreground italic font-body text-lg">A meticulous journey of craftsmanship</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, idx) => (
            <div key={idx} className="glass-card rounded-[2rem] p-10 text-center space-y-6 group hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <step.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-headline font-bold text-secondary">{step.title}</h4>
              <p className="text-sm text-muted-foreground italic leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CULTURAL SIGNIFICANCE SECTION */}
      <section className="py-24 px-6 bg-secondary/5 relative overflow-hidden">
        {/* Subtle Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none w-full h-full flex items-center justify-center">
          <svg width="600" height="600" viewBox="0 0 100 100" className="text-primary">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-secondary italic">A Symbol of Identity</h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
          <p className="text-xl md:text-2xl font-body text-muted-foreground leading-relaxed italic">
            The Taat saree is woven into the very fabric of Bengali life. It is the grace of a bride's first step, the radiance of Pohela Boishakh festivities, and the silent strength of everyday elegance. To wear Taat is to celebrate the identity of a land that finds poetry in cotton and silk.
          </p>
        </div>
      </section>

      {/* 7. VIDEO / IMMERSIVE BLOCK */}
      <section className="py-32 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer">
            <Image 
              src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80" 
              alt="Art of Weaving Video" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="100vw"
              data-ai-hint="silk saree"
            />
            <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full glass-panel flex items-center justify-center text-primary group-hover:scale-110 transition-all shadow-2xl">
                <Play className="w-10 h-10 fill-primary ml-1" />
              </div>
            </div>
            <div className="absolute bottom-12 left-12">
               <p className="text-white font-headline text-3xl font-bold italic tracking-wider shadow-sm">Watch the Art of Weaving</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CLOSING SECTION – Emotional CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-10 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-headline font-bold text-secondary italic">
            Preserving the Past. <br />
            <span className="text-primary">Dressing the Future.</span>
          </h2>
          <div className="w-32 h-0.5 bg-accent mx-auto" />
          <p className="text-xl font-body text-muted-foreground italic leading-relaxed">
            Join us in our mission to keep the click-clack of the looms alive. Own a piece of history that never goes out of style.
          </p>
          <div className="pt-6">
             <Link href="/products">
               <Button className="rounded-full bg-secondary hover:bg-secondary/90 px-12 h-14 text-white font-headline tracking-widest text-lg shadow-xl hover:scale-105 transition-all group">
                  EXPLORE OUR COLLECTIONS <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </Button>
             </Link>
          </div>
          <div className="pt-12">
            <div className="w-12 h-1 bg-accent/20 mx-auto rounded-full" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
