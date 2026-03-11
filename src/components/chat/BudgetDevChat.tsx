
"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, X, Send, Loader2, Sparkles, Phone } from "lucide-react";
import { budgetDevChat } from "@/ai/flows/budget-dev-chat-flow";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Message = {
  role: "user" | "model";
  content: string;
};

export default function BudgetDevChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCallout, setShowCallout] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", content: "Hi! I'm the BudgetDev AI. How can I help you build your next digital success today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);

    try {
      const history = messages.map(m => ({ role: m.role, content: m.content }));
      const result = await budgetDevChat({ message: userMessage, history });
      setMessages((prev) => [...prev, { role: "model", content: result.response }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "model", content: "Sorry, I encountered an error. Please contact Venkatesh directly at +91 8466006486." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleStartChat = () => {
    setShowCallout(false);
    setIsOpen(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4">
      {/* Callout Bubble */}
      {showCallout && !isOpen && (
        <div className="relative mb-2 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <Card className="bg-[#1A1A1A] text-white p-5 rounded-[1.5rem] border-none shadow-2xl w-[260px] md:w-[280px] relative">
            <button 
              onClick={() => setShowCallout(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="space-y-4">
              <p className="text-[14px] font-bold leading-tight pr-4">
                Hey! 👋 Do you have any questions about our websites?
              </p>
              <button 
                onClick={handleStartChat}
                className="text-primary text-[11px] font-black uppercase tracking-[0.1em] hover:brightness-110 transition-all flex items-center gap-1.5"
              >
                START CHAT
              </button>
            </div>
            {/* Triangle Tip */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#1A1A1A] rotate-45" />
          </Card>
        </div>
      )}

      {/* Vertical Button Stack */}
      {!isOpen && (
        <div className="flex flex-col gap-3 items-center">
          {/* Chat Toggle Button */}
          <Button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-[#1A1A1A] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-white/10"
          >
            <MessageSquare className="w-6 h-6" />
          </Button>

          {/* WhatsApp Button */}
          <Link 
            href="https://wa.me/918466006486" 
            target="_blank"
            className="w-14 h-14 rounded-full bg-[#00d757] flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <svg className="w-7 h-7 fill-white" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </Link>

          {/* Phone Button */}
          <Link 
            href="tel:+918466006486" 
            className="w-14 h-14 rounded-full bg-[#1A1A1A] flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-white/10"
          >
            <Phone className="w-6 h-6 text-white" />
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
                <h3 className="font-black text-white text-sm leading-none italic">BudgetDev AI</h3>
                <p className="text-[10px] text-white/40 mt-1 font-bold uppercase tracking-widest">Assistant online</p>
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
                    "p-4 rounded-2xl text-xs font-medium leading-relaxed shadow-sm",
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
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-muted">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-5 border-t bg-white">
            <div className="flex gap-2">
              <Input 
                placeholder="Ask about services or pricing..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="rounded-xl border-muted focus-visible:ring-primary text-xs h-11"
              />
              <Button size="icon" onClick={handleSend} disabled={loading} className="rounded-xl bg-secondary text-white shrink-0 h-11 w-11">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
