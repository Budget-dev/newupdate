"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Globe, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: { en: "Home", de: "Startseite" }, href: "/" },
  { name: { en: "Services", de: "Leistungen" }, href: "/services" },
  { name: { en: "Portfolio", de: "Portfolio" }, href: "/portfolio" },
  { name: { en: "Blog", de: "Blog" }, href: "/blog" },
];

export default function Navbar() {
  const [lang, setLang] = useState<"en" | "de">("en");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => setLang(l => (l === "en" ? "de" : "en"));

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground italic">
            B
          </div>
          <span className="font-headline font-bold text-xl tracking-tight text-secondary">
            Budget<span className="text-primary">Dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.name[lang]}
            </Link>
          ))}
          <div className="h-4 w-px bg-border" />
          <button 
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-xs font-semibold hover:text-primary transition-colors uppercase tracking-widest"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang}
          </button>
          <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-primary/10">
            <Link href="/contact">
              {lang === "en" ? "Get Free Draft" : "Kostenlos Entwurf"}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-secondary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top duration-300">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium py-2"
            >
              {item.name[lang]}
            </Link>
          ))}
          <hr className="border-border" />
          <div className="flex items-center justify-between">
            <button onClick={toggleLang} className="flex items-center gap-2 text-sm font-bold uppercase">
              <Globe className="w-4 h-4" /> Language: {lang}
            </button>
            <Button asChild className="bg-primary text-primary-foreground">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                {lang === "en" ? "Contact Us" : "Kontakt"}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}