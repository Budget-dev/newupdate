import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Linkedin, Twitter, Github, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/[0.05] pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
        <div className="col-span-1 md:col-span-1 space-y-10">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-bold text-primary-foreground italic rotate-3 group-hover:rotate-0 transition-all">W</div>
            <span className="font-headline font-bold text-2xl tracking-tight text-white">Wibify<span className="text-primary">.</span></span>
          </Link>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xs">
            The digital agency that turns bold ideas into market-defining products.
          </p>
          <div className="flex gap-6">
            {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
              <Link key={i} href="#" className="text-white/40 hover:text-primary transition-all hover:scale-110">
                <Icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-8 text-xl">Solutions</h4>
          <ul className="space-y-6 text-muted-foreground">
            <li><Link href="/services" className="hover:text-primary transition-colors">Digital Product Design</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Performance Engineering</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Growth Strategy</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Mobile First Apps</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-8 text-xl">Contact</h4>
          <ul className="space-y-6 text-muted-foreground">
            <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-primary" /> hello@wibify.agency</li>
            <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-primary" /> Digital Valley, SF</li>
            <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary" /> +1 (555) 000-WIBY</li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="font-bold text-white mb-4 text-xl">Newsletter</h4>
          <p className="text-muted-foreground leading-relaxed">Join 5,000+ builders getting our weekly digital insights.</p>
          <div className="space-y-4">
            <Input placeholder="Your Email Address" className="bg-white/5 border-white/10 text-white h-14 rounded-2xl focus:ring-primary" />
            <Button size="lg" className="w-full bg-primary text-white font-bold h-14 rounded-2xl shadow-lg shadow-primary/20">Subscribe</Button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-muted-foreground font-medium">
        <p>© {new Date().getFullYear()} Wibify Agency. All rights reserved.</p>
        <div className="flex gap-10">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <Link href="#" className="hover:text-white transition-colors">Imprint</Link>
        </div>
      </div>
    </footer>
  );
}