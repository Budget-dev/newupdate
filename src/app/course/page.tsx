"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  Clock, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  Monitor,
  Zap,
  Star,
  Quote
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CourseHighlights } from "@/components/blocks/feature-section-with-hover-effects";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

export default function CoursePage() {
  const [timeLeft, setTimeLeft] = useState({ h: 12, m: 0, s: 0 });

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

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white font-sans selection:bg-[#FF6B00] selection:text-white">
      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] p-4 bg-black/80 backdrop-blur-lg border-t border-white/10">
        <Button 
          onClick={scrollToPricing}
          className="w-full bg-[#FF6B00] hover:bg-[#FF8533] text-white h-14 rounded-xl font-black text-lg uppercase tracking-tighter"
        >
          Enroll Now — ₹1,999
        </Button>
      </div>

      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.05),transparent)] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FFB800] text-xs font-black uppercase tracking-[0.2em] animate-pulse">
            🔥 Admissions Open — Limited Batch
          </div>
          
          <h1 className="text-6xl md:text-[110px] font-['Anton'] uppercase leading-[0.9] text-[#FF6B00] tracking-tighter italic">
            From Zero to ₹10,000 a Month.<br className="hidden md:block" />
            <span className="text-white">No Degree. No Office. No Excuse.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium">
            India's most practical freelancing course — built for students who are tired of waiting for opportunities and want to create them.
          </p>

          <div className="space-y-6 pt-4">
            <Button 
              onClick={scrollToPricing}
              className="bg-[#FF6B00] hover:bg-[#FF8533] text-white px-12 h-20 md:h-24 rounded-2xl font-black text-2xl md:text-3xl shadow-[0_20px_50px_rgba(255,107,0,0.3)] hover:scale-105 transition-all"
            >
              Enroll Now — ₹1,999 Only
            </Button>
            <p className="text-[#FFB800] font-bold text-sm uppercase tracking-widest">
              ⚡ Full refund if you don't get a client in 6 months
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20 border-t border-white/10">
            {[
              { icon: <Clock className="w-6 h-6" />, text: "3 Weeks Live Training" },
              { icon: <Phone className="w-6 h-6" />, text: "6 Months 1-on-1 Mentorship" },
              { icon: <ShieldCheck className="w-6 h-6" />, text: "Client Guarantee" },
              { icon: <Zap className="w-6 h-6" />, text: "MERN + AI Stack" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="text-[#FF6B00]">{item.icon}</div>
                <span className="text-xs font-bold text-white/60 uppercase tracking-wider">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE PAIN */}
      <section className="bg-[#151515] py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          <h2 className="text-4xl md:text-7xl font-['Anton'] uppercase text-center tracking-tighter">
            Does This Sound Like You?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                text: "You got placed. ₹8,000 salary. But rent, food, and data burn it before the 20th. You call home. Again.",
                icon: "💸"
              },
              { 
                text: "You know how to code. But you have zero clients, zero portfolio, and zero idea where to start.",
                icon: "💻"
              },
              { 
                text: "You've tried Fiverr and Upwork. Got ignored. Lost hope. Thought maybe freelancing isn't for you.",
                icon: "📉"
              }
            ].map((card, i) => (
              <Card key={i} className="bg-[#0D0D0D] border-none border-l-4 border-l-[#FF6B00] rounded-none p-10 space-y-6">
                <div className="text-5xl">{card.icon}</div>
                <p className="text-xl text-white/80 font-medium leading-relaxed italic">"{card.text}"</p>
              </Card>
            ))}
          </div>

          <p className="text-[#FFB800] text-3xl md:text-5xl font-['Anton'] uppercase text-center tracking-tight">
            It is for you. You just didn't have the right system.
          </p>
        </div>
      </section>

      {/* SECTION 3 — THE SOLUTION */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-8xl font-['Anton'] uppercase text-[#FF6B00] tracking-tighter leading-none">
              Introducing the <br /> BudgetDev Masterclass
            </h2>
            <p className="text-2xl text-white/60 font-bold uppercase tracking-widest">
              3 weeks. Live sessions. Real projects. Real clients.
            </p>
          </div>

          <CourseHighlights />
        </div>
      </section>

      {/* SECTION 4 — FULL CURRICULUM */}
      <section className="bg-[#151515] py-32 px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          <h2 className="text-5xl md:text-8xl font-['Anton'] uppercase text-center tracking-tighter">
            What You Will Learn
          </h2>

          <div className="space-y-12">
            {[
              {
                week: "WEEK 1",
                badgeColor: "bg-[#FF6B00]",
                title: "Profile Creation & SEO Optimization",
                items: [
                  "Fiverr Profile Creation & Optimization (Gigs, Tags, Description)",
                  "Upwork Setup — Getting your proposals accepted",
                  "Freelancer.com — The bidding framework for beginners",
                  "SEO Headline formulas that attract international clients",
                  "Instagram & Facebook Business presence for developers",
                  "Full Freelancing Workspace setup & Tools"
                ]
              },
              {
                week: "WEEK 2",
                badgeColor: "bg-[#FFB800]",
                title: "AI & Full Stack Development",
                items: [
                  "AI Development — Integrating ChatGPT API into your products",
                  "System Design & Architecture — Plan like a CTO",
                  "Advanced React — Building high-fidelity components",
                  "Backend with Node + Express — Real world API needs",
                  "MongoDB Database Engineering",
                  "Live Project Deployment — From Localhost to Client URL",
                  "Development for ₹0 — Free tools & hosting masterclass"
                ]
              },
              {
                week: "WEEK 3",
                badgeColor: "bg-[#00D757]",
                title: "Client Getting, Sales & Payments",
                items: [
                  "Meta Ads for Developers — Finding local clients in AP",
                  "Freelancer.com Loopholes — Winning without reviews",
                  "Reading Client Psychology — Identify budget & willingness to pay",
                  "Cold DM Scripts — What works in 2025",
                  "Sending Professional Quotations & Invoices",
                  "How to Close the Deal — Handle price pushback",
                  "Payment Systems (Payoneer, Wise, UPI) — Never work unpaid",
                  "The Retention Strategy — Turning one client into many"
                ]
              }
            ].map((week, idx) => (
              <div key={idx} className="bg-[#0D0D0D] p-10 rounded-[2.5rem] border border-white/5 space-y-8">
                <div className={`${week.badgeColor} inline-block px-4 py-1 text-black font-black text-sm uppercase tracking-widest rounded-lg`}>
                  {week.week}
                </div>
                <h3 className="text-3xl md:text-4xl font-['Anton'] uppercase text-white tracking-tight">
                  {week.title}
                </h3>
                <ul className="space-y-4">
                  {week.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-white/70 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHO TEACHES YOU */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-8xl font-['Anton'] uppercase tracking-tighter">Your Mentor</h2>
              <div className="space-y-1">
                <p className="text-4xl md:text-6xl font-['Anton'] uppercase text-[#FF6B00]">Venkatesh Choppa</p>
                <p className="text-xl font-bold uppercase text-[#FFB800] tracking-widest">Founder, BudgetDev</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "2.5 Years Running Meta Ads",
                "14+ Live Products Deployed",
                "Real Company Owner"
              ].map((c, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10 text-center text-xs font-black uppercase tracking-widest">
                  {c}
                </div>
              ))}
            </div>

            <div className="relative p-10 bg-white/5 rounded-[3rem] border border-white/10 italic text-xl md:text-2xl leading-relaxed font-medium">
               <Quote className="absolute top-6 left-6 w-10 h-10 text-[#FF6B00] opacity-20" />
               <p className="relative z-10">
                 "I was exactly where you are. Skills but no clients. Income not enough to survive. I built the system I wish someone had given me. This is that system."
               </p>
            </div>
          </div>

          <div className="relative aspect-square rounded-[4rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl shadow-[#FF6B00]/10">
            <img 
              src="https://yasodha.in/assets/venkatesh-profile.png" 
              alt="Venkatesh Choppa" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHAT'S INCLUDED */}
      <section className="bg-[#151515] py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          <h2 className="text-4xl md:text-7xl font-['Anton'] uppercase text-center tracking-tighter">
            Everything Inside the Course
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "3 Weeks of Live Classes — Mon to Fri",
              "6 Months of Mentorship & Guidance",
              "1-on-1 Phone Access — Call Venkatesh Anytime",
              "5 Hours of Live Profile Creation",
              "Session Recordings — 6 Months Access",
              "Real Project Practice — No Theory Only"
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-6 bg-[#0D0D0D] p-8 rounded-2xl border border-white/5 hover:border-[#FF6B00]/30 transition-all group">
                <div className="w-12 h-12 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="text-xl font-black uppercase tracking-tight">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — THE GUARANTEE */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto bg-[#FF6B00] p-12 md:p-24 rounded-[3rem] text-center text-black space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <h2 className="text-5xl md:text-8xl font-['Anton'] uppercase tracking-tighter leading-[0.9]">
            Zero Risk. <br /> Guaranteed.
          </h2>
          
          <p className="text-xl md:text-2xl font-bold leading-relaxed max-w-2xl mx-auto">
            Follow the course. Do the work. Apply the system. If you don't land a single client within 6 months — we refund every rupee. No forms. No questions. No drama.
          </p>

          <p className="text-black/60 font-black text-xl md:text-2xl uppercase tracking-[0.2em]">
            We only win when you win.
          </p>
        </div>
      </section>

      {/* SECTION 8 — PRICING */}
      <section id="pricing" className="bg-[#151515] py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-7xl font-['Anton'] uppercase tracking-tighter">One Investment.</h2>
            <p className="text-xl text-[#FFB800] font-black uppercase tracking-[0.3em]">Six Months of Support.</p>
          </div>

          <div className="max-w-xl mx-auto">
            <Card className="bg-[#0D0D0D] border-4 border-[#FF6B00] rounded-[3rem] p-12 space-y-10 relative shadow-2xl">
              <div className="absolute top-0 right-12 -translate-y-1/2 bg-[#FFB800] text-black px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest">
                Best Value in India
              </div>

              <div className="text-center space-y-4">
                <p className="text-7xl md:text-[100px] font-['Anton'] text-[#FFB800] leading-none tracking-tighter italic">₹1,999</p>
                <p className="text-xl font-bold italic text-white/60">"One freelance project pays this back 3× over."</p>
              </div>

              <div className="space-y-4 border-y border-white/10 py-10">
                {[
                  "3 Weeks Live Training (Mon–Fri)",
                  "6 Months Mentorship",
                  "1-on-1 Phone Access",
                  "All Platform Profile Setup",
                  "MERN Stack + AI Development",
                  "Client Getting System",
                  "Full Refund Guarantee"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6B00]" />
                    <span className="text-sm font-black uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <Button asChild className="w-full h-20 bg-[#FF6B00] hover:bg-[#FF8533] text-white rounded-2xl font-black text-2xl uppercase tracking-tighter">
                  <Link href="https://wa.me/918466006486">Enroll Now — ₹1,999</Link>
                </Button>
                <div className="text-center space-y-2">
                  <p className="text-xs font-bold text-white/40 uppercase tracking-[0.2em]">budgetdev.in · +91 8466006486</p>
                  <p className="text-sm font-black text-[#FFB800]">Closing in {timeLeft.h}h {timeLeft.m}m {timeLeft.s}s</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FAQ */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          <h2 className="text-4xl md:text-7xl font-['Anton'] uppercase text-center tracking-tighter">Common Questions</h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "I have no experience. Can I still join?", a: "Yes. This course starts from zero. No prior freelancing or coding experience needed." },
              { q: "What if I don't get a client?", a: "Full refund. We mean it. If you follow the process and get zero clients in 6 months, every rupee comes back to you." },
              { q: "Is this recorded or live?", a: "Live sessions, Monday to Friday for 3 weeks. All sessions are recorded and available for 6 months replay access." },
              { q: "Can I really call Venkatesh anytime?", a: "Yes. You get his direct number. WhatsApp and call both work. 6 months of real access — not a chatbot." },
              { q: "What platforms will my profiles be on?", a: "Fiverr, Upwork, Freelancer.com, Instagram, Facebook, and more." },
              { q: "Do I need a laptop?", a: "Yes. A basic laptop with internet is enough. We will show you how to do everything with zero monthly cost tools." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white/5 border border-white/10 rounded-2xl px-8">
                <AccordionTrigger className="text-xl font-bold uppercase tracking-tight text-white hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-white/60 text-lg leading-relaxed italic">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION 10 — FINAL CTA */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#0D0D0D] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FF6B00]/5 pointer-events-none" />
        <div className="max-w-5xl mx-auto space-y-16 relative z-10">
          <h2 className="text-5xl md:text-[100px] font-['Anton'] uppercase leading-[0.9] text-[#FF6B00] tracking-tighter italic">
            One Hour From Now You Could Have Your Profile Live.<br />
            One Week From Now Your First Proposal Sent.<br />
            One Month From Now Your First Client.
          </h2>

          <div className="space-y-12">
            <div className="space-y-4">
               <p className="text-2xl md:text-4xl font-black text-white uppercase italic">The only question is — will you start?</p>
               <div className="h-2 w-32 bg-[#FF6B00] mx-auto rounded-full" />
            </div>

            <Button asChild className="bg-[#FF6B00] hover:bg-[#FF8533] text-white px-16 h-24 md:h-32 rounded-3xl font-black text-3xl md:text-5xl uppercase tracking-tighter shadow-2xl">
              <Link href="https://wa.me/918466006486">Yes. Enroll Me Now — ₹1,999</Link>
            </Button>

            <div className="space-y-2">
              <p className="text-[#FFB800] text-lg font-black uppercase tracking-[0.4em]">budgetdev.in · +91 8466006486</p>
              <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Mentor: Venkatesh Choppa</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-10 text-center border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest">BudgetDev © 2025</p>
          <div className="flex gap-8 text-white/40 text-xs font-bold uppercase tracking-widest">
            <span>Vizianagaram, Andhra Pradesh</span>
            <Link href="tel:+918466006486" className="hover:text-white">+91 8466006486</Link>
            <Link href="/" className="hover:text-white italic">budgetdev.in</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
