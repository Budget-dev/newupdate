"use client";

import { Card } from "@/components/ui/card";
import { 
  Zap, 
  Layout, 
  LineChart as ChartIcon, 
  Layers, 
  Smartphone, 
  ShieldCheck,
  Check,
  Rocket
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip 
} from 'recharts';
import Image from "next/image";

const chartData = [
  { name: '1', users: 12000 },
  { name: '2', users: 15000 },
  { name: '3', users: 14000 },
  { name: '4', users: 18000 },
  { name: '5', users: 17000 },
  { name: '6', users: 22000 },
  { name: '7', users: 24891 },
];

const features = [
  {
    title: "On-page SEO",
    description: "Ready to be found on Google.",
  },
  {
    title: "Analysis",
    description: "Collect user statistics and more.",
  },
  {
    title: "Responsive",
    description: "Optimized for all screen sizes.",
  },
  {
    title: "ROI-First",
    description: "Get the most out of budgets.",
  }
];

export function ResultsSection() {
  return (
    <section className="py-12 px-6 relative">
      <div className="max-w-7xl mx-auto main-section-container space-y-12">
        <div className="flex flex-col md:flex-row md:items-center gap-6 border-b pb-8">
          <h2 className="text-6xl md:text-[90px] font-headline font-black text-secondary">Results.</h2>
          <div className="w-px h-12 bg-muted-foreground/20 hidden md:block" />
          <p className="text-muted-foreground font-medium text-sm max-w-[150px] leading-tight">
            Optimized for real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 p-8 rounded-[2.5rem] border-none bg-[#F8FAF9] space-y-6">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" /> Performance Overview
                </div>
                <div className="flex gap-6">
                  <div className="space-y-0.5">
                    <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Unique users</p>
                    <p className="text-2xl font-black text-secondary">24,891</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">Page views</p>
                    <p className="text-2xl font-black text-secondary">47,234</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[220px] w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <Line 
                    type="monotone" 
                    dataKey="users" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3} 
                    dot={{ r: 4, fill: 'white', stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <div className="space-y-8 py-2">
            <h3 className="text-3xl font-black text-secondary leading-tight">Real results for real growth</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {features.map((feature, i) => (
                <div key={i} className="space-y-1.5">
                  <h4 className="font-black text-secondary text-base">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="p-8 rounded-[2.5rem] border-none bg-[#F8FAF9] flex flex-col justify-between">
            <h4 className="text-xl font-black text-secondary italic">Full Accompanying</h4>
            <div className="flex flex-wrap gap-2 mt-6">
              {['Texts', 'Dev', 'Google', 'Hosting'].map(tag => (
                <span key={tag} className="px-4 py-1.5 bg-[#1A1A1A] text-white rounded-full text-[9px] font-black uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </Card>

          <Card className="lg:col-span-2 p-8 rounded-[2.5rem] border-none bg-[#F8FAF9] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <h4 className="text-2xl font-black text-secondary italic">Lightning-fast speeds</h4>
              <p className="text-muted-foreground font-medium text-sm">Nobody likes to wait.</p>
            </div>
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="64" cy="64" r="56" fill="transparent" stroke="#E2E8F0" strokeWidth="10" />
                <circle cx="64" cy="64" r="56" fill="transparent" stroke="hsl(var(--primary))" strokeWidth="10" strokeDasharray={352} strokeDashoffset={0} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-secondary leading-none">100</span>
                <span className="text-[8px] font-black text-primary uppercase tracking-[0.2em]">Score</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}