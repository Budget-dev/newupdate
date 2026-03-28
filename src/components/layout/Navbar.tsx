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
    title: "Mobile App Dev",
    description: "iOS & Android solutions",
    href: "/contact",
  },
  {
    title: "Software Solutions",
    description: "Custom business software",
    href: "/services/web-development",
  },
  {
    title: "Web Design & UI/UX",
    description: "High-fidelity interfaces",
    href: "/services/web-design",
  },
  {
    title: "SEO Optimization",
    description: "Market dominance",
    href: "/services/seo",
  },
];

const NAV_ITEMS = [
  { name: { en: "Portfolio", in: "Portfolio" }, href: "/portfolio" },
  { name: { en: "Team", in: "Team" }, href: "/about" },
  { name: { en: "Careers", in: "Careers" }, href: "/careers" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<"en" | "in">("en");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => setLang((l) => (l === "en" ? "in" : "en"));

  if (!mounted) {
    return (
      <nav className="fixed top-6 left-6 right-6 z-[100] mx-auto max-w-7xl px-8 py-3 rounded-2xl border bg-white/95 backdrop-blur-md shadow-sm h-16" />
    );
  }

  return (
    <nav
      className={cn(
        "fixed top-6 left-6 right-6 z-[100] transition-all duration-300",
        "mx-auto max-w-7xl px-8 py-3 rounded-2xl border bg-white/95 backdrop-blur-md shadow-sm",
        isScrolled ? "py-2 shadow-md border-muted/50" : ""
      )}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <span className="font-headline font-black text-2xl tracking-tight text-secondary italic">
            BudgetDev
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-[13px] font-semibold text-secondary/70 hover:text-secondary transition-colors flex items-center gap-1 focus:outline-none min-w-[80px]">
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
              className="text-[13px] font-semibold text-secondary/70 hover:text-secondary transition-colors min-w-[70px] text-center"
            >
              {item.name[lang]}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4 shrink-0">
          <Button
            asChild
            className="rounded-xl px-6 bg-secondary text-white hover:bg-secondary/90 transition-all font-bold text-xs h-9"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>

          <button onClick={toggleLang} className="focus:outline-none">
            <div className="relative w-7 h-5 rounded-[2px] overflow-hidden border border-muted/20 bg-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 225 150" className="w-full h-full">
                <rect width="225" height="150" fill="#FF9933"/>
                <rect width="225" height="100" y="50" fill="#FFFFFF"/>
                <rect width="225" height="50" y="100" fill="#128807"/>
                <g transform="translate(112.5 75)">
                  <circle r="12" fill="none" stroke="#000080" strokeWidth="1.5"/>
                  <circle r="2.5" fill="#000080"/>
                  <path d="M0-12V12M-12 0H12M-8.48-8.48 8.48 8.48M-8.48 8.48 8.48-8.48" stroke="#000080" strokeWidth="0.5"/>
                </g>
              </svg>
            </div>
          </button>
        </div>

        <button
          className="lg:hidden p-2 text-secondary z-[110]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 mt-4 w-full bg-white rounded-2xl border shadow-2xl p-8 flex flex-col gap-6 lg:hidden animate-in fade-in slide-in-from-top-4 duration-300 z-[100]">
          <div className="space-y-4">
            <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">Services</p>
            {SERVICES.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex flex-col gap-1 p-2 rounded-lg hover:bg-muted"
              >
                <p className="text-sm font-bold text-secondary">{service.title}</p>
                <p className="text-[10px] text-muted-foreground">{service.description}</p>
              </Link>
            ))}
          </div>
          <div className="h-px bg-muted" />
          <div className="space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-bold text-secondary"
              >
                {item.name[lang]}
              </Link>
            ))}
          </div>
          <Button asChild className="w-full h-14 rounded-xl bg-secondary text-white font-black">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
