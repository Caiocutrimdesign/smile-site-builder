import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import clinicBg from "@/assets/clinic-bg.jpeg";
import logoBclinic from "@/assets/logo-bclinic.jpeg";

const Hero = () => (
  <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Image with Dark Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src={clinicBg} 
        alt="BCLINIC - Sala de Espera" 
        className="w-full h-full object-cover scale-105 animate-slow-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
    </div>

    {/* Content */}
    <div className="container relative z-10 mx-auto px-4 text-center">
      <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <img src={logoBclinic} alt="BCLINIC Logo" className="w-48 md:w-64 mx-auto" />
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight">
          Sorrir muda <span className="text-primary italic">tudo.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto font-light leading-relaxed">
          Experiência odontológica de alto padrão com foco em transformar sorrisos e elevar a autoestima.
        </p>
        
        <div className="pt-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-accent text-primary-foreground font-black text-lg px-8 py-7 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group"
            onClick={() => window.open("https://wa.me/5598984154556", "_blank")}
          >
            <MessageSquare className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
            AGENDAR PELO WHATSAPP
          </Button>
        </div>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-transparent" />
    </div>
  </section>
);

export default Hero;
