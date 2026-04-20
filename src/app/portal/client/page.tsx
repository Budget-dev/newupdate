"use client";

import { useFirebase, useCollection, useUser, useMemoFirebase } from "@/firebase";
import { collection, query, where, orderBy, limit } from "firebase/firestore";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Rocket, 
  MessageSquare, 
  ArrowRight,
  Zap,
  CheckCircle2,
  Clock
} from "lucide-react";
import ClientNavbar from "@/components/portal/ClientNavbar";

export default function ClientDashboard() {
  const { firestore } = useFirebase();
  const { user } = useUser();

  // Find user's projects properly memoized
  const projectsQuery = useMemoFirebase(() => {
    if (!user) return null;
    return query(collection(firestore, "projects"), where("clientId", "==", user.uid));
  }, [firestore, user]);

  const { data: projects } = useCollection(projectsQuery);
  const activeProject = projects?.[0];

  // Latest updates for active project properly memoized
  const updatesQuery = useMemoFirebase(() => {
    if (!activeProject) return null;
    return query(collection(firestore, "projects", activeProject.id, "updates"), orderBy("date", "desc"), limit(3));
  }, [firestore, activeProject]);

  const { data: updates } = useCollection(updatesQuery);

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-20">
      <ClientNavbar />
      <main className="max-w-7xl mx-auto px-6 pt-32 space-y-12">
        
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
            Welcome back, {user?.displayName || "Client"}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-secondary tracking-tighter leading-none">
            Project <span className="text-primary italic">Status.</span>
          </h1>
        </header>

        {activeProject ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white">
                <CardContent className="p-10 md:p-12 space-y-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-black text-secondary tracking-tight">{activeProject.name}</h2>
                      <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        <Clock className="w-3.5 h-3.5" /> Est. Deployment: Q2 2026
                      </div>
                    </div>
                    <div className="px-6 py-3 rounded-2xl bg-secondary text-white font-black italic text-lg shadow-xl shadow-secondary/10">
                      {activeProject.status}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-[11px] font-black uppercase text-muted-foreground tracking-widest">Overall Build Progress</span>
                      <span className="text-3xl font-black text-primary italic">{activeProject.progress}%</span>
                    </div>
                    <div className="h-4 w-full bg-muted rounded-full overflow-hidden p-1 shadow-inner">
                      <div className="h-full bg-primary rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(16,185,129,0.4)]" style={{ width: `${activeProject.progress}%` }} />
                    </div>
                  </div>

                  <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Core Build", val: "Verified", icon: <CheckCircle2 className="w-4 h-4 text-emerald-500" /> },
                      { label: "Performance", val: "100/100", icon: <Zap className="w-4 h-4 text-amber-500" /> },
                      { label: "SEO Status", val: "Optimized", icon: <Rocket className="w-4 h-4 text-blue-500" /> },
                      { label: "Support", val: "24/7 Live", icon: <MessageSquare className="w-4 h-4 text-primary" /> }
                    ].map((item, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-muted/30 space-y-2">
                        <div className="flex items-center gap-2">
                          {item.icon}
                          <span className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">{item.label}</span>
                        </div>
                        <p className="text-sm font-black text-secondary">{item.val}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black text-secondary tracking-tight">Latest Stream Updates</h3>
                  <Button asChild variant="ghost" className="font-bold text-xs uppercase text-primary">
                    <Link href="/portal/client/progress">Full Timeline <ArrowRight className="w-4 h-4 ml-1" /></Link>
                  </Button>
                </div>
                <div className="space-y-4">
                  {updates?.map((log) => (
                    <div key={log.id} className="bg-white p-8 rounded-[2.5rem] border border-muted/50 shadow-sm relative group hover:shadow-xl transition-all">
                      <p className="text-secondary leading-relaxed font-medium">{log.message}</p>
                      <div className="mt-4 text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                        Logged on {new Date(log.date).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="border-none shadow-2xl rounded-[2.5rem] bg-secondary text-white p-10 space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-110" />
                <div className="relative z-10 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                    <MessageSquare className="w-8 h-8 fill-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black italic tracking-tighter">Direct Support.</h3>
                    <p className="text-white/40 text-sm leading-relaxed font-medium">
                      Need a quick change or have a question about the build? Chat directly with Venkatesh and the engineering team.
                    </p>
                  </div>
                  <Button asChild className="w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-2xl font-black text-base shadow-2xl shadow-primary/20 transition-all hover:scale-[1.03]">
                    <Link href="/portal/client/chat">Open Build Chat</Link>
                  </Button>
                </div>
              </Card>

              <Card className="border-none shadow-sm rounded-[2.5rem] bg-white p-8 space-y-4 border border-muted/50">
                 <h4 className="text-xs font-black uppercase text-muted-foreground tracking-widest">Lead Engineer</h4>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-xl bg-muted overflow-hidden">
                     <img src="https://yasodha.in/assets/venkatesh-profile.png" className="w-full h-full object-cover" />
                   </div>
                   <div>
                     <p className="font-black text-secondary">Venkatesh Choppa</p>
                     <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Online Now</p>
                   </div>
                 </div>
              </Card>
            </div>
          </div>
        ) : (
          <div className="py-40 text-center space-y-4 animate-pulse">
            <Rocket className="w-12 h-12 mx-auto text-muted-foreground" />
            <p className="text-xl font-bold italic text-muted-foreground">Initializing your project dashboard...</p>
          </div>
        )}
      </main>
    </div>
  );
}