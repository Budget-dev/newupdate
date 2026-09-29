import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ShieldCheck, Lock, Eye, Server, Mail } from "lucide-react";

export default function PrivacyPage() {
  const lastUpdated = "May 20, 2024";

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Header */}
          <section className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
              Legal Transparency
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-black text-secondary tracking-tight">
              Privacy <span className="text-primary italic">Policy.</span>
            </h1>
            <p className="text-muted-foreground font-medium">Last Updated: {lastUpdated}</p>
          </section>

          {/* Content Sections */}
          <div className="prose prose-slate max-w-none space-y-10">
            
            <section className="space-y-4">
              <div className="flex items-center gap-3 text-secondary">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-black m-0 uppercase tracking-tight">1. Introduction</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                At <strong>BudgetDev</strong> ("we," "our," or "us"), we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website <strong>budgetdev.in</strong> and our practices for collecting, using, maintaining, protecting, and disclosing that information.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-secondary">
                <Eye className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-black m-0 uppercase tracking-tight">2. Information We Collect</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We collect several types of information from and about users of our website, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Personal Identification:</strong> Name, email address, and phone number when you fill out our inquiry forms.</li>
                <li><strong>Project Details:</strong> Information about your business goals and software requirements provided through chat or forms.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, and usage patterns via Vercel Analytics to improve our site performance.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-secondary">
                <Lock className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-black m-0 uppercase tracking-tight">3. How We Use Your Data</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The information we collect is used solely to provide elite software solutions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To generate and deliver free technical roadmaps and price drafts.</li>
                <li>To contact you regarding your project inquiries via WhatsApp or Email.</li>
                <li>To provide access to the Client Portal for tracking project progress.</li>
                <li>To improve our AI Assistant's ability to answer project-related questions.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-secondary">
                <Server className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-black m-0 uppercase tracking-tight">4. Third-Party Services</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We use high-fidelity third-party services to power our platform. These services have their own privacy policies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Firebase:</strong> For secure authentication and project database management.</li>
                <li><strong>Vercel:</strong> For high-performance hosting and traffic analytics.</li>
                <li><strong>OpenRouter:</strong> To power our AI Assistant (Genkit/Gemini models).</li>
                <li><strong>WhatsApp:</strong> For direct lead communication and support.</li>
              </ul>
            </section>

            <section className="space-y-4 bg-muted/30 p-8 rounded-[2rem] border border-muted/50">
              <div className="flex items-center gap-3 text-secondary">
                <Mail className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-black m-0 uppercase tracking-tight">5. Contact Information</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To ask questions or comment about this privacy policy and our privacy practices, contact our Lead Developer directly:
              </p>
              <div className="mt-4 space-y-1">
                <p className="font-bold text-secondary">Venkatesh Choppa</p>
                <p className="text-sm text-muted-foreground">BudgetDev Software Solutions</p>
                <p className="text-sm text-muted-foreground">Vizianagaram, Andhra Pradesh, India</p>
                <a href="mailto:venkateshchop14@gmail.com" className="text-primary font-black hover:underline">venkateshchop14@gmail.com</a>
              </div>
            </section>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
