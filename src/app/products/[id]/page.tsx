import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ThreeDProductView } from '@/components/products/ThreeDProductView';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Share2, Ruler, ShieldCheck, Truck } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productImage = PlaceHolderImages.find(i => i.id === 'product-1');

  return (
    <main className="flex-1">
      <Navbar />
      
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Interactive Media */}
          <div className="space-y-6">
            <div className="aspect-[4/5] glass-panel rounded-[2rem] overflow-hidden p-4 group">
              <ThreeDProductView imageUrl={productImage?.imageUrl || ''} />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square glass-panel rounded-2xl overflow-hidden cursor-pointer hover:border-primary transition-all p-1">
                   <div className="w-full h-full rounded-xl bg-secondary/5" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="border-primary text-primary">Hand-Woven</Badge>
                <Badge variant="outline" className="border-accent text-accent">Silk Collection</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-secondary">Crimson Rose Jamdani Masterpiece</h1>
              <p className="text-3xl text-primary font-bold">৳ 18,900</p>
            </div>

            <p className="text-lg font-body text-muted-foreground leading-relaxed italic">
              Featuring a stunning rose-pink base with intricate gold Zari motifs, this Jamdani Taat saree represents the pinnacle of Tangail weaving artistry. Light as air, yet remarkably opulent.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Button size="lg" className="flex-1 rounded-full bg-secondary hover:bg-secondary/90 h-14 text-lg font-headline tracking-widest">
                  <ShoppingCart className="mr-2 w-5 h-5" /> Add to Shopping Bag
                </Button>
                <Button variant="outline" size="icon" className="w-14 h-14 rounded-full glass-panel border-primary/30">
                  <Heart className="w-6 h-6 text-primary" />
                </Button>
                <Button variant="outline" size="icon" className="w-14 h-14 rounded-full glass-panel border-primary/30">
                  <Share2 className="w-6 h-6 text-secondary" />
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-primary/10">
                <div className="text-center space-y-2">
                  <Truck className="w-6 h-6 mx-auto text-accent" />
                  <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Free Delivery</p>
                </div>
                <div className="text-center space-y-2">
                  <ShieldCheck className="w-6 h-6 mx-auto text-accent" />
                  <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Authentic Taat</p>
                </div>
                <div className="text-center space-y-2">
                  <Ruler className="w-6 h-6 mx-auto text-accent" />
                  <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">5.5 Meters</p>
                </div>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="specs" className="border-primary/10">
                <AccordionTrigger className="font-headline text-lg text-secondary">Product Specifications</AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-bold text-secondary">Material</p>
                      <p>Pure Cotton & Mulberry Silk Mix</p>
                    </div>
                    <div>
                      <p className="font-bold text-secondary">Work Type</p>
                      <p>Traditional Jamdani Weave</p>
                    </div>
                    <div>
                      <p className="font-bold text-secondary">Origin</p>
                      <p>Tangail, Bangladesh</p>
                    </div>
                    <div>
                      <p className="font-bold text-secondary">Blouse Piece</p>
                      <p>Included (Contrast Color)</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping" className="border-primary/10">
                <AccordionTrigger className="font-headline text-lg text-secondary">Shipping & Returns</AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground">
                  Enjoy complimentary express shipping across Bangladesh. We offer a 7-day hassle-free exchange for any quality-related concerns. Each saree is shipped in our signature glass-finish gift box.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}