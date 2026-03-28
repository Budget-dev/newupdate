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
  const currentYear = 2026;

  const footerLinks = {
    services: [
      { name: "Mobile App Dev", href: "/contact" },
      { name: "Software Solutions", href: "/services/web-development" },
      { name: "Web Design", href: "/services/web-design" },
      { name: "SEO Optimization", href: "/services/seo" },
    ],
    company: [
      { name: "Our Team", href: "/about" },
      { name: "Software Portfolio", href: "/portfolio" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Imprint", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms", href: "#" },
    ]
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10 px-6 relative z-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Link href="/" className="font-headline font-black text-3xl tracking-tighter text-white italic group flex items-center gap-2">
              BudgetDev<span className="text-primary">.</span>
            </Link>
            <p className="text-white/50 text-base max-w-md leading-relaxed font-medium">
              High-performance software solutions and mobile app engineering for ambitious businesses across India.
            </p>
            <div className="flex gap-4">
              <Link href="https://linkedin.com/in/venkateshchoppa" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://github.com/budgetdev" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary transition-all">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="lg:flex lg:justify-end">
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 space-y-6 backdrop-blur-xl w-full max-w-sm">
              <h3 className="text-2xl font-black text-white italic">Ready for software that scales?</h3>
              <Button asChild className="w-full h-12 bg-white text-secondary font-black hover:bg-white/90 rounded-xl">
                <Link href="/contact">Start Project <ArrowUpRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-8 border-t border-white/5">
          <div className="space-y-6">
            <h4 className="text-white text-xs font-black uppercase tracking-widest">Software Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/40 text-sm font-bold hover:text-primary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-white text-xs font-black uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/40 text-sm font-bold hover:text-primary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 space-y-8">
            <h4 className="text-white text-xs font-black uppercase tracking-widest">Contact Info</h4>
            <div className="space-y-6 text-white/40 text-sm font-medium">
              <p>Vizianagaram, AP, India 535003</p>
              <p>+91 8466006486</p>
              <p>budgetdev.in</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-widest">© {currentYear} BudgetDev Software Solutions</p>
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider">
              Lead: <span className="text-white">Venkatesh Choppa</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
