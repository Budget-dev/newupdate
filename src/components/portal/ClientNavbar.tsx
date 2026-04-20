
"use client";

import Link from "next/link";
import { useFirebase } from "@/firebase";
import { signOut } from "firebase/auth";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Activity, 
  MessageSquare, 
  LogOut,
  User
} from "lucide-react";

export default function ClientNavbar() {
  const { auth } = useFirebase();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/portal/login");
  };

  const navItems = [
    { name: "Overview", href: "/portal/client", icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: "Timeline", href: "/portal/client/progress", icon: <Activity className="w-4 h-4" /> },
    { name: "Chat", href: "/portal/client/chat", icon: <MessageSquare className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed top-6 left-6 right-6 z-[100] mx-auto max-w-7xl px-8 py-3 rounded-2xl border bg-white/95 backdrop-blur-md shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="shrink-0">
            <span className="font-headline font-black text-xl tracking-tight text-secondary italic">
              BudgetDev<span className="text-primary">.client</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[11px] font-black uppercase tracking-widest transition-colors flex items-center gap-2",
                  pathname === item.href ? "text-primary" : "text-secondary/60 hover:text-secondary"
                )}
              >
                {item.icon} {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-[9px] font-black uppercase tracking-widest">
            <User className="w-3.5 h-3.5" /> Client Access
          </div>
          <Button onClick={handleLogout} variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive">
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
