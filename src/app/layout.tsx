import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { MobileNavbar } from '@/components/layout/MobileNavbar';

export const metadata: Metadata = {
  title: 'Taat Elegance | Heritage Saree Boutique',
  description: 'Premium collection of hand-woven Taat sarees, celebrating heritage and modern elegance.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Belleza&family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <div className="min-h-screen flex flex-col pb-24 lg:pb-0">
          {children}
        </div>
        <MobileNavbar />
        <Toaster />
      </body>
    </html>
  );
}
