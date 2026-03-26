
"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  Palette, 
  Clock, 
  Mail, 
  Phone, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Zap, 
  MousePointer2 
} from "lucide-react";

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD]">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          
          {/* Hero Section */}
          <section className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
              We're Hiring
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-black text-secondary leading-tight tracking-tight">
              Grow with <span className="text-primary italic">BudgetDev.</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              At BudgetDev, we transform small businesses into digital leaders with high-performance engineering. We've successfully helped <strong>52+ clients</strong> so far, and we're looking for creative minds to help us build the next big thing.
            </p>
          </section>

          {/* Job Listing Section */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="p-8 md:p-12 rounded-[2.5rem] border-muted/50 shadow-xl space-y-10 relative overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
                
                <div className="space-y-6 relative z-10">
                  <div className="flex flex-wrap items-center gap-4">
                    <h2 className="text-3xl md:text-4xl font-black text-secondary tracking-tight">UI/UX Designer</h2>
                    <Badge className="bg-primary text-white font-black px-4 py-1.5 rounded-full uppercase text-[10px] tracking-widest border-none">
                      Hourly Based
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      We are looking for a creative UI/UX designer who can craft high-conversion, visually dominant landing pages. You will be responsible for creating intuitive interfaces that follow our high-performance engineering standards.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm font-bold text-secondary uppercase tracking-wider">Creative Landing Pages</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm font-bold text-secondary uppercase tracking-wider">Hourly Pay Basis</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm font-bold text-secondary uppercase tracking-wider">Remote / Flexible</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm font-bold text-secondary uppercase tracking-wider">Impactful D2C Designs</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t space-y-8">
                    <h3 className="text-xl font-black text-secondary uppercase tracking-widest">How to Apply</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Link 
                        href="https://wa.me/918331004675" 
                        target="_blank"
                        className="flex items-center gap-4 p-6 rounded-2xl bg-[#00d757]/5 border border-[#00d757]/20 hover:bg-[#00d757]/10 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-[#00d757] flex items-center justify-center text-white shadow-lg">
                          <Phone className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-[#00d757] uppercase tracking-widest">WhatsApp Us</p>
                          <p className="text-base font-black text-secondary">8331004675</p>
                        </div>
                      </Link>

                      <Link 
                        href="mailto:venkateshchop14@gmail.com" 
                        className="flex items-center gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg">
                          <Mail className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-primary uppercase tracking-widest">Email Portfolio</p>
                          <p className="text-base font-black text-secondary">venkateshchop14@gmail.com</p>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button asChild className="rounded-xl h-14 px-10 bg-secondary text-white font-black text-base shadow-xl hover:scale-[1.02] transition-transform">
                      <Link href="https://wa.me/918331004675" target="_blank">Apply Now <ArrowRight className="ml-2 w-5 h-5" /></Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="p-8 rounded-[2rem] border-none bg-secondary text-white space-y-6">
                <h3 className="text-2xl font-black italic">Why Join Us?</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Zap className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider">Fast-Paced</h4>
                      <p className="text-xs text-white/60 leading-relaxed">Work on real projects with extreme performance requirements.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Palette className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider">Creative Freedom</h4>
                      <p className="text-xs text-white/60 leading-relaxed">No templates. We build custom visions from scratch.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Users className="w-6 h-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider">Direct Impact</h4>
                      <p className="text-xs text-white/60 leading-relaxed">Join a team that has already helped 52+ businesses scale.</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 rounded-[2rem] border border-muted/50 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <MousePointer2 className="w-6 h-6" />
                </div>
                <h4 className="font-black text-secondary uppercase tracking-widest text-xs">Landing Page Experts</h4>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  We specialize in high-fidelity landing pages. If you have a portfolio of creative, high-conversion designs, we want to see it.
                </p>
              </Card>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
