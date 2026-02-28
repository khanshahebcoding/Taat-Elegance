"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
}

export function ProductCard({ id, name, price, image, category, isNew }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [burst, setBurst] = useState(false);
  const { toast } = useToast();

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    if (!isWishlisted) {
      setBurst(true);
      setTimeout(() => setBurst(false), 600);
      toast({
        title: "Added to Wishlist",
        description: `${name} is now in your favorites.`,
      });
    }
  };

  return (
    <div className="group glass-card rounded-[1.5rem] overflow-hidden flex flex-col h-full relative p-2">
      <Link href={`/products/${id}`} className="block relative aspect-[3/4] rounded-[1.2rem] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
           <Button size="icon" variant="secondary" className="rounded-full w-10 h-10 glass-panel shadow-lg">
             <Eye className="w-4 h-4" />
           </Button>
           <Button size="icon" variant="primary" className="rounded-full w-10 h-10 shadow-lg">
             <ShoppingCart className="w-4 h-4" />
           </Button>
        </div>
        
        {isNew && (
          <Badge className="absolute top-4 left-4 bg-accent text-white font-headline tracking-widest px-3 py-1">
            NEW
          </Badge>
        )}

        <button 
          onClick={handleWishlist}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass-panel flex items-center justify-center transition-all hover:scale-110 active:scale-90"
        >
          <Heart className={cn("w-5 h-5 transition-colors", isWishlisted ? "fill-primary text-primary" : "text-secondary")} />
          {burst && <div className="absolute inset-0 animate-heart-burst flex items-center justify-center"><Heart className="w-8 h-8 text-primary fill-primary" /></div>}
        </button>
      </Link>

      <div className="p-4 flex flex-col flex-1 items-center text-center">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">{category}</p>
        <h3 className="font-headline text-lg text-secondary font-semibold group-hover:text-primary transition-colors line-clamp-1">{name}</h3>
        <p className="text-accent font-bold mt-1 tracking-wider">৳ {price.toLocaleString()}</p>
      </div>
    </div>
  );
}