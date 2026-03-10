"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Globe, Menu, X, ChevronDown } from "lucide-react";

const NAV_ITEMS = [
  { name: { en: "Services", de: "Leistungen" }, href: "/services", hasSub: true },
  { name: { en: "Blog", de: "Blog" }, href: "/blog", hasSub: true },
  { name: { en: "Locations", de: "Standorte" }, href: "#", hasSub: true },
  { name: { en: "References", de: "Referenzen" }, href: "/portfolio" },
  { name: { en: "Prices", de: "Preise" }, href: "#" },
  { name: { en: "About me", de: "Über mich" }, href: "#" },
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
      "fixed top-6 left-6 right-6 z-50 transition-all duration-300",
      "mx-auto max-w-7xl px-8 py-3 rounded-2xl border bg-white/90 backdrop-blur-sm shadow-sm",
      isScrolled ? "py-2 shadow-md" : ""
    )}>
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-headline font-black text-2xl tracking-tight text-secondary italic">
            BudgetDev
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.name.en} 
              href={item.href}
              className="text-[13px] font-semibold text-secondary/70 hover:text-secondary transition-colors flex items-center gap-1"
            >
              {item.name[lang]}
              {item.hasSub && <ChevronDown className="w-3 h-3" />}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild className="rounded-xl px-6 bg-secondary text-white hover:bg-secondary/90 transition-all duration-300 font-bold text-xs h-9">
            <Link href="/contact">
              {lang === "en" ? "Offer" : "Angebot"}
            </Link>
          </Button>
          
          <div className="flex items-center gap-3 ml-2">
            <button className="text-secondary/50 hover:text-secondary transition-colors">
              <Globe className="w-4 h-4" />
            </button>
            <button 
              onClick={toggleLang}
              className="flex items-center gap-1.5"
            >
              <div className="w-5 h-3.5 bg-yellow-400 rounded-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[33%] bg-black" />
                <div className="absolute top-[33%] left-0 w-full h-[33%] bg-red-600" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-secondary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 mt-4 w-full bg-white rounded-2xl border shadow-xl p-8 flex flex-col gap-6 lg:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.name.en} 
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-secondary hover:text-primary transition-colors"
            >
              {item.name[lang]}
            </Link>
          ))}
          <Button asChild size="lg" className="w-full rounded-xl bg-secondary text-white font-bold h-14 mt-4">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              {lang === "en" ? "Get Offer" : "Angebot erhalten"}
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
