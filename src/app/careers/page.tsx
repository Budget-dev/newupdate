
"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { 
  Clock, 
  Mail, 
  Phone, 
  ArrowRight, 
  Zap, 
  MousePointer2, 
  Heart, 
  Coffee, 
  Globe, 
  DollarSign,
  Sparkles,
  CheckCircle2
} from "lucide-react";

const perks = [
  {
    title: "Flexible Working Hours",
    desc: "Our families and lives outside of our jobs are very important to us; our schedules are flexible to reflect and support that.",
    icon: <Clock className="w-5 h-5 text-primary" />
  },
  {
    title: "Remote First",
    desc: "Most of our team is based across India. We believe in results and quality of work over physical presence in an office.",
    icon: <Globe className="w-5 h-5 text-primary" />
  },
  {
    title: "Compensation",
    desc: "We offer competitive hourly rates for creative minds, ensuring you are rewarded fairly for your high-fidelity contributions.",
    icon: <DollarSign className="w-5 h-5 text-primary" />
  },
  {
    title: "Modern Tech Stack",
    desc: "Work with the latest tools like Next.js 15, React 19, and advanced AI agents to build world-class digital solutions.",
    icon: <Zap className="w-5 h-5 text-primary" />
  }
];

const values = [
  { num: "01", title: "We are principled.", desc: "We believe in transparency and high-quality engineering." },
  { num: "02", title: "We're bold.", desc: "We take risks and push the boundaries of web design." },
  { num: "03", title: "We're team-oriented.", desc: "Collaboration is at the heart of everything we build." },
  { num: "04", title: "We are committed to our shared values.", desc: "Excellence is not an act, but a habit for us." }
];

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD]">
      <Navbar />
      
      <main className="flex-1 pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* Hero Section */}
          <section className="space-y-12">
            <div className="space-y-4">
              <Badge variant="outline" className="rounded-full px-4 py-1 text-[10px] font-black uppercase tracking-widest border-muted-foreground/20 text-muted-foreground">
                Careers at BudgetDev
              </Badge>
              <h1 className="text-6xl md:text-8xl font-headline font-black text-secondary tracking-tight leading-[1.1]">
                Work With <span className="text-primary italic">Us.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl font-medium leading-relaxed">
                We are looking for elite creative talent to help us redefine digital experiences for Indian brands.
              </p>
            </div>

            <div className="space-y-6 pt-8">
              <h2 className="text-2xl font-black text-secondary uppercase tracking-widest">Open Positions (1)</h2>
              
              <div className="p-1 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-transparent">
                <div className="bg-white rounded-[2.4rem] border border-muted shadow-xl overflow-hidden">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="uiux" className="border-none">
                      <div className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div className="space-y-2">
                            <h3 className="text-3xl md:text-4xl font-black text-secondary">UI/UX Designer</h3>
                            <div className="flex flex-wrap gap-4 text-muted-foreground font-bold text-xs uppercase tracking-widest">
                              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> Freelancer / Hourly</span>
                              <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> Remote / India</span>
                            </div>
                          </div>
                          <AccordionTrigger className="w-auto px-8 h-14 bg-secondary text-white rounded-2xl font-black text-sm hover:no-underline hover:scale-105 transition-transform">
                            View Requirements
                          </AccordionTrigger>
                        </div>
                      </div>

                      <AccordionContent className="bg-[#F8FAF9] p-8 md:p-12 border-t border-muted/50">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                          <div className="space-y-6">
                            <h4 className="text-xl font-black text-secondary flex items-center gap-2">
                              <Sparkles className="w-5 h-5 text-primary" /> What we need:
                            </h4>
                            <ul className="space-y-4">
                              {[
                                "Elite creativity for high-conversion landing pages",
                                "Mastery of modern UI patterns & pixel-perfect details",
                                "Experience building visual identities for Indian brands",
                                "Ability to deliver high-fidelity prototypes in Figma",
                                "Fast turnaround for high-growth startup projects"
                              ].map((req, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm font-bold text-secondary/80">
                                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-8 bg-white p-8 rounded-3xl shadow-sm border border-muted/50">
                            <div className="space-y-2">
                              <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Application Process</p>
                              <h5 className="text-xl font-black text-secondary">Ready to apply?</h5>
                              <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                                Please send your portfolio and hourly rates directly to Venkatesh. We prioritize candidates who showcase creative, fast-loading landing pages.
                              </p>
                            </div>
                            
                            <div className="flex flex-col gap-3">
                              <Button asChild className="h-14 rounded-2xl bg-[#00d757] text-white font-black text-sm shadow-lg shadow-[#00d757]/10">
                                <Link href="https://wa.me/918331004675" target="_blank">
                                  Apply via WhatsApp <Phone className="ml-2 w-4 h-4" />
                                </Link>
                              </Button>
                              <Button asChild variant="outline" className="h-14 rounded-2xl border-muted-foreground/20 text-secondary font-black text-sm">
                                <Link href="mailto:venkateshchop14@gmail.com">
                                  Email Portfolio <Mail className="ml-2 w-4 h-4" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </section>

          {/* Perks Section */}
          <section className="space-y-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-secondary">Our Perks and Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
              {perks.map((perk, i) => (
                <div key={i} className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center">
                    {perk.icon}
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-black text-secondary leading-tight">{perk.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                      {perk.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-black text-secondary leading-tight">
                Deeply held values <br />
                on a mission to redefine digital excellence.
              </h2>
              <div className="space-y-8">
                {values.map((v, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-xs font-black text-muted-foreground mt-1">{v.num}</span>
                    <div className="space-y-1">
                      <h4 className="text-lg font-black text-secondary">{v.title}</h4>
                      <p className="text-xs text-muted-foreground font-medium">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-muted/20">
              <img 
                src="https://picsum.photos/seed/careers-team/800/800" 
                alt="BudgetDev Creative Team" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </section>

          {/* Detailed Contact Section */}
          <section className="rounded-[3rem] bg-secondary p-12 md:p-20 text-center space-y-12">
            <div className="space-y-4">
              <span className="text-primary text-xs font-black uppercase tracking-widest">Join the Tribe</span>
              <h2 className="text-4xl md:text-6xl font-headline font-black text-white leading-tight">Ready to build the future?</h2>
              <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto font-medium">
                We are always looking for creative UI/UX designers and high-performance engineers. If you have a portfolio of creative landing pages, we want to see it.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Link 
                href="https://wa.me/918331004675" 
                target="_blank"
                className="flex items-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00d757] flex items-center justify-center text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-[#00d757] uppercase tracking-widest">WhatsApp Us</p>
                  <p className="text-base font-black text-white">8331004675</p>
                </div>
              </Link>

              <Link 
                href="mailto:venkateshchop14@gmail.com" 
                className="flex items-center gap-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest">Email Portfolio</p>
                  <p className="text-base font-black text-white">venkateshchop14@gmail.com</p>
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
