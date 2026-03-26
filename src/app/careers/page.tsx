
"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  DollarSign
} from "lucide-react";

const jobs = [
  {
    title: "UI/UX Designer",
    type: "Freelancer / Hourly",
    location: "Remote / India",
    link: "https://wa.me/918331004675"
  },
  {
    title: "Front-end Development",
    type: "Freelancer",
    location: "Remote / India",
    link: "https://wa.me/918331004675"
  },
  {
    title: "Social Media Manager",
    type: "Part-time",
    location: "Remote / India",
    link: "https://wa.me/918331004675"
  }
];

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
          <section className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="rounded-full px-4 py-1 text-[10px] font-black uppercase tracking-widest border-muted-foreground/20 text-muted-foreground">
                Career
              </Badge>
              <h1 className="text-6xl md:text-8xl font-headline font-black text-secondary tracking-tight">
                Work With Us
              </h1>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button variant="secondary" className="rounded-full px-6 font-bold text-xs">All Roles</Button>
              <Button variant="outline" className="rounded-full px-6 font-bold text-xs border-muted-foreground/20">Remote</Button>
              <Button variant="outline" className="rounded-full px-6 font-bold text-xs border-muted-foreground/20">Department</Button>
            </div>

            <div className="space-y-3 pt-8">
              {jobs.map((job, i) => (
                <Link 
                  key={i} 
                  href={job.link} 
                  target="_blank"
                  className="flex flex-col md:flex-row md:items-center justify-between p-8 rounded-2xl bg-white border border-muted hover:shadow-xl hover:border-primary/20 transition-all group"
                >
                  <h3 className="text-xl md:text-2xl font-black text-secondary group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-20 text-muted-foreground font-bold text-xs mt-4 md:mt-0">
                    <span className="uppercase tracking-widest">{job.type}</span>
                    <span className="uppercase tracking-widest">{job.location}</span>
                  </div>
                </Link>
              ))}
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
                on a mission: to redefine on-
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
              <div className="pt-6">
                <Button asChild className="rounded-full h-14 px-10 bg-secondary text-white font-black hover:scale-105 transition-transform">
                  <Link href="https://wa.me/918331004675" target="_blank">Apply Now!</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-muted/20">
              <img 
                src="https://picsum.photos/seed/careers-team/800/800" 
                alt="BudgetDev Team" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </section>

          {/* Detailed Contact Section */}
          <section className="rounded-[3rem] bg-secondary p-12 md:p-20 text-center space-y-12">
            <div className="space-y-4">
              <span className="text-primary text-xs font-black uppercase tracking-widest">Apply Today</span>
              <h2 className="text-4xl md:text-6xl font-headline font-black text-white leading-tight">Ready to join the mission?</h2>
              <p className="text-white/40 text-base md:text-lg max-w-2xl mx-auto font-medium">
                We're always looking for creative UI/UX designers and high-performance engineers. If you have a portfolio of creative landing pages, we want to see it.
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
