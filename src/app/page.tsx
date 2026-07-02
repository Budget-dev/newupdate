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
  Zap,
  Smartphone
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { HeroParallax } from "@/components/ui/hero-parallax";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Budget Software Solutions | Custom App & Web Development India',
  description: 'Looking for expert software solutions? The BudgetDev is the leading affordable app and web development house in Andhra Pradesh. High-performance iOS, Android, and Web apps.',
  keywords: 'software solutions vizianagaram, budget software solutions india, app development andhra pradesh, affordable software company india, ios android developer vizianagaram',
};

const parallaxProducts = [
  {
    title: "NCFE Schools",
    link: "https://ncfeschools.com/",
    thumbnail: "https://s0.wp.com/mshots/v1/https://ncfeschools.com?w=1024&h=768"
  },
  {
    title: "The Garage Doctors",
    link: "https://thegaragedoctors.in/",
    thumbnail: "https://s0.wp.com/mshots/v1/https://thegaragedoctors.in?w=1024&h=768"
  },
  {
    title: "Inance School",
    link: "https://inancechool.vercel.app/",
    thumbnail: "https://s0.wp.com/mshots/v1/https://inancechool.vercel.app/?w=1024&h=768"
  },
  {
    title: "Trinix Cybersecurity",
    link: "https://studio-trinix.vercel.app",
    thumbnail: "https://s0.wp.com/mshots/v1/https://studio-trinix.vercel.app?w=1024&h=768"
  },
  {
    title: "Vidhyaly.com",
    link: "https://vidhyaly.com",
    thumbnail: "https://s0.wp.com/mshots/v1/https://vidhyaly.com?w=1024&h=768"
  },
  {
    title: "BudgetDev.in",
    link: "https://budgetdev.in",
    thumbnail: "https://s0.wp.com/mshots/v1/https://budgetdev.in?w=1024&h=768"
  },
  {
    title: "Bhoomi Collections",
    link: "https://www.bhoomicollections.in",
    thumbnail: "https://s0.wp.com/mshots/v1/https://www.bhoomicollections.in?w=1024&h=768"
  },
  {
    title: "Shreebhumi Natures Best",
    link: "https://www.shreebhuminaturesbest.com",
    thumbnail: "https://s0.wp.com/mshots/v1/https://www.shreebhuminaturesbest.com?w=1024&h=768"
  },
  {
    title: "The Baza",
    link: "https://thebaza.in",
    thumbnail: "https://s0.wp.com/mshots/v1/https://thebaza.in?w=1024&h=768"
  },
  {
    title: "Srinika Spices",
    link: "https://srinikaspices.in",
    thumbnail: "https://s0.wp.com/mshots/v1/https://srinikaspices.in?w=1024&h=768"
  },
  {
    title: "Gurucharan Interiors",
    link: "https://gurucharaninteriors.in",
    thumbnail: "https://s0.wp.com/mshots/v1/https://gurucharaninteriors.in?w=1024&h=768"
  },
  {
    title: "Yasodha.in",
    link: "https://yasodha.in",
    thumbnail: "https://s0.wp.com/mshots/v1/https://yasodha.in?w=1024&h=768"
  },
  {
    title: "Roshni Boutiques",
    link: "https://roshniboutiques.com",
    thumbnail: "https://s0.wp.com/mshots/v1/https://roshniboutiques.com/?w=1024&h=768"
  },
  {
    title: "Pastels Boutique",
    link: "https://pastelsboutique.com",
    thumbnail: "https://s0.wp.com/mshots/v1/https://pastelsboutique.com?w=1024&h=768"
  },
  {
    title: "Custom Software Solutions",
    link: "/services/web-development",
    thumbnail: "https://picsum.photos/seed/service-soft-new/600/400"
  }
];

const completedProjects = [
  {
    title: "NCFE Schools",
    tag: "Institutional Portal",
    description: "Unified institutional portal for multi-campus school management and admissions.",
    link: "https://ncfeschools.com/",
    imageUrl: "https://s0.wp.com/mshots/v1/https://ncfeschools.com?w=1024&h=768",
  },
  {
    title: "The Garage Doctors",
    tag: "Automotive Startup (₹10L Funding)",
    description: "Scalable car garage service booking engine that helped secure seed funding.",
    link: "https://thegaragedoctors.in/",
    imageUrl: "https://s0.wp.com/mshots/v1/https://thegaragedoctors.in?w=1024&h=768",
  },
  {
    title: "Inance School",
    tag: "Student Trading Portal",
    description: "High-performance trading platform for students to master the financial markets.",
    link: "https://inancechool.vercel.app/",
    imageUrl: "https://s0.wp.com/mshots/v1/https://inancechool.vercel.app/?w=1024&h=768",
  },
  {
    title: "Trinix Cybersecurity",
    tag: "Security Enterprise",
    description: "High-performance cybersecurity portal with advanced threat intelligence.",
    link: "https://studio-trinix.vercel.app",
    imageUrl: "https://s0.wp.com/mshots/v1/https://studio-trinix.vercel.app?w=1024&h=768",
  },
  {
    title: "Vidhyaly.com",
    tag: "Educational LMS",
    description: "Modern learning management system for Indian institutes.",
    link: "https://vidhyaly.com",
    imageUrl: "https://s0.wp.com/mshots/v1/https://vidhyaly.com?w=1024&h=768",
  },
  {
    title: "BudgetDev.in",
    tag: "Software Portfolio",
    description: "High-performance software solutions portal with extreme SEO focus.",
    link: "https://budgetdev.in",
    imageUrl: "https://s0.wp.com/mshots/v1/https://budgetdev.in?w=1024&h=768",
  },
  {
    title: "Bhoomi Collections",
    tag: "Women's Fashion",
    description: "High-end women's dress e-commerce with custom shopping experience.",
    link: "https://www.bhoomicollections.in",
    imageUrl: "https://s0.wp.com/mshots/v1/https://www.bhoomicollections.in?w=1024&h=768",
  },
  {
    title: "Shreebhumi Natures Best",
    tag: "Import & Export",
    description: "International trade portal showcasing nature's finest products globally.",
    link: "https://www.shreebhuminaturesbest.com",
    imageUrl: "https://s0.wp.com/mshots/v1/https://www.shreebhuminaturesbest.com?w=1024&h=768",
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <div className="absolute inset-0 grid-pattern pointer-events-none -z-0" />
      <Navbar />
      
      <main className="flex-1 relative z-10">
        <HeroParallax products={parallaxProducts} />

        <section className="py-20 px-6 relative z-20">
          <div className="max-w-7xl mx-auto main-section-container overflow-hidden bg-white/80 backdrop-blur-lg">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">
              <h2 className="text-3xl md:text-4xl font-headline font-black text-secondary">Software Case Studies.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {completedProjects.map((ref, idx) => (
                <Link 
                  key={idx} 
                  href={ref.link} 
                  target="_blank" 
                  className="group flex flex-col space-y-2 transition-transform active:scale-[0.98]"
                >
                  <div className="relative aspect-[4/3] rounded-[1.25rem] overflow-hidden shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1 border border-muted/50 bg-muted/10">
                    <Image 
                      src={ref.imageUrl} 
                      alt={ref.title} 
                      width={800}
                      height={600}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized={ref.imageUrl.includes('s0.wp.com')}
                      loading={idx < 2 ? "eager" : "lazy"}
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-black/50 backdrop-blur-md text-white text-[7px] font-black uppercase tracking-[0.1em] px-2 py-0.5 rounded-full">
                        {ref.tag}
                      </span>
                    </div>
                  </div>
                  <div className="px-1 space-y-0.5">
                    <h3 className="text-base font-black text-secondary group-hover:text-primary transition-colors">{ref.title}</h3>
                    <p className="text-muted-foreground text-[10px]">{ref.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ResultsSection />

        <section className="py-12 px-6 relative">
          <div className="max-w-7xl mx-auto main-section-container space-y-12">
            <h2 className="text-6xl md:text-7xl font-headline font-black text-secondary">Expertise.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Mobile App Development", desc: "Expert iOS and Android app engineering for the modern mobile-first market.", icon: <Smartphone className="w-6 h-6" /> },
                { title: "Full-Stack Software", desc: "Complex software solutions built for scale and high-performance operations.", icon: <Code className="w-6 h-6" /> },
                { title: "Technical SEO", desc: "Ensuring your software and web products dominate search visibility.", icon: <Rocket className="w-6 h-6" /> },
                { title: "Custom AI Integration", desc: "Building smart agents to automate your business processes.", icon: <Bot className="w-6 h-6" /> }
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
