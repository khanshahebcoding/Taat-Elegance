'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  ShoppingBag, 
  Share2, 
  Ruler, 
  ShieldCheck, 
  Truck, 
  Star, 
  Sparkles, 
  Clock, 
  ChevronRight,
  Plus,
  Minus
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = {
    name: "Crimson Rose Jamdani Masterpiece",
    price: 18900,
    category: "Jamdani",
    description: "Featuring a stunning rose-pink base with intricate gold Zari motifs, this Jamdani Taat saree represents the pinnacle of Tangail weaving artistry. Light as air, yet remarkably opulent.",
    stock: 3,
    images: [
      PlaceHolderImages.find(i => i.id === 'product-1')?.imageUrl || '',
      PlaceHolderImages.find(i => i.id === 'product-2')?.imageUrl || '',
      PlaceHolderImages.find(i => i.id === 'product-3')?.imageUrl || '',
      PlaceHolderImages.find(i => i.id === 'hero-saree')?.imageUrl || '',
    ],
    colors: [
      { name: 'Rose Pink', hex: '#E88CA8' },
      { name: 'Deep Wine', hex: '#8B1E3F' },
      { name: 'Gold Accent', hex: '#C6A75E' },
    ]
  };

  const relatedProducts = [
    { id: '2', name: 'Royal Gold Jamdani', price: 12500, category: 'Jamdani', image: PlaceHolderImages.find(i => i.id === 'product-2')?.imageUrl || '', isNew: true },
    { id: '3', name: 'Zari Border Banarasi', price: 24500, category: 'Banarasi', image: PlaceHolderImages.find(i => i.id === 'product-3')?.imageUrl || '', isNew: true },
    { id: '4', name: 'Heritage Handloom', price: 8500, category: 'Handloom', image: PlaceHolderImages.find(i => i.id === 'product-1')?.imageUrl || '', isNew: false },
  ];

  return (
    <main className="flex-1 bg-[#F7F3F2]">
      <Navbar />
      
      {/* 1. PRODUCT HERO SECTION */}
      <div className="max-w-[1280px] mx-auto px-6 py-8 md:py-20 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Left: Media Gallery */}
          <div className="space-y-4 md:space-y-6 animate-fade-in">
            <div className="relative aspect-[4/5] glass-panel rounded-[2rem] md:rounded-[2.5rem] overflow-hidden p-2 md:p-3 group">
              <div className="relative w-full h-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden">
                <Image 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <div className="absolute top-4 left-4 md:top-6 md:left-6 flex flex-col gap-2">
                   <Badge className="bg-accent text-white border-none px-3 md:px-4 py-1 md:py-1.5 rounded-full font-headline tracking-widest text-[9px] md:text-[10px]">LIMITED EDITION</Badge>
                   <Badge className="bg-secondary/80 backdrop-blur-md text-white border-none px-3 md:px-4 py-1 md:py-1.5 rounded-full font-headline tracking-widest text-[9px] md:text-[10px] flex items-center gap-1">
                     <Sparkles className="w-3 h-3" /> TRENDING
                   </Badge>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-2 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {product.images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setSelectedImage(i)}
                  className={cn(
                    "aspect-square glass-panel rounded-xl md:rounded-2xl overflow-hidden p-0.5 md:p-1 transition-all duration-300",
                    selectedImage === i ? "border-primary ring-2 ring-primary/20" : "border-transparent"
                  )}
                >
                  <div className="relative w-full h-full rounded-lg md:rounded-xl overflow-hidden">
                    <Image src={img} alt={`Thumbnail ${i}`} fill className="object-cover" sizes="128px" />
                  </div>
                </button>
              ))}
            </div>

            <div className="hidden md:flex pt-4 justify-center">
               <Button variant="ghost" className="text-secondary font-headline tracking-widest uppercase text-xs flex items-center gap-2 hover:bg-white/50 rounded-full px-8">
                 <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                 View 360&deg; Experience
               </Button>
            </div>
          </div>

          {/* Right: Info Panel */}
          <div className="space-y-6 md:space-y-10 animate-fade-in delay-100 pb-20 md:pb-0">
            <div className="glass-panel rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 space-y-6 md:space-y-8 relative overflow-hidden">
              {/* Decorative motif overlay */}
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 opacity-5 pointer-events-none select-none -translate-y-1/2 translate-x-1/2">
                <Sparkles className="w-full h-full text-primary" />
              </div>

              <div className="space-y-3 md:space-y-4">
                <p className="text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-muted-foreground">{product.category} Collection</p>
                <h1 className="text-3xl md:text-5xl font-headline font-bold text-secondary leading-tight italic">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4">
                   <div className="flex items-center gap-1 text-accent">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-3 md:w-4 h-3 md:h-4 fill-current" />)}
                   </div>
                   <p className="text-[10px] md:text-xs text-muted-foreground font-bold">(24 Artisan Reviews)</p>
                </div>
                <div className="flex items-baseline gap-3 md:gap-4">
                  <p className="text-2xl md:text-3xl text-primary font-bold">৳ {product.price.toLocaleString()}</p>
                  <p className="text-md md:text-lg text-muted-foreground line-through decoration-primary/30">৳ 22,500</p>
                  <Badge variant="outline" className="border-accent text-accent rounded-full text-[9px] md:text-[10px] font-bold">SAVE 15%</Badge>
                </div>
              </div>

              <p className="font-body text-md md:text-lg text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4 md:pl-6">
                {product.description}
              </p>

              {/* Action Area */}
              <div className="space-y-6 md:space-y-8 pt-2">
                <div className="space-y-3">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-secondary flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" /> Select Palette
                  </div>
                  <div className="flex gap-3 md:gap-4">
                    {product.colors.map((c) => (
                      <button 
                        key={c.name}
                        title={c.name}
                        className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white shadow-md transition-all hover:scale-125 hover:rotate-12 active:scale-95"
                        style={{ backgroundColor: c.hex }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 md:gap-8">
                  <div className="space-y-3">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-secondary">Blouse Piece</p>
                    <div className="flex gap-2">
                      <Button variant="outline" className="rounded-full px-5 md:px-6 h-9 md:h-10 glass-panel border-primary/20 text-secondary font-bold text-[10px] md:text-xs uppercase hover:bg-primary/10">Yes</Button>
                      <Button variant="ghost" className="rounded-full px-5 md:px-6 h-9 md:h-10 text-muted-foreground text-[10px] md:text-xs uppercase">No</Button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-secondary">Quantity</p>
                    <div className="flex items-center gap-3 md:gap-4 glass-panel rounded-full h-9 md:h-10 px-3 md:px-4">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-secondary hover:text-primary transition-colors"><Minus className="w-3 h-3 md:w-3.5 md:h-3.5" /></button>
                      <span className="font-bold text-secondary w-4 text-center text-xs md:text-sm">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="text-secondary hover:text-primary transition-colors"><Plus className="w-3 h-3 md:w-3.5 md:h-3.5" /></button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <Button className="flex-1 rounded-full bg-secondary hover:bg-secondary/90 h-14 md:h-16 text-md md:text-lg font-headline tracking-widest group shadow-xl">
                    <ShoppingBag className="mr-2 w-4 md:w-5 h-4 md:h-5 group-hover:scale-110 transition-transform" /> Add to Shopping Bag
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={cn(
                      "w-14 h-14 md:w-16 md:h-16 rounded-full glass-panel border-primary/20 transition-all shrink-0",
                      isWishlisted ? "bg-primary/10 border-primary" : "hover:bg-primary/5"
                    )}
                  >
                    <Heart className={cn("w-5 md:w-6 h-5 md:h-6", isWishlisted ? "text-primary fill-primary" : "text-secondary")} />
                  </Button>
                </div>

                <div className="flex items-center justify-between px-1 md:px-2 pt-2">
                  <div className="flex items-center gap-2 text-primary font-bold animate-pulse">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-[9px] md:text-[10px] uppercase tracking-widest">Only {product.stock} Pieces Left In Our Looms</span>
                  </div>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-secondary rounded-full">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 pt-8 md:pt-10 border-t border-primary/10">
                <div className="text-center space-y-1 md:space-y-2 group">
                  <Truck className="w-5 md:w-6 h-5 md:h-6 mx-auto text-accent group-hover:translate-x-1 transition-transform" />
                  <p className="text-[8px] md:text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Free Delivery</p>
                </div>
                <div className="text-center space-y-1 md:space-y-2 group">
                  <ShieldCheck className="w-5 md:w-6 h-5 md:h-6 mx-auto text-accent group-hover:scale-110 transition-transform" />
                  <p className="text-[8px] md:text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Authentic Taat</p>
                </div>
                <div className="text-center space-y-1 md:space-y-2 group">
                  <Ruler className="w-5 md:w-6 h-5 md:h-6 mx-auto text-accent group-hover:-translate-y-1 transition-transform" />
                  <p className="text-[8px] md:text-[9px] uppercase font-bold tracking-widest text-muted-foreground">5.5 Meters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. PRODUCT STORY SECTION */}
      <section className="py-16 md:py-24 px-6 bg-white/40">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-10">
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-secondary italic">The Story Behind This Weave</h2>
            <div className="flex items-center justify-center gap-3 md:gap-4">
               <div className="w-12 md:w-16 h-0.5 bg-accent/30 rounded-full" />
               <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-accent" />
               <div className="w-12 md:w-16 h-0.5 bg-accent/30 rounded-full" />
            </div>
          </div>
          <p className="font-body text-lg md:text-xl text-muted-foreground italic leading-relaxed max-w-3xl mx-auto">
            Inspired by the summer blooms of the Tangail riverside, this Jamdani weave captures the transient beauty of the rose. Each motif is a whisper of history, woven by a master artisan who spent 48 hours breathing life into every knot. 
          </p>
          <div className="pt-6 md:pt-8">
            <div className="relative aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80" 
                alt="Fabric Detail"
                fill
                className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
                sizes="100vw"
                data-ai-hint="silk texture"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SPECIFICATIONS SECTION */}
      <section className="py-16 md:py-24 px-6 max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl order-2 md:order-1">
           <Image 
            src={PlaceHolderImages.find(i => i.id === 'product-3')?.imageUrl || ''} 
            alt="Product Detail" 
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
           />
           <div className="absolute inset-0 bg-secondary/10" />
        </div>
        <div className="space-y-8 md:space-y-10 order-1 md:order-2">
           <h2 className="text-3xl md:text-4xl font-headline font-bold text-secondary">A Masterpiece <br /> <span className="text-primary italic">in Detail</span></h2>
           <Accordion type="single" collapsible className="w-full">
              {[
                { title: "Fabric & Composition", content: "A luxurious blend of 70% pure Tangail cotton and 30% Mulberry silk, offering a balance of breathability and an opulent sheen." },
                { title: "Weaving Technique", content: "Traditional hand-loomed Jamdani technique using the supplementary weft method. Each floral motif is individually hand-interwoven." },
                { title: "Dimensions & Fit", content: "Standard length of 5.5 meters with an additional 0.8 meters contrast blouse piece. Width is 45 inches." },
                { title: "Origin & Artisan Hub", content: "Painstakingly crafted in the historic weaving cluster of Tangail, Bangladesh, known globally for the Taat heritage." },
                { title: "Care Instructions", content: "Dry clean only recommended to preserve the integrity of the gold Zari work and silk fibers. Store in a muslin cloth." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-primary/10 py-1 md:py-2">
                  <AccordionTrigger className="font-headline text-md md:text-lg text-secondary hover:no-underline group text-left">
                    <span className="group-hover:text-primary transition-colors">{item.title}</span>
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground text-md md:text-lg leading-relaxed pt-2">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
        </div>
      </section>

      {/* 4. STYLING RECOMMENDATION */}
      <section className="py-16 md:py-24 px-6 bg-secondary/5 overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <div className="glass-panel rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-20 relative">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="space-y-6 md:space-y-10 text-center md:text-left order-2 md:order-1">
                <Badge variant="outline" className="border-accent text-accent font-headline tracking-widest uppercase px-4 md:px-6 py-1 rounded-full text-[10px] md:text-xs">Editorial Styling</Badge>
                <h2 className="text-3xl md:text-5xl font-headline font-bold text-secondary italic">Perfect For Your <br /><span className="text-primary">Elegance</span></h2>
                <div className="space-y-6 md:space-y-8 font-body text-lg md:text-xl text-muted-foreground italic leading-relaxed">
                  <p>“Pair this rose-tinted masterpiece with vintage gold jewelry and a messy bun for an effortlessly royal wedding look.”</p>
                  <ul className="space-y-3 md:space-y-4 not-italic font-headline text-md md:text-lg text-secondary uppercase tracking-widest">
                    <li className="flex items-center gap-3 md:gap-4 justify-center md:justify-start">
                      <div className="w-6 md:w-8 h-[1px] bg-primary" /> Polki or Antique Gold Sets
                    </li>
                    <li className="flex items-center gap-3 md:gap-4 justify-center md:justify-start">
                      <div className="w-6 md:w-8 h-[1px] bg-primary" /> Raw Silk Contrast Blouse
                    </li>
                    <li className="flex items-center gap-3 md:gap-4 justify-center md:justify-start">
                      <div className="w-6 md:w-8 h-[1px] bg-primary" /> Embellished Mojaris
                    </li>
                  </ul>
                </div>
                <Button className="rounded-full bg-secondary hover:bg-secondary/90 text-white font-headline tracking-widest px-8 md:px-10 h-12 md:h-14 group">
                  SHOP THE LOOK <ChevronRight className="ml-2 w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="relative order-1 md:order-2">
                <div className="aspect-[3/4] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl animate-float">
                  <Image 
                    src={PlaceHolderImages.find(i => i.id === 'hero-saree')?.imageUrl || ''} 
                    alt="Styling Inspiration" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ARTISAN FEATURE BLOCK */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="glass-panel rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12 group">
            <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 md:border-8 border-white/50 shadow-xl shrink-0 group-hover:scale-105 transition-transform duration-700">
               <Image 
                src={PlaceHolderImages.find(i => i.id === 'artisan')?.imageUrl || ''} 
                alt="Master Weaver" 
                fill 
                className="object-cover"
                sizes="256px"
               />
            </div>
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
               <h3 className="text-2xl md:text-3xl font-headline font-bold text-secondary">Handcrafted by <br /> <span className="text-primary italic">Master Weavers</span></h3>
               <p className="font-body text-md md:text-lg text-muted-foreground italic leading-relaxed">
                 Behind this saree is the legacy of Tangail. Our weavers aren't just craftsmen; they are guardians of a century-old rhythm that finds poetry in every cotton thread.
               </p>
               <div className="grid grid-cols-2 gap-6 md:gap-8 pt-2">
                 <div className="space-y-1">
                   <p className="text-xl md:text-2xl font-headline font-bold text-accent">50+ Years</p>
                   <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Ancestral Expertise</p>
                 </div>
                 <div className="space-y-1">
                   <p className="text-xl md:text-2xl font-headline font-bold text-accent">100%</p>
                   <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Authentic Handloom</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. REVIEWS SECTION */}
      <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center space-y-8 md:space-y-10 mb-12 md:mb-20">
           <h2 className="text-3xl md:text-4xl font-headline font-bold text-secondary italic">Loved by Our Artisans & Patrons</h2>
           <div className="flex items-center justify-center gap-8 md:gap-12">
              <div className="text-center">
                 <p className="text-4xl md:text-6xl font-headline font-bold text-secondary">4.9</p>
                 <div className="flex items-center justify-center gap-0.5 md:gap-1 text-accent mt-2">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 md:w-4 h-3 md:h-4 fill-current" />)}
                 </div>
                 <p className="text-[9px] md:text-xs uppercase font-bold text-muted-foreground tracking-widest mt-2">Patron Rating</p>
              </div>
              <div className="w-px h-16 md:h-24 bg-primary/10" />
              <div className="text-center">
                 <p className="text-4xl md:text-6xl font-headline font-bold text-secondary">24</p>
                 <p className="text-[9px] md:text-xs uppercase font-bold text-muted-foreground tracking-widest mt-2">Verified Reviews</p>
              </div>
           </div>
           <Button className="rounded-full bg-accent hover:bg-accent/90 px-8 md:px-12 h-12 md:h-14 text-white font-headline tracking-widest text-md md:text-lg shadow-xl transition-all hover:scale-105">
             WRITE A REVIEW
           </Button>
        </div>

        <div className="space-y-6 md:space-y-8">
           {[1, 2].map((i) => (
             <div key={i} className="glass-panel rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 space-y-4 md:space-y-6 hover:shadow-2xl transition-all animate-fade-in" style={{ animationDelay: `${i * 200}ms` }}>
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">A</div>
                      <div>
                        <p className="text-md md:text-lg font-headline font-bold text-secondary">Ayesha Rahman</p>
                        <p className="text-[8px] md:text-[10px] uppercase font-bold text-accent tracking-widest">Verified Purchase</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-0.5 md:gap-1 text-accent">
                      {[1,2,3,4,5].map(j => <Star key={j} className="w-2.5 md:w-3 h-2.5 md:h-3 fill-current" />)}
                   </div>
                </div>
                <p className="font-body text-md md:text-lg text-muted-foreground italic leading-relaxed">
                  "This saree is truly like wearing a piece of art. The quality of the Jamdani weave is exceptional, much better than anything I've seen in big showrooms. The rose-pink color is even more beautiful in person."
                </p>
                <p className="text-[9px] md:text-[10px] text-muted-foreground italic font-bold">Review posted 2 weeks ago</p>
             </div>
           ))}
        </div>
      </section>

      {/* 7. RELATED PRODUCTS */}
      <section className="py-16 md:py-24 px-6 max-w-[1280px] mx-auto text-center space-y-12 md:space-y-16">
        <h2 className="text-3xl md:text-5xl font-headline font-bold text-secondary italic">You May Also Love</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {relatedProducts.map((p, idx) => (
            <div key={p.id} className="animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
              <ProductCard {...p} />
            </div>
          ))}
        </div>
        <Button variant="link" className="text-primary font-headline tracking-[0.2em] text-md md:text-lg hover:no-underline group pt-4">
          EXPLORE ENTIRE COLLECTION <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </section>

      {/* Mobile Sticky Add to Cart Bar */}
      <div className="lg:hidden fixed bottom-[88px] left-0 w-full p-4 z-50 pointer-events-none">
        <div className="glass-panel rounded-full p-2 flex items-center gap-4 shadow-2xl pointer-events-auto border-white/60">
           <div className="flex-1 px-4">
             <p className="text-[8px] uppercase font-bold text-muted-foreground tracking-tight">Price</p>
             <p className="text-sm font-bold text-secondary">৳ {product.price.toLocaleString()}</p>
           </div>
           <Button className="rounded-full bg-secondary hover:bg-secondary/90 text-white px-6 h-12 text-[10px] font-headline tracking-widest flex-1">
             ADD TO BAG
           </Button>
        </div>
      </div>

      <Footer />
    </main>
  );
}