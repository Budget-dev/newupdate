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
    title: "Tracking & Analysis",
    description: "Collect user statistics, marketing cookies, and more.",
  },
  {
    title: "100% Responsive",
    description: "Optimized for desktop, tablet, mobile phones and everything in between.",
  },
  {
    title: "ROI-First",
    description: "So that you can get the most out of your advertising budgets.",
  }
];

export function ResultsSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto bg-white rounded-[4rem] border border-muted/50 shadow-2xl shadow-black/5 p-12 md:p-20 overflow-hidden space-y-16">
        <div className="flex flex-col md:flex-row md:items-center gap-8 border-b pb-12">
          <h2 className="text-7xl md:text-9xl font-headline font-black text-secondary">Results.</h2>
          <div className="w-px h-16 bg-muted-foreground/20 hidden md:block" />
          <p className="text-muted-foreground font-medium text-lg max-w-[200px] leading-tight">
            Websites optimized for real results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart Card */}
          <Card className="lg:col-span-2 p-10 rounded-[3rem] border-none bg-[#F8FAF9] space-y-8">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-primary" /> January 19, 2026
                </div>
                <div className="flex gap-8">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase text-muted-foreground tracking-widest">
                      <div className="w-2 h-2 rounded-full bg-primary" /> Unique users
                    </div>
                    <p className="text-3xl font-black text-secondary">24,891</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase text-muted-foreground tracking-widest">
                      <div className="w-2 h-2 rounded-full bg-primary/30" /> Page views
                    </div>
                    <p className="text-3xl font-black text-secondary">47,234</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[280px] w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <Line 
                    type="monotone" 
                    dataKey="users" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={4} 
                    dot={{ r: 6, fill: 'white', stroke: 'hsl(var(--primary))', strokeWidth: 3 }}
                    activeDot={{ r: 8 }}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Text Features Card */}
          <div className="space-y-12 py-4">
            <h3 className="text-4xl font-black text-secondary leading-[1.1]">Websites optimized for real results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {features.map((feature, i) => (
                <div key={i} className="space-y-3">
                  <h4 className="font-black text-secondary text-lg">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Accompanying AZ Card */}
          <Card className="p-10 rounded-[3rem] border-none bg-[#F8FAF9] relative overflow-hidden flex flex-col justify-between group">
            <div className="space-y-3">
              <h4 className="text-2xl font-black text-secondary italic">Accompanying AZ</h4>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px]">
                Benefit from top-notch service and convenient comfort right from the start.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-12">
              {['Texts', 'Development', 'Google', 'Support', 'Hosting', 'concept'].map(tag => (
                <span key={tag} className="px-5 py-2 bg-[#1A1A1A] text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-black/10">
                  {tag}
                </span>
              ))}
            </div>
          </Card>

          {/* PageSpeed Card */}
          <Card className="lg:col-span-2 p-10 rounded-[3rem] border-none bg-[#F8FAF9] flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-3 max-w-sm">
              <h4 className="text-3xl font-black text-secondary italic">Lightning-fast loading times</h4>
              <p className="text-muted-foreground font-medium text-lg">Because nobody likes to wait.</p>
            </div>
            <div className="relative w-48 h-48 flex items-center justify-center shrink-0">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="84"
                  fill="transparent"
                  stroke="#E2E8F0"
                  strokeWidth="14"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="84"
                  fill="transparent"
                  stroke="hsl(var(--primary))"
                  strokeWidth="14"
                  strokeDasharray={528}
                  strokeDashoffset={0}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-6xl font-black text-secondary leading-none">100</span>
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mt-1">Score</span>
              </div>
              <div className="absolute top-8 right-0 bg-white border border-muted/50 rounded-full w-10 h-10 flex items-center justify-center text-[11px] font-black text-muted-foreground shadow-sm">97</div>
              <div className="absolute bottom-4 right-4 bg-white border border-muted/50 rounded-full w-10 h-10 flex items-center justify-center text-[11px] font-black text-muted-foreground shadow-sm">94</div>
            </div>
          </Card>
        </div>

        {/* Bottom Row Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-8 rounded-[2.5rem] border border-muted/30 shadow-sm flex flex-col items-center justify-between text-center space-y-6 bg-white hover:shadow-md transition-shadow">
            <div className="grid grid-cols-2 gap-3">
              <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-500 font-bold text-xs shadow-sm">
                <Layout className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-[#1A1A1A] rounded-xl flex items-center justify-center text-white shadow-sm">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 shadow-sm">
                <Zap className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 shadow-sm">
                <ChartIcon className="w-5 h-5" />
              </div>
            </div>
            <p className="font-black text-secondary text-sm italic">Perfectly integrated</p>
          </Card>

          <Card className="p-8 rounded-[2.5rem] border border-muted/30 shadow-sm flex flex-col items-center justify-between text-center space-y-6 bg-white hover:shadow-md transition-shadow">
            <div className="w-16 h-16 border-2 border-primary/20 rounded-2xl flex items-center justify-center relative">
               <div className="w-10 h-10 border-2 border-primary rounded-xl flex items-center justify-center bg-primary/5">
                  <div className="w-4 h-4 bg-primary rounded-sm" />
               </div>
            </div>
            <p className="font-black text-secondary text-sm italic">Build to scale</p>
          </Card>

          <Card className="p-8 rounded-[2.5rem] border border-muted/30 shadow-sm flex flex-col items-center justify-between text-center space-y-6 bg-white hover:shadow-md transition-shadow">
            <div className="bg-[#F8FAF9] border border-muted/50 rounded-2xl px-6 py-4 flex items-center gap-3">
              <span className="text-primary font-black text-sm tracking-tighter">Mon - Fri: 10 -</span>
            </div>
            <p className="font-black text-secondary text-sm italic">Simple processing</p>
          </Card>

          <Card className="p-8 rounded-[2.5rem] border border-muted/30 shadow-sm flex flex-col items-center justify-between text-center space-y-6 bg-white hover:shadow-md transition-shadow">
            <div className="relative">
              <div className="bg-white border border-muted/30 rounded-2xl px-10 py-5 space-y-2 shadow-sm">
                <div className="flex justify-center gap-0.5 mb-2">
                  {[1,2,3,4,5,6,7,8,9,10].map(i => <div key={i} className="w-0.5 h-0.5 bg-muted-foreground/30 rounded-full" />)}
                </div>
                <div className="text-[11px] font-black text-secondary tracking-[0.1em] uppercase">GDPR</div>
                <div className="text-[8px] text-muted-foreground uppercase font-bold tracking-widest">Conform</div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-primary rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white">
                <Check className="w-4 h-4" />
              </div>
            </div>
            <p className="font-black text-secondary text-sm italic">Safe & compliant</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
