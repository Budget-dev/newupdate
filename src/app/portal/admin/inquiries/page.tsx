
"use client";

import { useFirebase, useCollection, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy } from "firebase/firestore";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Mail, Phone, Calendar, Loader2, MessageSquare } from "lucide-react";
import AdminNavbar from "@/components/portal/AdminNavbar";

export default function AdminInquiries() {
  const { firestore, user } = useFirebase();

  const inquiriesQuery = useMemoFirebase(() => {
    if (!user) return null;
    return query(collection(firestore, "inquiries"), orderBy("submittedAt", "desc"));
  }, [firestore, user]);

  const { data: inquiries, isLoading } = useCollection(inquiriesQuery);

  return (
    <div className="min-h-screen bg-[#F8FAF9] pb-20">
      <AdminNavbar />
      <main className="max-w-7xl mx-auto px-6 pt-32 space-y-8">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-secondary">Captured <span className="text-primary italic">Leads.</span></h1>
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Inquiries from AI Assistant</p>
        </div>

        <Card className="border-none shadow-sm rounded-[2.5rem] overflow-hidden">
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-white">
                <TableRow>
                  <TableHead className="px-8 font-black uppercase text-[10px] tracking-widest text-muted-foreground">Prospect</TableHead>
                  <TableHead className="font-black uppercase text-[10px] tracking-widest text-muted-foreground">Contact</TableHead>
                  <TableHead className="font-black uppercase text-[10px] tracking-widest text-muted-foreground">Intent</TableHead>
                  <TableHead className="font-black uppercase text-[10px] tracking-widest text-muted-foreground">Message Snippet</TableHead>
                  <TableHead className="px-8 text-right font-black uppercase text-[10px] tracking-widest text-muted-foreground">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inquiries?.map((lead) => (
                  <TableRow key={lead.id} className="hover:bg-muted/30">
                    <TableCell className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-black text-xs">
                          {lead.fullName?.charAt(0)}
                        </div>
                        <span className="font-bold text-secondary">{lead.fullName}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-secondary">
                          <Mail className="w-3 h-3 text-muted-foreground" /> {lead.email}
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                          <Phone className="w-3 h-3" /> {lead.phoneNumber}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="rounded-lg text-[9px] font-black uppercase tracking-widest bg-primary/10 text-primary border-none">
                        {lead.inquiryType}
                      </Badge>
                    </TableCell>
                    <TableCell className="max-w-[200px]">
                      <p className="text-xs text-muted-foreground truncate italic">"{lead.message}"</p>
                    </TableCell>
                    <TableCell className="px-8 text-right text-[10px] font-bold text-muted-foreground">
                      {new Date(lead.submittedAt).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
                {(!inquiries || inquiries.length === 0) && !isLoading && (
                  <TableRow>
                    <TableCell colSpan={5} className="py-32 text-center">
                      <div className="space-y-3 opacity-20">
                        <MessageSquare className="w-12 h-12 mx-auto" />
                        <p className="font-black italic text-lg uppercase tracking-widest">No leads captured yet.</p>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
                {isLoading && (
                  <TableRow>
                    <TableCell colSpan={5} className="py-20 text-center">
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
