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
  Rocket,
  Layers,
  Globe,
  Star
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
    tagline: "Visionary Software Architect",
    desc: "A visionary engineer focused on high-performance web and mobile solutions. Venkatesh leads the technical roadmap and front-end architecture for all flagship projects. With a deep passion for clean code and sub-second performance, he has engineered digital systems that handle millions of requests while maintaining pixel-perfect fidelity.",
    image: "https://yasodha.in/assets/venkatesh-profile.png",
    skills: ["System Design", "Next.js", "React Native", "UI/UX Strategy"]
  },
  {
    name: "Shankar Bojank",
    role: "Backend Specialist",
    tagline: "Core Infrastructure Engineer",
    desc: "With 2 years of deep experience in server-side engineering and database optimization, Shankar ensures that BudgetDev software is robust, secure, and capable of handling massive scale. He specializes in distributed systems and real-time data processing, making our applications lightning-fast and unbreakable.",
    image: "https://i.ibb.co/TMRK7qHD/Whats-App-Image-2026-03-28-at-11-09-06-PM.jpg",
    skills: ["Node.js", "PostgreSQL", "Cloud Architecture", "Security Audits"]
  }
];

const values = [
  {
    title: "Performance Engineering",
    desc: "We don't just build; we optimize. Every product is engineered for sub-second speeds and 100/100 Lighthouse scores.",
    icon: <Zap className="w-5 h-5 text-primary" />
  },
  {
    title: "Scalable Infrastructure",
    desc: "Our backends are built to grow with your business, handling thousands of concurrent users without breaking a sweat.",
    icon: <Database className="w-5 h-5 text-primary" />
  },
  {
    title: "User-Centric Design",
    desc: "We prioritize intuition and utility, ensuring high conversion rates through research-backed UI/UX patterns.",
    icon: <MousePointer2 className="w-5 h-5 text-primary" />
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD]">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* Hero Section */}
          <section className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
              High-Fidelity Software Team
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-black text-secondary leading-[1.05] tracking-tight">
              Engineering the <br />
              <span className="text-primary italic">Future of Performance.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium max-w-2xl">
              BudgetDev is a specialized software solutions house. We translate complex business ideas into high-performance web and mobile architectures for the modern Indian market.
            </p>
          </section>

          {/* How We Work Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-y border-muted/50 py-24">
            <div className="space-y-10">
              <h2 className="text-5xl md:text-6xl font-black text-secondary leading-tight tracking-tighter">Our Approach.</h2>
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                  At BudgetDev, we don't just write code; we engineer success. Our process is rooted in a deep understanding of your business goals. We work with a <strong className="text-secondary">"Performance-First"</strong> mindset, ensuring that every mobile app or enterprise software we build is secure, stable, and ready to scale.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-black text-secondary uppercase tracking-widest">Clean Architecture</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">Modular, maintainable codebases built with TypeScript and Next.js.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <h4 className="text-sm font-black text-secondary uppercase tracking-widest">Mobile Mastery</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">High-performance iOS & Android apps that feel native and fast.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-secondary rounded-[3rem] p-12 md:p-16 text-white space-y-8 relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20" />
              <div className="relative z-10 space-y-6">
                <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-primary">
                  <Heart className="w-6 h-6 fill-primary" />
                </div>
                <h3 className="text-4xl font-black italic tracking-tight">Our Passion.</h3>
                <p className="text-white/60 text-base leading-relaxed font-medium">
                  We believe that elite software shouldn't be a luxury. It should be the foundation for every ambitious startup in India. We are driven by the intersection of high-fidelity design and technical dominance, helping our clients outpace their competition through superior engineering.
                </p>
                <div className="pt-4 flex items-center gap-2">
                   <div className="w-1 h-1 rounded-full bg-primary" />
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Dedicated to Indian Startups</span>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="space-y-24">
            <div className="text-center space-y-4">
              <h2 className="text-5xl md:text-7xl font-headline font-black text-secondary tracking-tighter">The Engineers.</h2>
              <p className="text-lg text-muted-foreground font-medium">Meet the architects behind your digital success.</p>
            </div>

            <div className="space-y-16">
              {team.map((member, i) => (
                <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center bg-white border border-muted/50 rounded-[4rem] p-10 md:p-16 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-700 group`}>
                  <div className="relative w-full lg:w-5/12 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-muted/10">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                      unoptimized={member.image.includes('i.ibb.co') || member.image.includes('yasodha.in')}
                      priority={i === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="w-full lg:w-7/12 space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
                          {member.role}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                        <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">{member.tagline}</span>
                      </div>
                      <h3 className="text-5xl md:text-6xl font-black text-secondary tracking-tight group-hover:text-primary transition-colors">{member.name}</h3>
                      <p className="text-xl text-muted-foreground leading-relaxed font-medium italic">
                        "{member.desc}"
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xs font-black text-secondary uppercase tracking-[0.2em]">Core Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill) => (
                          <span key={skill} className="px-4 py-2 bg-muted/30 rounded-xl text-[10px] font-black text-secondary uppercase tracking-widest border border-transparent hover:border-primary/20 hover:bg-white transition-all">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      {i === 0 ? (
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20">
                          <Rocket className="w-4 h-4" /> Technical Lead
                        </div>
                      ) : (
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-secondary/20">
                          <ShieldCheck className="w-4 h-4" /> Security Expert
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-20 border-y border-muted/50">
            {[
              { label: "Successful Projects", value: "52+", icon: <Star className="w-4 h-4" /> },
              { label: "Uptime Guaranteed", value: "99.9%", icon: <ShieldCheck className="w-4 h-4" /> },
              { label: "Code Coverage", value: "95%", icon: <Code2 className="w-4 h-4" /> },
              { label: "Global Reach", value: "30+ Countries", icon: <Globe className="w-4 h-4" /> }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2 text-primary">
                  {stat.icon}
                  <span className="text-3xl md:text-5xl font-black text-secondary">{stat.value}</span>
                </div>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </section>

          {/* Values Section */}
          <section className="space-y-16">
            <h2 className="text-4xl md:text-6xl font-headline font-black text-secondary tracking-tighter">The Principles.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-[3rem] space-y-6 shadow-sm border border-muted/20 hover:border-primary/20 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-black text-secondary text-xl">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="rounded-[4rem] bg-secondary p-12 md:p-24 text-center text-white space-y-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent)] pointer-events-none" />
            <div className="space-y-6 relative z-10">
              <h2 className="text-5xl md:text-8xl font-headline font-black leading-tight tracking-tighter">Ready to build <br /> <span className="text-primary italic">dominance?</span></h2>
              <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                Whether it's complex software architecture or a high-performance mobile app, our team has the precision to realize it.
              </p>
            </div>
            <div className="relative z-10">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 h-16 md:h-20 font-black text-lg md:text-xl shadow-2xl shadow-primary/30 transition-all hover:scale-105">
                <Link href="/contact">Start Your Project <ArrowRight className="ml-2 w-6 h-6" /></Link>
              </Button>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
