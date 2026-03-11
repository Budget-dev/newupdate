import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, Layout, Zap, Search, ShieldCheck, MousePointer2, ExternalLink, MapPin, Wrench, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Websites realized", value: "50+" },
  { label: "Focus on results", value: "Focus" },
  { label: "Customer rating", value: "4.9/5" }
];

const designIncludes = [
  "Layout and structure of the pages",
  "Color scheme and typography",
  "Responsive design for all devices",
  "Navigation and user guidance",
  "Visual hierarchy and readability",
  "Call-to-Action (CTA) placement"
];

const importanceReasons = [
  {
    title: "First impressions count",
    text: "According to a Stanford study, 75% of users judge a company's credibility based on its web design. You have 0.05 seconds to make a convincing impression.",
    icon: <MousePointer2 className="w-5 h-5 text-primary" />
  },
  {
    title: "Higher conversion rate",
    text: "Professional UX design can increase the conversion rate by up to 200%. Strategic Design turns passive visitors into active customers.",
    icon: <Zap className="w-5 h-5 text-primary" />
  },
  {
    title: "Competitive advantage",
    text: "In a digital world, your website is often the first point of contact. Stand out from the competition with a unique, professional design.",
    icon: <Layout className="w-5 h-5 text-primary" />
  }
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Analysis",
    text: "We will analyze your company, your target audience, and your goals. Through competitive analysis and market research, I develop a sound strategy."
  },
  {
    num: "02",
    title: "Concept & Wireframes",
    text: "Based on the strategy, I create wireframes — structured blueprints that define the page architecture and user guidance."
  },
  {
    num: "03",
    title: "Design & Prototyping",
    text: "Wireframes are transformed into high-quality designs. You receive interactive prototypes that allow you to experience the final product before it is developed."
  }
];

const deliverables = [
  "Custom design — no templates",
  "Responsive for all screen sizes",
  "SEO-optimized structure",
  "Fast loading times (under 1 second)",
  "GDPR-compliant implementation",
  "Accessible Design (WCAG)",
  "CMS for easy content management",
  "Unlimited revisions until perfection"
];

const faqs = [
  { q: "How much does professional web design cost?", a: "Costs vary depending on the scope. My corporate packages start at ₹3,500 for high-end custom designs." },
  { q: "How long does a web design project take?", a: "A typical project takes 2-4 weeks from discovery to final prototyping." },
  { q: "Can I edit my website myself later?", a: "Yes, I build on modern CMS platforms that allow you to manage your content effortlessly." },
  { q: "Is the website optimized for mobile devices?", a: "Absolutely. 100% responsive design is my standard for every project." },
  { q: "Is SEO included in web design?", a: "Yes, the structural foundation is built following on-page SEO best practices." },
  { q: "What is the difference between web design and web development?", a: "Web design is the visual and structural planning (what you see); development is the technical implementation (how it works)." }
];

export default function WebDesignServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Hero Section */}
          <section className="space-y-6 pt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
               Web Design & UI/UX
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-black text-secondary leading-tight tracking-tight">
              Professional web design that turns visitors into customers
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl font-medium">
              We design modern, conversion-optimized websites with unity and designs. No templates, no compromise – only tailor-made solutions for your business.
            </p>
            
            <div className="flex flex-wrap gap-8 pt-2">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-xs font-black text-secondary">{stat.value}</span>
                  <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <Button asChild className="rounded-xl h-12 px-8 bg-secondary text-white font-black hover:scale-[1.02] transition-transform">
                <Link href="/contact">Start project <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button variant="outline" asChild className="rounded-xl h-12 px-8 border-muted-foreground/20 font-black hover:bg-muted/50">
                <Link href="/portfolio">View portfolio</Link>
              </Button>
            </div>
          </section>

          {/* What is web design? */}
          <section className="main-section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-secondary leading-none">What is web design?</h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <strong>Web design</strong> encompasses the visual design and structural planning of websites. 
                  It goes far beyond mere 'making things pretty' – professional web design combines <strong>aesthetics with functionality</strong> to guide visitors toward actions.
                </p>
                <p>
                  Good web design takes into account the <strong>user experience (UX)</strong>, i.e., how users interact with the website, and the <strong>User Interface (UI)</strong>, the visual design of the user interface.
                </p>
                <p>
                  At BudgetDev, we transform both into a seamless experience that perfectly represents your brand and supports your business goals. The next step is <strong>Web Development</strong>, where the design is translated into functional code.
                </p>
              </div>
            </div>
            <div className="bg-[#F8FAF9] rounded-2xl p-8 space-y-6">
              <h3 className="font-black text-secondary">Web design includes:</h3>
              <ul className="grid grid-cols-1 gap-4">
                {designIncludes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-bold text-secondary">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Why is it important? */}
          <section className="main-section-container space-y-8">
            <h2 className="text-3xl font-black text-secondary">Why is professional web design so important?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {importanceReasons.map((item, i) => (
                <div key={i} className="bg-[#F8FAF9] p-6 rounded-2xl space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="font-black text-secondary text-base">{item.title}</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Design Process */}
          <section className="main-section-container space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-secondary">My web design process</h2>
              <p className="text-xs text-muted-foreground font-medium italic">From the initial idea to the finished website – this is how I work together with you.</p>
            </div>
            <div className="space-y-4">
              {processSteps.map((step, i) => (
                <div key={i} className="flex gap-6 group items-start border-b border-muted/50 pb-8 last:border-0 last:pb-0">
                  <div className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center shrink-0 font-black text-lg shadow-lg">
                    {step.num}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-secondary tracking-tight">{step.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed max-w-2xl">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Deliverables */}
          <section className="bg-secondary rounded-[2.5rem] p-10 md:p-14 space-y-8 text-white">
            <h2 className="text-3xl font-black italic">What you will receive from me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs font-bold text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="main-section-container space-y-8">
            <h2 className="text-3xl font-black text-secondary">Frequently Asked Questions about Web Design</h2>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-[#F8FAF9] rounded-xl border-none px-6">
                  <AccordionTrigger className="text-xs font-bold hover:no-underline py-4 text-secondary">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-[11px] leading-relaxed pb-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Ready CTA */}
          <section className="rounded-[2.5rem] bg-primary/5 border border-primary/10 p-12 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-headline font-black text-secondary leading-tight">Ready for your new web design?</h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed">Let's build a professional website that will delight your visitors and drive your business forward — including SEO optimization for maximum visibility.</p>
            <Button asChild className="rounded-full h-12 px-10 bg-secondary text-white font-black shadow-xl shadow-secondary/10">
              <Link href="/contact">Request a free quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </section>

          {/* Dark Project CTA + Map Section */}
          <section className="rounded-[2.5rem] bg-[#0a0a0a] p-10 md:p-16 overflow-hidden relative shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-primary text-xs font-black uppercase tracking-widest">make contact</span>
                  <h2 className="text-5xl md:text-7xl font-headline font-black text-white leading-tight">Ready for your project?</h2>
                  <p className="text-white/60 text-base md:text-lg max-w-md font-medium">
                    Let's get started together. Send me an inquiry and receive a response within 12 hours.
                  </p>
                </div>
                
                <Link href="/contact" className="sparkle-btn group">
                  <svg className="sparkle-btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                  <div className="sparkle-txt-wrapper">
                    <div className="sparkle-txt-1">
                      {"START PROJECT".split("").map((char, i) => (
                        <span key={i} className="sparkle-btn-letter">{char === " " ? "\u00A0" : char}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>

              <div className="flex justify-end">
                <Card className="w-full max-w-sm bg-white/5 border-white/10 rounded-[2rem] p-8 space-y-4 backdrop-blur-xl">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-white italic tracking-tight">BudgetDev.agency</h3>
                    <p className="text-white/40 text-[11px] font-bold uppercase tracking-wider">Web design & software development</p>
                  </div>
                  <div className="pt-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
                       <div className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Available: +91 8466006486
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="rounded-[2.5rem] bg-[#0a0a0a] p-8 md:p-12 space-y-8 border border-white/5 mb-12">
            <div className="flex justify-between items-end">
              <div className="space-y-2">
                <span className="text-primary text-xs font-black uppercase tracking-widest">Vizianagaram location</span>
                <p className="text-white text-base font-bold">Fort City, Vizianagaram, Andhra Pradesh 535003</p>
              </div>
              <Link href="https://maps.google.com" target="_blank" className="text-white/40 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                Open in Google Maps <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
            
            <div className="relative h-[400px] w-full rounded-[2rem] overflow-hidden grayscale invert opacity-80 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-700">
               <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://www.openstreetmap.org/export/embed.html?bbox=83.3900%2C18.1100%2C83.4100%2C18.1300&amp;layer=mapnik&amp;marker=18.1200%2C83.4000" 
                className="filter contrast-125 border-none"
              />
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
