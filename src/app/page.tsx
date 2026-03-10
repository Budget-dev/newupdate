import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles,
  Phone,
  MessageCircle,
  ArrowRight,
  Zap,
  FileText,
  Users,
  Rocket,
  Check,
  Star,
  MapPin,
  Wrench,
  ChevronDown,
  Layout,
  Code,
  ShieldCheck
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
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
  },
  {
    name: "Sai Krishna",
    location: "Vizianagaram, AP",
    date: "2 months ago",
    text: "Top-notch performance. Our new platform load times are under 1 second. Highly recommended.",
    avatar: "https://picsum.photos/seed/sai/100/100",
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
        <section className="relative pt-24 pb-8 md:pt-32 md:pb-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h1 className="text-4xl md:text-[64px] font-headline font-black text-secondary leading-[1.1] tracking-tight">
                We build what you <br />
                <span className="squiggle-underline">digital success</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
                Websites, web apps and custom software — all perfectly tailored to your business.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6 pt-2 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
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

              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-black text-secondary">92+</span>
                  <div className="text-[8px] leading-tight font-bold text-muted-foreground uppercase text-left">
                    Projects <br /> completed
                  </div>
                </div>
                <div className="w-px h-6 bg-muted hidden md:block" />
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-black text-secondary">100</span>
                  <div className="text-[8px] leading-tight font-bold text-muted-foreground uppercase text-left">
                    PageSpeed <br /> Score
                  </div>
                </div>
                <div className="w-px h-6 bg-muted hidden md:block" />
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-black text-primary">4.9</span>
                  <div className="text-[8px] leading-tight font-bold text-muted-foreground uppercase text-left">
                    Google <br /> review
                  </div>
                </div>
              </div>

              <div className="w-full max-w-3xl overflow-hidden relative mt-2">
                <div className="flex gap-12 items-center animate-scroll whitespace-nowrap py-1">
                  {[...TechLogos, ...TechLogos, ...TechLogos].map((logo, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 shrink-0 opacity-30 hover:opacity-100 transition-all duration-300">
                      {logo.svg}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* References Section */}
        <section className="py-8 px-6 relative">
          <div className="max-w-7xl mx-auto main-section-container overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
              <h2 className="text-4xl md:text-5xl font-headline font-black text-secondary">References.</h2>
              <div className="w-px h-8 md:h-12 bg-muted-foreground/20 hidden md:block" />
              <p className="text-muted-foreground text-[10px] md:text-xs max-w-[150px] leading-tight font-medium">
                Selected works. Local to international platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {references.map((ref, idx) => (
                <div key={idx} className="group flex flex-col space-y-3">
                  <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-muted/50">
                    <Image 
                      src={ref.image?.imageUrl || ""} 
                      alt={ref.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="bg-black/50 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-[0.1em] px-2 py-0.5 rounded-full">
                        {ref.tag}
                      </span>
                    </div>
                  </div>
                  <div className="px-1 space-y-0.5">
                    <h3 className="text-lg font-black text-secondary">{ref.title}</h3>
                    <p className="text-muted-foreground text-[11px] leading-relaxed">
                      {ref.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prices Section */}
        <section className="py-8 px-6 relative">
          <div className="max-w-7xl mx-auto main-section-container overflow-hidden space-y-8">
            <div className="space-y-3">
              <div className="flex flex-col md:flex-row md:items-baseline gap-3">
                <h2 className="text-4xl md:text-5xl font-headline font-black text-secondary">Prices.</h2>
                <p className="text-muted-foreground font-medium text-sm italic">Transparent costs. ROI-first approach.</p>
              </div>
              <div className="w-full h-px bg-muted" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {pricingPlans.map((plan, idx) => (
                <div key={idx} className={cn(
                  "relative group rounded-[2rem] p-6 flex flex-col space-y-6 shadow-sm transition-all duration-500",
                  plan.theme === "light" && "bg-white border border-muted/50 hover:shadow-lg",
                  plan.theme === "dark" && "bg-[#0a0a0a] text-white hover:shadow-lg",
                  plan.theme === "premium" && "bg-gradient-to-br from-[#1c1917] to-[#44403c] text-primary hover:shadow-lg"
                )}>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-black">{plan.name}</h3>
                      {plan.badge && (
                        <span className="text-[8px] font-black px-1.5 py-0.5 rounded-full bg-primary text-white">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <p className={cn("text-[11px] leading-relaxed", plan.mutedText)}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-0.5">
                      <p className={cn("text-[8px] font-black uppercase tracking-[0.1em]", plan.mutedText)}>one-time</p>
                      <div className="flex items-baseline gap-1.5">
                        <span className={cn("text-3xl font-black", plan.textClass)}>{plan.price}</span>
                        <span className={cn("line-through text-[10px] opacity-40", plan.mutedText)}>{plan.oldPrice}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className={cn("text-[8px] font-black uppercase tracking-[0.1em]", plan.mutedText)}>monthly rent</p>
                      <div className="flex items-baseline gap-1">
                        <span className={cn("text-xl font-black", plan.theme === "light" ? "text-primary" : plan.textClass)}>from {plan.monthly}</span>
                        <span className={cn("text-[9px] font-medium", plan.mutedText)}>/ Month</span>
                      </div>
                    </div>
                  </div>

                  <Button className={cn("w-full h-10 rounded-xl font-black text-xs", plan.buttonClass)}>
                    View details <ArrowRight className="ml-1.5 w-3 h-3" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
               <p className="text-muted-foreground text-[10px] font-medium">
                  Free consultation • 12h Response • No-obligation
               </p>
               <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="rounded-full bg-muted/30 border-none flex items-center gap-1.5 text-[9px] font-bold px-4 h-7">
                      <Zap className="w-2.5 h-2.5" /> This is how I work <ArrowRight className="w-2.5 h-2.5" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-lg rounded-[2rem] p-0 overflow-hidden border-none shadow-2xl">
                    <div className="p-6 md:p-8 bg-white space-y-6">
                      <DialogHeader className="space-y-1 relative">
                        <DialogTitle className="text-2xl font-headline font-black text-secondary">This is how I work</DialogTitle>
                        <p className="text-muted-foreground text-xs font-medium">From booking to launch</p>
                      </DialogHeader>

                      <div className="space-y-4">
                        {processSteps.map((step, idx) => (
                          <div key={idx} className="flex gap-3 group">
                            <div className="w-8 h-8 rounded-lg bg-secondary text-white flex items-center justify-center shrink-0 shadow-md">
                              {step.icon}
                            </div>
                            <div className="space-y-0.5">
                              <h3 className="text-base font-bold text-secondary tracking-tight">{step.title}</h3>
                              <p className="text-muted-foreground text-[11px] leading-relaxed">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-primary/5 border border-primary/10 rounded-xl p-3 flex items-center gap-3">
                        <Check className="w-4 h-4 text-primary" />
                        <p className="font-bold text-secondary text-[11px]">Average project duration: 2-4 weeks</p>
                      </div>

                      <DialogClose asChild>
                        <Button className="w-full h-12 rounded-xl bg-secondary text-white font-black text-sm shadow-xl hover:scale-[1.01] transition-all">
                          Understood <Check className="ml-1.5 w-3 h-3" />
                        </Button>
                      </DialogClose>
                    </div>
                  </DialogContent>
               </Dialog>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-8 px-6 relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl md:text-5xl font-headline font-black text-secondary tracking-tight">What customers say</h2>
              <div className="flex flex-col items-center gap-0.5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-black text-secondary">
                  <span>5.0</span>
                  <span className="text-muted-foreground font-medium text-[9px]">Based on 16 reviews</span>
                </div>
              </div>
            </div>

            <div className="w-full relative px-8">
              <Carousel className="w-full" opts={{ align: "start", loop: true }}>
                <CarouselContent className="-ml-4">
                  {reviews.map((review, idx) => (
                    <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="bg-white rounded-[1.25rem] border border-muted/50 p-5 flex flex-col space-y-3 h-full shadow-sm">
                        <p className="text-secondary text-[11px] font-medium leading-relaxed italic">
                          "{review.text}"
                        </p>
                        <div className="flex items-center gap-2 pt-3 border-t border-muted/20 mt-auto">
                          <Image src={review.avatar} alt={review.name} width={28} height={28} className="rounded-full" />
                          <div>
                            <h4 className="font-bold text-secondary text-[10px]">{review.name}</h4>
                            <p className="text-[8px] text-muted-foreground">{review.location}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-3 mt-6">
                  <CarouselPrevious className="static translate-y-0 h-8 w-8" />
                  <CarouselNext className="static translate-y-0 h-8 w-8" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <ResultsSection />

        {/* FAQ Section */}
        <section className="py-8 px-6 relative">
          <div className="max-w-7xl mx-auto main-section-container space-y-8">
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 border-b pb-6">
              <h2 className="text-6xl md:text-7xl font-headline font-black text-secondary">FAQ.</h2>
              <p className="text-muted-foreground font-medium text-xs max-w-md leading-tight">
                Plain language instead of technical jargon. The most important answers.
              </p>
            </div>

            <div className="bg-[#F8FAF9] rounded-[2rem] p-8 space-y-6">
              <h3 className="text-2xl font-black text-secondary">Interesting facts</h3>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {[
                  { q: "Why BudgetDev?", a: "We combine high-end design with technical excellence at a fair price. No hidden costs, just results." },
                  { q: "How long does it take?", a: "An average website takes 2-4 weeks. Complex web apps can take 2-3 months depending on the scope." },
                  { q: "How much does a website cost with BudgetDev?", a: "Our packages start at ₹3,500 for corporate sites. We provide fixed-price quotes after the initial briefing." },
                  { q: "What technologies does BudgetDev use?", a: "We primarily use Next.js, React, Tailwind CSS, and Firebase for scalable, lightning-fast performance." },
                  { q: "Are BudgetDev websites SEO-optimized?", a: "Yes, every project includes on-page SEO best practices to ensure you are visible on Google from day one." },
                  { q: "Does BudgetDev also offer on-site consulting in Vizianagaram?", a: "Absolutely! We love meeting local clients in Vizianagaram to discuss their digital vision in person." },
                  { q: "Why not use a website builder like Wix or Jimdo?", a: "Builders are limited in performance and customization. We provide 100/100 PageSpeed scores and full ownership of your code." }
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="bg-white rounded-xl border px-6">
                    <AccordionTrigger className="text-sm font-bold hover:no-underline">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-xs leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-8 rounded-[2rem] border-none bg-[#F8FAF9] space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h4 className="font-black text-secondary text-lg">Local in Vizianagaram</h4>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Personal contact is irreplaceable. No anonymous call center, but direct contacts for your project in Andhra Pradesh.
                </p>
              </Card>

              <Card className="p-8 rounded-[2rem] border-none bg-secondary text-white space-y-4 relative overflow-hidden group">
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <h4 className="font-black text-lg italic">Individually?</h4>
                  </div>
                  <p className="text-white/60 text-xs leading-relaxed">
                    I would be happy to create a customized offer for online shops or complex software.
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors">
                    Inquiries <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-8 px-6 relative">
          <div className="max-w-7xl mx-auto main-section-container space-y-12">
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 border-b pb-6">
              <h2 className="text-6xl md:text-7xl font-headline font-black text-secondary">Expertise.</h2>
              <p className="text-muted-foreground font-medium text-xs max-w-md leading-tight">
                What we do in Vizianagaram and throughout Andhra Pradesh.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Projects realized", value: "50+" },
                { label: "Users reached", value: "7.5M+" },
                { label: "Customer satisfaction", value: "100%" },
                { label: "Average response time", value: "24h" }
              ].map((stat, i) => (
                <Card key={i} className="p-6 rounded-[1.5rem] border-none bg-[#F8FAF9] flex flex-col items-center justify-center text-center space-y-1">
                  <span className="text-3xl font-black text-secondary">{stat.value}</span>
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</span>
                </Card>
              ))}
            </div>

            {/* Our Services */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-secondary">Our services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { 
                    title: "Web design & UI/UX", 
                    desc: "Conversion-optimized designs that not only look good, but sell.",
                    icon: <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><Layout className="w-5 h-5" /></div>
                  },
                  { 
                    title: "Web development", 
                    desc: "Next.js, React, TypeScript — state-of-the-art technologies for maximum performance.",
                    icon: <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><Code className="w-5 h-5" /></div>
                  },
                  { 
                    title: "Web Apps & Software", 
                    desc: "Customized applications, dashboards and automated systems.",
                    icon: <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><Zap className="w-5 h-5" /></div>
                  },
                  { 
                    title: "AI integration", 
                    desc: "Intelligent chatbots, automations and AI-powered features.",
                    icon: <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><Sparkles className="w-5 h-5" /></div>
                  }
                ].map((service, i) => (
                  <Card key={i} className="p-6 rounded-[1.5rem] border border-muted/50 flex items-start gap-4">
                    {service.icon}
                    <div className="space-y-1">
                      <h4 className="font-bold text-secondary">{service.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{service.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Footer Section */}
            <div className="pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-1">
                <h4 className="text-xs font-black text-secondary uppercase tracking-widest">State-of-the-art technologies</h4>
                <p className="text-[10px] text-muted-foreground font-medium">Next.js, React, TypeScript, Tailwind CSS, Firebase, Supabase, Vercel</p>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-2 bg-secondary text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                   <Rocket className="w-3 h-3" /> PageSpeed 100/100
                </div>
                <div className="flex items-center gap-2 bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                   <ShieldCheck className="w-3 h-3" /> GDPR compliant
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#0a0a0a] rounded-[2.5rem] p-10 md:p-12 text-center space-y-6 shadow-2xl">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-5xl font-headline font-black text-white tracking-tight">Ready for your project?</h2>
                <p className="text-white/60 text-sm md:text-base max-w-lg mx-auto font-medium">
                  Let&apos;s create something extraordinary together.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild className="h-12 px-8 rounded-xl bg-white text-[#0a0a0a] hover:bg-primary hover:text-white font-black text-base transition-all shadow-xl">
                  <Link href="/contact">
                    Free offer <ArrowRight className="ml-1.5 w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="h-12 px-8 rounded-xl border-white/20 bg-white/5 text-white hover:bg-white/10 font-black text-base transition-all">
                  8466006486
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FABs */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
          <Link href="https://wa.me/918466006486" className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all">
            <MessageCircle className="w-5 h-5" />
          </Link>
          <Link href="tel:+918466006486" className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all">
            <Phone className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
