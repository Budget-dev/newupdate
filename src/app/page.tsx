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
  Layout,
  Code,
  ShieldCheck,
  ExternalLink,
  ArrowUpRight
} from "lucide-react";
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

const completedProjects = [
  {
    title: "Srinika Spices",
    tag: "E-commerce",
    description: "High-quality spice distribution platform with seamless ordering and inventory management.",
    link: "https://srinikaspice.in",
    imageUrl: "https://s0.wp.com/mshots/v1/https://srinikaspice.in?w=800&h=600"
  },
  {
    title: "Gurucharan Interiors",
    tag: "Interior Design",
    description: "Elegant portfolio for a leading interior design firm showcasing premium projects.",
    link: "https://gurucharaninteriors.in",
    imageUrl: "https://s0.wp.com/mshots/v1/https://gurucharaninteriors.in?w=800&h=600"
  },
  {
    title: "Yasodha.in",
    tag: "Portfolio",
    description: "Professional personal branding portal for specialized career development.",
    link: "https://yasodha.in",
    imageUrl: "https://s0.wp.com/mshots/v1/https://yasodha.in?w=800&h=600"
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
        <section className="relative pt-12 pb-4 md:pt-20 md:pb-6 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
            <div className="space-y-3 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h1 className="text-4xl md:text-[56px] font-headline font-black text-secondary leading-[1.1] tracking-tight">
                We build what you <br />
                <span className="squiggle-underline">digital success</span>
              </h1>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed font-medium">
                Websites, web apps and custom software — all perfectly tailored to your business.
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
                    <div key={idx} className="flex flex-col items-center gap-2 shrink-0 opacity-20 hover:opacity-100 transition-all duration-300">
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
              <h2 className="text-3xl md:text-4xl font-headline font-black text-secondary">Completed Projects.</h2>
              <div className="w-px h-6 md:h-10 bg-muted-foreground/20 hidden md:block" />
              <p className="text-muted-foreground text-[9px] md:text-[10px] max-w-[150px] leading-tight font-medium">
                Our showcase of high-performance digital transformations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {completedProjects.map((ref, idx) => (
                <div key={idx} className="group flex flex-col space-y-2">
                  <div className="relative aspect-[4/3] rounded-[1.25rem] overflow-hidden shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-muted/50 bg-muted/10">
                    <Image 
                      src={ref.imageUrl} 
                      alt={ref.title} 
                      fill 
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
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

        {/* Prices Section */}
        <section className="py-4 px-6 relative">
          <div className="max-w-7xl mx-auto main-section-container overflow-hidden space-y-6">
            <div className="space-y-2">
              <div className="flex flex-col md:flex-row md:items-baseline gap-2">
                <h2 className="text-3xl md:text-4xl font-headline font-black text-secondary">Prices.</h2>
                <p className="text-muted-foreground font-medium text-xs italic">Transparent costs. ROI-first approach.</p>
              </div>
              <div className="w-full h-px bg-muted" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pricingPlans.map((plan, idx) => (
                <div key={idx} className={cn(
                  "relative group rounded-[1.5rem] p-5 flex flex-col space-y-5 shadow-sm transition-all duration-500",
                  plan.theme === "light" && "bg-white border border-muted/50 hover:shadow-lg",
                  plan.theme === "dark" && "bg-[#0a0a0a] text-white hover:shadow-lg",
                  plan.theme === "premium" && "bg-gradient-to-br from-[#1c1917] to-[#44403c] text-primary hover:shadow-lg"
                )}>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-black">{plan.name}</h3>
                      {plan.badge && (
                        <span className="text-[7px] font-black px-1.5 py-0.5 rounded-full bg-primary text-white">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <p className={cn("text-[10px] leading-relaxed", plan.mutedText)}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-0.5">
                      <p className={cn("text-[7px] font-black uppercase tracking-[0.1em]", plan.mutedText)}>one-time</p>
                      <div className="flex items-baseline gap-1.5">
                        <span className={cn("text-2xl font-black", plan.textClass)}>{plan.price}</span>
                        <span className={cn("line-through text-[9px] opacity-40", plan.mutedText)}>{plan.oldPrice}</span>
                      </div>
                    </div>
                    <div className="space-y-0.5">
                      <p className={cn("text-[7px] font-black uppercase tracking-[0.1em]", plan.mutedText)}>monthly rent</p>
                      <div className="flex items-baseline gap-1">
                        <span className={cn("text-lg font-black", plan.theme === "light" ? "text-primary" : plan.textClass)}>from {plan.monthly}</span>
                        <span className={cn("text-[8px] font-medium", plan.mutedText)}>/ Month</span>
                      </div>
                    </div>
                  </div>

                  <Button className={cn("w-full h-9 rounded-lg font-black text-[11px]", plan.buttonClass)}>
                    View details <ArrowRight className="ml-1.5 w-3 h-3" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="pt-1 flex flex-col md:flex-row items-center justify-center gap-3 text-center">
               <p className="text-muted-foreground text-[9px] font-medium">
                  Free consultation • 12h Response • No-obligation
               </p>
               <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="rounded-full bg-muted/30 border-none flex items-center gap-1.5 text-[8px] font-bold px-3 h-6">
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

        {/* Results Section */}
        <ResultsSection />

        {/* Reviews Section */}
        <section className="py-4 px-6 relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col items-center space-y-5">
            <div className="text-center space-y-1">
              <h2 className="text-2xl md:text-4xl font-headline font-black text-secondary tracking-tight">What customers say</h2>
              <div className="flex flex-col items-center gap-0.5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-black text-secondary">
                  <span>5.0</span>
                  <span className="text-muted-foreground font-medium text-[8px]">Based on 16 reviews</span>
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
                            Google
                          </Link>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="h-7 w-7 opacity-0 group-hover/carousel:opacity-100 transition-opacity left-0 bg-white shadow-md border-muted" />
                <CarouselNext className="h-7 w-7 opacity-0 group-hover/carousel:opacity-100 transition-opacity right-0 bg-white shadow-md border-muted" />
              </Carousel>
              <div className="flex justify-center mt-4">
                <Link href="#" className="text-[9px] font-black text-secondary hover:text-primary transition-colors uppercase tracking-[0.2em] flex items-center gap-1.5">
                   View all 16 reviews on Google <ArrowRight className="w-2.5 h-2.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-4 px-6 relative">
          <div className="max-w-7xl mx-auto main-section-container space-y-6">
            <div className="flex flex-col md:flex-row md:items-baseline gap-3 border-b pb-4">
              <h2 className="text-5xl md:text-6xl font-headline font-black text-secondary">FAQ.</h2>
              <p className="text-muted-foreground font-medium text-[10px] max-w-[200px] leading-tight">
                Plain language instead of technical jargon. The most important answers.
              </p>
            </div>

            <div className="bg-[#F8FAF9] rounded-[1.5rem] p-6 space-y-4">
              <h3 className="text-xl font-black text-secondary">Interesting facts</h3>
              <Accordion type="single" collapsible className="w-full space-y-2">
                {[
                  { q: "Why BudgetDev?", a: "We combine high-end design with technical excellence at a fair price. No hidden costs, just results." },
                  { q: "How long does it take?", a: "An average website takes 2-4 weeks. Complex web apps can take 2-3 months depending on the scope." },
                  { q: "How much does a website cost with BudgetDev?", a: "Our packages start at ₹3,500 for corporate sites. We provide fixed-price quotes after the initial briefing." },
                  { q: "What technologies does BudgetDev use?", a: "We primarily use Next.js, React, TypeScript, and Firebase for scalable, lightning-fast performance." },
                  { q: "Are BudgetDev websites SEO-optimized?", a: "Yes, every project includes on-page SEO best practices to ensure you are visible on Google from day one." },
                  { q: "Does BudgetDev also offer on-site consulting in Vizianagaram?", a: "Absolutely! We love meeting local clients in Vizianagaram to discuss their digital vision in person." },
                  { q: "Why not use a website builder like Wix or Jimdo?", a: "Builders are limited in performance and customization. We provide 100/100 PageSpeed scores and full ownership of your code." }
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-6 rounded-[1.5rem] border-none bg-[#F8FAF9] space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="font-black text-secondary text-base">Local in Vizianagaram</h4>
                </div>
                <p className="text-muted-foreground text-[10px] leading-relaxed">
                  Personal contact is irreplaceable. No anonymous call center, but direct contact for your project in Andhra Pradesh.
                </p>
              </Card>

              <Card className="p-6 rounded-[1.5rem] border-none bg-secondary text-white space-y-3 relative overflow-hidden group">
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white">
                      <Wrench className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="font-black text-base italic">Individually?</h4>
                  </div>
                  <p className="text-white/60 text-[10px] leading-relaxed">
                    I would be happy to create a customized offer for online shops or complex software.
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-widest hover:text-primary transition-colors">
                    Inquiries <ArrowRight className="w-2.5 h-2.5" />
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-4 px-6 relative">
          <div className="max-w-7xl mx-auto main-section-container space-y-8">
            <div className="flex flex-col md:flex-row md:items-baseline gap-3 border-b pb-4">
              <h2 className="text-5xl md:text-6xl font-headline font-black text-secondary">Expertise.</h2>
              <p className="text-muted-foreground font-medium text-[10px] max-w-[200px] leading-tight">
                What we do in Vizianagaram and throughout Andhra Pradesh.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Projects realized", value: "50+" },
                { label: "Users reached", value: "7.5M+" },
                { label: "Customer satisfaction", value: "100%" },
                { label: "Average response time", value: "24h" }
              ].map((stat, i) => (
                <Card key={i} className="p-5 rounded-[1.25rem] border-none bg-[#F8FAF9] flex flex-col items-center justify-center text-center space-y-1">
                  <span className="text-2xl font-black text-secondary">{stat.value}</span>
                  <span className="text-[8px] font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</span>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-black text-secondary">Our services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { title: "Web design & UI/UX", desc: "Conversion-optimized designs." },
                  { title: "Web development", desc: "Next.js, React, TypeScript." },
                  { title: "SEO optimization", desc: "Better Google rankings." },
                  { title: "AI integration", desc: "ChatGPT, Automation, Bots." },
                  { title: "AI systems", desc: "Individual AI solutions." },
                  { title: "Software development", desc: "Custom applications." }
                ].map((service, i) => (
                  <Card key={i} className="p-4 rounded-[1.25rem] border border-muted/50 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-bold text-secondary text-sm">{service.title}</h4>
                      <p className="text-[10px] text-muted-foreground leading-relaxed">{service.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="space-y-0.5">
                <h4 className="text-[9px] font-black text-secondary uppercase tracking-widest">State-of-the-art technologies</h4>
                <p className="text-[8px] text-muted-foreground font-medium">Next.js, React, TypeScript, Tailwind CSS, Firebase</p>
              </div>
              <div className="flex gap-2">
                <div className="flex items-center gap-1.5 bg-secondary text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">
                   <Rocket className="w-2.5 h-2.5" /> PageSpeed 100/100
                </div>
                <div className="flex items-center gap-1.5 bg-primary text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">
                   <ShieldCheck className="w-2.5 h-2.5" /> GDPR compliant
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About me Section */}
        <section id="about" className="py-4 px-6 relative">
          <div className="max-w-7xl mx-auto main-section-container space-y-8">
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 border-b pb-4">
              <h2 className="text-5xl md:text-6xl font-headline font-black text-secondary">About me.</h2>
              <p className="text-muted-foreground font-medium text-[10px] max-w-[200px] leading-tight">
                The mastermind behind BudgetDev.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-2 relative group">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-[#1A1A1A] border border-muted/20">
                  <Image 
                    src="https://yasodha.in/assets/venkatesh-profile.png" 
                    alt="Venkatesh Choppa" 
                    fill 
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[8px] font-black uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Founder & Developer
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="text-2xl font-black text-white leading-none">Venkatesh Choppa</h3>
                        <p className="text-white/60 text-[9px] font-medium">Vizianagaram, Andhra Pradesh</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3 space-y-8 py-4">
                <div className="space-y-6">
                  <h3 className="text-3xl font-black text-secondary leading-tight">One head, clear visions.</h3>
                  <div className="space-y-4 text-[13px] text-muted-foreground leading-relaxed max-w-xl">
                    <p>
                      I&apos;m Venkatesh Choppa – the sole driving force behind BudgetDev, your web design agency in Vizianagaram. 
                      As a frontend developer with innovative thinking, I work efficiently, with high quality, and quickly.
                    </p>
                    <p>
                      I run a web development agency serving businesses across Andhra Pradesh. We build professional, SEO-optimized websites for restaurants, cafes, and local businesses. I personally manage and execute everything to deliver the best possible result.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-b py-6">
                  {[
                    { label: "Unique users", value: "7.5M+" },
                    { label: "Page views", value: "3.4M+" },
                    { label: "Satisfied entrepreneurs", value: "100%" }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-1">
                      <p className="text-xl font-black text-secondary">{stat.value}</p>
                      <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Web Development", "UI/UX Design", "Automation"].map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-muted/50 border border-muted-foreground/10 text-secondary text-[8px] font-black uppercase tracking-widest rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-4 px-6 relative">
          <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-[#0a0a0a] p-10 md:p-16 overflow-hidden relative shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-primary text-xs font-black uppercase tracking-widest">make contact</span>
                  <h2 className="text-5xl md:text-7xl font-headline font-black text-white leading-tight">Ready for your project?</h2>
                  <p className="text-white/60 text-base md:text-lg max-w-md font-medium">
                    Let&apos;s get started together. Send me an inquiry and receive a response within 12 hours.
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
                <Card className="w-full max-w-sm bg-white/5 border-white/10 rounded-[2rem] p-8 space-y-4 backdrop-blur-xl">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-white italic tracking-tight">BudgetDev.agency</h3>
                    <p className="text-white/40 text-[11px] font-bold uppercase tracking-wider">Web design & software development</p>
                  </div>
                  <div className="pt-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
                       <div className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Available: +91 8466006486
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-4 px-6 relative mb-8">
          <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-[#0a0a0a] p-8 md:p-12 space-y-8 border border-white/5">
            <div className="flex justify-between items-end">
              <div className="space-y-2">
                <span className="text-primary text-xs font-black uppercase tracking-widest">Vizianagaram location</span>
                <p className="text-white text-base font-bold">Fort City, Vizianagaram, Andhra Pradesh 535003</p>
              </div>
              <Link href="https://maps.google.com" target="_blank" className="text-white/40 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                Open in Google Maps <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
            
            <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden grayscale invert opacity-80 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-700">
               <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://www.openstreetmap.org/export/embed.html?bbox=83.3900%2C18.1100%2C83.4100%2C18.1300&amp;layer=mapnik&amp;marker=18.1200%2C83.4000" 
                className="filter contrast-125 border-none"
              />
            </div>
          </div>
        </section>

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