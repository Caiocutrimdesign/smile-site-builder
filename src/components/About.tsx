import { CheckCircle2 } from "lucide-react";
import drBergson from "@/assets/dr-bergson.jpeg";

const About = () => (
  <section id="sobre" className="py-24 bg-background overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative group">
          <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 transition-all duration-700" />
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 shadow-2xl">
            <img 
              src={drBergson} 
              alt="Dr. Bergson Lindoso"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <h3 className="text-primary font-bold tracking-widest uppercase text-sm">Excelência & Cuidado</h3>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              A BCLINIC é voltada para saúde, estética e <span className="text-primary">bem-estar do seu sorriso.</span>
            </h2>
          </div>

          <p className="text-lg text-foreground/70 leading-relaxed font-light">
            Nosso compromisso é oferecer um atendimento humanizado, com técnica, cuidado e atenção individualizada. 
            Trabalhamos com foco na prevenção, reabilitação e estética, sempre respeitando as necessidades de cada paciente.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Atendimento Humanizado",
              "Técnica Atualizada",
              "Planejamento Individualizado",
              "Foco em Prevenção",
              "Estética de Alto Padrão",
               "Equipamentos Modernos",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-foreground/90 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-primary/10">
            <p className="text-primary font-bold text-lg italic">Dr. Bergson Lindoso</p>
            <p className="text-foreground/50 text-sm uppercase tracking-widest">CRO-MA 3898</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
