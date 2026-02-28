import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/home/Hero';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const artisanImage = PlaceHolderImages.find(i => i.id === 'artisan');

  return (
    <main className="flex-1 overflow-x-hidden">
      <Navbar />
      <Hero />
      
      {/* Heritage Story Section */}
      <section className="py-24 px-6 max-w-[1280px] mx-auto w-full">
        <div className="glass-panel rounded-[3rem] p-12 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl">
            <Image 
              src={artisanImage?.imageUrl || ''} 
              alt={artisanImage?.description || ''} 
              fill 
              className="object-cover"
              sizes="100vw"
              data-ai-hint={artisanImage?.imageHint}
            />
            <div className="absolute inset-0 bg-secondary/10" />
          </div>
          <div className="space-y-8 text-center md:text-left">
            <Badge variant="outline" className="border-accent text-accent font-headline tracking-widest uppercase px-4 py-1">Our Soul</Badge>
            <h2 className="text-4xl font-headline font-bold text-secondary">The Loom of Legacy</h2>
            <p className="font-body text-lg text-muted-foreground italic leading-relaxed">
              In every knot and weave of our sarees lies a century of heritage. Our master artisans in Tangail have preserved the intricate art of hand-looming, ensuring each Taat Elegance saree is a unique piece of wearable art.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-2xl font-headline font-bold text-primary">100%</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Natural Fibers</p>
              </div>
              <div>
                <p className="text-2xl font-headline font-bold text-primary">48 Hours</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">To Weave One Piece</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts />

      {/* Testimonials or Emotional Quote */}
      <section className="py-24 text-center px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <span className="text-6xl text-primary/30 font-headline">"</span>
          <p className="text-3xl font-headline italic text-secondary leading-snug">
            A Taat saree isn't just an outfit; it's the warmth of home, the pride of heritage, and the silence of elegance all woven together.
          </p>
          <div className="w-12 h-0.5 bg-accent mx-auto" />
          <p className="uppercase tracking-[0.3em] text-xs font-bold text-muted-foreground">Traditional Proverb</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
