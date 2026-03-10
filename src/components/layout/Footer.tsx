import Link from "next/link";
import { Instagram, Linkedin, Twitter, Github, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-muted pt-24 pb-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="space-y-6">
          <Link href="/" className="font-headline font-black text-2xl tracking-tight text-secondary italic">
            Wibify
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            The digital agency that turns bold ideas into market-defining products. Based in Bocholt.
          </p>
          <div className="flex gap-4">
            {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
              <Link key={i} href="#" className="text-secondary/40 hover:text-primary transition-all">
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-secondary mb-6 text-sm uppercase tracking-wider">Solutions</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link href="/services" className="hover:text-primary transition-colors">Digital Product Design</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Performance Engineering</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Growth Strategy</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Mobile First Apps</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-secondary mb-6 text-sm uppercase tracking-wider">Contact</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">hello@wibify.agency</li>
            <li className="flex items-center gap-3">Bocholt, Germany</li>
            <li className="flex items-center gap-3">+49 (0) 123 456789</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold text-secondary mb-6 text-sm uppercase tracking-wider">Language</h4>
          <div className="flex gap-4 text-sm font-medium text-muted-foreground">
            <button className="text-secondary">English</button>
            <button className="hover:text-secondary">Deutsch</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-muted-foreground font-medium">
        <p>© {new Date().getFullYear()} Wibify Agency. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-secondary transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-secondary transition-colors">Terms & Conditions</Link>
          <Link href="#" className="hover:text-secondary transition-colors">Imprint</Link>
        </div>
      </div>
    </footer>
  );
}
