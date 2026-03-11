"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, X, Send, Loader2, Sparkles, User, UserCheck } from "lucide-react";
import { budgetDevChat } from "@/ai/flows/budget-dev-chat-flow";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "model";
  content: string;
};

export default function BudgetDevChat() {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <div className="fixed bottom-24 right-6 z-[60]">
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-primary text-white shadow-2xl hover:scale-110 transition-all duration-300 group relative"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-[350px] md:w-[400px] h-[500px] flex flex-col shadow-2xl rounded-[2rem] border-muted/50 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-secondary p-5 flex items-center justify-between">
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
          <ScrollArea className="flex-1 p-6" ref={scrollRef}>
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
                      : "bg-muted/50 text-secondary rounded-tl-none border border-muted"
                  )}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex items-start gap-2">
                  <div className="bg-muted/50 p-3 rounded-2xl rounded-tl-none border border-muted">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <Input 
                placeholder="Ask me about services or pricing..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="rounded-xl border-muted focus-visible:ring-primary text-xs"
              />
              <Button size="icon" onClick={handleSend} disabled={loading} className="rounded-xl bg-secondary text-white shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
