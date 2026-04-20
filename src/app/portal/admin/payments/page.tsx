"use client";

import { useState } from "react";
import { useFirebase, useCollection, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy, doc, setDoc, where } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { IndianRupee, Plus, Loader2 } from "lucide-react";
import AdminNavbar from "@/components/portal/AdminNavbar";

export default function PaymentsPage() {
  const { firestore, user } = useFirebase();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const paymentsQuery = useMemoFirebase(() => {
    if (!user) return null;
    return query(collection(firestore, "payments"), orderBy("date", "desc"));
  }, [firestore, user]);

  const clientsQuery = useMemoFirebase(() => {
    if (!user) return null;
    return query(collection(firestore, "users"), where("role", "==", "client"));
  }, [firestore, user]);

  const { data: payments } = useCollection(paymentsQuery);
  const { data: clients } = useCollection(clientsQuery);

  const [formData, setFormData] = useState({
    clientId: "",
    amount: "",
    status: "paid"
  });

  const totalEarnings = payments?.reduce((acc, p) => acc + Number(p.amount), 0) || 0;

  const handleAddPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientId || !formData.amount) return;

    setLoading(true);
    try {
      const paymentId = `pay_${Date.now()}`;
      await setDoc(doc(firestore, "payments", paymentId), {
        id: paymentId,
        clientId: formData.clientId,
        amount: Number(formData.amount),
        status: formData.status,
        date: new Date().toISOString()
      });

      toast({ title: "Payment Logged", description: "Revenue has been updated in the ledger." });
      setFormData({ clientId: "", amount: "", status: "paid" });
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9] pb-20">
      <AdminNavbar />
      <main className="max-w-7xl mx-auto px-6 pt-32 space-y-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-secondary tracking-tight">Revenue <span className="text-primary italic">Ledger.</span></h1>
            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest italic">Khatabook style tracking</p>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="border-none shadow-sm rounded-[2.5rem] overflow-hidden">
              <CardHeader className="bg-secondary p-8 text-white">
                <CardTitle className="text-xl font-black italic tracking-tight">New Transaction</CardTitle>
                <p className="text-xs text-white/40 font-bold uppercase mt-1 tracking-widest">Add inflow record</p>
              </CardHeader>
              <CardContent className="p-8 space-y-4">
                <form onSubmit={handleAddPayment} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Select Client</Label>
                    <Select onValueChange={(val) => setFormData({...formData, clientId: val})} value={formData.clientId}>
                      <SelectTrigger className="rounded-xl h-12">
                        <SelectValue placeholder="Choose client..." />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        {clients?.map(client => (
                          <SelectItem key={client.id} value={client.id}>{client.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Amount (INR)</Label>
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
                        <SelectItem value="paid">Paid</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="pt-4">
                    <Button type="submit" disabled={loading} className="w-full h-12 bg-primary text-white rounded-xl font-black">
                      {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <Plus className="w-4 h-4 mr-2" />}
                      Add to Ledger
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          <Card className="lg:col-span-2 border-none shadow-sm rounded-[2.5rem] overflow-hidden bg-white">
            <CardHeader className="bg-white border-b px-8 py-6">
              <CardTitle className="text-xl font-black text-secondary">Transaction History</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="px-8 text-[10px] font-black uppercase tracking-widest text-muted-foreground">Date</TableHead>
                    <TableHead className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Client</TableHead>
                    <TableHead className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Status</TableHead>
                    <TableHead className="px-8 text-right text-[10px] font-black uppercase tracking-widest text-muted-foreground">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments?.map((payment) => (
                    <TableRow key={payment.id} className="hover:bg-muted/30">
                      <TableCell className="px-8 py-6 text-xs font-bold text-muted-foreground">
                        {new Date(payment.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="font-bold text-secondary">
                        {clients?.find(c => c.id === payment.clientId)?.name || 'Unknown Client'}
                      </TableCell>
                      <TableCell>
                        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${payment.status === 'paid' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'}`}>
                          {payment.status}
                        </span>
                      </TableCell>
                      <TableCell className="px-8 text-right font-black text-secondary">
                        ₹{payment.amount.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                  {(!payments || payments.length === 0) && (
                    <TableRow>
                      <TableCell colSpan={4} className="py-20 text-center text-muted-foreground italic">
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