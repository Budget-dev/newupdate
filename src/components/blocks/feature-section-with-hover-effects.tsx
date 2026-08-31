"use client";

import { cn } from "@/lib/utils";
import {
  LockOpen,
  Bot,
  Target,
  TrendingUp,
} from "lucide-react";

export function CourseHighlights() {
  const highlights = [
    {
      title: "The Freelancer.com Loophole",
      description: "How beginners beat experienced freelancers every day. Our secret weapon.",
      icon: <LockOpen className="w-8 h-8 text-[#FF6B00]" />,
    },
    {
      title: "AI + Full Stack Dev",
      description: "MERN stack from system design to live deployment using power of AI.",
      icon: <Bot className="w-8 h-8 text-[#FF6B00]" />,
    },
    {
      title: "Client Getting System",
      description: "Find, pitch, close, and get paid — step by step with real scripts.",
      icon: <Target className="w-8 h-8 text-[#FF6B00]" />,
    },
    {
      title: "Profile Domination",
      description: "Fiverr, Upwork, Instagram — all optimized for maximum conversion.",
      icon: <TrendingUp className="w-8 h-8 text-[#FF6B00]" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 py-10 max-w-7xl mx-auto border border-white/10 rounded-3xl overflow-hidden">
      {highlights.map((highlight, index) => (
        <Highlight key={highlight.title} {...highlight} index={index} />
      ))}
    </div>
  );
}

const Highlight = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-12 px-10 relative group/feature border-white/10",
        index % 2 === 0 ? "md:border-r" : "",
        index < 2 ? "border-b" : ""
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-[#FF6B00]/10 to-transparent pointer-events-none" />
      
      <div className="mb-6 relative z-10">
        {icon}
      </div>
      <div className="text-2xl font-bold mb-3 relative z-10">
        <div className="absolute left-[-40px] inset-y-0 h-8 group-hover/feature:h-12 w-1.5 rounded-tr-full rounded-br-full bg-white/20 group-hover/feature:bg-[#FF6B00] transition-all duration-300 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-300 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-base text-white/60 group-hover:text-white/80 transition-colors max-w-sm relative z-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
