
"use client";

import { useState } from "react";
import { useFirebase, useCollection, useMemoFirebase } from "@/firebase";
import { collection, query, where, doc, setDoc } from "firebase/firestore";
import { initializeApp, deleteApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "@/firebase/config";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { UserPlus, Loader2, Key, Mail, Building2 } from "lucide-react";
import AdminNavbar from "@/components/portal/AdminNavbar";

export default function ClientManagement() {
  const { firestore, user: adminUser } = useFirebase();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const clientsQuery = useMemoFirebase(() => {
    if (!adminUser) return null;
    return query(collection(firestore, "users"), where("role", "==", "client"));
  }, [firestore, adminUser]);
  
  const { data: clients, isLoading } = useCollection(clientsQuery);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    password: ""
  });

  const handleCreateClient = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password.length < 6) {
      return toast({ title: "Weak Password", description: "Password must be at least 6 characters.", variant: "destructive" });
    }

    setLoading(true);
    let secondaryApp;
    try {
      // 1. Initialize a secondary app to create the user without logging out the admin
      const secondaryAppName = `client-creation-${Date.now()}`;
      secondaryApp = initializeApp(firebaseConfig, secondaryAppName);
      const secondaryAuth = getAuth(secondaryApp);

      // 2. Create the Auth User
      const userCredential = await createUserWithEmailAndPassword(
        secondaryAuth, 
        formData.email, 
        formData.password
      );
      const newClientUid = userCredential.user.uid;

      // 3. Create Firestore User Document
      await setDoc(doc(firestore, "users", newClientUid), {
        uid: newClientUid,
        name: formData.name,
        email: formData.email,
        role: "client",
        createdAt: new Date().toISOString()
      });

      // 4. Create Extended Client Profile
      await setDoc(doc(firestore, "clients", newClientUid), {
        userId: newClientUid,
        companyName: formData.company,
        phoneNumber: formData.phone
      });

      toast({ 
        title: "Client Registered", 
        description: `Credentials for ${formData.name} created. You can now share them.`,
      });
      
      setOpen(false);
      setFormData({ name: "", email: "", company: "", phone: "", password: "" });
    } catch (err: any) {
      console.error(err);
      toast({ title: "Registration Failed", description: err.message, variant: "destructive" });
    } finally {
      if (secondaryApp) {
        await deleteApp(secondaryApp);
      }
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9] pb-20">
      <AdminNavbar />
      <main className="max-w-7xl mx-auto px-6 pt-32 space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-secondary">Client <span className="text-primary italic">Database.</span></h1>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Provision Access & Profiles</p>
          </div>
          
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="rounded-xl bg-primary text-white h-11 px-6 font-bold shadow-lg shadow-primary/20">
                <UserPlus className="w-4 h-4 mr-2" /> Register New Client
              </Button>
            </DialogTrigger>
            <DialogContent className="rounded-[2.5rem] border-none shadow-2xl p-0 overflow-hidden max-w-lg">
              <div className="bg-secondary p-8 text-white">
                <DialogTitle className="text-2xl font-black italic">Provision Client Access</DialogTitle>
                <p className="text-xs text-white/50 uppercase tracking-widest mt-1">This will create a login account</p>
              </div>
              <form onSubmit={handleCreateClient} className="p-8 space-y-4 bg-white">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-muted-foreground">Full Name</Label>
                    <Input placeholder="John Doe" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-muted-foreground">Company</Label>
                    <Input placeholder="Acme Inc" required value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="rounded-xl" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase text-muted-foreground">Email Address (Login Username)</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input type="email" placeholder="john@client.com" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="rounded-xl pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase text-muted-foreground">Initial Password</Label>
                  <div className="relative">
                    <Key className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input type="text" placeholder="••••••••" required value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} className="rounded-xl pl-10" />
                  </div>
                  <p className="text-[9px] text-muted-foreground italic">Provide this password to the client for their first login.</p>
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase text-muted-foreground">Phone Number</Label>
                  <Input placeholder="+91 ..." value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="rounded-xl" />
                </div>

                <div className="pt-4">
                  <Button type="submit" disabled={loading} className="w-full h-12 bg-secondary text-white rounded-xl font-black">
                    {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <UserPlus className="w-4 h-4 mr-2" />}
                    Create Account & Profile
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card className="border-none shadow-sm rounded-[2.5rem] overflow-hidden">
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-white">
                <TableRow className="border-none">
                  <TableHead className="px-8 font-black uppercase text-[10px] tracking-widest text-muted-foreground">Client Name</TableHead>
                  <TableHead className="font-black uppercase text-[10px] tracking-widest text-muted-foreground">Contact</TableHead>
                  <TableHead className="font-black uppercase text-[10px] tracking-widest text-muted-foreground">Registered</TableHead>
                  <TableHead className="px-8 text-right font-black uppercase text-[10px] tracking-widest text-muted-foreground">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients?.map((client) => (
                  <TableRow key={client.id} className="hover:bg-muted/30 border-muted/20">
                    <TableCell className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black text-xs">
                          {client.name?.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-secondary">{client.name}</span>
                          <span className="text-[10px] text-muted-foreground uppercase font-black tracking-tighter">Verified Account</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-xs font-bold text-secondary">{client.email}</span>
                        <span className="text-[9px] text-muted-foreground font-medium italic">Active Line</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-xs font-bold text-muted-foreground">{new Date(client.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell className="px-8 text-right">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-[9px] font-black uppercase tracking-widest">
                         <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {(!clients || clients.length === 0) && !isLoading && (
                  <TableRow>
                    <TableCell colSpan={4} className="py-24 text-center">
                      <div className="space-y-3 opacity-20">
                        <Building2 className="w-12 h-12 mx-auto" />
                        <p className="font-black italic text-lg uppercase tracking-widest">No clients registered.</p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
                {isLoading && (
                  <TableRow>
                    <TableCell colSpan={4} className="py-20 text-center">
                      <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto" />
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
