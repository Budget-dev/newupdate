import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "EcoShop E-commerce",
    client: "EcoWorld Ltd",
    category: "Web App",
    image: PlaceHolderImages.find(img => img.id === 'project-1'),
    tags: ["Next.js", "Stripe", "Tailwind"]
  },
  {
    title: "FinTrack Dashboard",
    client: "Modern Finance Inc",
    category: "Software",
    image: PlaceHolderImages.find(img => img.id === 'project-2'),
    tags: ["React", "D3.js", "Supabase"]
  },
  {
    title: "HealthConnect Portal",
    client: "City Hospital",
    category: "Web App",
    image: PlaceHolderImages.find(img => img.id === 'project-3'),
    tags: ["Node.js", "GraphQL", "Azure"]
  },
  {
    title: "Portfolio One",
    client: "Design Studio",
    category: "Web Design",
    image: PlaceHolderImages.find(img => img.id === 'service-web'),
    tags: ["Figma", "Webflow"]
  }
];

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 space-y-6">
            <h1 className="text-5xl md:text-6xl font-headline font-bold text-secondary">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground">
              A showcase of our recent projects, digital solutions, and creative collaborations. We let our work speak for itself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, idx) => (
              <Card key={idx} className="group border-none bg-transparent shadow-none overflow-hidden">
                <CardContent className="p-0 space-y-6">
                  <div className="relative aspect-video rounded-3xl overflow-hidden">
                    <Image 
                      src={project.image?.imageUrl || ""} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      data-ai-hint={project.image?.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-secondary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <ArrowUpRight className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-primary font-bold uppercase tracking-widest text-xs">{project.category}</span>
                      <div className="flex gap-2">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="bg-muted text-secondary font-medium px-3">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-3xl font-headline font-bold text-secondary group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground">Client: {project.client}</p>
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