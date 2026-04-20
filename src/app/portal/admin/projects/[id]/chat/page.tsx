
"use client";

import { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import { useFirebase, useDoc, useCollection, useMemoFirebase } from "@/firebase";
import { collection, query, orderBy, addDoc, serverTimestamp, doc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Loader2, MessageSquare, ArrowLeft, ShieldCheck } from "lucide-react";
import AdminNavbar from "@/components/portal/AdminNavbar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";

export default function AdminProjectChatPage() {
  const params = useParams();
  const projectId = params?.id as string;
  const { firestore, user, isUserLoading } = useFirebase();
  const [input, setInput] = useState("");
  const [sending, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const projectRef = useMemoFirebase(() => {
    if (!projectId) return null;
    return doc(firestore, "projects", projectId);
  }, [firestore, projectId]);
  
  const { data: project } = useDoc(projectRef);

  const messagesQuery = useMemoFirebase(() => {
    if (!projectId) return null;
    return query(collection(firestore, "projects", projectId, "messages"), orderBy("timestamp", "asc"));
  }, [firestore, projectId]);
  
  const { data: messages, isLoading: messagesLoading } = useCollection(messagesQuery);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages?.length]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !projectId || !user || sending) return;

    const messageData = {
      projectId: projectId,
      senderId: user.uid,
      message: input.trim(),
      timestamp: serverTimestamp()
    };

    setInput("");
    
    addDoc(collection(firestore, "projects", projectId, "messages"), messageData)
      .catch(async (err) => {
        errorEmitter.emit('permission-error', new FirestorePermissionError({
          path: `projects/${projectId}/messages`,
          operation: 'create',
          requestResourceData: messageData
        }));
      });
  };

  if (isUserLoading) {
    return (
      <div className="min-h-screen bg-[#F8FAF9] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAF9] flex flex-col">
      <AdminNavbar />
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 pt-32 pb-10 flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <Button asChild variant="ghost" className="rounded-xl text-muted-foreground font-bold hover:text-secondary -ml-4">
            <Link href={`/portal/admin/projects/${projectId}`}><ArrowLeft className="w-4 h-4 mr-2" /> Project Management</Link>
          </Button>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
            <ShieldCheck className="w-3 h-3" /> Admin Build Line
          </div>
        </div>

        <Card className="flex-1 border-none shadow-2xl rounded-[3rem] bg-white overflow-hidden flex flex-col min-h-[500px]">
          <div className="bg-secondary p-8 text-white flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-black italic tracking-tighter">Chat with Client</h2>
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">{project?.name || "Loading..."}</p>
              </div>
            </div>
          </div>

          <ScrollArea className="flex-1 p-8" ref={scrollRef}>
            <div className="space-y-6">
              {messagesLoading && !messages && (
                <div className="flex flex-col items-center justify-center py-20 gap-3">
                  <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Syncing Line...</p>
                </div>
              )}

              {messages?.map((msg) => (
                <div key={msg.id} className={cn(
                  "flex flex-col max-w-[80%]",
                  msg.senderId === user?.uid ? "ml-auto items-end" : "items-start"
                )}>
                  <div className={cn(
                    "p-6 rounded-[2rem] text-sm font-medium leading-relaxed",
                    msg.senderId === user?.uid 
                      ? "bg-secondary text-white rounded-tr-none shadow-lg shadow-secondary/10" 
                      : "bg-muted/50 text-secondary rounded-tl-none"
                  )}>
                    {msg.message}
                  </div>
                  <span className="mt-2 text-[9px] font-black text-muted-foreground uppercase tracking-widest">
                    {msg.timestamp?.seconds ? new Date(msg.timestamp.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Sending...'}
                  </span>
                </div>
              ))}

              {messages && messages.length === 0 && !messagesLoading && (
                <div className="text-center py-20 text-muted-foreground italic text-sm">
                  Send a welcome message to the client.
                </div>
              )}
            </div>
          </ScrollArea>

          <form onSubmit={handleSend} className="p-6 border-t bg-muted/20">
            <div className="flex gap-3">
              <Input 
                placeholder="Reply to client..." 
                className="rounded-2xl h-14 bg-white border-none focus-visible:ring-primary shadow-sm px-6"
                value={input}
                onChange={e => setInput(e.target.value)}
              />
              <Button type="submit" disabled={sending || !projectId} className="w-14 h-14 rounded-2xl bg-primary text-white shadow-xl shadow-primary/10 shrink-0">
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </form>
        </Card>
      </main>
    </div>
  );
}
