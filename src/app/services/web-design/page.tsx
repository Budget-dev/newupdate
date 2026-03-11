import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Check, ArrowRight, MousePointer2, Zap, Layout, ExternalLink, MapPin } from "lucide-react";

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
  { q: "Can I edit my website myself later?", a: "Yes, I build on modern CMS platforms that allow you to manage your content effortlessly." }
];

export default function WebDesignServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 pt-32 md:pt-40 pb-12 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <section className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
               Web Design & UI/UX
            </div>
            <h1 className="text-3xl md:text-6xl font-headline font-black text-secondary leading-tight tracking-tight">
              Professional web design that turns visitors into customers
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl font-medium">
              We design modern, conversion-optimized websites. No templates, no compromise – only tailor-made solutions for your business.
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
              <Button asChild className="rounded-xl h-12 px-8 bg-secondary text-white font-black">
                <Link href="/contact">Start project <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </section>

          <section className="main-section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-black text-secondary">What is web design?</h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>Web design encompasses the visual design and structural planning of websites. Professional web design combines aesthetics with functionality.</p>
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

          <section className="main-section-container space-y-8">
            <h2 className="text-2xl md:text-3xl font-black text-secondary">Why is professional web design so important?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {importanceReasons.map((item, i) => (
                <div key={i} className="bg-[#F8FAF9] p-6 rounded-2xl space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="font-black text-secondary text-base">{item.title}</h4>
                  <p className="text-[11px] text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="main-section-container space-y-8">
            <h2 className="text-2xl md:text-3xl font-black text-secondary">My web design process</h2>
            <div className="space-y-4">
              {processSteps.map((step, i) => (
                <div key={i} className="flex gap-6 items-start border-b border-muted/50 pb-8 last:border-0 last:pb-0">
                  <div className="w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center shrink-0 font-black text-lg">
                    {step.num}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-secondary">{step.title}</h3>
                    <p className="text-muted-foreground text-xs">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-secondary rounded-[2.5rem] p-10 md:p-14 space-y-8 text-white">
            <h2 className="text-2xl md:text-3xl font-black italic">What you will receive from me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs font-bold text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Special CTA for this page */}
          <section className="rounded-[2.5rem] bg-[#0a0a0a] p-10 md:p-16 overflow-hidden relative shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8 text-white">
                <h2 className="text-4xl md:text-5xl font-black leading-tight">Ready for your project?</h2>
                <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12">
                  <Link href="/contact">Get started now <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
              <Card className="bg-white/5 border-white/10 p-8 text-white rounded-[2rem] hidden md:block">
                <h3 className="text-xl font-bold italic tracking-tight">BudgetDev.agency</h3>
                <p className="text-white/40 text-xs uppercase font-bold tracking-widest mt-1">Web design & development</p>
              </Card>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
