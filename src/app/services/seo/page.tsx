import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Check, ArrowRight, Search, Zap, Layout, LineChart, Link as LinkIcon, BarChart3, ExternalLink, MapPin } from "lucide-react";

const stats = [
  { label: "Online experiences start at Google", value: "93%" },
  { label: "Never click beyond page 1", value: "75%" },
  { label: "Clicks go to organic results", value: "70%" },
  { label: "Conv. Rate (vs 1.7% Outbound)", value: "14.6%" }
];

const seoServices = [
  {
    title: "Keyword Search",
    desc: "Find out the search terms your target audience is searching for - with potential for top rankings and qualified traffic.",
    icon: <Search className="w-5 h-5 text-primary" />
  },
  {
    title: "On-page optimization",
    desc: "Meta tags, headings, internal linking, image optimization - I'll make your pages fit for Google.",
    icon: <Layout className="w-5 h-5 text-primary" />
  },
  {
    title: "Technical SEO",
    desc: "Core Web Vitals, loading time, mobile friendliness, structured data - the technical basis for top rankings.",
    icon: <Zap className="w-5 h-5 text-primary" />
  },
  {
    title: "Content Strategy",
    desc: "SEO optimized content that convinces your target group and your visitors.",
    icon: <BarChart3 className="w-5 h-5 text-primary" />
  },
  {
    title: "Link building",
    desc: "High-quality backlinks from relevant sources and strengthen your domain authority and improve rankings.",
    icon: <LinkIcon className="w-5 h-5 text-primary" />
  },
  {
    title: "Monitoring & Reporting",
    desc: "Monthly reports on rankings, traffic and conversions. Transparent performance measurement of your SEO investment.",
    icon: <LineChart className="w-5 h-5 text-primary" />
  }
];

const processSteps = [
  {
    num: "1",
    title: "SEO Audit",
    text: "Comprehensive analysis of your current website, technical problems, content gaps, baseline and competitor analysis."
  },
  {
    num: "2",
    title: "Strategy Development",
    text: "Focus on the right keywords, market development and SEO strategy with prioritized measures."
  },
  {
    num: "3",
    title: "Technical optimization",
    text: "Fixing technical problems, improving loading time, implementing structured data."
  },
  {
    num: "4",
    title: "Content optimization",
    text: "Optimization of existing content and creation of new SEO-optimized pages for relevant keywords."
  },
  {
    num: "5",
    title: "Link building",
    text: "Building high-quality backlinks through content marketing, guest posts, and strategic PR."
  },
  {
    num: "6",
    title: "Monitoring & Adaptation",
    text: "Continuous monitoring of rankings and traffic. Regular adjustment of the strategy."
  }
];

const importanceReasons = [
  "Sustainable visibility without ongoing advertising costs",
  "Higher credibility than paid advertisements",
  "Competitive advantage over non-optimized competitors",
  "Measurable results through clear KPIs",
  "Qualified traffic from users with purchase intent",
  "Long-term ROI - SEO pays off",
  "24/7 Customer Acquisition on Autopilot",
  "Local visibility for regional businesses"
];

const faqs = [
  { q: "How long does it take for SEO to show results?", a: "SEO is a long-term strategy. Typically, significant improvements are seen after 3-6 months, depending on competition and starting point." },
  { q: "How much does SEO optimization cost?", a: "Costs depend on the scope and competition. I offer project-based or monthly packages starting at affordable rates for Indian businesses." },
  { q: "Do you guarantee top rankings?", a: "No reputable SEO can guarantee #1 rankings as Google's algorithm is complex and external. However, I guarantee best practices that significantly improve your chances." },
  { q: "Is SEO worth it for small businesses?", a: "Absolutely. Especially for local businesses in Vizianagaram, local SEO is the most cost-effective way to get discovered by nearby customers." },
  { q: "SEO or Google Ads - which is better?", a: "Google Ads gives instant results but costs money per click. SEO takes time but provides long-term, free traffic. A combination of both is often ideal." }
];

export default function SEOServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Hero Section */}
          <section className="space-y-6 pt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
               SEO optimization
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-black text-secondary leading-tight tracking-tight">
              SEO optimization for greater visibility on Google
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl font-medium">
              Get found by your customers. I optimize your website for search engines, improve your rankings, and drive qualified traffic to your site.
            </p>
            
            <div className="flex gap-4 pt-4">
              <Button asChild className="rounded-xl h-12 px-8 bg-secondary text-white font-black">
                <Link href="/contact">Request an SEO analysis <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button variant="outline" asChild className="rounded-xl h-12 px-8 border-muted-foreground/20 font-black">
                <Link href="/portfolio">Success Stories</Link>
              </Button>
            </div>
          </section>

          {/* What is SEO? */}
          <section className="main-section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-secondary leading-none">What is SEO?</h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <strong>SEO (Search Engine Optimization)</strong> describes all measures that serve to better position your website in the organic search results of Google & Co.
                </p>
                <p>
                  Unlike paid advertising (SEA), SEO is a <strong>sustainable investment</strong>: Once well positioned, you continuously generate free traffic without having to pay for each click.
                </p>
                <p>
                  <strong>93% of all online experiences</strong> begin with a search engine. If you don't appear on page 1, you don't exist for most potential customers.
                </p>
                <p>
                  We combine <strong>technical optimization, high-quality content, and strategic link building</strong> into an SEO strategy that delivers sustainable results.
                </p>
              </div>
            </div>
            <div className="bg-[#F8FAF9] rounded-2xl p-8 space-y-6">
              <h3 className="font-black text-secondary">SEO in numbers:</h3>
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

          {/* My SEO services */}
          <section className="main-section-container space-y-8">
            <h2 className="text-3xl font-black text-secondary">My SEO services</h2>
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

          {/* SEO Process */}
          <section className="main-section-container space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-secondary">My SEO process</h2>
              <p className="text-xs text-muted-foreground font-medium italic">Continuous optimization for maximum success.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {processSteps.map((step, i) => (
                <div key={i} className="flex gap-6 group items-start">
                  <div className="w-10 h-10 rounded-xl bg-secondary text-white flex items-center justify-center shrink-0 font-black text-base shadow-lg">
                    {step.num}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-secondary tracking-tight">{step.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Why SEO? */}
          <section className="bg-secondary rounded-[2.5rem] p-10 md:p-14 space-y-8 text-white">
            <h2 className="text-3xl font-black italic">Why SEO is important for your business</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {importanceReasons.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs font-bold text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="main-section-container space-y-8">
            <h2 className="text-3xl font-black text-secondary">Frequently Asked Questions about SEO</h2>
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
          <section className="rounded-[2.5rem] bg-primary/80 border border-primary p-12 text-center space-y-6 text-white">
            <h2 className="text-3xl md:text-4xl font-headline font-black leading-tight">Ready for better rankings?</h2>
            <p className="text-white/80 text-sm max-w-xl mx-auto leading-relaxed">Let me analyze your website and develop an SEO strategy that delivers results.</p>
            <Button asChild className="rounded-full h-12 px-10 bg-white text-primary font-black shadow-xl hover:bg-white/90">
              <Link href="/contact">Free SEO Analysis <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </section>

          {/* Footer Contact & Map Block */}
          <section className="rounded-[2.5rem] bg-[#0a0a0a] p-10 md:p-16 overflow-hidden relative shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-primary text-xs font-black uppercase tracking-widest">make contact</span>
                  <h2 className="text-4xl md:text-7xl font-headline font-black text-white leading-tight">Ready for your project?</h2>
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
