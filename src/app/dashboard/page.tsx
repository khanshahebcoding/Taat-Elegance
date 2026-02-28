import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Package, Heart, MapPin, CreditCard, Settings, ChevronRight } from 'lucide-react';

export default function DashboardPage() {
  return (
    <main className="flex-1">
      <Navbar />
      
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass-panel rounded-3xl p-8 text-center space-y-4">
              <Avatar className="w-24 h-24 mx-auto border-4 border-primary/20 shadow-xl">
                <AvatarImage src="https://picsum.photos/seed/user/200/200" />
                <AvatarFallback>TE</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-headline font-bold text-secondary">Ayesha Rahman</h3>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Diamond Member</p>
              </div>
            </div>

            <nav className="glass-panel rounded-3xl p-4 overflow-hidden">
              <ul className="space-y-1">
                {[
                  { icon: Package, label: 'My Orders', active: true },
                  { icon: Heart, label: 'My Wishlist', active: false },
                  { icon: MapPin, label: 'Address Book', active: false },
                  { icon: CreditCard, label: 'Saved Cards', active: false },
                  { icon: Settings, label: 'Settings', active: false },
                ].map((item, idx) => (
                  <li key={idx}>
                    <button className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all ${item.active ? 'bg-primary text-white' : 'text-secondary hover:bg-primary/10'}`}>
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Dashboard Content */}
          <div className="lg:col-span-3 space-y-12">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="glass-panel rounded-3xl p-6 text-center space-y-2">
                <p className="text-3xl font-headline font-bold text-secondary">12</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Total Orders</p>
              </div>
              <div className="glass-panel rounded-3xl p-6 text-center space-y-2">
                <p className="text-3xl font-headline font-bold text-secondary">03</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">In Transit</p>
              </div>
              <div className="glass-panel rounded-3xl p-6 text-center space-y-2">
                <p className="text-3xl font-headline font-bold text-secondary">৳ 45k</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Lifetime Value</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-headline font-bold text-secondary">Recent Orders</h2>
                <Button variant="link" className="text-primary font-bold">View All</Button>
              </div>
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="glass-panel rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-6">
                       <div className="w-16 h-16 bg-secondary/5 rounded-2xl flex items-center justify-center text-primary">
                         <Package className="w-8 h-8" />
                       </div>
                       <div>
                         <p className="text-sm font-bold text-secondary">Order #TE-98342{i}</p>
                         <p className="text-xs text-muted-foreground italic">Placed on Oct 1{i}, 2024</p>
                       </div>
                    </div>
                    <div className="text-center sm:text-right">
                       <p className="text-lg font-headline font-bold text-secondary">৳ 12,500</p>
                       <Badge className="bg-primary/20 text-primary border-none text-[10px]">Processing</Badge>
                    </div>
                    <Button variant="outline" className="rounded-full glass-panel border-primary/20 text-secondary hover:bg-primary/10">
                      Track Shipment
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-[2rem] p-12 text-center bg-gradient-to-br from-white/60 to-primary/10 space-y-6">
               <h3 className="text-2xl font-headline font-bold text-secondary italic">Become a Taat Ambassador</h3>
               <p className="text-muted-foreground font-body max-w-xl mx-auto leading-relaxed">
                 Invite your friends to the elegance of Taat. Share your unique code and both of you will receive a 10% privilege discount on your next heirloom purchase.
               </p>
               <Button className="rounded-full bg-accent hover:bg-accent/90 px-8 text-white font-headline tracking-widest">Generate Referral Code</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
