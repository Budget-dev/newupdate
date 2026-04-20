
"use client";

import { useState } from "react";
import { useFirebase } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ShieldAlert, Key } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

export default function AdminInitPage() {
  const { auth, firestore } = useFirebase();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const ADMIN_EMAIL = "venkateshchop14@gmail.com";

  const handleInit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast({ title: "Passwords Mismatch", variant: "destructive" });
    }

    setLoading(true);
    try {
      // 1. Create Auth User
      const userCredential = await createUserWithEmailAndPassword(auth, ADMIN_EMAIL, password);
      const user = userCredential.user;

      // 2. Create Firestore Admin Document
      await setDoc(doc(firestore, "users", user.uid), {
        uid: user.uid,
        name: "Venkatesh Choppa",
        email: ADMIN_EMAIL,
        role: "admin",
        createdAt: new Date().toISOString()
      });

      toast({
        title: "Admin Initialized",
        description: "Welcome, Venkatesh. Your root admin access is ready.",
      });
      
      router.push("/portal/admin");
    } catch (err: any) {
      toast({
        title: "Initialization Failed",
        description: err.message,
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-md shadow-2xl rounded-[2.5rem] border-none overflow-hidden animate-in fade-in zoom-in duration-500">
          <div className="bg-primary p-8 text-center text-white space-y-2">
            <ShieldAlert className="w-12 h-12 text-secondary mx-auto mb-2" />
            <h1 className="text-2xl font-black italic tracking-tighter">Root Admin Setup</h1>
            <p className="text-xs text-white/70 uppercase font-bold tracking-widest">Initialization for {ADMIN_EMAIL}</p>
          </div>
          <CardContent className="p-8 space-y-6">
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 text-amber-700 text-xs font-medium">
              This is a one-time initialization. Create your password to secure the portal.
            </div>
            
            <form onSubmit={handleInit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Create Admin Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  placeholder="••••••••"
                  className="rounded-xl h-12"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm">Confirm Password</Label>
                <Input 
                  id="confirm" 
                  type="password" 
                  required 
                  placeholder="••••••••"
                  className="rounded-xl h-12"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full h-12 rounded-xl bg-secondary text-white font-black hover:scale-[1.02] transition-transform">
                {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Key className="w-4 h-4 mr-2" />}
                Complete Setup
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
