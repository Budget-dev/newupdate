"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Zap, 
  Layout, 
  ShieldCheck, 
  MousePointer2, 
  Cpu,
  Rocket,
  Code2,
  Database
} from "lucide-react";

const team = [
  {
    name: "Venkatesh Choppa",
    role: "Founder & Lead Developer",
    desc: "Innovative thinking and efficient execution for high-fidelity digital solutions.",
    image: "https://yasodha.in/assets/venkatesh-profile.png"
  },
  {
    name: "Shankar Bojank",
    role: "Backend Developer",
    desc: "2 years of experience in engineering robust and scalable backend architectures.",
    image: "https://i.ibb.co/TMRK7qHD/Whats-App-Image-2026-03-28-at-11-09-06-PM.jpg"
  }
];

const values = [
  {
    title: "Quality Engineering",
    desc: "Every line of code is custom-built for high-performance software solutions.",
    icon: <Code2 className="w-5 h-5 text-primary" />
  },
  {
    title: "Scalable Backend",
    desc: "Robust infrastructures designed to handle growth and complex data.",
    icon: <Database className="w-5 h-5 text-primary" />
  },
  {
    title: "Design with function",
    desc: "Beauty meets utility. Every interface is designed for maximum conversion.",
    icon: <MousePointer2 className="w-5 h-5 text-primary" />
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD]">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          
          <section className="space-y-12">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-5xl md:text-7xl font-headline font-black text-secondary leading-[1.1] tracking-tight">
                Software <br />
                <span className="text-primary italic">Solutions Team.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                BudgetDev is now more than just an agency. We are a software solutions provider dedicated to high-performance engineering for web and mobile platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
              {team.map((member, i) => (
                <div key={i} className="relative group overflow-hidden rounded-[2.5rem] bg-secondary aspect-[4/5] shadow-2xl">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                    <div className="space-y-2">
                      <div className="inline-flex px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest">
                        {member.role}
                      </div>
                      <h3 className="text-2xl font-black text-white">{member.name}</h3>
                      <p className="text-white/60 text-xs font-medium">{member.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="main-section-container space-y-12">
            <h2 className="text-5xl md:text-7xl font-headline font-black text-secondary">Core Values.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((item, i) => (
                <div key={i} className="bg-white border border-muted/50 p-8 rounded-[2rem] space-y-6 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-black text-secondary text-lg">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2.5rem] bg-secondary p-12 text-center text-white space-y-8">
            <h2 className="text-4xl md:text-6xl font-headline font-black">Ready to build the future?</h2>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 font-black">
              <Link href="/contact">Start Your Project <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
