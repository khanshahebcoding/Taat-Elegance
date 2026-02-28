import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-white/30 backdrop-blur-xl border-t border-primary/20 pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div className="space-y-6">
            <h3 className="font-headline text-2xl font-bold tracking-widest text-secondary">
              TAAT <span className="text-primary font-normal">ELEGANCE</span>
            </h3>
            <p className="text-muted-foreground italic text-sm leading-relaxed max-w-sm mx-auto">
              Preserving the rich heritage of handloom weaving, we bring the finest sarees from our looms to your wardrobe. Elegance woven for the modern woman.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-secondary hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-secondary hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-secondary hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline text-lg font-bold text-secondary tracking-widest uppercase">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              <li><Link href="/products" className="hover:text-primary transition-colors">Our Catalog</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">The Heritage</Link></li>
              <li><Link href="/artisans" className="hover:text-primary transition-colors">Meet the Weavers</Link></li>
              <li><Link href="/care" className="hover:text-primary transition-colors">Saree Care Guide</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline text-lg font-bold text-secondary tracking-widest uppercase">Visit Our Boutique</h4>
            <div className="space-y-4 text-sm text-muted-foreground flex flex-col items-center">
              <p className="flex items-center gap-3"><MapPin className="w-4 h-4 text-primary" /> Banani, Dhaka, Bangladesh</p>
              <p className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary" /> +880 1234 567890</p>
              <p className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary" /> hello@taatelegance.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-10">
          <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">
            © 2024 Taat Elegance. Crafted with Heart & Heritage.
          </p>
        </div>
      </div>
    </footer>
  );
}