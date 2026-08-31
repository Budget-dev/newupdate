
"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { 
  CheckCircle2, 
  Target, 
  LockOpen, 
  Bot, 
  TrendingUp, 
  Phone, 
  Timer, 
  ArrowRight,
  ShieldCheck,
  UserCheck,
  Code2,
  Search,
  Briefcase,
  Layout,
  Zap,
  Clock,
  Heart,
  Smartphone,
  GraduationCap
} from "lucide-react";
import Link from "next/link";

// Custom Highlight Box component for the interactive feel
const HighlightBox = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="group relative p-8 bg-[#151515] border-l-4 border-[#FF6B00] rounded-r-2xl transition-all hover:bg-[#1A1A1A]">
    <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-xl flex items-center justify-center text-[#FF6B00] mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6" />
    </div>
    <h4 className="text-xl font-black text-white italic mb-3">{title}</h4>
    <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default function CoursePage() {
  const [timeLeft, setTimeLeft] = useState({ h: 14, m: 42, s: 10 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { ...prev, h: prev.h - 1, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0D0D] text-white selection:bg-[#FF6B00]/30 selection:text-[#FF6B00]">
      <Navbar />

      <main className="flex-1">
        {/* SECTION 1 — HERO */}
        <section className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
          <div className="max-w-5xl space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-[42px] md:text-[80px] font-black text-[#FF6B00] leading-[1.05] tracking-tight font-anton uppercase">
              From Zero to ₹10,000 a Month. <br />
              No Degree. No Office. No Excuse.
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto font-medium">
              India&apos;s most practical freelancing course — built for students who are tired of waiting.
            </p>
            <div className="space-y-6 pt-4">
              <Button asChild className="h-16 md:h-24 px-12 md:px-20 rounded-full bg-[#FF6B00] hover:bg-[#FF8533] text-white font-black text-xl md:text-3xl shadow-[0_0_40px_rgba(255,107,0,0.4)] transition-all hover:scale-105 active:scale-95">
                <Link href="https://wa.me/918466006486?text=I%20want%20to%20enroll%20in%20the%20Masterclass">
                  Enroll Now — ₹1,999 Only
                </Link>
              </Button>
              <p className="text-[#FFB800] text-sm md:text-base font-black uppercase tracking-widest flex items-center justify-center gap-2">
                <Timer className="w-5 h-5 animate-pulse" /> ⚡ Full refund if you don&apos;t get a client in 6 months
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-20 border-t border-white/10">
              {[
                { icon: <GraduationCap className="w-5 h-5" />, text: "3 Weeks Live Training" },
                { icon: <Phone className="w-5 h-5" />, text: "6 Months 1-on-1 Mentorship" },
                { icon: <ShieldCheck className="w-5 h-5" />, text: "Client Guarantee" },
                { icon: <Bot className="w-5 h-5" />, text: "MERN + AI Stack" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="text-[#FF6B00]">{item.icon}</div>
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2 — THE PAIN */}
        <section className="py-32 px-6 bg-[#121212]">
          <div className="max-w-7xl mx-auto space-y-20">
            <h2 className="text-4xl md:text-6xl font-black text-white text-center uppercase font-anton">Does This Sound Like You?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "You got placed. ₹8,000 salary. But rent, food, and data burn it before the 20th. You call home. Again.",
                "You know how to code. But you have zero clients, zero portfolio, and zero idea where to start.",
                "You've tried Fiverr and Upwork. Got ignored. Lost hope. Thought maybe freelancing isn't for you."
              ].map((pain, i) => (
                <div key={i} className="bg-[#0D0D0D] p-10 border-l-8 border-[#FF6B00] rounded-r-3xl space-y-6">
                  <p className="text-xl md:text-2xl font-black italic text-white/90 leading-relaxed">
                    &quot;{pain}&quot;
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[#FFB800] text-2xl md:text-4xl font-black text-center italic tracking-tight">
              It is for you. You just didn&apos;t have the right system.
            </p>
          </div>
        </section>

        {/* SECTION 3 — THE SOLUTION */}
        <section className="py-32 px-6 bg-[#0D0D0D]">
          <div className="max-w-7xl mx-auto space-y-20">
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-7xl font-black text-[#FF6B00] uppercase font-anton leading-none">Introducing the <br /> BudgetDev Masterclass</h2>
              <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto">
                3 weeks. Live sessions. Real projects. Real clients. <br className="hidden md:block" /> One system that actually works.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <HighlightBox 
                icon={LockOpen} 
                title="The Freelancer.com Loophole" 
                desc="How beginners beat experienced freelancers every day using hidden research methods." 
              />
              <HighlightBox 
                icon={Code2} 
                title="AI + Full Stack Dev" 
                desc="MERN stack from system design to live deployment using zero-cost professional tools." 
              />
              <HighlightBox 
                icon={Target} 
                title="Client Getting System" 
                desc="Find, pitch, close, and get paid — step by step. No generic cold calling." 
              />
              <HighlightBox 
                icon={TrendingUp} 
                title="Profile Domination" 
                desc="Fiverr, Upwork, Instagram — all optimized for maximum organic reach." 
              />
              <HighlightBox 
                icon={Search} 
                title="Technical SEO Dominance" 
                desc="Outrank slower WordPress competitors by leveraging Next.js Core Web Vitals." 
              />
              <HighlightBox 
                icon={UserCheck} 
                title="1-on-1 Backup Support" 
                desc="Missed a class? Get a Personalized Backup Session to stay on track." 
              />
            </div>
          </div>
        </section>

        {/* SECTION 4 — CURRICULUM */}
        <section className="py-32 px-6 bg-[#121212]">
          <div className="max-w-4xl mx-auto space-y-20">
            <h2 className="text-4xl md:text-6xl font-black text-white text-center uppercase font-anton">What You Will Learn</h2>
            
            <div className="space-y-16">
              {/* WEEK 1 */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-4 px-6 py-2 bg-[#FF6B00] text-white rounded-full text-lg font-black uppercase">
                  Week 1 — Build Your Foundation
                </div>
                <div className="space-y-4">
                  {[
                    { day: "Day 1", title: "Freelancing Mindset & Platforms", detail: "Overview of Fiverr, Upwork, and the Freelancer.com starting logic." },
                    { day: "Day 2", title: "Freelancer.com Mastery (2.5 hrs)", detail: "Psychological profile hacks and the first loophole: reading descriptions like a detective." },
                    { day: "Day 3", title: "Upwork Optimization for Students", detail: "Connects management and algorithm gaming for beginners." },
                    { day: "Day 4", title: "Social Proof on IG & FB", detail: "DMs that convert and professional social branding." },
                    { day: "Day 5", title: "System Audit & Workspace", detail: "Live profile review by Venkatesh and workspace optimization." }
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-[#0D0D0D] border border-white/5 rounded-2xl flex gap-6">
                      <span className="text-[#FF6B00] font-black text-xl shrink-0">{item.day}</span>
                      <div>
                        <h5 className="text-lg font-bold text-white mb-1">{item.title}</h5>
                        <p className="text-white/40 text-sm">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WEEK 2 */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-4 px-6 py-2 bg-[#FFB800] text-black rounded-full text-lg font-black uppercase">
                  Week 2 — Client Getting Machine
                </div>
                <div className="space-y-4">
                  {[
                    { day: "Day 6", title: "The Exact Loophole Explained", detail: "The 'I already know your site' proposal method that beats 500-review freelancers." },
                    { day: "Day 7", title: "Winning Proposals & Quotations", detail: "Price objection scripts and the 5-line proposal formula." },
                    { day: "Day 8", title: "Local Cold Outreach", detail: "Finding City-based clients who need websites urgently." },
                    { day: "Day 9", title: "Closing the Deal (Live Simulation)", detail: "Discovery calls and handling price pushback without dropping your rate." },
                    { day: "Day 10", title: "Payment Systems (Global & Local)", detail: "Payoneer, UPI, Wise, and the 'funded milestone' golden rule." }
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-[#0D0D0D] border border-white/5 rounded-2xl flex gap-6">
                      <span className="text-[#FFB800] font-black text-xl shrink-0">{item.day}</span>
                      <div>
                        <h5 className="text-lg font-bold text-white mb-1">{item.title}</h5>
                        <p className="text-white/40 text-sm">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WEEK 3 */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-4 px-6 py-2 bg-[#00D757] text-white rounded-full text-lg font-black uppercase">
                  Week 3 — Full Stack Delivery
                </div>
                <div className="space-y-4">
                  {[
                    { day: "Day 11", title: "Full Stack Fundamentals (MERN)", detail: "MERN introductions and environment setup (VS Code, Node, Git)." },
                    { day: "Day 12", title: "React for Freelancers", detail: "Fast landing page delivery using Tailwind CSS and components." },
                    { day: "Day 13", title: "Backend Logic & Database", detail: "Node, Express, and MongoDB Atlas setup for form handling." },
                    { day: "Day 14", title: "Live Build & Handover", detail: "Simulated client project built from scratch to live URL." },
                    { day: "Day 15", title: "Meta Ads & 30-Day Action Plan", detail: "Finding ad-spending clients and your final freelancing roadmap." }
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-[#0D0D0D] border border-white/5 rounded-2xl flex gap-6">
                      <span className="text-[#00D757] font-black text-xl shrink-0">{item.day}</span>
                      <div>
                        <h5 className="text-lg font-bold text-white mb-1">{item.title}</h5>
                        <p className="text-white/40 text-sm">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — THE STORY */}
        <section className="py-32 px-6 bg-[#0D0D0D]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase font-anton leading-none">Your Mentor</h2>
                <h3 className="text-2xl md:text-4xl font-black text-[#FF6B00] italic">Venkatesh Choppa</h3>
                <p className="text-[#FFB800] text-sm font-black uppercase tracking-widest">Founder, BudgetDev</p>
              </div>
              
              <div className="space-y-6 text-xl md:text-2xl text-white/80 leading-relaxed italic border-l-4 border-[#FF6B00] pl-8 py-4 bg-white/5 rounded-r-3xl">
                <p>&quot;I was exactly where you are. I spent an entire year with skills but no clients. I tried everything, and I wasted over ₹40,000 on courses from big influencers that were just pure theory.&quot;</p>
                <p>&quot;I built this masterclass because I lived the pain. I found the loopholes. I know how to get paid safely. This isn&apos;t just a course — it&apos;s the system I wish I had from day one.&quot;</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  "2.5 Years Freelancing Experience",
                  "14+ Live Products Built",
                  "budgetdev.in — Real Results"
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-[#151515] border-l-4 border-[#FF6B00] rounded-r-xl">
                    <p className="text-xs font-black text-white uppercase">{stat}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl">
              <Image 
                src="https://yasodha.in/assets/venkatesh-profile.png" 
                alt="Venkatesh Choppa" 
                fill 
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* SECTION 6 — INCLUDED */}
        <section className="py-32 px-6 bg-[#121212]">
          <div className="max-w-4xl mx-auto space-y-20">
            <h2 className="text-4xl md:text-6xl font-black text-white text-center uppercase font-anton">We Build Your Career.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Personal Portfolio Build", icon: <Layout className="w-5 h-5" />, detail: "We guide you in building a high-fidelity personal portfolio that converts." },
                { label: "Real Project Overflow", icon: <Briefcase className="w-5 h-5" />, detail: "Top students get access to our real agency project pipeline for pay." },
                { label: "3 Weeks Live Classes", icon: <CheckCircle2 className="w-5 h-5" />, detail: "Monday to Friday sessions. No boring slides." },
                { label: "6 Months Mentorship", icon: <CheckCircle2 className="w-5 h-5" />, detail: "Continued guidance as you scale your business." },
                { label: "1-on-1 Phone Access", icon: <Phone className="w-5 h-5" />, detail: "Call Venkatesh anytime for real-world advice." },
                { label: "Personalized Backup", icon: <UserCheck className="w-5 h-5" />, detail: "Dedicated recovery calls if you miss a live class." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-[#0D0D0D] border-2 border-white/5 rounded-[2.5rem] flex flex-col gap-4 group hover:border-[#FF6B00]/30 transition-all">
                  <div className="text-[#FF6B00] group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <h5 className="text-lg font-bold text-white uppercase tracking-tight mb-2">{item.label}</h5>
                    <p className="text-white/40 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7 — GUARANTEE */}
        <section className="py-32 px-6 bg-[#0D0D0D]">
          <div className="max-w-4xl mx-auto p-12 md:p-20 border-8 border-[#FF6B00] rounded-[3rem] text-center space-y-8 animate-pulse shadow-[0_0_80px_rgba(255,107,0,0.1)]">
            <h2 className="text-4xl md:text-7xl font-black text-[#FF6B00] uppercase font-anton">Zero Risk. Guaranteed.</h2>
            <div className="space-y-6 max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl font-bold text-white/90">
                Follow the course. Do the work. Apply the system. <br />
                If you don&apos;t land a single client within 6 months — we refund every rupee.
              </p>
              <p className="text-lg font-bold text-white/50">No forms. No questions. No drama.</p>
            </div>
            <p className="text-[#FFB800] text-xl font-black uppercase tracking-[0.3em] pt-6">We only win when you win.</p>
          </div>
        </section>

        {/* SECTION 8 — PRICING */}
        <section id="pricing" className="py-32 px-6 bg-[#121212]">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase font-anton">One Investment.</h2>
              <p className="text-xl text-white/60 font-medium">Six months of real support.</p>
            </div>

            <Card className="bg-[#0D0D0D] border-4 border-[#FF6B00] rounded-[3rem] overflow-hidden shadow-2xl">
              <div className="p-10 md:p-16 space-y-10">
                <div className="text-center space-y-4">
                  <p className="text-[10px] font-black text-[#FF6B00] uppercase tracking-widest border border-[#FF6B00] inline-block px-4 py-1 rounded-full mb-4">Limited Availability</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-5xl md:text-[100px] font-black text-[#FFB800] font-anton leading-none">₹1,999</span>
                  </div>
                  <p className="text-xl text-white font-black italic">One freelance project pays this back 3× over.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-12 border-y border-white/10 py-10">
                  {[
                    "Guided Personal Portfolio Build",
                    "Real Project Overflow Access",
                    "3 Weeks Live Training",
                    "6 Months Mentorship",
                    "1-on-1 Phone Access",
                    "Personalized Backup Support",
                    "MERN Stack + AI Skills",
                    "Full Refund Guarantee"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6B00]" />
                      <span className="text-sm font-bold text-white/90">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  <Button asChild className="w-full h-20 md:h-24 bg-[#FF6B00] hover:bg-[#FF8533] text-white rounded-2xl font-black text-2xl md:text-4xl shadow-2xl shadow-[#FF6B00]/20 transition-all hover:scale-[1.02]">
                    <Link href="https://wa.me/918466006486?text=I%20want%20to%20enroll%20in%20the%20Masterclass">
                      Enroll Now — ₹1,999
                    </Link>
                  </Button>
                  <div className="flex flex-col items-center gap-4 text-xs font-bold text-white/40 uppercase tracking-widest">
                    <span>Next Batch Starts Soon</span>
                    <div className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-black text-white">{timeLeft.h}</span>
                        <span>Hours</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-black text-white">{timeLeft.m}</span>
                        <span>Minutes</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-black text-white">{timeLeft.s}</span>
                        <span>Seconds</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* SECTION 9 — FAQ */}
        <section className="py-32 px-6 bg-[#0D0D0D]">
          <div className="max-w-4xl mx-auto space-y-16">
            <h2 className="text-4xl md:text-6xl font-black text-white text-center uppercase font-anton">Common Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { q: "I have no experience. Can I still join?", a: "Yes. This course starts from zero. No prior freelancing or coding experience needed." },
                { q: "What if I don't get a client?", a: "Full refund. We mean it. If you follow the process and get zero clients in 6 months, every rupee comes back to you." },
                { q: "Is this recorded or live?", a: "Live sessions, Monday to Friday for 3 weeks. We don't provide recordings to ensure you stay accountable and don't procrastinate. If you miss a class, you get a Personalized Backup Session." },
                { q: "Can I really call Venkatesh anytime?", a: "Yes. You get his direct number. WhatsApp and call both work. 6 months of real access — not a chatbot." },
                { q: "What platforms will my profiles be on?", a: "Fiverr, Upwork, Freelancer.com, Instagram, Facebook, and more." },
                { q: "Do I need a laptop?", a: "Yes. A basic laptop with internet is enough. We will show you how to do everything with zero monthly cost tools." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-[#151515] rounded-3xl border-none px-8">
                  <AccordionTrigger className="text-lg md:text-xl font-bold text-white hover:no-underline py-6 text-left">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-white/50 text-base pb-6 leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* SECTION 10 — FINAL CTA */}
        <section className="min-h-screen bg-[#0D0D0D] flex flex-col items-center justify-center px-6 text-center border-t border-white/5">
          <div className="max-w-5xl space-y-12">
            <h2 className="text-[32px] md:text-[70px] font-black text-[#FF6B00] leading-none uppercase font-anton">
              One Hour From Now You Could Have Your Profile Live. <br />
              One Week From Now You Could Have Your First Proposal Sent. <br />
              One Month From Now You Could Have Your First Client.
            </h2>
            <p className="text-2xl md:text-3xl text-white font-medium italic">
              The only question is — will you start?
            </p>
            <div className="pt-8">
              <Button asChild className="h-20 md:h-28 px-12 md:px-24 bg-[#FF6B00] hover:bg-[#FF8533] text-white rounded-full font-black text-2xl md:text-4xl shadow-[0_0_60px_rgba(255,107,0,0.3)] transition-all">
                <Link href="https://wa.me/918466006486?text=I%20want%20to%20enroll%20in%20the%20Masterclass">
                  Yes. Enroll Me Now — ₹1,999
                </Link>
              </Button>
              <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 text-[#FFB800] text-sm md:text-lg font-black uppercase tracking-widest">
                <span>budgetdev.in</span>
                <div className="w-2 h-2 rounded-full bg-white/20 hidden md:block" />
                <span>+91 8466006486</span>
                <div className="w-2 h-2 rounded-full bg-white/20 hidden md:block" />
                <span>Venkatesh Choppa</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* STICKY CTA FOR MOBILE */}
      <div className="fixed bottom-6 left-6 right-6 z-[60] md:hidden animate-in slide-in-from-bottom-20 duration-1000">
        <Button asChild className="w-full h-16 bg-[#FF6B00] hover:bg-[#FF8533] text-white rounded-2xl font-black text-xl shadow-2xl shadow-[#FF6B00]/40 border-t-4 border-white/20">
          <Link href="#pricing">Enroll Now — ₹1,999</Link>
        </Button>
      </div>

      <Footer />
    </div>
  );
}
