"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Globe, Menu, X, Sparkles } from "lucide-react";

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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
      isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/[0.08] py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-bold text-primary-foreground italic rotate-3 group-hover:rotate-0 transition-transform duration-300 shadow-lg shadow-primary/20">
            W
          </div>
          <span className="font-headline font-bold text-2xl tracking-tight text-white">
            Wibify<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className="text-sm font-medium text-white/70 hover:text-primary transition-colors relative group"
            >
              {item.name[lang]}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <div className="h-4 w-px bg-white/10" />
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 text-xs font-semibold text-white/50 hover:text-white transition-colors uppercase tracking-widest"
          >
            <Globe className="w-4 h-4" />
            {lang}
          </button>
          <Button asChild className="rounded-full px-6 bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 font-bold">
            <Link href="/contact">
              {lang === "en" ? "Let's Talk" : "Kontakt"}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-background p-10 flex flex-col gap-8 md:hidden animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex justify-between items-center mb-10">
             <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-bold text-primary-foreground italic">W</div>
              <span className="font-headline font-bold text-2xl text-white">Wibify<span className="text-primary">.</span></span>
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="text-white"><X className="w-8 h-8" /></button>
          </div>
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-bold text-white hover:text-primary transition-colors"
            >
              {item.name[lang]}
            </Link>
          ))}
          <div className="mt-auto space-y-6">
            <button onClick={toggleLang} className="flex items-center gap-3 text-lg font-bold text-white/50 uppercase">
              <Globe className="w-6 h-6" /> {lang === "en" ? "English" : "Deutsch"}
            </button>
            <Button asChild size="lg" className="w-full rounded-full bg-primary text-white font-bold h-16 text-xl">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                {lang === "en" ? "Start a Project" : "Projekt starten"}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}