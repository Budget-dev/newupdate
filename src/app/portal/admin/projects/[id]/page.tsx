
"use client";

import { useState, useMemo, useEffect } from "react";
import { useParams } from "next/navigation";
import { useFirebase, useDoc, useCollection, useMemoFirebase } from "@/firebase";
import { doc, collection, query, orderBy, setDoc, updateDoc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send, History, CheckCircle2, ArrowLeft, MessageSquare } from "lucide-react";
import AdminNavbar from "@/components/portal/AdminNavbar";
import Link from "next/link";

export default function ProjectUpdatePage() {
  const { id } = useParams();
  const { firestore } = useFirebase();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(0);

  const projectRef = useMemoFirebase(() => doc(firestore, "projects", id as string), [firestore, id]);
  const updatesQuery = useMemoFirebase(() => query(collection(projectRef, "updates"), orderBy("date", "desc")), [projectRef]);

  const { data: project } = useDoc(projectRef);
  const { data: updates } = useCollection(updatesQuery);

  // Sync initial progress
  useEffect(() => {
    if (project) setProgress(project.progress);
  }, [project]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;
    
    setLoading(true);
    try {
      const updateId = `upd_${Date.now()}`;
      await setDoc(doc(projectRef, "updates", updateId), {
        id: updateId,
        projectId: id,
        date: new Date().toISOString(),
        message: message
      });

      await updateDoc(projectRef, {
        progress: progress,
        status: progress === 100 ? "Completed" : "In Progress"
      });

      toast({ title: "Update Published", description: "The client can now see this in their timeline." });
      setMessage("");
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9] pb-20">
      <AdminNavbar />
      <main className="max-w-7xl mx-auto px-6 pt-32 space-y-8">
        <div className="flex items-center justify-between">
          <Button asChild variant="ghost" className="rounded-xl text-muted-foreground font-bold hover:text-secondary -ml-4">
            <Link href="/portal/admin/projects"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Pipeline</Link>
          </Button>
          <Button asChild className="rounded-xl bg-primary text-white font-bold h-11 px-6 shadow-lg shadow-primary/20">
            <Link href={`/portal/admin/projects/${id}/chat`}><MessageSquare className="w-4 h-4 mr-2" /> Open Project Chat</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <header className="space-y-2">
              <h1 className="text-4xl font-black text-secondary tracking-tight">
                {project?.name || "Loading project..."}
              </h1>
              <p className="text-xs text-muted-foreground uppercase font-black tracking-widest italic">Live Engineering Stream</p>
            </header>

            <Card className="border-none shadow-sm rounded-[2.5rem] overflow-hidden">
              <CardHeader className="bg-white border-b px-8 py-6">
                <CardTitle className="text-xl font-black text-secondary italic">Publish Daily Log</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <Label className="font-black uppercase text-[10px] tracking-widest text-muted-foreground">Adjust Progress Matrix</Label>
                      <span className="text-2xl font-black text-primary">{progress}%</span>
                    </div>
                    <Slider 
                      value={[progress]} 
                      onValueChange={(val) => setProgress(val[0])} 
                      max={100} 
                      step={1} 
                      className="py-4"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label className="font-black uppercase text-[10px] tracking-widest text-muted-foreground">Engineering Update Message</Label>
                    <Textarea 
                      placeholder="Today we implemented the core backend services and optimized the database schema..." 
                      className="min-h-[150px] rounded-2xl p-4 bg-muted/20 border-none focus-visible:ring-primary"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                    />
                  </div>

                  <Button onClick={handleUpdate} disabled={loading} className="w-full h-14 rounded-2xl bg-secondary text-white font-black shadow-xl shadow-secondary/10">
                    {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Send className="w-5 h-5 mr-2" />}
                    Broadcast Update to Client
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6 pt-4">
              <h2 className="text-2xl font-black text-secondary flex items-center gap-3">
                <History className="w-6 h-6 text-primary" /> Update Timeline
              </h2>
              <div className="space-y-4">
                {updates?.map((log) => (
                  <div key={log.id} className="bg-white p-8 rounded-[2rem] shadow-sm border border-muted/30 relative">
                    <div className="absolute top-8 right-8 text-[10px] font-black text-muted-foreground/40 uppercase tracking-widest">
                      {new Date(log.date).toLocaleDateString()}
                    </div>
                    <p className="text-secondary leading-relaxed font-medium pr-20">{log.message}</p>
                    <div className="mt-4 flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest">
                      <CheckCircle2 className="w-3 h-3" /> Published by Admin
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="border-none shadow-sm rounded-[2.5rem] bg-secondary text-white p-8 space-y-6">
              <h3 className="text-xl font-black italic tracking-tight">Project Summary</h3>
              <div className="space-y-4 border-t border-white/10 pt-6">
                <div className="flex justify-between">
                  <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Client ID</span>
                  <span className="text-xs font-mono">{project?.clientId?.substring(0, 12)}...</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Started On</span>
                  <span className="text-xs font-bold">{project ? new Date(project.createdAt).toLocaleDateString() : '...'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Build Status</span>
                  <span className="text-xs font-black text-primary">{project?.status}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
