"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, LayoutDashboard } from "lucide-react";
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
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => setLang((l) => (l === "en" ? "in" : "en"));

  return (
    <nav
      className={cn(
        "fixed top-4 left-6 right-6 z-[100] transition-all duration-300",
        "mx-auto max-w-7xl px-6 py-0 rounded-2xl border bg-white/95 backdrop-blur-md shadow-sm",
        isScrolled ? "shadow-md border-muted/50" : ""
      )}
    >
      <div className="flex items-center justify-between h-12">
        <Link href="/" className="flex items-center group shrink-0">
          <div className="relative w-12 h-12 -ml-2">
            <Image 
              src="https://aquasaferoworks.sirv.com/Spins/file_00000000d04c71fdb822983b3f730fc7.png"
              alt="BudgetDev Logo"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <span className="font-headline font-black text-xl tracking-tight text-secondary italic -ml-3">
            BudgetDev
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {mounted ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="text-[12px] font-semibold text-secondary/70 hover:text-secondary transition-colors flex items-center gap-1 focus:outline-none">
                Services <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 p-2 rounded-[1.5rem] shadow-2xl border-muted/30 mt-2 bg-white animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex flex-col py-1">
                  {SERVICES.map((service) => (
                    <DropdownMenuItem key={service.title} asChild className="focus:bg-transparent p-0">
                      <Link
                        href={service.href}
                        className="flex flex-col items-start gap-0.5 px-4 py-3 hover:bg-muted/30 transition-colors w-full"
                      >
                        <span className="font-bold text-secondary text-[14px]">
                          {service.title}
                        </span>
                        <span className="text-[10px] text-muted-foreground/80 font-medium">
                          {service.description}
                        </span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
             <span className="text-[12px] font-semibold text-secondary/70 flex items-center gap-1">
                Services <ChevronDown className="w-3 h-3" />
             </span>
          )}

          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[12px] font-semibold text-secondary/70 hover:text-secondary transition-colors"
            >
              {item.name[lang]}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2 shrink-0">
          <Button
            asChild
            variant="ghost"
            className="rounded-lg px-3 text-secondary/70 hover:text-secondary transition-all font-bold text-[11px] h-8 hover:bg-muted"
          >
            <Link href="/portal/login" className="flex items-center gap-1.5">
              <LayoutDashboard className="w-3 h-3" /> Track Status
            </Link>
          </Button>

          <Button
            asChild
            className="rounded-lg px-4 bg-secondary text-white hover:bg-secondary/90 transition-all font-bold text-[11px] h-8"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>

          {mounted && (
            <button onClick={toggleLang} className="focus:outline-none ml-1">
              <div className="relative w-6 h-4 rounded-[2px] overflow-hidden border border-muted/20 bg-white shadow-sm">
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
          )}
        </div>

        <button
          className="lg:hidden p-2 text-secondary z-[110]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl border shadow-2xl p-6 flex flex-col gap-4 lg:hidden animate-in fade-in slide-in-from-top-2 duration-300 z-[100]">
          <div className="space-y-3">
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Services</p>
            {SERVICES.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex flex-col gap-0.5 p-2 rounded-lg hover:bg-muted"
              >
                <p className="text-sm font-bold text-secondary">{service.title}</p>
                <p className="text-[9px] text-muted-foreground">{service.description}</p>
              </Link>
            ))}
          </div>
          <div className="h-px bg-muted" />
          <div className="space-y-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-bold text-secondary"
              >
                {item.name[lang]}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <Button asChild variant="outline" className="w-full h-10 rounded-lg font-black text-xs">
              <Link href="/portal/login" onClick={() => setMobileMenuOpen(false)}>Track Status</Link>
            </Button>
            <Button asChild className="w-full h-10 rounded-lg bg-secondary text-white font-black text-xs">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}