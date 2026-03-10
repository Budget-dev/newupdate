import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles,
  MessageSquare,
  Phone,
  MessageCircle
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <div className="absolute inset-0 grid-pattern pointer-events-none -z-0" />
      <Navbar />
      
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="relative pt-48 pb-20 md:pt-64 md:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-10">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h1 className="text-6xl md:text-[100px] font-headline font-black text-secondary leading-[0.9] tracking-tight">
                We build what you <br />
                <span className="squiggle-underline">digital success</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
                Web design from Bocholt: Websites, web apps and custom software — all <br className="hidden md:block" /> from one source, perfectly tailored to your business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center pt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
              <Button size="lg" asChild className="h-16 px-12 text-lg bg-secondary text-white hover:bg-secondary/90 rounded-2xl shadow-2xl shadow-black/10 font-bold group">
                <Link href="/contact" className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5" /> Get a free draft
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Floating Action Buttons (Mockup style from screenshot) */}
        <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
          <button className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <MessageSquare className="w-6 h-6" />
          </button>
          <button className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <MessageCircle className="w-7 h-7" />
          </button>
          <button className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <Phone className="w-6 h-6" />
          </button>
        </div>

        {/* Side Badge (Mockup) */}
        <div className="fixed left-0 top-1/2 -translate-y-1/2 flex flex-col items-center bg-black text-white px-2 py-8 rounded-r-xl z-50 text-[10px] font-bold tracking-widest uppercase [writing-mode:vertical-lr] gap-4">
           <span>Nominee</span>
           <div className="w-4 h-px bg-white/20" />
           <span className="text-sm">W.</span>
        </div>
      </main>

      <Footer />
    </div>
  );
}
