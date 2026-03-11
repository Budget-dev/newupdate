"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ExternalLink, 
  MapPin, 
  Check, 
  Zap, 
  Layout, 
  ShieldCheck, 
  MousePointer2, 
  LineChart,
  Code2,
  Cpu,
  Globe,
  Star
} from "lucide-react";

const stats = [
  { label: "Reached users", value: "7.5M+" },
  { label: "Projects realized", value: "92+" },
  { label: "PageSpeed Score", value: "100" },
  { label: "Google review", value: "5.0" }
];

const values = [
  {
    title: "Quality over quantity",
    desc: "Every website is custom-built from the ground up. No templates, no compromises.",
    icon: <Layout className="w-5 h-5 text-primary" />
  },
  {
    title: "speed",
    desc: "Fast implementation without loss of quality. Your website in weeks, not months.",
    icon: <Zap className="w-5 h-5 text-primary" />
  },
  {
    title: "Design with function",
    desc: "Every design has a purpose: conversions. Beauty alone is not enough.",
    icon: <MousePointer2 className="w-5 h-5 text-primary" />
  },
  {
    title: "Performance First",
    desc: "A PageSpeed score of 100/100 is not a coincidence, but standard for all my projects.",
    icon: <Cpu className="w-5 h-5 text-primary" />
  },
  {
    title: "transparency",
    desc: "Clear communication, fair prices, no hidden costs. You always know where you stand.",
    icon: <ShieldCheck className="w-5 h-5 text-primary" />
  },
  {
    title: "Long-term partner",
    desc: "I won't disappear after launch. Support, updates, and optimization - permanently.",
    icon: <Rocket className="w-5 h-5 text-primary" />
  }
];

const timeline = [
  {
    year: "2024",
    title: "BudgetDev was founded",
    desc: "Built a professional agency, completed over 92 projects, and scaled to enterprise level."
  },
  {
    year: "2025",
    title: "Scaling & AI",
    desc: "AI integrations, automation and enterprise projects reaching 7.5M+ users."
  }
];

const techStack = [
  { name: "Next.js", desc: "React Framework" },
  { name: "React", desc: "UI Library" },
  { name: "TypeScript", desc: "Type Safety" },
  { name: "Tailwind CSS", desc: "Styling" },
  { name: "Supabase", desc: "Database & Auth" },
  { name: "Prisma", desc: "ORM" },
  { name: "Vercel", desc: "Hosting & CI/CD" },
  { name: "Stripe", desc: "Payments" },
  { name: "OpenAI", desc: "AI Integration" },
  { name: "Claude", desc: "AI Assistant" },
  { name: "Cloudflare", desc: "Security & DNS" },
  { name: "shadcn/ui", desc: "UI Components" }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD]">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Hero Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="relative aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#1A1A1A]">
                <Image 
                  src="https://yasodha.in/assets/venkatesh-profile.png" 
                  alt="Venkatesh Choppa" 
                  fill 
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Founder & Developer
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="text-3xl font-black text-white leading-none">Venkatesh Choppa</h3>
                      <p className="text-white/60 text-[11px] font-bold uppercase tracking-widest mt-1">Vizianagaram, AP, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-headline font-black text-secondary leading-[1.1] tracking-tight">
                  One head, <br />
                  <span className="text-primary italic">clear visions.</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  I'm Venkatesh Choppa – the sole mind behind BudgetDev. No large team, no unnecessary meetings, no wasted hours. As a developer with innovative thinking, I work efficiently, with high quality, and quickly.
                </p>
                <p className="text-base text-muted-foreground/80 leading-relaxed font-medium">
                  I personally manage and execute everything to deliver the best possible result. No 500 hours of work on things that simply need to work. I am the best partner you will find when it comes to excellence.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-2xl font-black text-secondary">{stat.value}</p>
                    <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild className="rounded-xl h-12 px-8 bg-secondary text-white font-black hover:scale-[1.02] transition-transform">
                  <Link href="/contact">Start project <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
                <Button variant="outline" asChild className="rounded-xl h-12 px-8 border-muted/20 font-black hover:bg-muted/50 text-secondary">
                  <Link href="https://github.com/venkateshchoppa" target="_blank" className="flex items-center gap-2">
                    @budgetdev.agency
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="main-section-container space-y-12">
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 border-b pb-6">
              <h2 className="text-5xl md:text-7xl font-headline font-black text-secondary">Values.</h2>
              <p className="text-muted-foreground font-medium text-xs">What motivates me and what you can expect.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((item, i) => (
                <div key={i} className="bg-white border border-muted/50 p-8 rounded-[2rem] space-y-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-xl bg-[#F8FAF9] flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-black text-secondary text-lg group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* My path Section */}
          <section className="main-section-container space-y-12">
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 border-b pb-6">
              <h2 className="text-5xl md:text-7xl font-headline font-black text-secondary">My path.</h2>
              <p className="text-muted-foreground font-medium text-xs">From the first line of code to the present day.</p>
            </div>

            <div className="space-y-8 pl-4">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-8 border-l-2 border-primary/20 group pb-4 last:pb-0">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-primary group-hover:scale-125 transition-transform" />
                  <div className="space-y-2">
                    <span className="text-primary text-[10px] font-black tracking-widest uppercase">{item.year}</span>
                    <h3 className="text-xl font-black text-secondary">{item.title}</h3>
                    <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="main-section-container space-y-12">
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 border-b pb-6">
              <h2 className="text-5xl md:text-7xl font-headline font-black text-secondary">Tech Stack.</h2>
              <p className="text-muted-foreground font-medium text-xs">The tools I work with.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {techStack.map((tool, i) => (
                <div key={i} className="flex items-start gap-3 p-5 rounded-2xl border border-muted/50 hover:bg-muted/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5" />
                  <div className="space-y-0.5">
                    <h4 className="font-black text-secondary text-sm">{tool.name}</h4>
                    <p className="text-[10px] text-muted-foreground font-medium">{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Small Dark CTA Block */}
          <section className="rounded-[2.5rem] bg-[#0a0a0a] p-12 md:p-16 text-center space-y-8 shadow-2xl">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-headline font-black text-white leading-tight">Ready for your project?</h2>
              <p className="text-white/60 text-sm max-w-xl mx-auto font-medium">Let's create something extraordinary together. I look forward to hearing from you.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <Button asChild className="rounded-xl h-12 px-10 bg-white text-secondary font-black hover:bg-white/90">
                <Link href="/contact">Free offer <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Link href="tel:+918466006486" className="flex items-center gap-2 text-white/40 text-[11px] font-bold uppercase tracking-widest hover:text-white transition-colors">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" /> +91 8466006486
              </Link>
            </div>
          </section>

          {/* Large Dark Contact/Map Section */}
          <section className="rounded-[2.5rem] bg-[#0a0a0a] p-10 md:p-16 overflow-hidden relative shadow-2xl space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8 text-white">
                <div className="space-y-4">
                  <span className="text-primary text-xs font-black uppercase tracking-widest">make contact</span>
                  <h2 className="text-5xl md:text-7xl font-headline font-black leading-tight">Ready for your project?</h2>
                  <p className="text-white/60 text-base md:text-lg max-w-md font-medium">
                    Let's get started together. Send me an inquiry and receive a response within 12 hours.
                  </p>
                </div>
                
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

            <div className="space-y-8 border-t border-white/10 pt-12">
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

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
