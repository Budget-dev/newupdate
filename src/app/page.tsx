import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles,
  ArrowRight,
  Check,
  Star,
  ExternalLink,
  ArrowUpRight,
  Palette,
  Code,
  ShieldCheck,
  Cpu,
  Bot,
  Rocket,
  Zap
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
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Budget Website Designer | Web Design & SEO Services India',
  description: 'Looking for a budget website designer? The BudgetDev is the leading affordable web design agency in Andhra Pradesh. High-performance Next.js sites for small businesses.',
};

const TechLogos = [
  { name: "Next.js", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground/80"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.735 18.91l-4.8-6.178V18.15h-1.35V7.477h1.35l4.8 6.177V7.477h1.35v10.673h-1.35zm-5.735-8.24l-2.025 2.625V13.8L12 11.2V10.67zm0 0l-2.025 2.625V13.8L12 11.2V10.67z"/></svg> },
  { name: "React", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground/80"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10.622 8.415l4.879 2.817a.75.75 0 0 1 0 1.298l-4.879 2.817a.75.75 0 0 1-1.122-.649V9.064a.75.75 0 0 1 1.122-.649z"/></svg> },
  { name: "Firebase", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground/80"><path d="M3.89 15.672L6.255.461A.534.534 0 0 1 7.27.275l2.458 4.608-2.458 8.441a1.2 1.2 0 0 0 .504.148h.001c.144 0 .285-.027.42-.078l2.67-1.006L8.136 5.856l1.96-1.745 5.518 9.84a1.2 1.2 0 0 0 1.521.493l2.855-1.076-2.583 4.887a1.2 1.2 0 0 0 .513.142h.001a1.2 1.2 0 0 0 .61-.17l3.618-1.365a.534.534 0 0 0 .245-.724l-3.328-6.305-1.666 3.161L3.89 15.672zm11.724-4.825L13.116 6.04l-2.003-3.755a.534.534 0 0 0-.964.03l-1.013 3.475 2.502 4.498 3.972-2.441z"/></svg> },
  { name: "Vercel", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground/80"><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg> },
  { name: "Stripe", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground/80"><path d="M13.962 16.31c0 1.506-1.128 1.939-2.458 1.939-1.287 0-2.327-.34-2.327-1.343v-.027h1.366c.014.453.333.682.961.682.528 0 .861-.197.861-.595 0-.974-4.401-.54-4.401-3.66 0-1.42 1.114-1.926 2.39-1.926 1.128 0 2.221.32 2.221 1.24v.027h-1.339c-.014-.386-.333-.599-.882-.599-.542 0-.847.213-.847.586 0 .96 4.415.519 4.415 3.696z"/></svg> },
];

const completedProjects = [
  {
    title: "Srinika Spices",
    tag: "E-commerce",
    description: "Multi-regional spice distribution with 100/100 performance score.",
    link: "https://srinikaspices.in",
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-srinika')?.imageUrl || "",
    imageHint: "budget website designer project"
  },
  {
    title: "Gurucharan Interiors",
    tag: "Interior Design",
    description: "Premium digital showroom capturing high-intent leads locally.",
    link: "https://gurucharaninteriors.in",
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-gurucharan')?.imageUrl || "",
    imageHint: "affordable website design showroom"
  },
  {
    title: "Yasodha.in",
    tag: "Personal Brand",
    description: "Specialized career portal optimized for search engine dominance.",
    link: "https://yasodha.in",
    imageUrl: PlaceHolderImages.find(img => img.id === 'project-yasodha')?.imageUrl || "",
    imageHint: "budget web development portfolio"
  }
];

const reviews = [
  {
    name: "Suresh Kumar",
    location: "Vizianagaram",
    text: "Venkatesh is an amazing budget website designer. The site is fast and ranks so well on Google!",
    avatar: "https://picsum.photos/seed/rev1/100/100"
  },
  {
    name: "Priya Sharma",
    location: "Visakhapatnam",
    text: "BudgetDev provided the best affordable web design for our business. Truly high quality.",
    avatar: "https://picsum.photos/seed/rev2/100/100"
  },
  {
    name: "Rajesh Rao",
    location: "Hyderabad",
    text: "If you need a budget websitedesigner who understands modern tech, this is the place.",
    avatar: "https://picsum.photos/seed/rev3/100/100"
  },
  {
    name: "Anitha Reddy",
    location: "Vizianagaram",
    text: "Excellent results and very cost-effective. Best budget website designer in Andhra Pradesh.",
    avatar: "https://picsum.photos/seed/rev4/100/100"
  }
];

export default function Home() {
  const getFreeDraftText = "Get a free draft";

  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <div className="absolute inset-0 grid-pattern pointer-events-none -z-0" />
      <Navbar />
      
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="relative pt-40 pb-4 md:pt-48 md:pb-6 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
            <div className="space-y-3 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h1 className="text-[36px] md:text-[64px] font-headline font-black text-secondary leading-[1.2] md:leading-[1.1] tracking-tight">
                Branding, Web & <br className="hidden md:block" />
                <span className="squiggle-underline">Digital Solutions</span> Across India
              </h1>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed font-medium">
                We transform small businesses into digital leaders with budget-friendly, high-performance web engineering.
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
                      {getFreeDraftText.split("").map((char, i) => (
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
                    Projects <br /> completed
                  </div>
                </div>
                <div className="w-px h-5 bg-muted hidden md:block" />
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-black text-secondary">100</span>
                  <div className="text-[7px] leading-tight font-bold text-muted-foreground uppercase text-left">
                    PageSpeed <br /> Score
                  </div>
                </div>
                <div className="w-px h-5 bg-muted hidden md:block" />
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg font-black text-primary">4.9</span>
                  <div className="text-[7px] leading-tight font-bold text-muted-foreground uppercase text-left">
                    Google <br /> review
                  </div>
                </div>
              </div>

              <div className="w-full max-w-2xl overflow-hidden relative mt-2">
                <div className="flex gap-10 items-center animate-scroll whitespace-nowrap py-1">
                  {[...TechLogos, ...TechLogos, ...TechLogos].map((logo, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 shrink-0 opacity-60 hover:opacity-100 transition-all duration-300">
                      {logo.svg}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Completed Projects Section */}
        <section className="py-4 px-6 relative">
          <div className="max-w-7xl mx-auto main-section-container overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">
              <h2 className="text-3xl md:text-4xl font-headline font-black text-secondary">Selected Case Studies.</h2>
              <div className="w-px h-6 md:h-10 bg-muted-foreground/20 hidden md:block" />
              <p className="text-muted-foreground text-[9px] md:text-[10px] max-w-[150px] leading-tight font-medium">
                High-performance digital products built for scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {completedProjects.map((ref, idx) => (
                <div key={idx} className="group flex flex-col space-y-2">
                  <div className="relative aspect-[4/3] rounded-[1.25rem] overflow-hidden shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-muted/50 bg-muted/10">
                    <Image 
                      src={ref.imageUrl} 
                      alt={ref.title} 
                      width={800}
                      height={600}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized={ref.imageUrl.includes('s0.wp.com')}
                      loading={idx === 0 ? "eager" : "lazy"}
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       <Link href={ref.link} target="_blank" className="bg-white text-secondary px-4 py-2 rounded-full text-xs font-black flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          Live Demo <ArrowUpRight className="w-3 h-3" />
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
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </h3>
                    <p className="text-muted-foreground text-[10px] leading-relaxed">
                      {ref.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" asChild className="rounded-xl border-muted/30 font-bold text-xs">
                <Link href="/portfolio">View all 92+ projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <ResultsSection />

        {/* Expertise Section */}
        <section className="py-12 px-6 relative">
          <div className="max-w-7xl mx-auto main-section-container space-y-12">
            <div className="flex flex-col md:flex-row md:items-baseline gap-3 border-b pb-6">
              <h2 className="text-6xl md:text-7xl font-headline font-black text-secondary">Expertise.</h2>
              <p className="text-muted-foreground font-medium text-xs max-w-sm leading-tight">
                Advanced digital engineering for ambitious Indian enterprises.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Client Satisfaction", value: "100%" },
                { label: "Users Impacted", value: "7.5M+" },
                { label: "Uptime Guaranteed", value: "99.9%" },
                { label: "Avg. Turnaround", value: "14 Days" }
              ].map((stat, i) => (
                <Card key={i} className="p-8 rounded-[2rem] border-none bg-[#F8FAF9] flex flex-col items-center justify-center text-center space-y-1">
                  <span className="text-3xl font-black text-secondary">{stat.value}</span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</span>
                </Card>
              ))}
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-black text-secondary">Specialized Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Strategic Web Design", desc: "User-centric layouts engineered for maximum conversion and brand trust.", icon: <Palette className="w-6 h-6" /> },
                  { title: "Full-Stack Development", desc: "High-performance React & Next.js applications that dominate Lighthouse scores.", icon: <Code className="w-6 h-6" /> },
                  { title: "Technical SEO", desc: "Data-driven optimization to ensure your business ranks #1 locally and nationally.", icon: <Rocket className="w-6 h-6" /> },
                  { title: "Custom AI Solutions", desc: "Intelligent agent integration for automated customer support and operations.", icon: <Bot className="w-6 h-6" /> }
                ].map((service, i) => (
                  <Card key={i} className="p-8 rounded-[2rem] border border-muted/50 flex items-start gap-6 hover:shadow-xl hover:shadow-primary/5 transition-all group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/10 transition-colors">
                      {service.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-black text-secondary text-lg">{service.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-1">
                <h4 className="text-xs font-black text-secondary uppercase tracking-widest">Enterprise Tech Stack</h4>
                <p className="text-[11px] text-muted-foreground font-medium">Next.js 15, React 19, TypeScript, Firebase, Supabase, Cloudflare</p>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-2 bg-[#1A1A1A] text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg">
                   <Zap className="w-3.5 h-3.5 text-white" /> Performance 100/100
                </div>
                <div className="flex items-center gap-2 bg-[#00d757] text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-lg">
                   <ShieldCheck className="w-3.5 h-3.5" /> Secure & Compliant
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-4 px-6 relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col items-center space-y-5">
            <div className="text-center space-y-1">
              <h2 className="text-2xl md:text-4xl font-headline font-black text-secondary tracking-tight">Client Testimonials</h2>
              <div className="flex flex-col items-center gap-0.5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-black text-secondary">
                  <span>5.0</span>
                  <span className="text-muted-foreground font-medium text-[8px]">Based on Verified Google Reviews</span>
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
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="h-7 w-7 opacity-0 group-hover/carousel:opacity-100 transition-opacity left-0 bg-white shadow-md border-muted" />
                <CarouselNext className="h-7 w-7 opacity-0 group-hover/carousel:opacity-100 transition-opacity right-0 bg-white shadow-md border-muted" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-4 px-6 relative">
          <div className="max-w-7xl mx-auto main-section-container space-y-6">
            <div className="flex flex-col md:flex-row md:items-baseline gap-3 border-b pb-4">
              <h2 className="text-4xl md:text-6xl font-headline font-black text-secondary">Expert FAQ.</h2>
              <p className="text-muted-foreground font-medium text-[10px] max-w-[200px] leading-tight">
                No jargon. Just the information you need to make the right choice.
              </p>
            </div>

            <div className="bg-[#F8FAF9] rounded-[1.5rem] p-6 space-y-4">
              <Accordion type="single" collapsible className="w-full space-y-2">
                {[
                  { q: "What makes BudgetDev different?", a: "We provide high-fidelity, custom-engineered code that builders like Wix or WordPress simply can't match in terms of speed, security, and SEO potential." },
                  { q: "How fast can you launch?", a: "MVP sites launch in 14 days. Complex e-commerce systems or SaaS platforms typically require 4-8 weeks." },
                  { q: "Is the code mine after the project?", a: "Absolutely. You get full ownership and access to your code, hosted on high-performance infrastructure." }
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

        {/* CTA Section */}
        <section className="py-4 px-6 relative mb-12">
          <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-[#0a0a0a] p-10 md:p-16 overflow-hidden relative shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-primary text-xs font-black uppercase tracking-widest">get started</span>
                  <h2 className="text-4xl md:text-7xl font-headline font-black text-white leading-tight">Scale your brand today.</h2>
                  <p className="text-white/60 text-base md:text-lg max-w-md font-medium">
                    Contact us for a free technical analysis and visual concept for your business.
                  </p>
                </div>
                
                <div className="sparkle-btn-wrapper">
                  <Link href="/contact" className="sparkle-btn group">
                    <svg className="sparkle-btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                    <div className="sparkle-txt-wrapper">
                      <div className="sparkle-txt-1">
                        {"START PROJECT".split("").map((char, i) => (
                          <span key={i} className="sparkle-btn-letter">{char === " " ? "\u00A0" : char}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="flex justify-end">
                <Card className="w-full max-sm bg-white/5 border-white/10 rounded-[2rem] p-8 space-y-4 backdrop-blur-xl">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-white italic tracking-tight">BudgetDev.agency</h3>
                    <p className="text-white/40 text-[11px] font-bold uppercase tracking-wider">High-Fidelity Web Engineering</p>
                  </div>
                  <div className="pt-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
                       <div className="w-2 h-2 rounded-full bg-primary animate-pulse" /> +91 8466006486
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
