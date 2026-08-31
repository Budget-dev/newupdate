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
  Smartphone,
  MessageSquare
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { PulseFitHero } from "@/components/ui/pulse-fit-hero";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Budget Software Solutions | Custom App & Web Development India',
  description: 'Looking for expert software solutions? The BudgetDev is the leading affordable app and web development house in Andhra Pradesh. High-performance iOS, Android, and Web apps.',
  keywords: 'software solutions vizianagaram, budget software solutions india, app development andhra pradesh, affordable software company india, ios android developer vizianagaram',
};

const completedProjects = [
  {
    title: "NCFE Schools",
    category: "Institutional",
    image: "https://s0.wp.com/mshots/v1/https://ncfeschools.com?w=1024&h=768",
    link: "https://ncfeschools.com/",
  },
  {
    title: "Trinix Security",
    category: "Cybersecurity",
    image: "https://s0.wp.com/mshots/v1/https://studio-trinix.vercel.app?w=1024&h=768",
    link: "https://studio-trinix.vercel.app",
  },
  {
    title: "Vidhyaly.com",
    category: "LMS Portal",
    image: "https://s0.wp.com/mshots/v1/https://vidhyaly.com?w=1024&h=768",
    link: "https://vidhyaly.com",
  },
  {
    title: "The Baza",
    category: "Fashion Brand",
    image: "https://s0.wp.com/mshots/v1/https://thebaza.in?w=1024&h=768",
    link: "https://thebaza.in",
  },
  {
    title: "Bhoomi Collections",
    category: "E-commerce",
    image: "https://s0.wp.com/mshots/v1/https://www.bhoomicollections.in?w=1024&h=768",
    link: "https://www.bhoomicollections.in",
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <Navbar />
      
      <main className="flex-1 relative z-10">
        <PulseFitHero 
          logo="BudgetDev"
          navigation={[
            { label: "Portfolio", href: "/portfolio" },
            { label: "Masterclass", href: "/course" },
            { label: "Services", href: "/services/web-development" },
            { label: "Careers", href: "/careers" },
            { label: "Team", href: "/about" },
          ]}
          ctaButton={{
            label: "Track Project",
            href: "/portal/login",
          }}
          title="Software Engineering for dominance."
          subtitle="We build high-performance iOS, Android, and Web applications tailored to your business goals. Affordable, scalable, and engineered for sub-second speeds."
          primaryAction={{
            label: "Start Your Project",
            href: "/contact",
          }}
          secondaryAction={{
            label: "View Portfolio",
            href: "/portfolio",
          }}
          disclaimer="*Free technical roadmap with every inquiry"
          socialProof={{
            avatars: [
              "https://yasodha.in/assets/venkatesh-profile.png",
              "https://i.ibb.co/TMRK7qHD/Whats-App-Image-2026-03-28-at-11-09-06-PM.jpg",
              "https://i.pravatar.cc/150?img=3",
              "https://i.pravatar.cc/150?img=4",
            ],
            text: "Join over 52+ Successful Brands",
          }}
          programs={completedProjects}
        />

        <ResultsSection />

        <section className="py-12 px-6 relative">
          <div className="max-w-7xl mx-auto main-section-container space-y-12 bg-white/80 backdrop-blur-lg">
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
