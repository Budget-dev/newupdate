"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

interface NavItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
}

interface ProgramItem {
  image: string;
  category: string;
  title: string;
  link: string;
}

interface PulseFitHeroProps {
  logo: string;
  navigation: NavItem[];
  ctaButton: {
    label: string;
    href?: string;
  };
  title: string;
  subtitle: string;
  primaryAction: {
    label: string;
    href?: string;
  };
  secondaryAction: {
    label: string;
    href?: string;
  };
  disclaimer?: string;
  socialProof: {
    avatars: string[];
    text: string;
  };
  programs: ProgramItem[];
}

export function PulseFitHero({
  logo,
  navigation,
  ctaButton,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  disclaimer,
  socialProof,
  programs,
}: PulseFitHeroProps) {
  const router = useRouter();

  const handleNav = (href?: string) => {
    if (href) router.push(href);
  };

  return (
    <div className="relative min-h-screen bg-white text-secondary selection:bg-primary/20 selection:text-primary">
      {/* Redundant nav removed to prevent overlap with global Navbar */}
      
      <main className="pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-in fade-in slide-in-from-left-4 duration-1000">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-headline font-black text-secondary leading-[1.05] tracking-tight">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium max-w-lg">
                {subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button 
                onClick={() => handleNav(primaryAction.href)}
                className="h-14 rounded-2xl bg-primary text-white font-black text-base px-10 shadow-xl shadow-primary/20 hover:scale-[1.03] transition-all"
              >
                {primaryAction.label}
              </Button>
              <Button 
                variant="outline"
                onClick={() => handleNav(secondaryAction.href)}
                className="h-14 rounded-2xl border-muted-foreground/20 text-secondary font-black text-base px-10 hover:bg-muted/50 transition-all"
              >
                {secondaryAction.label}
              </Button>
            </div>

            {disclaimer && (
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest italic opacity-50">
                {disclaimer}
              </p>
            )}

            <div className="flex items-center gap-4 pt-4 border-t border-muted/50">
              <div className="flex -space-x-3">
                {socialProof.avatars.map((url, i) => (
                  <Avatar key={i} className="w-10 h-10 border-4 border-white">
                    <AvatarImage src={url} className="object-cover" />
                    <AvatarFallback>?</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-black text-secondary uppercase tracking-widest">{socialProof.text}</p>
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => <Sparkles key={i} className="w-3 h-3 fill-current" />)}
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-4 duration-1000">
             <Carousel 
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {programs.map((program, idx) => (
                  <CarouselItem key={idx} className="pl-4 basis-full sm:basis-1/2 lg:basis-[70%]">
                    <Link href={program.link || "#"} target="_blank" className="block group">
                      <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-muted/10 transition-transform duration-700 group-hover:scale-[1.02]">
                        <Image 
                          src={program.image} 
                          alt={program.title} 
                          fill 
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                          unoptimized={program.image.includes('s0.wp.com')}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-10 left-10 right-10 space-y-2">
                           <span className="inline-flex px-3 py-1 rounded-full bg-primary text-white text-[9px] font-black uppercase tracking-widest">
                            {program.category}
                          </span>
                          <h3 className="text-3xl font-black text-white italic tracking-tight">{program.title}</h3>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </main>
    </div>
  );
}
