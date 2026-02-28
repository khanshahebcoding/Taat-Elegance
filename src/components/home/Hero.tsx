"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const [particles, setParticles] = useState<{ id: number; left: string; duration: string; delay: string; size: string }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${10 + Math.random() * 10}s`,
      delay: `${Math.random() * 5}s`,
      size: `${10 + Math.random() * 20}px`
    }));
    setParticles(newParticles);
  }, []);

  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-saree');

  return (
    <div className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center">
      {/* Background Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="flower-particle"
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        >
          <svg
            width={p.size}
            height={p.size}
            viewBox="0 0 24 24"
            fill="none"
            className="text-primary/20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 1L14.5 9L22.5 9L16 14L18.5 22L12 17L5.5 22L8 14L1.5 9L9.5 9L12 1Z" fill="currentColor" />
          </svg>
        </div>
      ))}

      <div className="relative z-10 max-w-[1280px] w-full grid md:grid-cols-2 items-center gap-12 px-6">
        <div className="text-center md:text-left space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-1.5 glass-panel rounded-full text-xs font-semibold tracking-widest text-secondary uppercase border-primary/20">
            Heritage Collection 2024
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-secondary leading-tight">
            Woven with <span className="text-primary italic">Grace</span>, <br />
            Worn with <span className="text-accent italic">Pride</span>.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0 font-body italic leading-relaxed">
            Experience the timeless allure of authentic hand-loomed Taat sarees. Every thread tells a story of tradition, elegance, and artisanal mastery.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-12 text-md tracking-wider">
              Explore Collection <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="glass-panel border-primary/30 text-secondary hover:bg-primary/10 rounded-full px-8 h-12 text-md tracking-wider">
              Our Heritage
            </Button>
          </div>
        </div>

        <div className="hidden md:block relative animate-float">
          <div className="relative w-full aspect-[4/5] glass-panel rounded-[2rem] overflow-hidden p-3 group">
            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
              <Image
                src={heroImage?.imageUrl || ''}
                alt={heroImage?.description || ''}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                priority
                sizes="100vw"
                data-ai-hint={heroImage?.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
            </div>
            {/* Overlay stats */}
            <div className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-2xl animate-fade-in delay-300">
              <p className="text-3xl font-headline font-bold text-secondary">300+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Artisans Engaged</p>
            </div>
            <div className="absolute top-12 -right-8 glass-panel p-4 rounded-2xl animate-fade-in delay-500 max-w-[150px]">
              <div className="flex gap-1 mb-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-2 h-2 rounded-full bg-accent" />
                ))}
              </div>
              <p className="text-[10px] uppercase font-bold text-secondary">Premium Handloom Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
