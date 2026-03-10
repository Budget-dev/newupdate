"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { aiDraftServiceDescription } from "@/ai/flows/ai-draft-service-description-flow";
import { aiDraftBlogPostOutline } from "@/ai/flows/ai-draft-blog-post-outline";
import { aiDraftPortfolioSummary } from "@/ai/flows/ai-draft-portfolio-summary";
import { Loader2, Sparkles, Copy, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AIDraftTool() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{title?: string, content: string} | null>(null);

  // Form states
  const [keywords, setKeywords] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [blogTopic, setBlogTopic] = useState("");
  const [projectTitle, setProjectTitle] = useState("");

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result.content);
      toast({ title: "Copied!", description: "Content copied to clipboard." });
    }
  };

  const generateService = async () => {
    setLoading(true);
    try {
      const res = await aiDraftServiceDescription({
        keywords: keywords.split(",").map(k => k.trim()),
        serviceType
      });
      setResult({ title: res.title, content: res.description });
    } catch (err) {
      toast({ title: "Error", description: "Failed to generate description.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const generateBlogOutline = async () => {
    setLoading(true);
    try {
      const res = await aiDraftBlogPostOutline({
        topic: blogTopic,
        keywords: keywords.split(",").map(k => k.trim())
      });
      setResult({ content: res.outline });
    } catch (err) {
      toast({ title: "Error", description: "Failed to generate outline.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const generatePortfolio = async () => {
    setLoading(true);
    try {
      const res = await aiDraftPortfolioSummary({
        projectTitle,
        clientName: "Valued Client",
        projectDescription: "A modern digital solution built for business growth.",
        technologiesUsed: keywords.split(",").map(k => k.trim()),
        keyAchievements: ["Completed on time", "Positive client feedback"]
      });
      setResult({ content: res.summary });
    } catch (err) {
      toast({ title: "Error", description: "Failed to generate summary.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3 h-3" /> AI Content Assistant
              </div>
              <h1 className="text-4xl font-headline font-bold text-secondary">Draft Tool</h1>
              <p className="text-muted-foreground">Accelerate your content creation with BudgetDev's custom AI.</p>
            </div>
            {result && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setResult(null)} className="rounded-lg">
                  <Trash2 className="w-4 h-4 mr-2" /> Clear
                </Button>
                <Button size="sm" onClick={handleCopy} className="rounded-lg bg-secondary text-secondary-foreground">
                  <Copy className="w-4 h-4 mr-2" /> Copy to Clipboard
                </Button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-8">
              <Tabs defaultValue="service" className="w-full">
                <TabsList className="grid w-full grid-cols-3 rounded-xl">
                  <TabsTrigger value="service">Service</TabsTrigger>
                  <TabsTrigger value="blog">Blog</TabsTrigger>
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                </TabsList>
                
                <TabsContent value="service" className="space-y-6 pt-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Service Type</Label>
                      <Input placeholder="e.g. Web Design" value={serviceType} onChange={e => setServiceType(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Keywords (comma separated)</Label>
                      <Input placeholder="responsive, fast, modern" value={keywords} onChange={e => setKeywords(e.target.value)} />
                    </div>
                    <Button onClick={generateService} disabled={loading} className="w-full bg-primary text-primary-foreground">
                      {loading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2 w-4 h-4" />}
                      Generate Description
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="blog" className="space-y-6 pt-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Blog Topic</Label>
                      <Input placeholder="The Future of Next.js" value={blogTopic} onChange={e => setBlogTopic(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Key Points (comma separated)</Label>
                      <Input placeholder="RSC, Server Actions, Speed" value={keywords} onChange={e => setKeywords(e.target.value)} />
                    </div>
                    <Button onClick={generateBlogOutline} disabled={loading} className="w-full bg-primary text-primary-foreground">
                      {loading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2 w-4 h-4" />}
                      Generate Outline
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="portfolio" className="space-y-6 pt-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Project Title</Label>
                      <Input placeholder="Eco E-commerce App" value={projectTitle} onChange={e => setProjectTitle(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label>Tech Stack (comma separated)</Label>
                      <Input placeholder="React, Node, MongoDB" value={keywords} onChange={e => setKeywords(e.target.value)} />
                    </div>
                    <Button onClick={generatePortfolio} disabled={loading} className="w-full bg-primary text-primary-foreground">
                      {loading ? <Loader2 className="animate-spin mr-2" /> : <Sparkles className="mr-2 w-4 h-4" />}
                      Generate Summary
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="lg:col-span-2">
              <Card className="h-full border-muted/50 shadow-lg rounded-3xl overflow-hidden min-h-[500px]">
                <CardHeader className="border-b bg-muted/20">
                  <CardTitle className="text-xl">Generation Result</CardTitle>
                  <CardDescription>Generated content will appear here.</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="h-[400px] p-8">
                    {result ? (
                      <div className="prose prose-sm max-w-none space-y-4 text-secondary leading-relaxed">
                        {result.title && <h2 className="text-2xl font-bold text-primary">{result.title}</h2>}
                        <div className="whitespace-pre-wrap">{result.content}</div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-muted-foreground space-y-4 mt-20">
                        <Sparkles className="w-12 h-12 opacity-20" />
                        <p>Waiting for you to spark some magic...</p>
                      </div>
                    )}
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}