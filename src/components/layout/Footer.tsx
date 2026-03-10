import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1 space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground italic">B</div>
            <span className="font-headline font-bold text-xl tracking-tight">Budget<span className="text-primary">Dev</span></span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            High-quality digital solutions for agencies and startups. We focus on budget-friendly excellence and fast delivery.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></Link>
            <Link href="#" className="hover:text-primary transition-colors"><Github className="w-5 h-5" /></Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link href="/services" className="hover:text-primary transition-colors">Web Design</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Web Applications</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Custom Software</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Mobile Apps</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link href="/portfolio" className="hover:text-primary transition-colors">Our Projects</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors">News & Insights</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Imprint</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Stay Updated</h4>
          <p className="text-sm text-muted-foreground mb-4">Get the latest digital insights delivered to your inbox.</p>
          <div className="flex gap-2">
            <Input placeholder="Email" className="bg-secondary/50 border-muted text-white text-xs h-9" />
            <Button size="sm" className="bg-primary text-primary-foreground">Join</Button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-muted/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} The BudgetDev. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}