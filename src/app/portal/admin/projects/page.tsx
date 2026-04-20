
"use client";

import { useState } from "react";
import { useFirebase, useCollection, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy, doc, setDoc, where } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Briefcase, Plus, Loader2, MoreHorizontal } from "lucide-react";
import AdminNavbar from "@/components/portal/AdminNavbar";
import Link from "next/link";

export default function ProjectManagement() {
  const { firestore, user } = useFirebase();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const projectsQuery = useMemoFirebase(() => {
    if (!user) return null;
    return query(collection(firestore, "projects"), orderBy("createdAt", "desc"));
  }, [firestore, user]);

  const clientsQuery = useMemoFirebase(() => {
    if (!user) return null;
    return query(collection(firestore, "users"), where("role", "==", "client"));
  }, [firestore, user]);

  const { data: projects } = useCollection(projectsQuery);
  const { data: clients } = useCollection(clientsQuery);

  const [formData, setFormData] = useState({
    name: "",
    clientId: "",
    status: "Not Started",
    totalBudget: ""
  });

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientId) return toast({ title: "Error", description: "Please select a client." });
    
    setLoading(true);
    try {
      const projectId = `proj_${Date.now()}`;
      await setDoc(doc(firestore, "projects", projectId), {
        id: projectId,
        name: formData.name,
        clientId: formData.clientId,
        progress: 0,
        status: formData.status,
        totalBudget: Number(formData.totalBudget) || 0,
        createdAt: new Date().toISOString()
      });

      toast({ title: "Project Created", description: `${formData.name} is now live.` });
      setOpen(false);
      setFormData({ name: "", clientId: "", status: "Not Started", totalBudget: "" });
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
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-secondary">Project <span className="text-primary italic">Control.</span></h1>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Deployment Pipeline</p>
          </div>
          
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="rounded-xl bg-secondary text-white h-11 px-6 font-bold shadow-lg">
                <Plus className="w-4 h-4 mr-2" /> Initialize Project
              </Button>
            </DialogTrigger>
            <DialogContent className="rounded-[2.5rem] border-none shadow-2xl p-0 overflow-hidden">
              <div className="bg-primary p-8 text-white">
                <DialogTitle className="text-2xl font-black italic">New Project Build</DialogTitle>
                <p className="text-xs text-white/60 uppercase font-bold tracking-widest mt-1">Assign to client account</p>
              </div>
              <form onSubmit={handleCreateProject} className="p-8 space-y-4 bg-white">
                <div className="space-y-2">
                  <Label>Project Name</Label>
                  <Input placeholder="E-commerce App v1" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label>Total Budget (INR)</Label>
                  <Input type="number" placeholder="50000" required value={formData.totalBudget} onChange={e => setFormData({...formData, totalBudget: e.target.value})} className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label>Assign to Client</Label>
                  <Select onValueChange={(val) => setFormData({...formData, clientId: val})}>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Select a client" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      {clients?.map(client => (
                        <SelectItem key={client.id} value={client.id}>{client.name} ({client.email})</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="pt-4">
                  <Button type="submit" disabled={loading} className="w-full h-12 bg-secondary text-white rounded-xl font-black">
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Deploy Project Structure"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project) => (
            <Card key={project.id} className="border-none shadow-sm rounded-[2.5rem] overflow-hidden group hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-primary uppercase tracking-widest">
                        {project.status}
                      </span>
                      <h3 className="text-xl font-black text-secondary line-clamp-1">{project.name}</h3>
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 text-muted-foreground">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-y py-4 border-muted/50">
                    <div className="space-y-0.5">
                       <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">Budget</p>
                       <p className="text-sm font-black text-secondary">₹{Number(project.totalBudget || 0).toLocaleString()}</p>
                    </div>
                    <div className="space-y-0.5 text-right">
                       <p className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">Build ID</p>
                       <p className="text-[9px] font-mono text-muted-foreground truncate">{project.id}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${project.progress}%` }} />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button asChild className="w-full rounded-xl bg-muted/50 text-secondary hover:bg-secondary hover:text-white font-black h-11">
                      <Link href={`/portal/admin/projects/${project.id}`}>Log Daily Update</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          {(!projects || projects.length === 0) && (
            <div className="col-span-full py-32 text-center space-y-4 opacity-40">
              <Briefcase className="w-12 h-12 mx-auto" />
              <p className="font-bold italic">Awaiting first project deployment...</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
