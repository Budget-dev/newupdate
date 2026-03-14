"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SERVICES = [
  {
    title: "Web design & UI/UX",
    description: "Conversion-optimized websites",
    href: "/services/web-design",
  },
  {
    title: "Web development",
    description: "Next.js, React, TypeScript",
    href: "/services/web-development",
  },
  {
    title: "SEO optimization",
    description: "Better Google rankings",
    href: "/services/seo",
  },
  {
    title: "AI integration",
    description: "ChatGPT, Automation, Bots",
    href: "/contact",
  },
  {
    title: "AI systems",
    description: "Individual AI solutions",
    href: "/contact",
  },
  {
    title: "Software development",
    description: "Tailor-made applications",
    href: "/contact",
  },
];

const NAV_ITEMS = [
  { name: { en: "Portfolio", in: "Portfolio" }, href: "/portfolio" },
  { name: { en: "About me", in: "Founder" }, href: "/about" },
];

export default function Navbar() {
  const [lang, setLang] = useState<"en" | "in">("en");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => setLang((l) => (l === "en" ? "in" : "en"));

  return (
    <nav
      className={cn(
        "fixed top-6 left-6 right-6 z-50 transition-all duration-300",
        "mx-auto max-w-7xl px-8 py-3 rounded-2xl border bg-white/95 backdrop-blur-md shadow-sm",
        isScrolled ? "py-2 shadow-md border-muted/50" : ""
      )}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-headline font-black text-2xl tracking-tight text-secondary italic">
            BudgetDev
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-[13px] font-semibold text-secondary/70 hover:text-secondary transition-colors flex items-center gap-1 focus:outline-none">
              Services <ChevronDown className="w-3 h-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 p-2 rounded-[2rem] shadow-2xl border-muted/30 mt-4 bg-white animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col py-2">
                {SERVICES.map((service) => (
                  <DropdownMenuItem key={service.title} asChild className="focus:bg-transparent p-0">
                    <Link
                      href={service.href}
                      className="flex flex-col items-start gap-1 px-6 py-4 hover:bg-muted/30 transition-colors w-full"
                    >
                      <span className="font-bold text-secondary text-[15px]">
                        {service.title}
                      </span>
                      <span className="text-[11px] text-muted-foreground/80 font-medium">
                        {service.description}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-semibold text-secondary/70 hover:text-secondary transition-colors"
            >
              {item.name[lang]}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button
            asChild
            className="rounded-xl px-6 bg-secondary text-white hover:bg-secondary/90 transition-all duration-300 font-bold text-xs h-9"
          >
            <Link href="/contact">
              {lang === "en" ? "Contact" : "Contact Us"}
            </Link>
          </Button>

          <div className="flex items-center gap-3 ml-2">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 focus:outline-none group"
              title="Toggle Locale"
            >
              <div className="w-5 h-3.5 border border-muted/20 rounded-sm relative overflow-hidden bg-white shadow-sm transition-transform group-hover:scale-110">
                <div className="absolute top-0 left-0 w-full h-[33.3%] bg-[#FF9933]" />
                <div className="absolute top-[33.3%] left-0 w-full h-[33.3%] bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full border-[0.5px] border-[#000080] flex items-center justify-center">
                    <div className="w-[1.5px] h-[1.5px] bg-[#000080] rounded-full" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[33.3%] bg-[#138808]" />
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
          <div className="space-y-4">
            <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">
              Services
            </p>
            {SERVICES.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex flex-col gap-1 p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <p className="text-sm font-bold text-secondary">
                  {service.title}
                </p>
                <p className="text-[10px] text-muted-foreground">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="h-px bg-muted" />

          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-bold text-secondary hover:text-primary transition-colors"
            >
              {item.name[lang]}
            </Link>
          ))}
          <Button
            asChild
            size="lg"
            className="w-full rounded-xl bg-secondary text-white font-bold h-14 mt-4"
          >
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              {lang === "en" ? "Contact Us" : "Get Free Quote"}
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
}