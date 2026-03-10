import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  Layout, 
  Code, 
  Smartphone, 
  LineChart, 
  Search, 
  Zap, 
  ArrowRight 
} from "lucide-react";

const services = [
  {
    title: "Web Design",
    icon: <Layout className="w-8 h-8" />,
    description: "We create stunning, high-converting websites that blend aesthetic beauty with functional excellence.",
    features: ["Responsive Design", "UI/UX Research", "Performance Tuning", "SEO Optimization"],
    image: PlaceHolderImages.find(img => img.id === 'service-web')
  },
  {
    title: "Web Applications",
    icon: <Code className="w-8 h-8" />,
    description: "From custom ERPs to interactive platforms, we build scalable web apps that solve complex business needs.",
    features: ["React/Next.js", "Backend Integration", "Real-time Data", "Cloud Hosting"],
    image: PlaceHolderImages.find(img => img.id === 'service-app')
  },
  {
    title: "Custom Software",
    icon: <Smartphone className="w-8 h-8" />,
    description: "Need something unique? We develop custom software solutions tailored exactly to your unique workflows.",
    features: ["API Development", "Database Design", "Legacy Migration", "Automation Tools"],
    image: PlaceHolderImages.find(img => img.id === 'service-software')
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20 space-y-6">
            <h1 className="text-5xl md:text-7xl font-headline font-bold text-secondary">Our <span className="text-primary italic">Services</span></h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We offer a comprehensive range of digital services designed to help you succeed in the modern landscape. Quality first, always.
            </p>
          </div>

          <div className="space-y-32">
            {services.map((service, idx) => (
              <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`space-y-8 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-sm">
                    {service.icon}
                  </div>
                  <h2 className="text-4xl font-headline font-bold text-secondary">{service.title}</h2>
                  <p className="text-lg text-muted-foreground">{service.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3 text-sm font-medium text-secondary">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" asChild className="rounded-full px-8 bg-secondary text-secondary-foreground">
                    <Link href="/contact">Inquire About {service.title}</Link>
                  </Button>
                </div>
                <div className={`relative aspect-video rounded-3xl overflow-hidden shadow-2xl ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image 
                    src={service.image?.imageUrl || ""} 
                    alt={service.title} 
                    fill 
                    className="object-cover"
                    data-ai-hint={service.image?.imageHint}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 p-12 bg-secondary rounded-[3rem] text-secondary-foreground relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -z-0 skew-x-12 translate-x-20" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-headline font-bold">Still Unsure?</h2>
                <p className="text-muted-foreground text-lg">
                  Request a free consultation and we'll help you identify the best digital path for your business.
                </p>
                <div className="flex gap-4">
                   <Button size="lg" className="bg-primary text-primary-foreground rounded-full h-14 px-10 font-bold">
                    Schedule a Call
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-full h-14 px-10">
                    Contact via Email
                  </Button>
                </div>
              </div>
              <div className="hidden lg:grid grid-cols-2 gap-6">
                {[
                  { icon: <Zap />, title: "Fast Delivery", text: "MVP in weeks, not months." },
                  { icon: <LineChart />, title: "Growth Focused", text: "We build for ROI." },
                  { icon: <Search />, title: "SEO Ready", text: "Found on Google from day one." },
                  { icon: <CheckCircle2 />, title: "Quality Guarantee", text: "Bug-free or we fix it free." }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl space-y-3">
                    <div className="text-primary">{item.icon}</div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}