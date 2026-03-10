import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Code, 
  Layout, 
  Smartphone, 
  Zap, 
  CheckCircle2, 
  MessageSquare,
  Sparkles
} from "lucide-react";

const heroImg = PlaceHolderImages.find(img => img.id === 'hero');
const webImg = PlaceHolderImages.find(img => img.id === 'service-web');
const appImg = PlaceHolderImages.find(img => img.id === 'service-app');
const softImg = PlaceHolderImages.find(img => img.id === 'service-software');

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-50 -z-10" />
          <div className="absolute top-0 right-0 w-1/3 h-full hero-gradient -z-10" />
          
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-xs uppercase tracking-widest animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Sparkles className="w-4 h-4" /> Digital Success Made Affordable
              </div>
              <h1 className="text-5xl md:text-7xl font-headline font-bold text-secondary leading-tight tracking-tighter text-balance">
                Your Idea, <span className="text-primary underline decoration-4 underline-offset-8">Perfectly</span> Executed.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 text-balance">
                High-end digital solutions for growing businesses. We build fast, modern, and high-converting web applications without the enterprise price tag.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild className="h-14 px-8 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full shadow-xl shadow-secondary/10">
                  <Link href="/contact">Get Your Free Draft <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button variant="ghost" size="lg" asChild className="h-14 px-8 text-lg rounded-full">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 justify-center lg:justify-start pt-4 text-sm text-muted-foreground font-medium">
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> 100% Quality</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Fixed Pricing</div>
                <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Fast Delivery</div>
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src={heroImg?.imageUrl || ""} 
                  alt={heroImg?.description || ""} 
                  width={600} 
                  height={400}
                  className="w-full object-cover"
                  priority
                  data-ai-hint="digital agency"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-full -z-10 blur-3xl opacity-30" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary rounded-full -z-10 blur-3xl opacity-20" />
              
              <div className="absolute bottom-10 -right-10 bg-white p-4 rounded-2xl shadow-xl border hidden md:block animate-in fade-in slide-in-from-right-10 delay-500 duration-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Performance Score</div>
                    <div className="text-xs text-muted-foreground">Optimized for SEO & Speed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-headline font-bold text-secondary">Solutions Tailored to You</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We combine technical excellence with creative design to build products that actually drive growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Web Design",
                  desc: "Modern, responsive websites that capture your brand essence and convert visitors into customers.",
                  icon: <Layout className="w-6 h-6" />,
                  img: webImg
                },
                {
                  title: "Web Applications",
                  desc: "Scalable and robust web apps built with the latest technologies like React and Next.js.",
                  icon: <Code className="w-6 h-6" />,
                  img: appImg
                },
                {
                  title: "Custom Software",
                  desc: "Unique software solutions designed to automate your workflows and solve complex business problems.",
                  icon: <Smartphone className="w-6 h-6" />,
                  img: softImg
                }
              ].map((service, idx) => (
                <Card key={idx} className="group border-none shadow-none bg-transparent overflow-hidden">
                  <CardContent className="p-0 space-y-6">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                      <Image 
                        src={service.img?.imageUrl || ""} 
                        alt={service.title} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={service.img?.imageHint}
                      />
                      <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-500" />
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-lg">
                        {service.icon}
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors">{service.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                    <Link href="/services" className="inline-flex items-center gap-2 font-bold text-sm text-secondary hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-secondary">Ready to build something <span className="text-primary italic">extraordinary</span>?</h2>
            <p className="text-xl text-muted-foreground">
              Contact us today for a free initial draft of your project. No strings attached.
            </p>
            <Button size="lg" asChild className="bg-secondary text-secondary-foreground rounded-full px-12 h-16 text-xl">
              <Link href="/contact">Get Free Project Draft</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}