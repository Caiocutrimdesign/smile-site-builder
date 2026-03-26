import heroImg from "@/assets/hero-dental.jpg";
import { Button } from "@/components/ui/button";
import { Phone, CalendarCheck } from "lucide-react";

const Hero = () => (
  <section id="inicio" className="relative min-h-[90vh] flex items-center pt-16">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Clínica odontológica moderna" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/30" />
    </div>

    <div className="container relative z-10 mx-auto px-4 py-20">
      <div className="max-w-xl space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
          Seu sorriso merece o <span className="text-primary">melhor cuidado</span>
        </h1>
        <p className="text-lg text-primary-foreground/80">
          Tratamentos odontológicos modernos com profissionais qualificados. 
          Agende sua consulta e transforme seu sorriso.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button size="lg">
            <CalendarCheck className="w-5 h-5 mr-2" /> Agendar Consulta
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <Phone className="w-5 h-5 mr-2" /> (11) 99999-0000
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
