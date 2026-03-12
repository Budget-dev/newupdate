import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles,
  ArrowRight,
  Star,
  MapPin,
  Wrench,
  Check,
  ShieldCheck,
  ExternalLink,
  ArrowUpRight
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const TechLogos = [
  { name: "Next.js SEO", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground/40"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.735 18.91l-4.8-6.178V18.15h-1.35V7.477h1.35l4.8 6.177V7.477h1.35v10.673h-1.35zm-5.735-8.24l-2.025 2.625V13.8L12 11.2V10.67zm0 0l-2.025 2.625V13.8L12 11.2V10.67z"/></svg> },
  { name: "React Development", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground/40"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10.622 8.415l4.879 2.817a.75.75 0 0 1 0 1.298l-4.879 2.817a.75.75 0 0 1-1.122-.649V9.064a.75.75 0 0 1 1.122-.649z"/></svg> },
  { name: "Firebase Backend", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground/40"><path d="M3.89 15.672L6.255.461A.534.534 0 0 1 7.27.275l2.458 4.608-2.458 8.441a1.2 1.2 0 0 0 .504.148h.001c.144 0 .285-.027.42-.078l2.67-1.006L8.136 5.856l1.96-1.745 5.518 9.84a1.2 1.2 0 0 0 1.521.493l2.855-1.076-2.583 4.887a1.2 1.2 0 0 0 .513.142h.001a1.2 1.2 0 0 0 .61-.17l3.618-1.365a.534.534 0 0 0 .245-.724l-3.328-6.305-1.666 3.161L3.89 15.672zm11.724-4.825L13.116 6.04l-2.003-3.755a.534.534 0 0 0-.964.03l-1.013 3.475 2.502 4.498 3.972-2.441z"/></svg> },
];

const completedProjects = [
  {
    title: "Srinika Spices",
    tag: "E-commerce SEO",
    description: "Affordable e-commerce platform for spice distribution with optimized local SEO.",
    link: "https://srinikaspices.in",
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-srinika')?.imageUrl || "",
    imageHint: "spice website design"
  },
  {
    title: "Gurucharan Interiors",
    tag: "Business Portfolio",
    description: "Premium interior design website focused on conversions for local AP clients.",
    link: "https://gurucharaninteriors.in",
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-gurucharan')?.imageUrl || "",
    imageHint: "interior design website"
  },
  {
    title: "Yasodha.in",
    tag: "Personal Branding",
    description: "High-performance personal website for career growth and professional branding.",
    link: "https://yasodha.in",
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-yasodha')?.imageUrl || "",
    imageHint: "branding portfolio"
  }
];

const reviews = [
  {
    name: "Suresh Kumar",
    location: "Vizianagaram, AP",
    text: "BudgetDev built a fantastic website for my spice business. Best affordable designer in AP!",
    avatar: "https://picsum.photos/seed/rev1/100/100"
  },
  {
    name: "Priya Sharma",
    location: "Visakhapatnam",
    text: "Professional, fast, and very technical. Our Google rankings improved significantly.",
    avatar: "https://picsum.photos/seed/rev2/100/100"
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <div className="absolute inset-0 grid-pattern pointer-events-none -z-0" />
      <Navbar />
      
      <main className="flex-1 relative z-10">
        {/* Hero Section - Optimized for H1 SEO */}
        <section className="relative pt-40 pb-4 md:pt-48 md:pb-6 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
            <div className="space-y-3 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h1 className="text-[36px] md:text-[64px] font-headline font-black text-secondary leading-[1.2] md:leading-[1.1] tracking-tight">
                Affordable <span className="text-primary italic">Web Design</span> & <br className="hidden md:block" />
                <span className="squiggle-underline">Digital Success</span> in AP
              </h1>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed font-medium">
                We build high-performance websites and custom software — the best budget web designer for small businesses in Andhra Pradesh and India.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 pt-2 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
              <div className="sparkle-btn-wrapper">
                <Link href="/contact" className="sparkle-btn group">
                  <svg className="sparkle-btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                  <div className="sparkle-txt-wrapper">
                    <div className="sparkle-txt-1">
                      {"Get a free draft".split("").map((char, i) => (
                        <span key={i} className="sparkle-btn-letter">{char === " " ? "\u00A0" : char}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-black text-secondary">92+</span>
                  <div className="text-[7px] leading-tight font-bold text-muted-foreground uppercase text-left">
                    Websites <br /> Launched
                  </div>
                </div>
                <div className="w-px h-5 bg-muted hidden md:block" />
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-black text-secondary">100</span>
                  <div className="text-[7px] leading-tight font-bold text-muted-foreground uppercase text-left">
                    SEO <br /> Score
                  </div>
                </div>
                <div className="w-px h-5 bg-muted hidden md:block" />
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-black text-primary">5.0</span>
                  <div className="text-[7px] leading-tight font-bold text-muted-foreground uppercase text-left">
                    Google <br /> Rating
                  </div>
                </div>
              </div>

              <div className="w-full max-w-2xl overflow-hidden relative mt-2">
                <div className="flex gap-10 items-center animate-scroll whitespace-nowrap py-1">
                  {[...TechLogos, ...TechLogos, ...TechLogos].map((logo, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 shrink-0 opacity-20 hover:opacity-100 transition-all duration-300">
                      {logo.svg}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-4 px-6 relative">
          <div className="max-w-7xl mx-auto main-section-container overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">
              <h2 className="text-3xl md:text-4xl font-headline font-black text-secondary">Our Local SEO Success.</h2>
              <div className="w-px h-6 md:h-10 bg-muted-foreground/20 hidden md:block" />
              <p className="text-muted-foreground text-[9px] md:text-[10px] max-w-[150px] leading-tight font-medium">
                High-performance websites for businesses in Vizianagaram & beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {completedProjects.map((ref, idx) => (
                <div key={idx} className="group flex flex-col space-y-2">
                  <div className="relative aspect-[4/3] rounded-[1.25rem] overflow-hidden shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-muted/50 bg-muted/10">
                    <Image 
                      src={ref.imageUrl} 
                      alt={ref.title + " - affordable web design"} 
                      fill 
                      data-ai-hint={ref.imageHint}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized={ref.imageUrl.includes('s0.wp.com')}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       <Link href={ref.link} target="_blank" className="bg-white text-secondary px-4 py-2 rounded-full text-xs font-black flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          Visit Site <ArrowUpRight className="w-3 h-3" />
                       </Link>
                    </div>
                    <div className="absolute top-2 left-2">
                      <span className="bg-black/50 backdrop-blur-md text-white text-[7px] font-black uppercase tracking-[0.1em] px-2 py-0.5 rounded-full">
                        {ref.tag}
                      </span>
                    </div>
                  </div>
                  <div className="px-1 space-y-0.5">
                    <h3 className="text-base font-black text-secondary flex items-center justify-between">
                      {ref.title}
                      <Link href={ref.link} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </h3>
                    <p className="text-muted-foreground text-[10px] leading-relaxed">
                      {ref.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ResultsSection />

        {/* Reviews Section */}
        <section className="py-4 px-6 relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col items-center space-y-5">
            <div className="text-center space-y-1">
              <h2 className="text-2xl md:text-4xl font-headline font-black text-secondary tracking-tight">Best Website Designer in AP</h2>
              <div className="flex flex-col items-center gap-0.5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-black text-secondary">
                  <span>5.0</span>
                  <span className="text-muted-foreground font-medium text-[8px]">Google Reviews</span>
                </div>
              </div>
            </div>

            <div className="w-full relative px-6 group/carousel">
              <Carousel className="w-full" opts={{ align: "start", loop: true }}>
                <CarouselContent className="-ml-3">
                  {reviews.map((review, idx) => (
                    <CarouselItem key={idx} className="pl-3 md:basis-1/2 lg:basis-1/3">
                      <div className="bg-white rounded-[1rem] border border-muted/50 p-4 flex flex-col space-y-3 h-full shadow-sm">
                        <p className="text-secondary text-[10px] font-medium leading-relaxed italic">
                          "{review.text}"
                        </p>
                        <div className="flex items-center justify-between pt-2 border-t border-muted/20 mt-auto">
                          <div className="flex items-center gap-2">
                            <Image src={review.avatar} alt={review.name} width={24} height={24} className="rounded-full" />
                            <div>
                              <h4 className="font-bold text-secondary text-[9px]">{review.name}</h4>
                              <p className="text-[7px] text-muted-foreground">{review.location}</p>
                            </div>
                          </div>
                          <Link href="#" className="text-[8px] font-black text-primary uppercase tracking-widest hover:underline">
                            Verified
                          </Link>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-4 px-6 relative">
          <div className="max-w-7xl mx-auto main-section-container space-y-6">
            <div className="flex flex-col md:flex-row md:items-baseline gap-3 border-b pb-4">
              <h2 className="text-4xl md:text-6xl font-headline font-black text-secondary">FAQs.</h2>
              <p className="text-muted-foreground font-medium text-[10px] max-w-[200px] leading-tight">
                Common questions about budget web design in Vizianagaram and AP.
              </p>
            </div>

            <div className="bg-[#F8FAF9] rounded-[1.5rem] p-6 space-y-4">
              <Accordion type="single" collapsible className="w-full space-y-2">
                {[
                  { q: "Is BudgetDev the best budget web designer in Andhra Pradesh?", a: "We pride ourselves on providing the highest performance (Next.js) at an affordable rate for small businesses in AP." },
                  { q: "Do you specialize in SEO for Indian businesses?", a: "Yes, we focus on ranking your business locally in cities like Visakhapatnam, Vijayawada, and Vizianagaram." },
                  { q: "How long does a website project take?", a: "Typically 2-4 weeks for a fully optimized business website." }
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="bg-white rounded-xl border px-4">
                    <AccordionTrigger className="text-[11px] font-bold hover:no-underline py-3">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-[10px] leading-relaxed pb-3">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Local Presence */}
        <section className="py-4 px-6 relative">
          <div className="max-w-7xl mx-auto main-section-container space-y-8">
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 border-b pb-4">
              <h2 className="text-4xl md:text-6xl font-headline font-black text-secondary">Location.</h2>
              <p className="text-muted-foreground font-medium text-[10px] max-w-[200px] leading-tight">
                Our base in the heart of Fort City.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-2 relative group">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-[#1A1A1A] border border-muted/20">
                  <Image 
                    src="https://yasodha.in/assets/venkatesh-profile.png" 
                    alt="Venkatesh Choppa - Expert Web Designer AP" 
                    fill 
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[8px] font-black uppercase tracking-widest">
                        Founder & Developer
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="text-2xl font-black text-white leading-none">Venkatesh Choppa</h3>
                        <p className="text-white/60 text-[9px] font-medium">Vizianagaram, AP, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 space-y-8 py-4">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-black text-secondary leading-tight">Top-Rated Website Developer in Andhra Pradesh</h3>
                  <div className="space-y-4 text-[13px] text-muted-foreground leading-relaxed max-w-xl">
                    <p>
                      As the lead developer at BudgetDev, I help Indian entrepreneurs establish a powerful online presence without overspending.
                    </p>
                    <p>
                      We specialize in high-speed React/Next.js applications that rank high on Google and turn visitors into customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-4 px-6 relative mb-8">
          <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-[#0a0a0a] p-8 md:p-12 space-y-8 border border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div className="space-y-2">
                <span className="text-primary text-xs font-black uppercase tracking-widest">Vizianagaram Base</span>
                <p className="text-white text-base font-bold">Fort City, Vizianagaram, Andhra Pradesh 535003</p>
              </div>
              <Link href="https://maps.google.com" target="_blank" className="text-white/40 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                View on Google Maps <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
            
            <div className="relative h-[300px] md:h-[400px] w-full rounded-[2rem] overflow-hidden grayscale invert opacity-80 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-700">
               <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                title="BudgetDev Location Vizianagaram"
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://www.openstreetmap.org/export/embed.html?bbox=83.3900%2C18.1100%2C83.4100%2C18.1300&amp;layer=mapnik&amp;marker=18.1200%2C83.4000" 
                className="filter contrast-125 border-none"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
