
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Check, ArrowRight, Search, Zap, Layout, LineChart, Link as LinkIcon, BarChart3, ExternalLink } from "lucide-react";

export const metadata = {
  title: 'SEO Services for Small Businesses in Andhra Pradesh | Google Ranking Experts',
  description: 'Boost your business visibility with BudgetDev SEO. We specialize in local SEO for Andhra Pradesh businesses, keyword research, and technical optimization in Vizianagaram.',
};

const stats = [
  { label: "Google Search Starts", value: "93%" },
  { label: "Page 1 Clicks", value: "75%" },
  { label: "Organic Preference", value: "70%" },
  { label: "High ROI Potential", value: "14.6%" }
];

const seoServices = [
  {
    title: "Indian Market Keyword Research",
    desc: "Target high-intent keywords that your local customers in AP and India are actually searching for.",
    icon: <Search className="w-5 h-5 text-primary" />
  },
  {
    title: "On-page Local SEO",
    desc: "Optimizing your meta tags, headings, and internal links specifically for the Andhra Pradesh market.",
    icon: <Layout className="w-5 h-5 text-primary" />
  },
  {
    title: "Technical Next.js SEO",
    desc: "Leveraging Core Web Vitals, speed, and schema markup to outrank slower WordPress competitors.",
    icon: <Zap className="w-5 h-5 text-primary" />
  },
  {
    title: "Content Strategy",
    desc: "SEO-optimized blogs and landing pages that speak to the Indian entrepreneur's needs.",
    icon: <BarChart3 className="w-5 h-5 text-primary" />
  },
  {
    title: "Strategic Link Building",
    desc: "Building authority through high-quality backlinks to improve your domain strength.",
    icon: <LinkIcon className="w-5 h-5 text-primary" />
  },
  {
    title: "Ranking Monitoring",
    desc: "Detailed reporting on your Google ranking progress and qualified traffic growth.",
    icon: <LineChart className="w-5 h-5 text-primary" />
  }
];

export default function SEOServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <section className="space-y-6 pt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
               Local SEO Optimization
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-black text-secondary leading-tight tracking-tight">
              Rank #1 on Google for Budget Web Design in AP
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl font-medium">
              Get discovered by local customers. We specialize in ranking Indian small businesses for high-intent search terms in Andhra Pradesh.
            </p>
            
            <div className="flex gap-4 pt-4">
              <Button asChild className="rounded-xl h-12 px-8 bg-secondary text-white font-black">
                <Link href="/contact">Free SEO Analysis <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </section>

          <section className="main-section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-secondary leading-none">Why SEO Matters in India?</h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <strong>SEO (Search Engine Optimization)</strong> is the most cost-effective way to get qualified leads in India. While ads cost money per click, SEO builds long-term authority.
                </p>
                <p>
                  For businesses in Vizianagaram or Visakhapatnam, <strong>Local SEO</strong> is the difference between being invisible and being the first choice for nearby customers.
                </p>
              </div>
            </div>
            <div className="bg-[#F8FAF9] rounded-2xl p-8 space-y-6">
              <h3 className="font-black text-secondary">SEO Statistics:</h3>
              <div className="grid grid-cols-1 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-muted pb-2 last:border-0">
                    <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-widest">{stat.label}</span>
                    <span className="text-lg font-black text-primary">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="main-section-container space-y-8">
            <h2 className="text-3xl font-black text-secondary">Our Specialized SEO Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seoServices.map((service, i) => (
                <div key={i} className="bg-[#F8FAF9] p-6 rounded-2xl space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    {service.icon}
                  </div>
                  <h4 className="font-black text-secondary text-base">{service.title}</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="main-section-container space-y-8">
            <h2 className="text-3xl font-black text-secondary">Frequently Asked SEO Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {[
                { q: "How long to rank in Andhra Pradesh search results?", a: "Local SEO typically shows results in 3-6 months. We focus on low-competition, high-intent local keywords first." },
                { q: "Do you target Telugu language searches?", a: "Yes, we include Telugu keyword variants to capture users searching in their native language for better local penetration." },
                { q: "Why is Next.js better for SEO than WordPress?", a: "Next.js provides superior page speeds and better Core Web Vitals, which are direct ranking factors for Google." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${item.q}`} className="bg-[#F8FAF9] rounded-xl border-none px-6">
                  <AccordionTrigger className="text-xs font-bold hover:no-underline py-4 text-secondary">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-[11px] leading-relaxed pb-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
