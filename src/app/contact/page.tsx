"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Request Sent!",
      description: "We'll get back to you with a free project draft within 24 hours.",
    });
  };

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex items-center justify-center pt-20">
          <div className="text-center space-y-6 max-w-md px-6 animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto">
              <CheckCircle className="w-12 h-12" />
            </div>
            <h1 className="text-4xl font-headline font-bold text-secondary">Thank You!</h1>
            <p className="text-muted-foreground">
              Your request has been received. Our team is already brainstorming your project's initial draft. You'll hear from us soon.
            </p>
            <Button variant="outline" className="rounded-full" onClick={() => setSubmitted(false)}>
              Send another request
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-headline font-bold text-secondary">Let's build your <span className="text-primary italic">next big thing</span>.</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Fill out the form to get a free project draft. We'll analyze your requirements and provide a visual concept and a roadmap.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Free Initial Draft</h3>
                  <p className="text-muted-foreground">Receive a basic design and concept proposal at no cost.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Fast Response</h3>
                  <p className="text-muted-foreground">We typically reply within one business day.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-muted/50">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required className="rounded-xl h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="rounded-xl h-12" />
                </div>
              </div>

              <div className="space-y-4">
                <Label>What do you need?</Label>
                <RadioGroup defaultValue="web-app" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 border p-4 rounded-xl cursor-pointer hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value="web-design" id="web-design" />
                    <Label htmlFor="web-design" className="cursor-pointer">Web Design</Label>
                  </div>
                  <div className="flex items-center space-x-2 border p-4 rounded-xl cursor-pointer hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value="web-app" id="web-app" />
                    <Label htmlFor="web-app" className="cursor-pointer">Web Application</Label>
                  </div>
                  <div className="flex items-center space-x-2 border p-4 rounded-xl cursor-pointer hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value="software" id="software" />
                    <Label htmlFor="software" className="cursor-pointer">Custom Software</Label>
                  </div>
                  <div className="flex items-center space-x-2 border p-4 rounded-xl cursor-pointer hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="cursor-pointer">Other</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Description</Label>
                <Textarea id="message" placeholder="Tell us about your project goals and requirements..." className="min-h-[150px] rounded-xl" required />
              </div>

              <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground h-14 rounded-xl text-lg font-bold shadow-xl shadow-secondary/10">
                Request Free Draft <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}