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
  Sparkles,
  MousePointer2,
  Rocket,
  ShieldCheck
} from "lucide-react";

const heroImg = PlaceHolderImages.find(img => img.id === 'hero');
const webImg = PlaceHolderImages.find(img => img.id === 'service-web');
const appImg = PlaceHolderImages.find(img => img.id === 'service-app');
const softImg = PlaceHolderImages.find(img => img.id === 'service-software');

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 md:pt-56 md:pb-40 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30 -z-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] hero-glow -z-10 blur-[120px]" />
          
          <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary font-bold text-xs uppercase tracking-widest">
                <Sparkles className="w-4 h-4" /> Leading Digital Agency
              </div>
              <h1 className="text-6xl md:text-8xl font-headline font-extrabold text-white leading-[1.1] tracking-tighter">
                Transform Your Vision <br />
                <span className="text-gradient">Into Digital Reality.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
                We craft high-performance digital products for the next generation of businesses. Speed, aesthetics, and conversion are our core principles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
              <Button size="lg" asChild className="h-16 px-10 text-xl bg-primary text-white hover:bg-primary/90 rounded-full shadow-2xl shadow-primary/40 font-bold group">
                <Link href="/contact">
                  Let's Work Together <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="h-16 px-10 text-xl rounded-full glass-card text-white hover:bg-white/10 border-white/20">
                <Link href="/portfolio">Explore Our Portfolio</Link>
              </Button>
            </div>

            <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50">
              {['Google', 'Webflow', 'React', 'Firebase'].map((partner) => (
                <div key={partner} className="text-2xl font-bold text-white tracking-widest grayscale hover:grayscale-0 transition-all">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 border-y border-white/[0.05] bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: "Projects Completed", value: "150+" },
              { label: "Happy Clients", value: "99%" },
              { label: "Conversion Lift", value: "240%" },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="text-5xl font-extrabold text-gradient">{stat.value}</div>
                <div className="text-sm uppercase tracking-widest font-bold text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-primary font-bold uppercase tracking-widest text-sm">What we do</h2>
                <h3 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">Elite Digital <br />Craftsmanship.</h3>
              </div>
              <p className="text-muted-foreground max-w-sm">
                From high-end design to complex backend systems, we provide full-cycle development services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Strategic Web Design",
                  desc: "We don't just design; we create digital experiences that sell and resonate.",
                  icon: <Layout className="w-8 h-8 text-primary" />,
                  img: webImg
                },
                {
                  title: "Performance Apps",
                  desc: "Scalable SaaS and enterprise solutions built with cutting-edge tech stacks.",
                  icon: <Code className="w-8 h-8 text-primary" />,
                  img: appImg
                },
                {
                  title: "Product Evolution",
                  desc: "Iterative growth strategies for established products needing a modern edge.",
                  icon: <Zap className="w-8 h-8 text-primary" />,
                  img: softImg
                }
              ].map((service, idx) => (
                <div key={idx} className="group glass-card p-10 rounded-[2.5rem] space-y-8 hover:-translate-y-2 transition-all duration-500">
                  <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-3xl font-bold text-white group-hover:text-primary transition-colors leading-tight">{service.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                  <Link href="/services" className="flex items-center gap-2 font-bold text-primary group-hover:translate-x-2 transition-transform">
                    View Service <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass-card p-12 md:p-24 rounded-[3rem] relative overflow-hidden bg-gradient-to-br from-primary/20 to-transparent">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] -z-10" />
              <div className="max-w-3xl space-y-10">
                <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tighter">
                  Ready to Lead the <br /> <span className="text-gradient">Digital Race?</span>
                </h2>
                <p className="text-xl text-white/70 max-w-xl">
                  Stop settling for average. Let's build a product that dominates your market and defines your industry.
                </p>
                <Button size="lg" asChild className="h-16 px-12 text-xl bg-white text-black hover:bg-primary hover:text-white rounded-full font-bold transition-all duration-300">
                  <Link href="/contact">Start Your Project Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}