import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { Check, ArrowRight, Zap, ShieldCheck, Layers, Rocket } from "lucide-react";

const techStack = [
  { name: "Next.js 15", desc: "React framework for production" },
  { name: "React 19", desc: "UI Component Library" },
  { name: "TypeScript", desc: "True safe JavaScript" },
  { name: "Tailwind CSS", desc: "Utility-First Styling" },
  { name: "Vercel / AWS", desc: "Edge Deployment" },
  { name: "PostgreSQL / MongoDB", desc: "Database Solutions" }
];

const advantages = [
  {
    title: "Lightning-fast performance",
    text: "Sub-second loading times thanks to server-side rendering code splitting and optimized assets. 100/100 Lighthouse score.",
    icon: <Zap className="w-5 h-5 text-primary" />
  },
  {
    title: "Maximum safety",
    text: "No static codebase attack surface, automatic updates. Serverless architecture eliminates classic security risks.",
    icon: <ShieldCheck className="w-5 h-5 text-primary" />
  },
  {
    title: "Scalability",
    text: "From 100 to 1,000,000 visitors - the infrastructure scales automatically without intervention or manual upgrades.",
    icon: <Layers className="w-5 h-5 text-primary" />
  }
];

const comparisonData = [
  { criterion: "Charging time", nextjs: "0.2 - 0.5 seconds", wordpress: "3 - 8 seconds" },
  { criterion: "Lighthouse Score", nextjs: "100/100 possible", wordpress: "40-70 / 100 typical" },
  { criterion: "Security", nextjs: "No plugins = no vulnerabilities", wordpress: "Many plugins = security risks" },
  { criterion: "Maintenance", nextjs: "Automated", wordpress: "Manual, prone to error" },
  { criterion: "Hosting costs", nextjs: "₹0 (up to 10k visitors)", wordpress: "₹800-4,000/month" },
  { criterion: "Scaling", nextjs: "Automatic, limitless", wordpress: "Manual, expensive" },
  { criterion: "SEO", nextjs: "100% optimized for Google", wordpress: "Often slow, bloated" }
];

const whatIDevelop = [
  "Corporate Websites", "Landing Pages", "E-commerce shops",
  "Web applications", "Dashboards & Portals", "Blogs & Magazine",
  "Booking systems", "Member areas", "API development"
];

const faqs = [
  { q: "Why Next.js instead of WordPress?", a: "Next.js offers superior performance, security, and scalability. It's built for modern speed requirements and provides a much better user experience." },
  { q: "Can I edit content myself?", a: "Yes, we integrate modern Headless CMS solutions like Sanity or Contentful that allow you to manage your content as easily as in WordPress, but with more flexibility." },
  { q: "How much does development with Next.js cost?", a: "Costs are based on project complexity. We provide transparent, fixed-price quotes after the initial briefing." },
  { q: "How long does the development process take?", a: "Typical projects take 2-6 weeks depending on requirements and integrations." }
];

export default function WebDevelopmentServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Hero Section */}
          <section className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
               Web Development
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-black text-secondary leading-tight tracking-tight">
              Modern web development with Next.js, React & TypeScript
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl font-medium">
              I develop lightning-fast, secure, and scalable web applications using state-of-the-art technologies. Performance, security, and maintainability are my top priorities.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild className="rounded-xl h-12 px-8 bg-secondary text-white font-black hover:scale-[1.02] transition-transform">
                <Link href="/contact">Discuss the project <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button variant="outline" asChild className="rounded-xl h-12 px-8 border-muted-foreground/20 font-black hover:bg-muted/50">
                <Link href="/portfolio">View references</Link>
              </Button>
            </div>
          </section>

          {/* What is modern dev? */}
          <section className="main-section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-secondary">What is modern web development?</h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>Modern web development goes beyond simple HTML and CSS. I use advanced frameworks and technologies like <strong>Next.js 15</strong>, <strong>React 19</strong>, and <strong>TypeScript</strong> to build web applications that are faster, more secure, and more maintainable than traditional websites.</p>
                <p>The difference to conventional methods (like WordPress) is enormous: My websites load <strong>8-12x faster</strong>, have <strong>99% fewer security vulnerabilities</strong> and require hardly any maintenance.</p>
              </div>
            </div>
            <div className="bg-[#0a0a0a] rounded-3xl p-8 space-y-6 text-white shadow-2xl">
              <h3 className="font-black text-primary uppercase text-xs tracking-widest">My tech stack</h3>
              <div className="space-y-4">
                {techStack.map((tech, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white">{tech.name}</span>
                      <span className="text-[10px] text-white/40">{tech.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Advantages Grid */}
          <section className="main-section-container space-y-12">
            <h2 className="text-3xl font-black text-secondary">Advantages of modern web development</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advantages.map((item, i) => (
                <div key={i} className="bg-[#F8FAF9] p-8 rounded-3xl space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm text-primary">
                    {item.icon}
                  </div>
                  <h4 className="font-black text-secondary text-lg">{item.title}</h4>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <section className="main-section-container space-y-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-secondary">Next.js vs. WordPress: A Comparison</h2>
              <p className="text-sm text-muted-foreground">Why you should look forward to the future. Let the numbers speak for themselves.</p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-muted/50 bg-white">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/30">
                    <TableHead className="font-black text-secondary">Criterion</TableHead>
                    <TableHead className="font-black text-primary">NEXT.JS (BUDGETDEV)</TableHead>
                    <TableHead className="font-black text-secondary">WORDPRESS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-bold text-secondary text-xs">{row.criterion}</TableCell>
                      <TableCell className="text-primary font-bold text-xs flex items-center gap-2">
                        <Check className="w-3 h-3" /> {row.nextjs}
                      </TableCell>
                      <TableCell className="text-muted-foreground text-xs">{row.wordpress}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>

          {/* What I Develop Grid */}
          <section className="bg-[#1A1A1A] rounded-[2.5rem] p-10 md:p-14 space-y-10 text-white">
            <h2 className="text-3xl font-black italic">What I develop</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whatIDevelop.map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs font-bold">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="main-section-container space-y-8">
            <h2 className="text-3xl font-black text-secondary">Frequently Asked Questions about Web Development</h2>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-[#F8FAF9] rounded-xl border-none px-6">
                  <AccordionTrigger className="text-xs font-bold py-4 text-secondary">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-[11px] pb-4">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Green CTA Block */}
          <section className="rounded-[2.5rem] bg-primary p-12 text-center space-y-6 text-white">
            <h2 className="text-3xl md:text-4xl font-headline font-black leading-tight">Start your web project</h2>
            <p className="text-white/80 text-sm max-w-xl mx-auto leading-relaxed">Let's develop a high-performance, secure, and scalable web application together.</p>
            <Button asChild className="rounded-full h-12 px-10 bg-white text-primary font-black shadow-xl hover:bg-white/90">
              <Link href="/contact">Free consultation <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </section>

          {/* Global CTA + Map */}
          <section className="rounded-[2.5rem] bg-[#0a0a0a] p-10 md:p-16 overflow-hidden relative shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8 text-white">
                <h2 className="text-5xl font-black leading-tight">Ready for your project?</h2>
                <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12">
                  <Link href="/contact">Discuss now <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
              <Card className="bg-white/5 border-white/10 p-8 text-white rounded-[2rem]">
                <h3 className="text-xl font-bold italic tracking-tight">BudgetDev.agency</h3>
                <p className="text-white/40 text-[11px] font-bold uppercase tracking-wider">Web design & software development</p>
                <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
                   <div className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Available: +91 8466006486
                </div>
              </Card>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
