import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Solutions Blog | Insights from The BudgetDev',
  description: 'Read the latest insights on software engineering, mobile app development, and digital growth strategies for Indian startups.',
  keywords: 'software development blog india, tech insights for startups, mobile app development tips, nextjs software engineering, budgetdev journal',
};

const blogPosts = [
  {
    title: "Why Fixed-Price Projects are Better for Small Businesses",
    excerpt: "Discover how budget control leads to better digital success without surprises.",
    date: "May 12, 2024",
    author: "Alex Miller",
    category: "Agency News",
    image: PlaceHolderImages.find(img => img.id === 'service-web')
  },
  {
    title: "10 Features Every Web App Needs in 2024",
    excerpt: "From AI integration to extreme performance, we break down the essentials.",
    date: "April 28, 2024",
    author: "Sarah Chen",
    category: "Insights",
    image: PlaceHolderImages.find(img => img.id === 'service-app')
  },
  {
    title: "Building Scalable Architecture on a Budget",
    excerpt: "Technical tips for startups wanting to grow fast without overspending on infra.",
    date: "April 15, 2024",
    author: "Mike Ross",
    category: "Tech",
    image: PlaceHolderImages.find(img => img.id === 'service-software')
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 space-y-6">
            <h1 className="text-5xl md:text-6xl font-headline font-bold text-secondary">The BudgetDev <span className="text-primary italic">Journal</span></h1>
            <p className="text-xl text-muted-foreground">
              Insights, news, and tips from the front lines of digital development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <Card key={idx} className="group border-none shadow-none bg-transparent overflow-hidden">
                <CardContent className="p-0 space-y-6">
                  <div className="relative aspect-video rounded-2xl overflow-hidden">
                    <Image 
                      src={post.image?.imageUrl || ""} 
                      alt={post.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={post.image?.imageHint}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{post.category}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                      <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
                    <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    <Link href="#" className="inline-flex items-center gap-2 font-bold text-sm text-secondary hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
