import Link from "next/link";
import { Instagram, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-12 pb-10 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Link href="/" className="font-headline font-black text-xl tracking-tighter text-white italic">
            BudgetDev
          </Link>
          
          <div className="flex gap-6 text-[11px] font-bold text-white/40 uppercase tracking-widest">
            <p>© {new Date().getFullYear()}</p>
            <Link href="#" className="hover:text-white transition-colors">imprint</Link>
            <Link href="#" className="hover:text-white transition-colors">Data protection</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms and Conditions</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie settings</Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex gap-6 text-[11px] font-bold text-white/40 uppercase tracking-widest">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="#about" className="hover:text-white transition-colors">About me</Link>
            <Link href="/portfolio" className="hover:text-white transition-colors">References</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Inquiry</Link>
          </div>

          <div className="w-px h-4 bg-white/10 hidden md:block" />

          <div className="flex gap-4">
            {[Linkedin, Github, Twitter, Instagram].map((Icon, i) => (
              <Link key={i} href="#" className="text-white/20 hover:text-white transition-all transform hover:scale-110">
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
