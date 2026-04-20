"use client";

import { useState } from "react";
import { useFirebase, useCollection, useMemoFirebase } from "@/firebase";
import { collection, query, where, doc, setDoc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { UserPlus, Loader2 } from "lucide-react";
import AdminNavbar from "@/components/portal/AdminNavbar";

export default function ClientManagement() {
  const { firestore } = useFirebase();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const clientsQuery = useMemoFirebase(() => query(collection(firestore, "users"), where("role", "==", "client")), [firestore]);
  const { data: clients, isLoading } = useCollection(clientsQuery);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: ""
  });

  const handleCreateClient = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userId = `user_${Date.now()}`;
      await setDoc(doc(firestore, "users", userId), {
        uid: userId,
        name: formData.name,
        email: formData.email,
        role: "client",
        createdAt: new Date().toISOString()
      });

      await setDoc(doc(firestore, "clients", userId), {
        userId: userId,
        companyName: formData.company,
        phoneNumber: formData.phone
      });

      toast({ title: "Client Created", description: `${formData.name} has been registered.` });
      setOpen(false);
      setFormData({ name: "", email: "", company: "", phone: "" });
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
          <h1 className="text-3xl font-black text-secondary">Client <span className="text-primary italic">Database.</span></h1>
          
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="rounded-xl bg-primary text-white h-11 px-6 font-bold shadow-lg shadow-primary/20">
                <UserPlus className="w-4 h-4 mr-2" /> Add New Client
              </Button>
            </DialogTrigger>
            <DialogContent className="rounded-[2rem] border-none shadow-2xl p-0 overflow-hidden max-w-lg">
              <div className="bg-secondary p-8 text-white">
                <DialogTitle className="text-2xl font-black italic">Register Client</DialogTitle>
                <p className="text-xs text-white/50 uppercase tracking-widest mt-1">Create user profile and credentials</p>
              </div>
              <form onSubmit={handleCreateClient} className="p-8 space-y-4 bg-white">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input placeholder="John Doe" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label>Company Name</Label>
                    <Input placeholder="Acme Inc" required value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Email Address</Label>
                  <Input type="email" placeholder="john@client.com" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <Input placeholder="+91 ..." value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="rounded-xl" />
                </div>
                <div className="pt-4">
                  <Button type="submit" disabled={loading} className="w-full h-12 bg-secondary text-white rounded-xl font-black">
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Create Client Account"}
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
                <TableRow>
                  <TableHead className="px-8 font-black uppercase text-[10px] tracking-widest text-muted-foreground">Client Name</TableHead>
                  <TableHead className="font-black uppercase text-[10px] tracking-widest text-muted-foreground">Email</TableHead>
                  <TableHead className="font-black uppercase text-[10px] tracking-widest text-muted-foreground">Registration</TableHead>
                  <TableHead className="px-8 text-right font-black uppercase text-[10px] tracking-widest text-muted-foreground">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clients?.map((client) => (
                  <TableRow key={client.id} className="hover:bg-muted/30">
                    <TableCell className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-black text-xs">
                          {client.name?.charAt(0)}
                        </div>
                        <span className="font-bold text-secondary">{client.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">{client.email}</TableCell>
                    <TableCell className="text-xs text-muted-foreground">{new Date(client.createdAt).toLocaleDateString()}</TableCell>
                    <TableCell className="px-8 text-right">
                      <Button variant="ghost" size="sm" className="text-primary font-bold text-xs uppercase">
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {(!clients || clients.length === 0) && !isLoading && (
                  <TableRow>
                    <TableCell colSpan={4} className="py-20 text-center text-muted-foreground italic">
                      No clients registered yet.
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