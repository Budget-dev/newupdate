"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem 
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface NavigationItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface PulseFitHeroProps {
  logo: string;
  navigation: NavigationItem[];
  ctaButton: {
    label: string;
    href: string;
  };
  title: string;
  subtitle: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
  disclaimer: string;
  socialProof: {
    avatars: string[];
    text: string;
  };
  programs: {
    title: string;
    category: string;
    image: string;
    href: string;
  }[];
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
  return (
    <section className="relative w-full bg-white overflow-hidden pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="space-y-10 z-10">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black text-secondary leading-[1.05] tracking-tighter">
                {title}
              </h1>
              <p className="text-xl text-muted-foreground font-medium max-w-xl leading-relaxed">
                {subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-16 px-10 rounded-2xl bg-primary text-white font-black text-lg shadow-2xl shadow-primary/20 hover:scale-105 transition-all">
                <Link href={primaryAction.href}>{primaryAction.label}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-16 px-10 rounded-2xl border-muted-foreground/20 font-black text-lg hover:bg-muted/50 transition-all">
                <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
              </Button>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                {disclaimer}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {socialProof.avatars.map((avatar, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-4 border-white overflow-hidden bg-muted">
                      <Image 
                        src={avatar} 
                        alt="User" 
                        width={40} 
                        height={40} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-xs font-bold text-secondary uppercase tracking-widest">
                  {socialProof.text}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Carousel */}
          <div className="relative lg:-mr-32">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-4">
                {programs.map((program, i) => (
                  <CarouselItem key={i} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/2">
                    <Link href={program.href} target="_blank" className="block group">
                      <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                        <Image 
                          src={program.image} 
                          alt={program.title} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          unoptimized={program.image.includes('s0.wp.com')}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8 space-y-2">
                          <span className="inline-block px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md text-primary text-[10px] font-black uppercase tracking-widest border border-primary/30">
                            {program.category}
                          </span>
                          <h3 className="text-2xl font-black text-white leading-tight">
                            {program.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
