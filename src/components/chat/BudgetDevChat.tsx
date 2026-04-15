"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, X, Send, Loader2, Sparkles, Phone, Smartphone, Globe } from "lucide-react";
import { budgetDevChat } from "@/ai/flows/budget-dev-chat-flow";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { doc, setDoc } from "firebase/firestore";
import { signInAnonymously } from "firebase/auth";
import { useFirebase, useUser } from "@/firebase";
import { errorEmitter } from "@/firebase/error-emitter";
import { FirestorePermissionError } from "@/firebase/errors";

type Message = {
  role: "user" | "model";
  content: string;
};

export default function BudgetDevChat() {
  const { firestore, auth } = useFirebase();
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [showCallout, setShowCallout] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", content: "Hi! I'm the BudgetDev AI. Are you planning for a website or a mobile app for your business?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, loading]);

  // Show friendly card after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCallout(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Ensure user is signed in anonymously to allow Firestore writes
  useEffect(() => {
    if (auth && !user) {
      signInAnonymously(auth).catch(err => console.error("Anonymous Auth Error:", err));
    }
  }, [auth, user]);

  const extractContactInfo = (text: string) => {
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
    const phoneRegex = /(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/g;
    
    const emailMatch = text.match(emailRegex);
    const phoneMatch = text.match(phoneRegex);
    
    return {
      email: emailMatch ? emailMatch[0] : null,
      phone: phoneMatch ? phoneMatch[0] : null
    };
  };

  const handleSend = async (forcedMessage?: string) => {
    const userMessage = (forcedMessage || input).trim();
    if (!userMessage || loading) return;

    if (!forcedMessage) setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);

    try {
      const currentHistory = messages.map(m => ({ role: m.role, content: m.content }));
      const result = await budgetDevChat({ message: userMessage, history: currentHistory });
      setMessages((prev) => [...prev, { role: "model", content: result.response }]);

      // Check if user provided contact info in their message
      const contactInfo = extractContactInfo(userMessage);
      if ((contactInfo.email || contactInfo.phone) && firestore && user) {
        const inquiryId = `chat_lead_${Date.now()}`;
        const docRef = doc(firestore, "inquiries", inquiryId);
        
        const leadData = {
          id: inquiryId,
          fullName: "Chat Lead",
          email: contactInfo.email || "not provided",
          phoneNumber: contactInfo.phone || "not provided",
          message: `Last Message: ${userMessage} | Bot Context: ${result.response}`,
          submittedAt: new Date().toISOString(),
          isHandled: false,
          inquiryType: userMessage.toLowerCase().includes('app') ? 'Mobile App' : 'Website'
        };

        // Save to Firestore Inquiries (Admin Panel) - Non-blocking
        setDoc(docRef, leadData).catch(async (serverError) => {
          errorEmitter.emit('permission-error', new FirestorePermissionError({
            path: docRef.path,
            operation: 'create',
            requestResourceData: leadData,
          }));
        });
      }

    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [...prev, { role: "model", content: "Sorry, I hit a snag. Please reach out to Venkatesh at +91 8466006486!" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleStartChat = (initialIntent?: string) => {
    setShowCallout(false);
    setIsOpen(true);
    if (initialIntent) {
      handleSend(initialIntent);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4">
      {/* Friendly Project Planner Card */}
      {showCallout && !isOpen && (
        <div className="relative mb-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Card className="bg-[#1A1A1A] text-white p-6 rounded-[2rem] border-none shadow-2xl w-[280px] md:w-[320px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-all" />
            
            <button 
              onClick={() => setShowCallout(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-5 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest">Growth Planner</p>
                  <p className="text-xs font-bold text-white/60">Venkatesh & Shankar</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-black leading-tight italic">
                  Let's build your <br /> next big thing.
                </h4>
                <p className="text-xs text-white/50 font-medium leading-relaxed">
                  Are you planning for a website or a mobile app? We'll prepare a free roadmap for you.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => handleStartChat("I'm interested in building a website.")}
                  className="w-full h-11 bg-primary hover:bg-primary/90 text-white rounded-xl text-[11px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                >
                  <Globe className="w-3.5 h-3.5" /> Start Website
                </button>
                <button 
                  onClick={() => handleStartChat("I want to build a mobile app.")}
                  className="w-full h-11 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                >
                  <Smartphone className="w-3.5 h-3.5" /> Build Mobile App
                </button>
              </div>
            </div>
            {/* Triangle Tip */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#1A1A1A] rotate-45" />
          </Card>
        </div>
      )}

      {/* Bubble Icons */}
      {!isOpen && (
        <div className="flex flex-col gap-3 items-center">
          <Button
            onClick={() => handleStartChat()}
            className="w-14 h-14 rounded-full bg-[#1A1A1A] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-white/10 group"
          >
            <MessageSquare className="w-6 h-6 group-hover:text-primary transition-colors" />
          </Button>

          <Link 
            href="https://wa.me/918466006486" 
            target="_blank"
            className="w-14 h-14 rounded-full bg-[#00d757] flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <svg className="w-7 h-7 fill-white" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </Link>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-[320px] md:w-[400px] h-[500px] md:h-[550px] flex flex-col shadow-2xl rounded-[2.5rem] border-none overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-secondary p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-black text-white text-sm leading-none italic">BudgetDev Assistant</h3>
                <p className="text-[10px] text-white/40 mt-1 font-bold uppercase tracking-widest">Online & Ready</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white">
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-6 bg-[#FDFDFD]" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={cn(
                  "flex flex-col max-w-[85%]",
                  msg.role === "user" ? "ml-auto items-end" : "items-start"
                )}>
                  <div className={cn(
                    "p-4 rounded-2xl text-[13px] font-medium leading-relaxed shadow-sm",
                    msg.role === "user" 
                      ? "bg-primary text-white rounded-tr-none" 
                      : "bg-white text-secondary rounded-tl-none border border-muted"
                  )}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex items-start gap-2">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-muted flex items-center gap-1">
                    <Loader2 className="w-3 h-3 animate-spin text-primary" />
                    <span className="text-[10px] font-bold text-muted-foreground uppercase">Typing...</span>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-5 border-t bg-white">
            <div className="flex gap-2">
              <Input 
                placeholder="Type your reply..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="rounded-xl border-muted focus-visible:ring-primary text-sm h-11"
              />
              <Button size="icon" onClick={() => handleSend()} disabled={loading} className="rounded-xl bg-secondary text-white shrink-0 h-11 w-11">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
