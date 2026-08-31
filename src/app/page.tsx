import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { 
  Code,
  Rocket,
  Bot,
  Smartphone
} from "lucide-react";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { HeroParallax } from "@/components/ui/hero-parallax";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Budget Software Solutions | Custom App & Web Development India',
  description: 'Looking for expert software solutions? The BudgetDev is the leading affordable app and web development house in Andhra Pradesh. High-performance iOS, Android, and Web apps.',
  keywords: 'software solutions vizianagaram, budget software solutions india, app development andhra pradesh, affordable software company india, ios android developer vizianagaram',
};

const products = [
  {
    title: "NCFE Schools",
    link: "https://ncfeschools.com/",
    thumbnail: "https://s0.wp.com/mshots/v1/https://ncfeschools.com?w=1024&h=768",
  },
  {
    title: "The Garage Doctors",
    link: "https://thegaragedoctors.in/",
    thumbnail: "https://s0.wp.com/mshots/v1/https://thegaragedoctors.in?w=1024&h=768",
  },
  {
    title: "Inance School",
    link: "https://inancechool.vercel.app/",
    thumbnail: "https://s0.wp.com/mshots/v1/https://inancechool.vercel.app/?w=1024&h=768",
  },
  {
    title: "Trinix Cybersecurity",
    link: "https://studio-trinix.vercel.app",
    thumbnail: "https://s0.wp.com/mshots/v1/https://studio-trinix.vercel.app?w=1024&h=768",
  },
  {
    title: "Vidhyaly.com",
    link: "https://vidhyaly.com",
    thumbnail: "https://s0.wp.com/mshots/v1/https://vidhyaly.com?w=1024&h=768",
  },
  {
    title: "BudgetDev.in",
    link: "https://budgetdev.in",
    thumbnail: "https://s0.wp.com/mshots/v1/https://budgetdev.in?w=1024&h=768",
  },
  {
    title: "Srinika Spices",
    link: "https://srinikaspices.in",
    thumbnail: "https://s0.wp.com/mshots/v1/https://srinikaspices.in?w=1024&h=768",
  },
  {
    title: "Gurucharan Interiors",
    link: "https://gurucharaninteriors.in",
    thumbnail: "https://s0.wp.com/mshots/v1/https://gurucharaninteriors.in?w=1024&h=768",
  },
  {
    title: "Yasodha.in",
    link: "https://yasodha.in",
    thumbnail: "https://s0.wp.com/mshots/v1/https://yasodha.in?w=1024&h=768",
  },
  {
    title: "Bhoomi Collections",
    link: "https://www.bhoomicollections.in",
    thumbnail: "https://s0.wp.com/mshots/v1/https://www.bhoomicollections.in?w=1024&h=768",
  },
  {
    title: "The Baza",
    link: "https://thebaza.in",
    thumbnail: "https://s0.wp.com/mshots/v1/https://thebaza.in?w=1024&h=768",
  },
  {
    title: "Roshni Boutiques",
    link: "https://roshniboutiques.com/",
    thumbnail: "https://s0.wp.com/mshots/v1/https://roshniboutiques.com/?w=1024&h=768",
  },
  {
    title: "Pastels Boutique",
    link: "https://pastelsboutique.com",
    thumbnail: "https://s0.wp.com/mshots/v1/https://pastelsboutique.com?w=1024&h=768",
  },
  {
    title: "Shreebhumi Natures",
    link: "https://www.shreebhuminaturesbest.com",
    thumbnail: "https://s0.wp.com/mshots/v1/https://www.shreebhuminaturesbest.com?w=1024&h=768",
  },
  {
    title: "Cybersecurity Node",
    link: "https://studio-trinix.vercel.app",
    thumbnail: "https://picsum.photos/seed/cyber/1024/768",
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <Navbar />
      
      <main className="flex-1 relative z-10">
        <HeroParallax products={products} />

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
