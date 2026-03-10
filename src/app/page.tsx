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
    buttonClass: "bg-primary text-white hover:bg-primary/90",
    textClass: "text-primary",
    mutedText: "text-primary/60",
    lineColor: "bg-primary/20"
  }
];

const processSteps = [
  {
    title: "1. Briefing & Requirements",
    description: "After booking, you will receive a questionnaire. I will gather all the important information about your project: goals, target audience, design preferences, and technical requirements.",
    icon: <FileText className="w-5 h-5" />
  },
  {
    title: "2. Kick-off Meeting",
    description: "In a 30-minute call, I will discuss your project with you in detail. You will get to know me personally, and I will answer any questions you may have.",
    icon: <Users className="w-5 h-5" />
  },
  {
    title: "3. Design & Development",
    description: "I'll start with the first draft. You'll receive regular updates via Slack and can provide feedback at any time. Iterative process until perfection is achieved.",
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    title: "4. Launch & Support",
    description: "Once you approve it, your project will go live. You will receive an introduction to the dashboard, and I will be available to answer any questions you may have.",
    icon: <Rocket className="w-5 h-5" />
  }
];

const reviews = [
  {
    name: "Srinivas Rao",
    location: "Vijayawada, AP",
    date: "2 weeks ago",
    text: "Excellent service and clean implementation. All requirements were met with high precision. Strongly recommended for high-performance websites.",
    avatar: "https://picsum.photos/seed/srinivas/100/100",
  },
  {
    name: "Anitha Reddy",
    location: "Visakhapatnam, AP",
    date: "1 month ago",
    text: "BudgetDev transformed our business portal. The modern design and speed improvements are phenomenal. Truly professional team.",
    avatar: "https://picsum.photos/seed/anitha/100/100",
  },
  {
    name: "Venkatesh Babu",
    location: "Guntur, AP",
    date: "3 months ago",
    text: "Very reliable and creative. They helped us scale our custom software needs on a tight budget. Great communication throughout.",
    avatar: "https://picsum.photos/seed/venkat/100/100",
  },
  {
    name: "Sai Krishna",
    location: "Tirupati, AP",
    date: "4 months ago",
    text: "The web application built by BudgetDev exceeded our expectations. Clean code, great UI, and delivered on time.",
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
        <section className="relative pt-48 pb-20 md:pt-64 md:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h1 className="text-6xl md:text-[100px] font-headline font-black text-secondary leading-[0.9] tracking-tight">
                We build what you <br />
                <span className="squiggle-underline">digital success</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
                Web design and development: Websites, web apps and custom software — all <br className="hidden md:block" /> from one source, perfectly tailored to your business.
              </p>
            </div>

            <div className="flex flex-col items-center gap-12 pt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
              {/* Custom Sparkle Button */}
              <div className="sparkle-btn-wrapper">
                <Link href="/contact" className="sparkle-btn group">
                  <svg className="sparkle-btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
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
          <div className="max-w-7xl mx-auto main-section-container overflow-hidden">
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
          <div className="max-w-7xl mx-auto main-section-container overflow-hidden space-y-16">
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
                  plan.theme === "premium" && "bg-gradient-to-br from-[#1c1917] to-[#44403c] text-primary hover:shadow-2xl"
                )}>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-4xl font-black">{plan.name}</h3>
                      {plan.badge && (
                        <span className="text-[10px] font-black px-3 py-1 rounded-full bg-primary text-white">
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
                          <span className={cn("text-3xl font-black", plan.theme === "light" ? "text-primary" : plan.textClass)}>from {plan.monthly}</span>
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
               <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="rounded-full bg-muted/30 border-none flex items-center gap-2 text-xs font-bold px-6 h-10">
                      <Zap className="w-3 h-3 text-secondary" /> This is how I work <ArrowRight className="w-3 h-3" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl rounded-[3rem] p-0 overflow-hidden border-none shadow-2xl">
                    <div className="p-8 md:p-12 bg-white space-y-10">
                      <DialogHeader className="space-y-2 relative">
                        <DialogTitle className="text-4xl font-headline font-black text-secondary">This is how I work</DialogTitle>
                        <p className="text-muted-foreground font-medium">From booking to launch</p>
                        <DialogClose className="absolute -top-4 -right-4 w-10 h-10 bg-muted/50 rounded-full flex items-center justify-center hover:bg-muted transition-colors">
                          <X className="w-5 h-5 text-secondary" />
                        </DialogClose>
                      </DialogHeader>

                      <div className="space-y-8">
                        {processSteps.map((step, idx) => (
                          <div key={idx} className="flex gap-6 group">
                            <div className="w-12 h-12 rounded-2xl bg-secondary text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                              {step.icon}
                            </div>
                            <div className="space-y-2">
                              <h3 className="text-xl font-bold text-secondary tracking-tight">{step.title}</h3>
                              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-primary/5 border border-primary/10 rounded-3xl p-6 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-sm">
                          <Check className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-bold text-secondary text-sm">Average project duration: 2-4 weeks</p>
                          <p className="text-muted-foreground text-[11px] font-medium leading-none">Depending on complexity and chosen package</p>
                        </div>
                      </div>

                      <DialogClose asChild>
                        <Button className="w-full h-16 rounded-2xl bg-secondary text-white font-black text-lg shadow-xl shadow-secondary/10 hover:scale-[1.02] transition-all">
                          Understood <Check className="ml-2 w-5 h-5" />
                        </Button>
                      </DialogClose>
                    </div>
                  </DialogContent>
               </Dialog>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-24 px-6 relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col items-center space-y-12">
            <div className="flex flex-col items-center space-y-6 text-center animate-in fade-in duration-700">
              <div className="bg-white border border-muted shadow-sm px-6 py-2 rounded-full flex items-center gap-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-sm font-bold text-secondary uppercase tracking-wider">Google Reviews</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-headline font-black text-secondary tracking-tight">What customers say</h2>
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xl font-black text-secondary">
                  <span>5</span>
                  <span className="text-muted-foreground font-medium text-sm">Based on 16 reviews</span>
                </div>
              </div>
            </div>

            <div className="w-full relative px-12">
              <Carousel className="w-full" opts={{ align: "start", loop: true }}>
                <CarouselContent className="-ml-4">
                  {reviews.map((review, idx) => (
                    <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/4">
                      <div className="bg-white rounded-[2rem] border border-muted/50 p-8 flex flex-col space-y-6 h-full shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-secondary text-sm font-medium leading-relaxed italic">
                          "{review.text}"
                        </p>
                        <div className="flex items-center gap-3 pt-4 border-t border-muted/20 mt-auto">
                          <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
                            <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-secondary text-[12px] truncate">{review.name}</h4>
                            <p className="text-[10px] text-muted-foreground">{review.location}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-4 mt-12">
                  <CarouselPrevious className="static translate-y-0 h-12 w-12 border-muted" />
                  <CarouselNext className="static translate-y-0 h-12 w-12 border-muted" />
                </div>
              </Carousel>
            </div>

            <Button variant="outline" className="rounded-full border-muted text-secondary hover:bg-secondary hover:text-white font-bold px-8 h-12 transition-all">
              View all 16 reviews on Google
            </Button>
          </div>
        </section>

        {/* Results Section */}
        <ResultsSection />

        {/* Ready for your project? Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#0a0a0a] rounded-[4rem] p-16 md:p-24 text-center space-y-12 shadow-2xl shadow-black/20">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-7xl font-headline font-black text-white tracking-tight">Ready for your project?</h2>
                <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                  Let&apos;s create something extraordinary together. I look forward to hearing from you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button asChild className="h-16 px-12 rounded-2xl bg-white text-[#0a0a0a] hover:bg-primary hover:text-white font-black text-xl transition-all hover:scale-105 active:scale-95 shadow-xl">
                  <Link href="/contact">
                    Free offer <ArrowRight className="ml-2 w-6 h-6" />
                  </Link>
                </Button>
                <Button variant="outline" className="h-16 px-12 rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10 font-black text-xl transition-all hover:scale-105 active:scale-95">
                  <Phone className="mr-3 w-6 h-6" />
                  8466006486
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
          <button className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all">
            <MessageSquare className="w-6 h-6" />
          </button>
          <Link href="https://wa.me/918466006486" className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all">
            <MessageCircle className="w-7 h-7" />
          </Link>
          <Link href="tel:+918466006486" className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all">
            <Phone className="w-6 h-6" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}