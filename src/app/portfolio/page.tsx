import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Globe, Rocket, ShieldCheck } from "lucide-react";

const projects = [
  {
    title: "Srinika Spices",
    client: "Local Spice Merchant",
    category: "E-commerce",
    description: "A high-performance E-commerce platform built for the spice trade. Reached thousands of local customers in Andhra Pradesh with seamless ordering and robust inventory management.",
    features: [
      "Real-time Inventory Syncing",
      "Secure Payment Gateway",
      "SEO-optimized Product Architecture",
      "Mobile-First Shopping Experience"
    ],
    image: PlaceHolderImages.find(img => img.id === 'project-srinika'),
    tags: ["Next.js", "Tailwind", "Firebase", "Stripe"],
    link: "https://srinikaspices.in"
  },
  {
    title: "Gurucharan Interiors",
    client: "Design Firm",
    category: "Portfolio",
    description: "Premium design showcase for a leading interior firm. Focused on high-resolution image delivery and smooth animations to reflect the elegance of their physical projects.",
    features: [
      "Ultra-Fast Image Optimization",
      "Lead Generation Workflow",
      "Dynamic Project Galleries",
      "Interactive 3D Virtual Tours"
    ],
    image: PlaceHolderImages.find(img => img.id === 'project-gurucharan'),
    tags: ["React", "Framer Motion", "Vercel", "UI/UX"],
    link: "https://gurucharaninteriors.in"
  },
  {
    title: "Yasodha.in",
    client: "Personal Branding",
    category: "Career Portal",
    description: "A specialized personal branding portal designed for rapid loading and search engine dominance. Helps established professionals stand out in a competitive digital landscape.",
    features: [
      "Personal Branding SEO Strategy",
      "Responsive Layout",
      "Contact Automation",
      "Speed Optimized Performance"
    ],
    image: PlaceHolderImages.find(img => img.id === 'project-yasodha'),
    tags: ["TypeScript", "Next.js", "SEO", "Cloudflare"],
    link: "https://yasodha.in"
  }
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FDFDFD]">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
              Digital Success Stories
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-black text-secondary leading-tight tracking-tight">
              Our <span className="text-primary italic">Portfolio.</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              We don't just build websites; we create digital assets that drive growth. Explore our recent work across India.
            </p>
          </div>

          <div className="space-y-32">
            {projects.map((project, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center group">
                <div className={cn("space-y-8", idx % 2 !== 0 ? "lg:order-2" : "")}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-black uppercase tracking-widest text-[10px]">{project.category}</span>
                      <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                      <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">Client: {project.client}</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-secondary group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-muted/50 text-secondary border-none font-bold text-[9px] px-3 py-1 rounded-lg">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link 
                      href={project.link || "#"} 
                      target="_blank"
                      className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-black text-sm shadow-xl hover:scale-[1.02] transition-transform"
                    >
                      Visit Project <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className={cn("relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl bg-muted/10 group-hover:shadow-primary/10 transition-all duration-700", idx % 2 !== 0 ? "lg:order-1" : "")}>
                  <Image 
                    src={project.image?.imageUrl || ""} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    data-ai-hint={project.image?.imageHint}
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats Card */}
          <section className="mt-40 bg-[#0a0a0a] rounded-[3rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30" />
            <div className="space-y-4 relative z-10">
              <h2 className="text-4xl md:text-6xl font-headline font-black text-white leading-tight">Your project could be next.</h2>
              <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto font-medium">
                We've reached over 7.5 million users through our client projects. Ready to join the elite?
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
              {[
                { label: "Lighthouse Score", value: "100/100", icon: <Rocket className="w-5 h-5 text-primary" /> },
                { label: "Uptime Guaranteed", value: "99.9%", icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
                { label: "Responsive Delivery", value: "All Devices", icon: <Globe className="w-5 h-5 text-primary" /> },
                { label: "Technical Support", value: "24/7", icon: <CheckCircle2 className="w-5 h-5 text-primary" /> }
              ].map((stat, i) => (
                <div key={i} className="space-y-2 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-2">
                    {stat.icon}
                  </div>
                  <span className="text-2xl font-black text-white">{stat.value}</span>
                  <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="pt-8">
              <Link href="/contact" className="sparkle-btn group mx-auto">
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
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
