import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoBclinic from "@/assets/logo-bclinic.jpeg";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "A Clínica", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-primary/20 py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#inicio" className="flex items-center gap-2 group">
          <img src={logoBclinic} alt="BCLINIC" className="h-10" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button size="sm" className="bg-primary hover:bg-accent text-primary-foreground font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            <Phone className="w-4 h-4 mr-2" /> (98) 98415-4556
          </Button>
        </div>

        <button className="md:hidden text-primary" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/98 backdrop-blur-xl border-b border-primary/20 px-4 pb-6 pt-4 space-y-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button size="lg" className="w-full bg-primary hover:bg-accent text-primary-foreground font-bold">
            <Phone className="w-4 h-4 mr-2" /> Agendar Agora
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
