"use client";

import { useFirebase, useCollection, useUser, useMemoFirebase } from "@/firebase";
import { collection, query, where, orderBy } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ArrowLeft,
  CheckCircle2,
  Zap,
  Activity
} from "lucide-react";
import ClientNavbar from "@/components/portal/ClientNavbar";

export default function ProjectProgressPage() {
  const { firestore } = useFirebase();
  const { user } = useUser();

  const projectsQuery = useMemoFirebase(() => {
    if (!user) return null;
    return query(collection(firestore, "projects"), where("clientId", "==", user.uid));
  }, [firestore, user]);

  const { data: projects } = useCollection(projectsQuery);
  const activeProject = projects?.[0];

  const updatesQuery = useMemoFirebase(() => {
    if (!activeProject) return null;
    return query(collection(firestore, "projects", activeProject.id, "updates"), orderBy("date", "desc"));
  }, [firestore, activeProject]);

  const { data: updates } = useCollection(updatesQuery);

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-20">
      <ClientNavbar />
      <main className="max-w-4xl mx-auto px-6 pt-32 space-y-12">
        <div className="space-y-4">
          <Button asChild variant="ghost" className="rounded-xl text-muted-foreground font-bold hover:text-secondary -ml-4">
            <Link href="/portal/client"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Dashboard</Link>
          </Button>
          <h1 className="text-5xl font-black text-secondary tracking-tighter">Build <span className="text-primary italic">Timeline.</span></h1>
          <p className="text-muted-foreground font-medium max-w-xl">Every log entry from our engineering team is recorded here in real-time.</p>
        </div>

        {activeProject && (
          <div className="relative space-y-12">
            {/* Timeline Line */}
            <div className="absolute left-[1.5rem] md:left-[2.5rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent pointer-events-none" />

            <div className="space-y-16">
              {updates?.map((log, idx) => (
                <div key={log.id} className="relative flex flex-col md:flex-row gap-8 pl-12 md:pl-20 animate-in fade-in slide-in-from-left-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
                  {/* Point */}
                  <div className="absolute left-[1.05rem] md:left-[2.05rem] top-2 w-4 h-4 rounded-full bg-white border-4 border-primary shadow-[0_0_10px_rgba(16,185,129,0.5)] z-10" />
                  
                  <div className="md:w-32 shrink-0 space-y-1">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Logged On</p>
                    <p className="text-sm font-black text-secondary">{new Date(log.date).toLocaleDateString()}</p>
                  </div>

                  <div className="flex-1 bg-white p-8 md:p-10 rounded-[2.5rem] border border-muted/50 shadow-sm hover:shadow-xl transition-all space-y-4">
                    <div className="flex items-center gap-2 text-primary font-black uppercase text-[9px] tracking-widest">
                      <Activity className="w-3 h-3" /> Technical Log #{updates.length - idx}
                    </div>
                    <p className="text-secondary leading-relaxed font-medium text-lg italic">
                      "{log.message}"
                    </p>
                    <div className="pt-4 flex items-center gap-4 border-t border-muted pt-6">
                       <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 text-[9px] font-black uppercase">
                         <CheckCircle2 className="w-3 h-3" /> Code Verified
                       </div>
                       <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 text-amber-600 text-[9px] font-black uppercase">
                         <Zap className="w-3 h-3" /> Performance Sync
                       </div>
                    </div>
                  </div>
                </div>
              ))}
              {(!updates || updates.length === 0) && (
                <div className="pl-20 py-20 text-muted-foreground font-bold italic">
                  Project initialized. Awaiting first log entry from engineers...
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}