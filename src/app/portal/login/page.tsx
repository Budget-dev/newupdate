
"use client";

import { useState, useEffect } from "react";
import { useFirebase } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ShieldCheck, User } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

export default function LoginPage() {
  const { auth, firestore, user, isUserLoading } = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (user && !isUserLoading) {
      checkRoleAndRedirect(user.uid);
    }
  }, [user, isUserLoading]);

  const checkRoleAndRedirect = async (uid: string) => {
    try {
      const userDoc = await getDoc(doc(firestore, "users", uid));
      if (userDoc.exists()) {
        const role = userDoc.data().role;
        if (role === "admin") router.push("/portal/admin");
        else router.push("/portal/client");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirection handled by useEffect
    } catch (err: any) {
      toast({
        title: "Login Failed",
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
          <div className="bg-secondary p-8 text-center text-white space-y-2">
            <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-2" />
            <h1 className="text-2xl font-black italic tracking-tighter">BudgetDev Portal</h1>
            <p className="text-xs text-white/50 uppercase font-bold tracking-widest">Client & Admin Access</p>
          </div>
          <CardContent className="p-8 space-y-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@budgetdev.in" 
                  required 
                  className="rounded-xl h-12"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  className="rounded-xl h-12"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full h-12 rounded-xl bg-secondary text-white font-black hover:scale-[1.02] transition-transform">
                {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <User className="w-4 h-4 mr-2" />}
                Sign In to Portal
              </Button>
            </form>
            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                Having trouble? Contact support on WhatsApp.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
