
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles,
  MessageSquare,
  Phone,
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Palette,
  ArrowRight,
  Zap
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const TechLogos = [
  { name: "HTML5", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground/40"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg> },
  { name: "CSS3", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground/40"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H18.59l-.423-4.471h-9.13L8.85 9.75h8.927l-.423-4.471z"/></svg> },
  { name: "JavaScript", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground/40"><path d="M0 0h24v24H0V0zm22.034 18.268c0-2.037-1.474-3.112-3.462-3.112-2.015 0-3.417 1.066-3.417 3.112 0 2.058 1.402 3.112 3.417 3.112 2.022 0 3.462-1.054 3.462-3.112zm-4.814 0c0-1.042.66-1.554 1.352-1.554.68 0 1.351.512 1.351 1.554 0 1.053-.671 1.554-1.351 1.554-.692 0-1.352-.501-1.352-1.554zm-1.838 4.732h4.512v-1.74h-4.512v1.74zM10.8 11.026c0-1.475-1.144-2.318-2.618-2.318-1.516 0-2.686.843-2.686 2.318 0 1.474 1.17 2.318 2.686 2.318 1.474 0 2.618-.844 2.618-2.318zm-3.66 0c0-.75.467-1.159.982-1.159.525 0 .972.41.972 1.159 0 .749-.447 1.159-.972 1.159-.515 0-.982-.41-.982-1.159zm-1.396 3.614h4.082V12.9h-4.082v1.74z"/></svg> },
  { name: "React", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground/40"><path d="M23.32 10.43c.04.53.04 1.08 0 1.62-.05.54-.15 1.08-.29 1.61-.14.53-.33 1.04-.56 1.54l-.06.13c-.02.04-.04.08-.07.12-.01.03-.03.05-.04.08-.24.46-.51.9-.81 1.32-.3.42-.64.81-1 1.18-.36.37-.75.72-1.17 1.03-.42.31-.86.59-1.32.83-.46.24-.93.45-1.41.61-.48.16-.97.29-1.47.36-.5.07-1.01.11-1.52.12h-.14c-.5-.01-1.01-.05-1.51-.12-.5-.07-.99-.2-1.47-.36-.48-.16-.95-.37-1.41-.61-.46-.24-.9-.52-1.32-.83-.42-.31-.81-.66-1.17-1.03-.36-.37-.7-.76-1-1.18-.3-.42-.57-.86-.81-1.32-.01-.03-.03-.05-.04-.08-.02-.04-.04-.08-.06-.12l-.06-.13c-.23-.5-.42-1.01-.56-1.54-.14-.53-.24-1.07-.29-1.61-.04-.54-.04-1.09 0-1.63.05-.54.15-1.08.29-1.61.14-.53.33-1.04.56-1.54l.06-.13c.02-.04.04-.08.07-.12.01-.03.03-.05.04-.08.24-.46.51-.9.81-1.32.3-.42.64-.81 1-1.18.36-.37.75-.72 1.17-1.03.42-.31.86-.59 1.32-.83.46-.24.93-.45 1.41-.61.48-.16.97-.29 1.47-.36.5-.07 1.01-.11 1.52-.12h.14c.5.01 1.01.05 1.51.12.5.07.99.2 1.47.36.48.16.95.37 1.41.61.46.24.9.52 1.32.83.42.31.81.66 1.17 1.03.36.37.7.76 1 1.18.3.42.57.86.81 1.32.01.03.03.05.04.08.02.04.04.08.06.12l.06.13c.23.5.42 1.01.56 1.54.14.53.24 1.07.29 1.61zM12 13.09c.6 0 1.09-.49 1.09-1.09s-.49-1.09-1.09-1.09-1.09.49-1.09 1.09.49 1.09 1.09 1.09z"/></svg> },
  { name: "Firebase", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground/40"><path d="M3.89 15.672L6.255.461A.534.534 0 0 1 7.27.275l2.458 4.608-2.458 8.441a1.2 1.2 0 0 0 .504.148h.001c.144 0 .285-.027.42-.078l2.67-1.006L8.136 5.856l1.96-1.745 5.518 9.84a1.2 1.2 0 0 0 1.521.493l2.855-1.076-2.583 4.887a1.2 1.2 0 0 0 .513.142h.001a1.2 1.2 0 0 0 .61-.17l3.618-1.365a.534.534 0 0 0 .245-.724l-3.328-6.305-1.666 3.161L3.89 15.672zm11.724-4.825L13.116 6.04l-2.003-3.755a.534.534 0 0 0-.964.03l-1.013 3.475 2.502 4.498 3.972-2.441z"/></svg> },
  { name: "Next.js", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground/40"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.735 18.91l-4.8-6.178V18.15h-1.35V7.477h1.35l4.8 6.177V7.477h1.35v10.673h-1.35zm-5.735-8.24l-2.025 2.625V13.8L12 11.2V10.67zm0 0l-2.025 2.625V13.8L12 11.2V10.67z"/></svg> },
  { name: "Tailwind", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground/40"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 1.026.257 1.759.99 2.57 1.801.83.832 1.663 1.66 3.23 1.66 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.566-.881-2.275-1.589-.785-.785-1.531-1.532-3.325-1.532zm-6 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 1.027.257 1.76.99 2.571 1.801.831.832 1.664 1.66 3.231 1.66 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.566-.881-2.275-1.589-.785-.785-1.531-1.532-3.326-1.532z"/></svg> },
];

const references = [
  {
    title: "Propvex Capital",
    tag: "Finance",
    description: "Investment and capital management. Professional financial platform with an elegant design.",
    image: PlaceHolderImages.find(img => img.id === 'project-2')
  },
  {
    title: "Steak Club New York",
    tag: "Gastronomy",
    description: "Exclusive steakhouse website with a modern reservation system and digital menu.",
    image: PlaceHolderImages.find(img => img.id === 'service-web')
  },
  {
    title: "Chauffeur Munich",
    tag: "Transport",
    description: "Premium chauffeur service platform. Automated booking processes and elegant design.",
    image: PlaceHolderImages.find(img => img.id === 'project-4')
  },
  {
    title: "Car Company",
    tag: "Automotive",
    description: "Modern automotive portal with a sleek interface for vehicle showcase and management.",
    image: PlaceHolderImages.find(img => img.id === 'project-5')
  },
  {
    title: "Moussa Export",
    tag: "Trade",
    description: "Global export portal for trade and transport, focusing on efficiency and reach.",
    image: PlaceHolderImages.find(img => img.id === 'project-6')
  },
  {
    title: "Autolackiererei Köse",
    tag: "Automotive",
    description: "High-end automotive paint shop portal showcasing precision and quality craft.",
    image: PlaceHolderImages.find(img => img.id === 'project-1')
  }
];

const pricingPlans = [
  {
    name: "Corporate",
    price: "₹3,500",
    oldPrice: "₹10,000",
    monthly: "₹150",
    description: "Perfect for established companies with higher demands on design and functionality.",
    theme: "light",
    buttonClass: "bg-black text-white hover:bg-black/90",
    textClass: "text-secondary",
    mutedText: "text-muted-foreground",
    lineColor: "bg-muted"
  },
  {
    name: "Enterprise",
    price: "₹13,500",
    oldPrice: "₹30,000",
    monthly: "₹500",
    description: "For established companies looking to scale. High-end solutions with full support.",
    theme: "dark",
    buttonClass: "bg-white text-secondary hover:bg-white/90",
    textClass: "text-white",
    mutedText: "text-white/60",
    lineColor: "bg-white/20"
  },
  {
    name: "Ultra Platinum",
    price: "₹25,000",
    oldPrice: "₹1,50,000",
    monthly: "₹1,500",
    description: "All-in-one AI system for maximum growth. Premium service at the highest level.",
    theme: "premium",
    badge: "PREMIUM",
    buttonClass: "bg-orange-500 text-white hover:bg-orange-600",
    textClass: "text-amber-400",
    mutedText: "text-amber-400/60",
    lineColor: "bg-amber-400/20"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <div className="absolute inset-0 grid-pattern pointer-events-none -z-0" />
      <Navbar />
      
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="relative pt-48 pb-20 md:pt-64 md:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h1 className="text-6xl md:text-[100px] font-headline font-black text-secondary leading-[0.9] tracking-tight">
                We build what you <br />
                <span className="squiggle-underline">digital success</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
                Web design from Bocholt: Websites, web apps and custom software — all <br className="hidden md:block" /> from one source, perfectly tailored to your business.
              </p>
            </div>

            <div className="flex flex-col items-center gap-12 pt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
              <Button size="lg" asChild className="h-16 px-12 text-lg glass-button text-white hover:scale-105 transition-all duration-300 rounded-[2rem] shadow-2xl font-bold group">
                <Link href="/contact" className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5" /> Get a free draft
                </Link>
              </Button>

              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-secondary">92+</span>
                  <div className="text-[10px] leading-tight font-bold text-muted-foreground uppercase text-left">
                    Projects <br /> completed
                  </div>
                </div>
                <div className="w-px h-10 bg-muted hidden md:block" />
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-secondary">100</span>
                  <div className="text-[10px] leading-tight font-bold text-muted-foreground uppercase text-left">
                    PageSpeed <br /> Score
                  </div>
                </div>
                <div className="w-px h-10 bg-muted hidden md:block" />
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-primary">4.9</span>
                  <div className="text-[10px] leading-tight font-bold text-muted-foreground uppercase text-left">
                    Google <br /> review
                  </div>
                </div>
              </div>

              <div className="w-full max-w-4xl overflow-hidden relative mt-8">
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
                <div className="flex gap-20 items-center animate-scroll whitespace-nowrap py-4">
                  {[...TechLogos, ...TechLogos, ...TechLogos].map((logo, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                      {logo.svg}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto bg-white rounded-[4rem] border border-muted/50 shadow-2xl shadow-black/5 p-12 md:p-20 overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center gap-8 mb-20">
              <h2 className="text-6xl md:text-8xl font-headline font-black text-secondary">References.</h2>
              <div className="w-px h-12 md:h-20 bg-muted-foreground/20 hidden md:block" />
              <p className="text-muted-foreground text-sm md:text-base max-w-[200px] leading-tight font-medium">
                Selected works. From local companies to international platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {references.map((ref, idx) => (
                <div key={idx} className="group flex flex-col space-y-6">
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2 border border-muted/50 bg-white p-2">
                    <div className="relative h-full w-full rounded-[1.5rem] overflow-hidden">
                      <Image 
                        src={ref.image?.imageUrl || ""} 
                        alt={ref.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        data-ai-hint={ref.image?.imageHint}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-black/50 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                          {ref.tag}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                         <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500">
                            <ArrowUpRight className="w-6 h-6 text-secondary" />
                         </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-2 space-y-2">
                    <h3 className="text-2xl font-black text-secondary">{ref.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {ref.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prices Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto bg-white rounded-[4rem] border border-muted/50 shadow-2xl shadow-black/5 p-12 md:p-20 overflow-hidden space-y-16">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-baseline gap-6">
                <h2 className="text-6xl md:text-8xl font-headline font-black text-secondary">Prices.</h2>
                <p className="text-muted-foreground font-medium text-lg italic">Transparent costs. ROI-first approach.</p>
              </div>
              <div className="w-full h-px bg-muted" />
            </div>

            {/* Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingPlans.map((plan, idx) => (
                <div key={idx} className={cn(
                  "relative group rounded-[2.5rem] p-10 flex flex-col space-y-12 shadow-sm transition-all duration-500",
                  plan.theme === "light" && "bg-white border border-muted/50 hover:shadow-2xl",
                  plan.theme === "dark" && "bg-[#0a0a0a] text-white hover:shadow-2xl",
                  plan.theme === "premium" && "bg-gradient-to-br from-[#1c1917] to-[#44403c] text-amber-400 hover:shadow-2xl"
                )}>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-4xl font-black">{plan.name}</h3>
                      {plan.badge && (
                        <span className="text-[10px] font-black px-3 py-1 rounded-full bg-orange-500 text-white">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <p className={cn("text-sm leading-relaxed", plan.mutedText)}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="space-y-8">
                    {/* One Time */}
                    <div className="space-y-2">
                      <p className={cn("text-[10px] font-black uppercase tracking-[0.2em]", plan.mutedText)}>one-time payment</p>
                      <div className="flex items-baseline gap-3">
                        <span className={cn("text-5xl font-black", plan.textClass)}>{plan.price}</span>
                        <span className={cn("line-through text-sm opacity-40", plan.mutedText)}>{plan.oldPrice}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className={cn("flex-1 h-px", plan.lineColor)} />
                      <span className={cn("text-[10px] font-black uppercase opacity-40 whitespace-nowrap", plan.mutedText)}>or rent</span>
                      <div className={cn("flex-1 h-px", plan.lineColor)} />
                    </div>

                    {/* Monthly */}
                    <div className="space-y-4">
                      <p className={cn("text-[10px] font-black uppercase tracking-[0.2em]", plan.mutedText)}>monthly</p>
                      <div className="space-y-1">
                        <div className="flex items-baseline gap-2">
                          <span className={cn("text-3xl font-black", plan.theme === "light" ? "text-[#00E699]" : plan.textClass)}>from {plan.monthly}</span>
                          <span className={cn("text-sm font-medium", plan.mutedText)}>/ Month</span>
                        </div>
                        <p className={cn("text-[10px] font-medium opacity-60", plan.mutedText)}>24-month term, including maintenance</p>
                      </div>
                    </div>
                  </div>

                  <Button className={cn("w-full h-14 rounded-2xl font-black shadow-lg transition-all", plan.buttonClass)}>
                    View details <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>

            {/* Bottom Section Info */}
            <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
               <p className="text-muted-foreground text-sm font-medium">
                  Free initial consultation • Guaranteed response within 12 hours • No-obligation quote
               </p>
               <Button variant="outline" className="rounded-full bg-muted/30 border-none flex items-center gap-2 text-xs font-bold px-6 h-10">
                  <Zap className="w-3 h-3 text-secondary" /> This is how I work <ArrowRight className="w-3 h-3" />
               </Button>
            </div>
          </div>
        </section>

        {/* Floating Action Buttons */}
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

        {/* Side Badge */}
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
