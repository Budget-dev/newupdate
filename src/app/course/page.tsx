
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
  Quote,
  LockOpen,
  Bot,
  Target,
  TrendingUp,
  Layout,
  Search,
  Wallet,
  Globe
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

  const curriculum = [
    {
      week: "WEEK 1 — BUILD YOUR FOUNDATION",
      tagline: "Before you find clients, clients must be able to find you.",
      badge: "bg-[#FF6B00]",
      days: [
        {
          day: "Day 1",
          title: "Mindset + Platform Overview",
          details: [
            "Why freelancing beats a ₹8,000 salary",
            "How the freelancing economy actually works in India",
            "Overview of all platforms: Freelancer.com, Upwork, Fiverr, LinkedIn",
            "Why we start on Freelancer.com first",
            "Setting up your laptop/phone for freelancing workflow"
          ]
        },
        {
          day: "Day 2",
          title: "Freelancer.com Optimization (2.5 hrs)",
          details: [
            "Profile photo, headline, and bio that attract clients",
            "Building your portfolio from zero (even without past projects)",
            "The Loophole Session Part 1: Detective research methods",
            "Live walkthrough: finding 5 real projects with client links"
          ]
        },
        {
          day: "Day 3",
          title: "Upwork Profile Mastery (2.5 hrs)",
          details: [
            "Setting up Upwork for Indian students (verification, connects)",
            "Writing a profile that passes Upwork's algorithm",
            "How Upwork ranks freelancers — and how to game it early",
            "First Upwork portfolio section build from scratch"
          ]
        },
        {
          day: "Day 4",
          title: "Social Proof (Instagram + Facebook)",
          details: [
            "Why social proof on Instagram converts clients in 2025",
            "Creating a freelancer Instagram profile that looks professional",
            "Content strategy: What to post vs what NOT to post",
            "How to use Instagram DMs to reach local Indian clients directly"
          ]
        },
        {
          day: "Day 5",
          title: "System Optimization + Audit",
          details: [
            "Setting up your complete freelancing workspace tools",
            "Other platforms: Toptal, PeoplePerHour, LinkedIn ProFinder",
            "Building a simple personal portfolio site (zero coding version)",
            "Live Profile Audit: Venkatesh reviews students' profiles"
          ]
        }
      ]
    },
    {
      week: "WEEK 2 — CLIENT GETTING MACHINE",
      tagline: "The loophole. The proposal. The close.",
      badge: "bg-[#FFB800]",
      days: [
        {
          day: "Day 6",
          title: "The Freelancer.com Loophole (Deep Dive)",
          details: [
            "The exact loophole: Why 95% of bidders lose before they start",
            "How to find projects where clients embed their website link",
            "The 10-minute client research method",
            "Writing the 'I already looked at your website' proposal — word for word"
          ]
        },
        {
          day: "Day 7",
          title: "Winning Proposals + Quotations",
          details: [
            "The 5-line proposal formula (short wins over long)",
            "How to write a quotation: scope, timeline, price, revisions",
            "Pricing strategy: how to decide your rate as a beginner",
            "Quotation template download + customization"
          ]
        },
        {
          day: "Day 8",
          title: "Cold Outreach + Social Sales",
          details: [
            "Inbound vs outbound — which works faster",
            "Cold DM framework: scripts for Instagram and Email",
            "Reaching local businesses in your city for web projects",
            "The Meta Ads → Developer gap: your biggest client source"
          ]
        },
        {
          day: "Day 9",
          title: "How to Close the Deal",
          details: [
            "Handling 'I'll think about it' — the exact response",
            "Price objections: How to hold firm without losing the client",
            "Closing on Zoom vs WhatsApp vs Chat",
            "Live roleplay: Pitching and closing live sessions"
          ]
        },
        {
          day: "Day 10",
          title: "Payment Systems + Safe Payouts",
          details: [
            "Milestone Payments on Freelancer.com walkthrough",
            "Payoneer, Wise, and UPI setup for Indian students",
            "The golden rule: Funding milestones before starting work",
            "How to invoice professionally using free tools"
          ]
        }
      ]
    },
    {
      week: "WEEK 3 — FULL STACK DELIVERY",
      tagline: "Now you have clients — here's how to deliver like a pro.",
      badge: "bg-[#00D757]",
      days: [
        {
          day: "Day 11",
          title: "Full Stack MERN Fundamentals",
          details: [
            "Setting up dev environment (VS Code, Node, Git)",
            "What clients actually ask for (Landing pages, forms, dashboards)",
            "Matching requirements to the right tech solution",
            "Pushing first repo to GitHub"
          ]
        },
        {
          day: "Day 12",
          title: "Frontend (React + Tailwind)",
          details: [
            "Building a landing page in React from scratch — live",
            "Components, props, and state for freelancers",
            "Mobile-first responsive design basics",
            "Tailwind CSS crash course for fast styling"
          ]
        },
        {
          day: "Day 13",
          title: "Backend (Node + MongoDB)",
          details: [
            "Setting up a Node/Express server from zero",
            "Building a contact form backend with MongoDB Atlas",
            "REST API basics for API integration projects",
            "Deploying on Railway / Render (Free tier)"
          ]
        },
        {
          day: "Day 14",
          title: "Live Client Simulation Build",
          details: [
            "Real client brief simulation: Scoping and quoting live",
            "Full project build: Landing page + Form + Database",
            "Git workflow and client handover process",
            "Getting testimonials and first client reviews"
          ]
        },
        {
          day: "Day 15",
          title: "Meta Ads + Course Wrap-Up",
          details: [
            "How to target clients using Meta Ads",
            "The Meta Ads developer gap explained",
            "Positioning yourself to ad agencies",
            "Full course review and 30-day action plan"
          ]
        }
      ]
    }
  ];

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
            🔥 Batch starting soon — Limited Seats
          </div>
          
          <h1 className="text-6xl md:text-[110px] font-['Anton'] uppercase leading-[0.9] text-[#FF6B00] tracking-tighter italic">
            From Zero to first client.<br className="hidden md:block" />
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
              <Card key={i} className="bg-[#0D0D0D] border-none border-l-4 border-l-[#FF6B00] rounded-none p-10 space-y-6 shadow-xl">
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

      {/* SECTION 4 — FULL CURRICULUM (EXPANDED) */}
      <section className="bg-[#151515] py-32 px-6">
        <div className="max-w-5xl mx-auto space-y-20">
          <h2 className="text-5xl md:text-8xl font-['Anton'] uppercase text-center tracking-tighter">
            What You Will Learn
          </h2>

          <div className="space-y-24">
            {curriculum.map((week, idx) => (
              <div key={idx} className="space-y-10">
                <div className="space-y-4">
                  <div className={`${week.badge} inline-block px-6 py-2 text-black font-black text-sm uppercase tracking-widest rounded-lg shadow-lg`}>
                    {week.week}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-['Anton'] uppercase text-white tracking-tight">
                    {week.tagline}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {week.days.map((day, dIdx) => (
                    <div key={dIdx} className="bg-[#0D0D0D] p-8 rounded-[2rem] border border-white/5 space-y-6 hover:border-[#FF6B00]/30 transition-all group">
                      <div className="flex justify-between items-center">
                        <span className="text-[#FF6B00] font-black uppercase text-xs tracking-widest">{day.day}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#FF6B00] transition-colors" />
                      </div>
                      <h4 className="text-xl font-bold text-white uppercase tracking-tight">{day.title}</h4>
                      <ul className="space-y-3">
                        {day.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-white/60 group-hover:text-white/80 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]/40 mt-1.5 shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
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

      {/* SECTION 6 — MENTORSHIP & WHAT'S INCLUDED */}
      <section className="bg-[#151515] py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
             <h2 className="text-4xl md:text-7xl font-['Anton'] uppercase tracking-tighter">
                6-Month Mentorship
             </h2>
             <p className="text-[#FFB800] font-black uppercase tracking-widest">Support that doesn't end with the course.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Direct Phone Access", desc: "Venkatesh's personal number — call anytime you're stuck.", icon: <Phone className="w-6 h-6" /> },
              { title: "1-on-1 WhatsApp", desc: "Ask questions, share proposals for review, get instant feedback.", icon: <MessageSquare className="w-6 h-6" /> },
              { title: "Profile Audits", desc: "Unlimited profile review sessions on request across all platforms.", icon: <Users className="w-6 h-6" /> },
              { title: "Proposal Reviews", desc: "Send your proposals before submitting — we help you win.", icon: <Star className="w-6 h-6" /> },
              { title: "Client Leads Sharing", desc: "Active leads shared in the mentorship group for students.", icon: <Zap className="w-6 h-6" /> },
              { title: "Replay Access", desc: "All 15 sessions available for 6 months replay anytime.", icon: <Monitor className="w-6 h-6" /> }
            ].map((f, i) => (
              <div key={i} className="bg-[#0D0D0D] p-10 rounded-[2.5rem] border border-white/5 hover:border-[#FF6B00]/30 transition-all group space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h4 className="text-xl font-black uppercase tracking-tight">{f.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — THE GUARANTEE */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto bg-[#FF6B00] p-12 md:p-24 rounded-[3rem] text-center text-black space-y-8 relative overflow-hidden shadow-2xl">
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
            <Card className="bg-[#0D0D0D] border-4 border-[#FF6B00] rounded-[3rem] p-12 space-y-10 relative shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-12 -translate-y-1/2 bg-[#FFB800] text-black px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg">
                BEST VALUE IN INDIA
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
                <Button asChild className="w-full h-20 bg-[#FF6B00] hover:bg-[#FF8533] text-white rounded-2xl font-black text-2xl uppercase tracking-tighter shadow-xl">
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

      {/* SECTION 10 — SUMMARY & FINAL CTA */}
      <section className="bg-[#0A0A0A] py-32 px-6">
         <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-4 text-center">
               <h2 className="text-4xl md:text-7xl font-['Anton'] uppercase tracking-tighter">Quick Summary</h2>
               <p className="text-[#FF6B00] font-black uppercase tracking-widest italic">What you walk away with</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {[
                 "Optimized profiles on Freelancer, Upwork, IG, FB",
                 "The Freelancer.com loophole — your unfair advantage",
                 "Proposal templates that beat veterans",
                 "Full MERN stack skills — build and deploy",
                 "Meta Ads knowledge to find high-paying clients",
                 "Payment setup — Payoneer, Milestone, UPI, Wise",
                 "Direct phone access to Venkatesh for 6 months",
                 "The guarantee — get a client or get a refund"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-[#00D757]" />
                    <span className="text-sm font-black uppercase tracking-tight">{item}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

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

            <Button asChild className="bg-[#FF6B00] hover:bg-[#FF8533] text-white px-16 h-24 md:h-32 rounded-3xl font-black text-3xl md:text-5xl uppercase tracking-tighter shadow-2xl hover:scale-105 transition-all">
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
