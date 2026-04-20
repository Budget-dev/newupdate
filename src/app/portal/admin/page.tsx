
"use client";

import { useFirebase, useCollection } from "@/firebase";
import { collection, query, where, orderBy, limit } from "firebase/firestore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  Clock, 
  Plus, 
  ArrowRight,
  IndianRupee,
  Activity
} from "lucide-react";
import AdminNavbar from "@/components/portal/AdminNavbar";
import { useMemo } from "react";

export default function AdminDashboard() {
  const { firestore } = useFirebase();

  // Queries
  const clientsQuery = useMemo(() => query(collection(firestore, "users"), where("role", "==", "client")), [firestore]);
  const projectsQuery = useMemo(() => query(collection(firestore, "projects"), limit(5)), [firestore]);
  const paymentsQuery = useMemo(() => query(collection(firestore, "payments"), orderBy("date", "desc"), limit(5)), [firestore]);

  const { data: clients } = useCollection(clientsQuery);
  const { data: projects } = useCollection(projectsQuery);
  const { data: payments } = useCollection(paymentsQuery);

  const stats = [
    { label: "Total Clients", value: clients?.length || 0, icon: <Users className="w-5 h-5" />, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Active Projects", value: projects?.filter(p => p.status === "In Progress").length || 0, icon: <Briefcase className="w-5 h-5" />, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { label: "Monthly Revenue", value: `₹${payments?.reduce((acc, p) => acc + (p.amount || 0), 0).toLocaleString() || 0}`, icon: <IndianRupee className="w-5 h-5" />, color: "text-amber-500", bg: "bg-amber-500/10" },
    { label: "Global Uptime", value: "99.9%", icon: <Activity className="w-5 h-5" />, color: "text-primary", bg: "bg-primary/10" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAF9] pb-20">
      <AdminNavbar />
      <main className="max-w-7xl mx-auto px-6 pt-32 space-y-12">
        
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-4xl font-black text-secondary tracking-tight">Admin <span className="text-primary italic">Command.</span></h1>
            <p className="text-muted-foreground font-medium uppercase text-[10px] tracking-widest">Enterprise Software Management</p>
          </div>
          <div className="flex gap-3">
            <Button asChild className="rounded-xl bg-secondary text-white h-11 px-6 font-bold shadow-lg shadow-secondary/10">
              <Link href="/portal/admin/projects/new"><Plus className="w-4 h-4 mr-2" /> New Project</Link>
            </Button>
          </div>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Card key={i} className="border-none shadow-sm rounded-[2rem] overflow-hidden">
              <CardContent className="p-8 flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                  {stat.icon}
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                  <p className="text-3xl font-black text-secondary tracking-tight">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Projects */}
          <Card className="lg:col-span-2 border-none shadow-sm rounded-[2.5rem] overflow-hidden">
            <CardHeader className="bg-white border-b px-8 py-6 flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-black text-secondary">Active Projects</CardTitle>
              <Button asChild variant="ghost" size="sm" className="text-primary font-bold text-xs uppercase">
                <Link href="/portal/admin/projects">View All <ArrowRight className="w-3 h-3 ml-1" /></Link>
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {projects?.map((project) => (
                  <div key={project.id} className="px-8 py-6 flex items-center justify-between hover:bg-muted/30 transition-colors">
                    <div className="space-y-1">
                      <h4 className="font-bold text-secondary">{project.name}</h4>
                      <p className="text-xs text-muted-foreground">Status: {project.status}</p>
                    </div>
                    <div className="flex items-center gap-6 text-right">
                      <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Progress</p>
                        <p className="text-sm font-black text-primary">{project.progress}%</p>
                      </div>
                      <Button asChild size="sm" variant="outline" className="rounded-lg h-8 text-[10px] font-black uppercase">
                        <Link href={`/portal/admin/projects/${project.id}`}>Update</Link>
                      </Button>
                    </div>
                  </div>
                ))}
                {(!projects || projects.length === 0) && (
                  <div className="p-12 text-center text-muted-foreground italic text-sm">
                    No projects found. Create your first one above.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Recent Revenue */}
          <Card className="border-none shadow-sm rounded-[2.5rem] overflow-hidden">
            <CardHeader className="bg-white border-b px-8 py-6">
              <CardTitle className="text-xl font-black text-secondary">Recent Revenue</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              {payments?.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                      <IndianRupee className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-secondary">Payment</p>
                      <p className="text-[10px] text-muted-foreground">{new Date(payment.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <p className="text-sm font-black text-emerald-600">+₹{payment.amount}</p>
                </div>
              ))}
              <Button asChild className="w-full rounded-xl bg-secondary text-white font-bold h-11">
                <Link href="/portal/admin/payments">Manage Ledger</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

      </main>
    </div>
  );
}
