import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Code2,
  Database,
  MousePointer2,
  Zap,
  Smartphone,
  ShieldCheck,
  Heart,
  Rocket
} from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About The BudgetDev | Software Solutions Team in Vizianagaram',
  description: 'Meet Venkatesh and Shankar, the expert engineers at BudgetDev. We provide high-performance software and mobile app solutions for startups across India.',
  keywords: 'software developers vizianagaram, mobile app experts india, venkatesh choppa developer, shankar bojank developer, software engineering team india',
};

const team = [
  {
    name: "Venkatesh Choppa",
    role: "Founder & Lead Developer",
    desc: "A visionary engineer focused on high-performance web and mobile solutions. Venkatesh leads the technical roadmap and front-end architecture for all flagship projects.",
    image: "https://yasodha.in/assets/venkatesh-profile.png"
  },
  {
    name: "Shankar Bojank",
    role: "Backend Specialist",
    desc: "With 2 years of deep experience in server-side engineering, Shankar ensures that BudgetDev software is robust, secure, and capable of handling millions of requests.",
    image: "https://i.ibb.co/TMRK7qHD/Whats-App-Image-2026-03-28-at-11-09-06-PM.jpg"
  }
];

const values = [
  {
    title: "Performance Engineering",
    desc: "We don't just build; we optimize. Every product is engineered for sub-second speeds.",
    icon: <Zap className="w-5 h-5 text-primary" />
  },
  {
    title: "Scalable Infrastructure",
    desc: "Our backends are built to grow with your business without breaking a sweat.",
    icon: <Database className="w-5 h-5 text-primary" />
  },
  {
    title: "User-Centric Design",
    desc: "We prioritize intuition and utility, ensuring high conversion rates for your apps.",
    icon: <MousePointer2 className="w-5 h-5 text-primary" />
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD]">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          
          {/* Hero Section */}
          <section className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">
              Software Solutions Team
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-black text-secondary leading-[1.1] tracking-tight">
              Engineering the <br />
              <span className="text-primary italic">Future of Startups.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              BudgetDev is a high-performance software solutions provider. We transition complex business ideas into scalable web and mobile applications for the modern market.
            </p>
          </section>

          {/* How We Work Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-y border-muted/50 py-20">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-secondary leading-tight">How we work.</h2>
              <div className="space-y-6">
                <p className="text-muted-foreground font-medium leading-relaxed">
                  At BudgetDev, we don't just write code; we engineer success. Our process is rooted in a deep understanding of your business goals. We work with a <strong>"Performance-First"</strong> mindset, ensuring that every software or mobile app we build is lightning-fast, secure, and ready to scale.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <p className="text-[11px] font-bold text-secondary uppercase tracking-wider">Clean Code Architecture</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <p className="text-[11px] font-bold text-secondary uppercase tracking-wider">iOS & Android First</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-secondary rounded-[2.5rem] p-12 text-white space-y-6">
              <h3 className="text-3xl font-black italic">Our Passion.</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Why do we do this? Because we believe that high-quality software shouldn't be a luxury—it should be the foundation for every ambitious startup in India. We are passionate about the intersection of technology and business growth, and we love seeing our clients dominate their markets through the tools we build.
              </p>
              <div className="flex items-center gap-2 text-primary">
                <Heart className="w-5 h-5 fill-primary" />
                <span className="text-[10px] font-black uppercase tracking-widest">Driven by Excellence</span>
              </div>
            </div>
          </section>

          {/* Team Profiles Stacked */}
          <section className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-headline font-black text-secondary">The Experts.</h2>
              <p className="text-muted-foreground font-medium">Meet the engineers behind the solutions.</p>
            </div>

            <div className="space-y-12">
              {team.map((member, i) => (
                <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center bg-white border border-muted/50 rounded-[3rem] p-8 md:p-12 hover:shadow-2xl transition-all group`}>
                  <div className="relative w-full lg:w-1/2 aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized={member.image.includes('i.ibb.co') || member.image.includes('yasodha.in')}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="space-y-2">
                      <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
                        {member.role}
                      </div>
                      <h3 className="text-4xl font-black text-secondary">{member.name}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed font-medium italic">
                      "{member.desc}"
                    </p>
                    <div className="flex gap-4">
                      {i === 0 ? (
                        <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest">
                          <Rocket className="w-4 h-4" /> Technical Lead
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest">
                          <ShieldCheck className="w-4 h-4" /> Security Specialist
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section className="main-section-container space-y-12 bg-[#F8FAF9]">
            <h2 className="text-4xl md:text-5xl font-headline font-black text-secondary">Core Values.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] space-y-6 shadow-sm border border-muted/20 hover:border-primary/20 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-black text-secondary text-lg">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="rounded-[3rem] bg-secondary p-12 md:p-20 text-center text-white space-y-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
            <div className="space-y-4 relative z-10">
              <h2 className="text-4xl md:text-7xl font-headline font-black leading-tight">Ready to build <br /> your dominance?</h2>
              <p className="text-white/40 text-lg max-w-2xl mx-auto font-medium">
                Whether it's a complex software architecture or a high-performance mobile app, we have the team to realize it.
              </p>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 h-16 font-black text-lg relative z-10 shadow-xl shadow-primary/20">
              <Link href="/contact">Start Your Project <ArrowRight className="ml-2 w-6 h-6" /></Link>
            </Button>
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
