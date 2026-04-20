
"use client";

import { useState } from "react";
import { useFirebase, useCollection, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy, doc, setDoc, where, deleteDoc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { IndianRupee, Plus, Loader2, Trash2, TrendingUp, Wallet } from "lucide-react";
import AdminNavbar from "@/components/portal/AdminNavbar";

export default function PaymentsPage() {
  const { firestore, user } = useFirebase();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const paymentsQuery = useMemoFirebase(() => {
    if (!user) return null;
    return query(collection(firestore, "payments"), orderBy("date", "desc"));
  }, [firestore, user]);

  const projectsQuery = useMemoFirebase(() => {
    if (!user) return null;
    return query(collection(firestore, "projects"));
  }, [firestore, user]);

  const clientsQuery = useMemoFirebase(() => {
    if (!user) return null;
    return query(collection(firestore, "users"), where("role", "==", "client"));
  }, [firestore, user]);

  const { data: payments } = useCollection(paymentsQuery);
  const { data: projects } = useCollection(projectsQuery);
  const { data: clients } = useCollection(clientsQuery);

  const [formData, setFormData] = useState({
    projectId: "",
    amount: "",
    status: "paid"
  });

  const totalEarnings = payments?.reduce((acc, p) => acc + Number(p.amount), 0) || 0;

  const handleAddPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.projectId || !formData.amount) return;

    const selectedProject = projects?.find(p => p.id === formData.projectId);
    if (!selectedProject) return;

    setLoading(true);
    try {
      const paymentId = `pay_${Date.now()}`;
      await setDoc(doc(firestore, "payments", paymentId), {
        id: paymentId,
        projectId: formData.projectId,
        clientId: selectedProject.clientId,
        amount: Number(formData.amount),
        status: formData.status,
        date: new Date().toISOString()
      });

      toast({ title: "Payment Logged", description: "Revenue has been updated in the ledger." });
      setFormData({ projectId: "", amount: "", status: "paid" });
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePayment = async (id: string) => {
    if (!confirm("Are you sure you want to remove this record?")) return;
    setDeletingId(id);
    try {
      await deleteDoc(doc(firestore, "payments", id));
      toast({ title: "Record Deleted", description: "Payment record removed from ledger." });
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9] pb-20">
      <AdminNavbar />
      <main className="max-w-7xl mx-auto px-6 pt-32 space-y-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-secondary tracking-tight">Revenue <span className="text-primary italic">Ledger.</span></h1>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest italic">Full amount vs Paid tracking</p>
          </div>
          <Card className="border-none shadow-sm rounded-2xl bg-white px-8 py-4 flex items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
              <IndianRupee className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Total Lifecycle Earnings</p>
              <p className="text-2xl font-black text-secondary">₹{totalEarnings.toLocaleString()}</p>
            </div>
          </Card>
        </div>

        {/* Project Balance Matrix */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {projects?.map(project => {
             const projectPayments = payments?.filter(p => p.projectId === project.id) || [];
             const paid = projectPayments.reduce((acc, p) => acc + Number(p.amount), 0);
             const remaining = (project.totalBudget || 0) - paid;
             const progress = Math.min(100, Math.round((paid / (project.totalBudget || 1)) * 100));

             return (
               <Card key={project.id} className="border-none shadow-sm rounded-[2rem] p-8 space-y-4">
                 <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-black text-secondary line-clamp-1">{project.name}</h4>
                      <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Project Balance</p>
                    </div>
                    <div className="text-[10px] font-black text-primary bg-primary/10 px-2 py-1 rounded-lg">
                      {progress}% Paid
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[8px] font-black text-muted-foreground uppercase">Total Value</p>
                      <p className="text-sm font-black text-secondary">₹{Number(project.totalBudget || 0).toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] font-black text-muted-foreground uppercase">Paid</p>
                      <p className="text-sm font-black text-emerald-600">₹{paid.toLocaleString()}</p>
                    </div>
                 </div>
                 <div className="pt-2">
                    <p className="text-[8px] font-black text-muted-foreground uppercase mb-1">Outstanding</p>
                    <p className="text-xl font-black text-amber-600">₹{remaining.toLocaleString()}</p>
                 </div>
                 <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 transition-all duration-1000" style={{ width: `${progress}%` }} />
                 </div>
               </Card>
             );
           })}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="border-none shadow-sm rounded-[2.5rem] overflow-hidden">
              <CardHeader className="bg-secondary p-8 text-white">
                <CardTitle className="text-xl font-black italic tracking-tight">New Transaction</CardTitle>
                <p className="text-xs text-white/40 font-bold uppercase mt-1 tracking-widest">Add installment record</p>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <form onSubmit={handleAddPayment} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Select Project Build</Label>
                    <Select onValueChange={(val) => setFormData({...formData, projectId: val})} value={formData.projectId}>
                      <SelectTrigger className="rounded-xl h-12">
                        <SelectValue placeholder="Choose project..." />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        {projects?.map(project => (
                          <SelectItem key={project.id} value={project.id}>{project.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Installment Amount (INR)</Label>
                    <Input 
                      type="number" 
                      placeholder="15000" 
                      required 
                      className="rounded-xl h-12"
                      value={formData.amount}
                      onChange={e => setFormData({...formData, amount: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Status</Label>
                    <Select onValueChange={(val) => setFormData({...formData, status: val})} value={formData.status}>
                      <SelectTrigger className="rounded-xl h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="paid">Paid (Verified)</SelectItem>
                        <SelectItem value="pending">Pending (Awaiting)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="pt-4">
                    <Button type="submit" disabled={loading} className="w-full h-12 bg-primary text-white rounded-xl font-black">
                      {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <Plus className="w-4 h-4 mr-2" />}
                      Post to Project Ledger
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <Card className="lg:col-span-2 border-none shadow-sm rounded-[2.5rem] overflow-hidden bg-white">
            <CardHeader className="bg-white border-b px-8 py-6">
              <CardTitle className="text-xl font-black text-secondary">Transaction Stream</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="px-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Date</TableHead>
                    <TableHead className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Project / Client</TableHead>
                    <TableHead className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Status</TableHead>
                    <TableHead className="text-right text-[10px] font-black uppercase tracking-widest text-muted-foreground">Amount</TableHead>
                    <TableHead className="px-8 text-right"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments?.map((payment) => {
                    const proj = projects?.find(p => p.id === payment.projectId);
                    const client = clients?.find(c => c.id === payment.clientId);
                    return (
                      <TableRow key={payment.id} className="hover:bg-muted/30">
                        <TableCell className="px-8 py-6 text-xs font-bold text-muted-foreground">
                          {new Date(payment.date).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                             <span className="font-bold text-secondary">{proj?.name || 'Unknown Project'}</span>
                             <span className="text-[9px] font-bold text-muted-foreground uppercase">{client?.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${payment.status === 'paid' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'}`}>
                            {payment.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right font-black text-secondary">
                          ₹{payment.amount.toLocaleString()}
                        </TableCell>
                        <TableCell className="px-8 text-right">
                           <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                            onClick={() => handleDeletePayment(payment.id)}
                            disabled={deletingId === payment.id}
                           >
                             {deletingId === payment.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                           </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {(!payments || payments.length === 0) && (
                    <TableRow>
                      <TableCell colSpan={5} className="py-20 text-center text-muted-foreground italic">
                        No transactions recorded.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
