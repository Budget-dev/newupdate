import Link from "next/link";
import { 
  Instagram, 
  Linkedin, 
  Twitter, 
  Github, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = 2026; // As requested

  const footerLinks = {
    services: [
      { name: "Web Design", href: "/services/web-design" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "SEO Optimization", href: "/services/seo" },
      { name: "AI Integration", href: "/contact" },
      { name: "Software Development", href: "/contact" },
    ],
    company: [
      { name: "About Me", href: "/about" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Journal", href: "/blog" },
    ],
    legal: [
      { name: "Imprint", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms", href: "#" },
    ]
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10 px-6 relative z-10 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Section: Brand & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Link href="/" className="font-headline font-black text-3xl tracking-tighter text-white italic group flex items-center gap-2">
              BudgetDev<span className="text-primary">.</span>
            </Link>
            <p className="text-white/50 text-base max-w-md leading-relaxed font-medium">
              Crafting intuitive interfaces with clean code and pixel-perfect attention to detail. 
              High-performance digital solutions for businesses across Andhra Pradesh.
            </p>
            <div className="flex gap-4">
              <Link 
                href="https://linkedin.com/in/venkateshchoppa" 
                target="_blank"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link 
                href="https://github.com/budgetdev" 
                target="_blank"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="lg:flex lg:justify-end">
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 space-y-6 backdrop-blur-xl w-full max-w-sm">
              <div className="space-y-1">
                <p className="text-primary text-[10px] font-black uppercase tracking-widest">get in touch</p>
                <h3 className="text-2xl font-black text-white italic">Ready to scale?</h3>
              </div>
              <p className="text-white/40 text-xs font-medium leading-relaxed">
                Receive a free visual concept and a roadmap for your project within 24 hours.
              </p>
              <Button asChild className="w-full h-12 bg-white text-secondary font-black hover:bg-white/90 rounded-xl shadow-xl">
                <Link href="/contact">Start Project <ArrowUpRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-8 border-t border-white/5">
          <div className="space-y-6">
            <h4 className="text-white text-xs font-black uppercase tracking-widest">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/40 text-sm font-bold hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white text-xs font-black uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/40 text-sm font-bold hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 space-y-8">
            <h4 className="text-white text-xs font-black uppercase tracking-widest">Contact Info</h4>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-white text-sm font-bold">Vizianagaram Office</p>
                  <p className="text-white/40 text-xs leading-relaxed font-medium">
                    Fort City, Vizianagaram, <br />
                    Andhra Pradesh 535003
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-white text-sm font-bold">Call/WhatsApp</p>
                  <p className="text-white/40 text-xs font-medium">+91 8466006486</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-white text-sm font-bold">Website</p>
                  <p className="text-white/40 text-xs font-medium">budgetdev.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Founder */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-white/20 text-[10px] font-black uppercase tracking-widest">
            <span>© {currentYear} BudgetDev Agency</span>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <Link href="#" className="hover:text-white transition-colors">Legal</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider">
              Founder: <span className="text-white">Venkatesh Choppa</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
