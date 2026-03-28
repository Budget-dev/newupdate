import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Globe, Rocket, ShieldCheck, Zap, TrendingUp, Users, Shield } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Portfolio | High-Performance App Case Studies',
  description: 'Explore our software solutions portfolio. From cybersecurity portals to e-commerce apps, see how we build digital success for businesses in India.',
  keywords: 'software portfolio india, trinix cybersecurity, vidhyaly LMS, custom software case studies, ios android app portfolio',
};

const projects = [
  {
    title: "Trinix Cybersecurity",
    client: "Enterprise Security Firm",
    category: "Cybersecurity Portal",
    description: "An advanced cybersecurity management portal designed for real-time threat detection and vulnerability mitigation. Engineered with a Zero-Trust architecture to provide elite protection for global enterprise data nodes.",
    results: [
      { label: "Protection Rate", value: "99.9%", icon: <ShieldCheck className="w-4 h-4" /> },
      { label: "Response Time", value: "<10ms", icon: <Zap className="w-4 h-4" /> },
      { label: "Secure Nodes", value: "500+", icon: <Shield className="w-4 h-4" /> }
    ],
    features: [
      "Real-time Threat Detection",
      "Zero-Trust Architecture",
      "Automated Vulnerability Scans",
      "High-Performance Dashboard"
    ],
    image: PlaceHolderImages.find(img => img.id === 'project-trinix'),
    tags: ["Cybersecurity", "Next.js", "Enterprise", "Security"],
    link: "https://studio-trinix.vercel.app"
  },
  {
    title: "Vidhyaly.com",
    client: "National EdTech Provider",
    category: "Educational LMS",
    description: "A comprehensive Learning Management System (LMS) engineered for Indian educational institutes. Features include automated attendance, fee management, and high-performance examination portals designed to scale across thousands of concurrent users.",
    results: [
      { label: "Active Students", value: "10,000+", icon: <Users className="w-4 h-4" /> },
      { label: "Uptime Rate", value: "99.99%", icon: <ShieldCheck className="w-4 h-4" /> },
      { label: "Onboarded Schools", value: "50+", icon: <TrendingUp className="w-4 h-4" /> }
    ],
    features: [
      "Automated Fee Systems",
      "Interactive Exam Portals",
      "Cloud-based Inventory",
      "Mobile-Optimized Learning"
    ],
    image: PlaceHolderImages.find(img => img.id === 'project-vidhyaly'),
    tags: ["LMS", "Next.js", "Firebase", "EdTech"],
    link: "https://vidhyaly.com"
  },
  {
    title: "BudgetDev.in",
    client: "High-Fidelity Agency",
    category: "Agency Portfolio",
    description: "The digital engine behind our agency. Engineered with Next.js 15 and React 19, this portal is optimized for sub-second page loads and dominates the search results for 'Budget Website Designer'. Features high-fidelity AI interactions and localized SEO.",
    results: [
      { label: "Lighthouse Score", value: "100/100", icon: <Zap className="w-4 h-4" /> },
      { label: "Search Ranking", value: "#1", icon: <Rocket className="w-4 h-4" /> },
      { label: "Page Load Time", value: "0.2s", icon: <Zap className="w-4 h-4" /> }
    ],
    features: [
      "AI Chat Integration",
      "Dynamic Local SEO",
      "Extreme Core Web Vitals",
      "WhatsApp Lead Automation"
    ],
    image: PlaceHolderImages.find(img => img.id === 'project-budgetdev'),
    tags: ["Agency", "SEO Master", "Performance", "AI"],
    link: "https://budgetdev.in"
  },
  {
    title: "Bhoomi Collections",
    client: "Premium Women's Boutique",
    category: "Fashion E-commerce",
    description: "A high-fidelity digital transformation for a premium women's dress store. We engineered a custom shopping experience with intuitive filtering and a seamless high-conversion checkout flow. Optimized for the Indian mobile-first market with extreme load speeds.",
    results: [
      { label: "Order Accuracy", value: "98%", icon: <CheckCircle2 className="w-4 h-4" /> },
      { label: "Mobile Speed", value: "99/100", icon: <Zap className="w-4 h-4" /> },
      { label: "Checkout Conversion", value: "+120%", icon: <TrendingUp className="w-4 h-4" /> }
    ],
    features: [
      "Dynamic Product Collections",
      "Seamless Razorpay Integration",
      "Localized Mobile Experience",
      "Real-time Stock Management"
    ],
    image: PlaceHolderImages.find(img => img.id === 'project-bhoomi'),
    tags: ["Next.js 15", "Tailwind", "E-commerce", "Mobile First"],
    link: "https://www.bhoomicollections.in"
  },
  {
    title: "Shreebhumi Natures Best",
    client: "International Trading Corp",
    category: "Global Trade Portal",
    description: "An international trade portal designed to build trust and authority for an import/export business. We focused on professional storytelling and global edge delivery to ensure the site is fast and reliable for buyers across all continents.",
    results: [
      { label: "Global Reach", value: "30+ Countries", icon: <Globe className="w-4 h-4" /> },
      { label: "Domain Authority", value: "Elite", icon: <Rocket className="w-4 h-4" /> },
      { label: "Technical Uptime", value: "99.9%", icon: <ShieldCheck className="w-4 h-4" /> }
    ],
    features: [
      "Multi-Language Readiness",
      "Global Edge Distribution",
      "High-Resolution Asset Mgmt",
      "Automated Trade Inquiries"
    ],
    image: PlaceHolderImages.find(img => img.id === 'project-shreebhumi'),
    tags: ["Global Infrastructure", "Static Site Gen", "SEO Authority"],
    link: "https://www.shreebhuminaturesbest.com"
  },
  {
    title: "The Baza",
    client: "Men's Lifestyle Brand",
    category: "D2C Clothing",
    description: "A modern men's clothing brand identity and store built for the next generation of online shoppers. We prioritized 'Visual Dominance' and extreme performance to reduce bounce rates and maximize user retention for this high-growth brand.",
    results: [
      { label: "Page Load Time", value: "0.3s", icon: <Zap className="w-4 h-4" /> },
      { label: "Return Customer Rate", value: "+45%", icon: <Users className="w-4 h-4" /> },
      { label: "Lighthouse Score", value: "100", icon: <CheckCircle2 className="w-4 h-4" /> }
    ],
    features: [
      "Interactive Style Guides",
      "Edge-Network Catalog",
      "High-Retention UX Design",
      "Smart Recommendation Engine"
    ],
    image: PlaceHolderImages.find(img => img.id === 'project-thebaza'),
    tags: ["React 19", "Framer Motion", "D2C Architecture"],
    link: "https://thebaza.in"
  },
  {
    title: "Srinika Spices",
    client: "National Spice Merchant",
    category: "E-commerce & Logistics",
    description: "A high-fidelity digital transformation for a complex spice distribution network. We engineered a custom inventory-aware shopping experience that handles thousands of daily active users with sub-second page transitions.",
    results: [
      { label: "Online Sales Growth", value: "+340%", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "Mobile Page Speed", value: "100/100", icon: <Zap className="w-4 h-4" /> },
      { label: "User Engagement", value: "2.5x", icon: <Users className="w-4 h-4" /> }
    ],
    features: [
      "Real-time Automated Inventory Sync",
      "Dynamic GST-ready Checkout Flow",
      "High-Conversion Product Architecture",
      "Edge-Network Content Delivery"
    ],
    image: PlaceHolderImages.find(img => img.id === 'project-srinika'),
    tags: ["Next.js 15", "Tailwind CSS", "Firebase Auth", "Inventory Sync"],
    link: "https://srinikaspices.in"
  },
  {
    title: "Gurucharan Interiors",
    client: "Premium Interior Studio",
    category: "Architecture Portfolio",
    description: "A visual-first portfolio for an elite interior design firm. We focused on high-resolution image delivery and a minimalist UI that allows the project photography to take center stage, driving high-value lead generation.",
    results: [
      { label: "Image Load Speed", value: "Elite", icon: <Zap className="w-4 h-4" /> },
      { label: "Lead Generation", value: "+85%", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "User Session Time", value: "4m+", icon: <Users className="w-4 h-4" /> }
    ],
    features: [
      "High-Res Asset Optimization",
      "Smooth Layout Transitions",
      "Interactive Project Gallery",
      "Mobile-Optimized UX"
    ],
    image: PlaceHolderImages.find(img => img.id === 'project-gurucharan'),
    tags: ["React 19", "Image Optimization", "Lead Gen"],
    link: "https://gurucharaninteriors.in"
  },
  {
    title: "Yasodha.in",
    client: "Professional Resume",
    category: "Personal Branding",
    description: "A high-performance personal branding site engineered for maximum impact. We used modern web technologies to create a fast, interactive experience that showcases professional achievements with clear calls to action.",
    results: [
      { label: "Global Performance", value: "100/100", icon: <Rocket className="w-5 h-5" /> },
      { label: "Visibility", value: "Global", icon: <Globe className="w-4 h-4" /> },
      { label: "Uptime", value: "100%", icon: <ShieldCheck className="w-4 h-4" /> }
    ],
    features: [
      "Interactive Roadmap",
      "Modern Web Engineering",
      "SEO First Architecture",
      "Extreme Load Speeds"
    ],
    image: PlaceHolderImages.find(img => img.id === 'project-yasodha'),
    tags: ["Next.js", "TypeScript", "Personal Brand"],
    link: "https://yasodha.in"
  },
  {
    title: "Roshni Boutiques",
    client: "Premium Fashion Label",
    category: "Designer Boutique",
    description: "An elegant e-commerce platform for high-end designer wear. Engineered for visual impact and seamless shopping, featuring advanced filtering and a high-fidelity checkout experience.",
    results: [
      { label: "Sales Growth", value: "+180%", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "Mobile Speed", value: "100/100", icon: <Zap className="w-4 h-4" /> },
      { label: "Return Rate", value: "35%", icon: <Users className="w-4 h-4" /> }
    ],
    features: [
      "Custom UI Design",
      "Seamless Razorpay Integration",
      "Inventory Management",
      "Performance Optimized"
    ],
    image: PlaceHolderImages.find(img => img.id === 'project-roshni'),
    tags: ["Next.js", "Tailwind", "E-commerce", "Fashion"],
    link: "https://roshniboutiques.com"
  },
  {
    title: "Pastels Boutique",
    client: "Luxury Women's Wear",
    category: "Premium Fashion E-commerce",
    description: "A high-fidelity e-commerce experience for a luxury designer boutique. Engineered for visual dominance and sub-second page loads, focusing on high-end user conversion.",
    results: [
      { label: "Online Sales", value: "+210%", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "Core Web Vitals", value: "Passed", icon: <Rocket className="w-4 h-4" /> },
      { label: "User Retention", value: "3.2x", icon: <Users className="w-4 h-4" /> }
    ],
    features: [
      "Interactive Lookbooks",
      "Edge-Network Catalog",
      "Seamless Checkout",
      "Mobile-First Architecture"
    ],
    image: PlaceHolderImages.find(img => img.id === 'project-pastels'),
    tags: ["Next.js 15", "React 19", "E-commerce", "Luxury"],
    link: "https://pastelsboutique.com"
  }
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD]">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
              Digital Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-black text-secondary leading-tight tracking-tight">
              Case <span className="text-primary italic">Studies.</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              We engineer digital assets that generate real-world ROI. From 100/100 performance scores to massive conversion growth, here is how we build success for Indian businesses.
            </p>
          </div>

          <div className="space-y-40">
            {projects.map((project, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start group">
                <div className={cn("space-y-10", idx % 2 !== 0 ? "lg:order-2" : "")}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-black uppercase tracking-widest text-[10px]">{project.category}</span>
                      <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                      <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">Client: {project.client}</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-secondary group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 border-y py-8">
                    {project.results.map((res, rIdx) => (
                      <div key={rIdx} className="space-y-1">
                        <div className="flex items-center gap-1.5 text-primary">
                          {res.icon}
                          <span className="text-xl font-black">{res.value}</span>
                        </div>
                        <p className="text-[9px] font-black text-muted-foreground uppercase tracking-wider">{res.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs font-black text-secondary uppercase tracking-widest">Key Engineering Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-muted/50 text-secondary border-none font-bold text-[9px] px-3 py-1 rounded-lg">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link 
                      href={project.link || "#"} 
                      target="_blank"
                      className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-black text-sm shadow-xl hover:scale-[1.05] transition-transform"
                    >
                      Explore Technical Demo <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className={cn("relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl bg-muted/10 group-hover:shadow-primary/20 transition-all duration-700", idx % 2 !== 0 ? "lg:order-1" : "")}>
                  <Image 
                    src={project.image?.imageUrl || ""} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    data-ai-hint={project.image?.imageHint}
                    priority={idx === 0}
                    unoptimized={project.image?.imageUrl.includes('s0.wp.com')}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center justify-between">
                      <div className="space-y-0.5">
                        <p className="text-white/60 text-[9px] font-bold uppercase">Performance Status</p>
                        <p className="text-white text-sm font-black italic">Verified 100/100</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                        <Zap className="w-5 h-5 fill-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <section className="mt-40 bg-[#0a0a0a] rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30" />
            <div className="space-y-4 relative z-10">
              <h2 className="text-4xl md:text-6xl font-headline font-black text-white leading-tight">Your project could be the next success.</h2>
              <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto font-medium">
                We've reached over 7.5 million users through our high-performance client engineering. Let's build your dominance.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
              {[
                { label: "Core Web Vitals", value: "Passed", icon: <Rocket className="w-5 h-5 text-primary" /> },
                { label: "Server Availability", value: "99.99%", icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
                { label: "Responsive Matrix", value: "Perfect", icon: <Globe className="w-5 h-5 text-primary" /> },
                { label: "Support Protocol", value: "24/7", icon: <CheckCircle2 className="w-5 h-5 text-primary" /> }
              ].map((stat, i) => (
                <div key={i} className="space-y-2 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-2">
                    {stat.icon}
                  </div>
                  <span className="text-2xl font-black text-white">{stat.value}</span>
                  <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="pt-8">
              <Link href="/contact" className="sparkle-btn group mx-auto">
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
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
