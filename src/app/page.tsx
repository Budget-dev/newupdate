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
  Zap,
  FileText,
  Users,
  Rocket,
  X,
  Check,
  Star,
  ExternalLink,
  Search,
  LineChart as ChartIcon,
  Smartphone,
  ShieldCheck,
  Layout,
  Layers
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ResultsSection } from "@/components/sections/ResultsSection";

const TechLogos = [
  { name: "HTML5", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground/40"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg> },
  { name: "CSS3", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground/40"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H18.59l-.423-4.471h-9.13L8.85 9.75h8.927l-.423-4.471z"/></svg> },
  { name: "JavaScript", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground/40"><path d="M0 0h24v24H0V0zm22.034 18.268c0-2.037-1.474-3.112-3.462-3.112-2.015 0-3.417 1.066-3.417 3.112 0 2.058 1.402 3.112 3.417 3.112 2.022 0 3.462-1.054 3.462-3.112zm-4.814 0c0-1.042.66-1.554 1.352-1.554.68 0 1.351.512 1.351 1.554 0 1.053-.671 1.554-1.351 1.554-.692 0-1.352-.501-1.352-1.554zm-1.838 4.732h4.512v-1.74h-4.512v1.74zM10.8 11.026c0-1.475-1.144-2.318-2.618-2.318-1.516 0-2.686.843-2.686 2.318 0 1.474 1.17 2.318 2.686 2.318 1.474 0 2.618-.844 2.618-2.318zm-3.66 0c0-.75.467-1.159.982-1.159.525 0 .972.41.972 1.159 0 .749-.447 1.159-.972 1.159-.515 0-.982-.41-.982-1.159zm-1.396 3.614h4.082V12.9h-4.082v1.74z"/></svg> },
  { name: "React", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground/40"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10.622 8.415l4.879 2.817a.75.75 0 0 1 0 1.298l-4.879 2.817a.75.75 0 0 1-1.122-.649V9.064a.75.75 0 0 1 1.122-.649z"/></svg> },
  { name: "Firebase", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground/40"><path d="M3.89 15.672L6.255.461A.534.534 0 0 1 7.27.275l2.458 4.608-2.458 8.441a1.2 1.2 0 0 0 .504.148h.001c.144 0 .285-.027.42-.078l2.67-1.006L8.136 5.856l1.96-1.745 5.518 9.84a1.2 1.2 0 0 0 1.521.493l2.855-1.076-2.583 4.887a1.2 1.2 0 0 0 .513.142h.001a1.2 1.2 0 0 0 .61-.17l3.618-1.365a.534.534 0 0 0 .245-.724l-3.328-6.305-1.666 3.161L3.89 15.672zm11.724-4.825L13.116 6.04l-2.003-3.755a.534.534 0 0 0-.964.03l-1.013 3.475 2.502 4.498 3.972-2.441z"/></svg> },
  { name: "Next.js", svg: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-muted-foreground/40"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.735 18.91l-4.8-6.178V18.15h-1.35V7.477h1.35l4.8 6.177V7.477h1.35v10.673h-1.35zm-5.735-8.24l-2.025 2.625V13.8L12 11.2V10.67zm0 0l-2.025 2.625V13.8L12 11.2V10.67z"/></svg> },
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
    buttonClass: "bg-primary text-white hover:bg-primary/90",
    textClass: "text-primary",
    mutedText: "text-primary/60",
    lineColor: "bg-primary/20"
  }
];

const processSteps = [
  {
    title: "1. Briefing & Requirements",
    description: "Gather important information about goals, audience, and preferences.",
    icon: <FileText className="w-5 h-5" />
  },
  {
    title: "2. Kick-off Meeting",
    description: "Discuss your project details in a quick call.",
    icon: <Users className="w-5 h-5" />
  },
  {
    title: "3. Design & Development",
    description: "Iterative design and development process with regular updates.",
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    title: "4. Launch & Support",
    description: "Go live with full dashboard support and maintenance.",
    icon: <Rocket className="w-5 h-5" />
  }
];

const reviews = [
  {
    name: "Srinivas Rao",
    location: "Vijayawada, AP",
    date: "2 weeks ago",
    text: "Excellent service and clean implementation. All requirements were met with high precision.",
    avatar: "https://picsum.photos/seed/srinivas/100/100",
  },
  {
    name: "Anitha Reddy",
    location: "Visakhapatnam, AP",
    date: "1 month ago",
    text: "BudgetDev transformed our business portal. The modern design and speed are phenomenal.",
    avatar: "https://picsum.photos/seed/anitha/100/100",
  },
  {
    name: "Venkatesh Babu",
    location: "Guntur, AP",
    date: "3 months ago",
    text: "Very reliable and creative. They helped us scale our custom software needs on a budget.",
    avatar: "https://picsum.photos/seed/venkat/100/100",
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
        <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h1 className="text-5xl md:text-[80px] font-headline font-black text-secondary leading-[0.9] tracking-tight">
                We build what you <br />
                <span className="squiggle-underline">digital success</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                Websites, web apps and custom software — all perfectly tailored to your business.
              </p>
            </div>

            <div className="flex flex-col items-center gap-8 pt-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
              {/* Custom Sparkle Button */}
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

              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-secondary">92+</span>
                  <div className="text-[9px] leading-tight font-bold text-muted-foreground uppercase text-left">
                    Projects <br /> completed
                  </div>
                </div>
                <div className="w-px h-8 bg-muted hidden md:block" />
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-secondary">100</span>
                  <div className="text-[9px] leading-tight font-bold text-muted-foreground uppercase text-left">
                    PageSpeed <br /> Score
                  </div>
                </div>
                <div className="w-px h-8 bg-muted hidden md:block" />
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-primary">4.9</span>
                  <div className="text-[9px] leading-tight font-bold text-muted-foreground uppercase text-left">
                    Google <br /> review
                  </div>
                </div>
              </div>

              <div className="w-full max-w-4xl overflow-hidden relative mt-4">
                <div className="flex gap-16 items-center animate-scroll whitespace-nowrap py-2">
                  {[...TechLogos, ...TechLogos, ...TechLogos].map((logo, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 shrink-0 opacity-40 hover:opacity-100 transition-all duration-300">
                      {logo.svg}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section className="py-12 px-6 relative">
          <div className="max-w-7xl mx-auto main-section-container overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
              <h2 className="text-5xl md:text-7xl font-headline font-black text-secondary">References.</h2>
              <div className="w-px h-10 md:h-16 bg-muted-foreground/20 hidden md:block" />
              <p className="text-muted-foreground text-xs md:text-sm max-w-[180px] leading-tight font-medium">
                Selected works. Local to international platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {references.map((ref, idx) => (
                <div key={idx} className="group flex flex-col space-y-4">
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-muted/50">
                    <Image 
                      src={ref.image?.imageUrl || ""} 
                      alt={ref.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-black/50 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-[0.1em] px-2 py-1 rounded-full">
                        {ref.tag}
                      </span>
                    </div>
                  </div>
                  <div className="px-1 space-y-1">
                    <h3 className="text-xl font-black text-secondary">{ref.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {ref.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prices Section */}
        <section className="py-12 px-6 relative">
          <div className="max-w-7xl mx-auto main-section-container overflow-hidden space-y-10">
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-baseline gap-4">
                <h2 className="text-5xl md:text-7xl font-headline font-black text-secondary">Prices.</h2>
                <p className="text-muted-foreground font-medium text-base italic">Transparent costs. ROI-first approach.</p>
              </div>
              <div className="w-full h-px bg-muted" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingPlans.map((plan, idx) => (
                <div key={idx} className={cn(
                  "relative group rounded-[2.5rem] p-8 flex flex-col space-y-8 shadow-sm transition-all duration-500",
                  plan.theme === "light" && "bg-white border border-muted/50 hover:shadow-lg",
                  plan.theme === "dark" && "bg-[#0a0a0a] text-white hover:shadow-lg",
                  plan.theme === "premium" && "bg-gradient-to-br from-[#1c1917] to-[#44403c] text-primary hover:shadow-lg"
                )}>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-3xl font-black">{plan.name}</h3>
                      {plan.badge && (
                        <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-primary text-white">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <p className={cn("text-xs leading-relaxed", plan.mutedText)}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-1">
                      <p className={cn("text-[9px] font-black uppercase tracking-[0.1em]", plan.mutedText)}>one-time</p>
                      <div className="flex items-baseline gap-2">
                        <span className={cn("text-4xl font-black", plan.textClass)}>{plan.price}</span>
                        <span className={cn("line-through text-xs opacity-40", plan.mutedText)}>{plan.oldPrice}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className={cn("text-[9px] font-black uppercase tracking-[0.1em]", plan.mutedText)}>monthly rent</p>
                      <div className="flex items-baseline gap-1">
                        <span className={cn("text-2xl font-black", plan.theme === "light" ? "text-primary" : plan.textClass)}>from {plan.monthly}</span>
                        <span className={cn("text-[10px] font-medium", plan.mutedText)}>/ Month</span>
                      </div>
                    </div>
                  </div>

                  <Button className={cn("w-full h-12 rounded-xl font-black text-sm", plan.buttonClass)}>
                    View details <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
               <p className="text-muted-foreground text-xs font-medium">
                  Free consultation • 12h Response • No-obligation
               </p>
               <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="rounded-full bg-muted/30 border-none flex items-center gap-2 text-[10px] font-bold px-5 h-8">
                      <Zap className="w-3 h-3" /> This is how I work <ArrowRight className="w-3 h-3" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl rounded-[2.5rem] p-0 overflow-hidden border-none shadow-2xl">
                    <div className="p-8 md:p-10 bg-white space-y-8">
                      <DialogHeader className="space-y-1 relative">
                        <DialogTitle className="text-3xl font-headline font-black text-secondary">This is how I work</DialogTitle>
                        <p className="text-muted-foreground text-sm font-medium">From booking to launch</p>
                      </DialogHeader>

                      <div className="space-y-6">
                        {processSteps.map((step, idx) => (
                          <div key={idx} className="flex gap-4 group">
                            <div className="w-10 h-10 rounded-xl bg-secondary text-white flex items-center justify-center shrink-0 shadow-md">
                              {step.icon}
                            </div>
                            <div className="space-y-1">
                              <h3 className="text-lg font-bold text-secondary tracking-tight">{step.title}</h3>
                              <p className="text-muted-foreground text-xs leading-relaxed">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 flex items-center gap-4">
                        <Check className="w-5 h-5 text-primary" />
                        <p className="font-bold text-secondary text-xs">Average project duration: 2-4 weeks</p>
                      </div>

                      <DialogClose asChild>
                        <Button className="w-full h-14 rounded-xl bg-secondary text-white font-black text-base shadow-xl hover:scale-[1.01] transition-all">
                          Understood <Check className="ml-2 w-4 h-4" />
                        </Button>
                      </DialogClose>
                    </div>
                  </DialogContent>
               </Dialog>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-12 px-6 relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-headline font-black text-secondary tracking-tight">What customers say</h2>
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm font-black text-secondary">
                  <span>5.0</span>
                  <span className="text-muted-foreground font-medium text-[10px]">Based on 16 reviews</span>
                </div>
              </div>
            </div>

            <div className="w-full relative px-10">
              <Carousel className="w-full" opts={{ align: "start", loop: true }}>
                <CarouselContent className="-ml-4">
                  {reviews.map((review, idx) => (
                    <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="bg-white rounded-[1.5rem] border border-muted/50 p-6 flex flex-col space-y-4 h-full shadow-sm">
                        <p className="text-secondary text-xs font-medium leading-relaxed italic">
                          "{review.text}"
                        </p>
                        <div className="flex items-center gap-3 pt-4 border-t border-muted/20 mt-auto">
                          <Image src={review.avatar} alt={review.name} width={32} height={32} className="rounded-full" />
                          <div>
                            <h4 className="font-bold text-secondary text-[11px]">{review.name}</h4>
                            <p className="text-[9px] text-muted-foreground">{review.location}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-3 mt-8">
                  <CarouselPrevious className="static translate-y-0 h-10 w-10" />
                  <CarouselNext className="static translate-y-0 h-10 w-10" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <ResultsSection />

        {/* CTA Section */}
        <section className="py-16 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#0a0a0a] rounded-[3rem] p-12 md:p-16 text-center space-y-8 shadow-2xl">
              <div className="space-y-3">
                <h2 className="text-4xl md:text-6xl font-headline font-black text-white tracking-tight">Ready for your project?</h2>
                <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto font-medium">
                  Let&apos;s create something extraordinary together.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild className="h-14 px-10 rounded-xl bg-white text-[#0a0a0a] hover:bg-primary hover:text-white font-black text-lg transition-all shadow-xl">
                  <Link href="/contact">
                    Free offer <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" className="h-14 px-10 rounded-xl border-white/20 bg-white/5 text-white hover:bg-white/10 font-black text-lg transition-all">
                  8466006486
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FABs */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
          <Link href="https://wa.me/918466006486" className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all">
            <MessageCircle className="w-6 h-6" />
          </Link>
          <Link href="tel:+918466006486" className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all">
            <Phone className="w-5 h-5" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}