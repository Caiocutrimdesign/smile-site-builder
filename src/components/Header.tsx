import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Início", href: "/", isHash: true, hash: "#inicio" },
  { label: "A Clínica", href: "/", isHash: true, hash: "#sobre" },
  { label: "Equipe", href: "/equipe", isHash: false },
  { label: "Serviços", href: "/", isHash: true, hash: "#servicos" },
  { label: "Galeria", href: "/", isHash: true, hash: "#galeria" },
  { label: "Contato", href: "/", isHash: true, hash: "#contato" },
];

import VisitorCounter from "./VisitorCounter";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-primary/20 py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center justify-center gap-2 group">
          <img 
            src="/favicon.ico.png" 
            alt="BCLINIC" 
            className="h-16 md:h-24 object-contain hover:scale-105 transition-transform animate-logo-glow" 

          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            l.isHash ? (
              <a
                key={l.label}
                href={l.href + l.hash}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide uppercase relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide uppercase relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {l.label}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <VisitorCounter />
          <Button 
            size="sm" 
            className="bg-primary hover:bg-accent text-primary-foreground font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)] rounded-full"
            onClick={() => window.open("https://wa.me/5598984154556", "_blank")}
          >
            <Phone className="w-4 h-4 mr-2" /> (98) 98415-4556
          </Button>
        </div>

        <button className="md:hidden text-primary" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl border-b border-primary/20 px-6 pb-6 pt-4 space-y-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((l) => (
            l.isHash ? (
              <a
                key={l.label}
                href={l.href + l.hash}
                onClick={() => setOpen(false)}
                className="block text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-1"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                onClick={() => setOpen(false)}
                className="block text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-1"
              >
                {l.label}
              </Link>
            )
          ))}
          <div className="pt-2 pb-4">
             <VisitorCounter />
          </div>
          <Button 
            size="lg" 
            className="w-full bg-primary hover:bg-accent text-primary-foreground font-bold rounded-full"
            onClick={() => window.open("https://wa.me/5598984154556", "_blank")}
          >
            <Phone className="w-4 h-4 mr-2" /> Agendar Agora
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
