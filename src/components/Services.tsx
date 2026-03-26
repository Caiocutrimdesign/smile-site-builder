import { Smile, ShieldCheck, Sparkles, Stethoscope, Baby, Scan } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  { icon: Smile, title: "Clareamento Dental", desc: "Dentes mais brancos e brilhantes com técnicas seguras." },
  { icon: ShieldCheck, title: "Implantes", desc: "Recupere dentes perdidos com implantes de alta qualidade." },
  { icon: Sparkles, title: "Estética Dental", desc: "Lentes de contato e facetas para um sorriso perfeito." },
  { icon: Stethoscope, title: "Tratamento de Canal", desc: "Procedimentos indolores com tecnologia de ponta." },
  { icon: Baby, title: "Odontopediatria", desc: "Cuidado especial para os sorrisos dos pequenos." },
  { icon: Scan, title: "Ortodontia", desc: "Aparelhos e alinhadores para corrigir seu sorriso." },
];

const Services = () => (
  <section id="servicos" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nossos Serviços</h2>
        <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
          Oferecemos uma ampla gama de tratamentos para cuidar da sua saúde bucal.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.title} className="group hover:shadow-lg transition-shadow border-border bg-card">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <CardTitle className="text-lg">{s.title}</CardTitle>
              <CardDescription>{s.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
