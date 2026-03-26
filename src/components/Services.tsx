import { Sparkles, ShieldCheck, Zap, Scan, Stethoscope, Star } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  { icon: Sparkles, title: "Estética", desc: "Facetas, lentes de contato e clareamento dental para um sorriso radiante." },
  { icon: ShieldCheck, title: "Implantes", desc: "Implantes dentários e próteses com tecnologia de última geração." },
  { icon: Zap, title: "Prevenção", desc: "Cuidado contínuo para manter sua saúde bucal em dia." },
  { icon: Scan, title: "Ortodontia", desc: "Aparelhos e alinhadores invisíveis para correção do seu sorriso." },
  { icon: Stethoscope, title: "Clínica Geral", desc: "Restaurações, canal e extrações com máximo conforto." },
];

const Services = () => (
  <section id="servicos" className="py-24 bg-secondary/50 relative overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 space-y-4">
        <h3 className="text-primary font-bold tracking-widest uppercase text-sm">Nossas Especialidades</h3>
        <h2 className="text-4xl md:text-5xl font-black text-white">Serviços Premium</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.title} className="group hover:scale-105 transition-all duration-300 border-primary/10 bg-black/40 backdrop-blur-sm overflow-hidden relative">
            <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500" />
            <CardHeader className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary transition-colors duration-500">
                <s.icon className="w-8 h-8 text-primary group-hover:text-black transition-colors duration-500" />
              </div>
              <CardTitle className="text-2xl font-bold text-white mb-2">{s.title}</CardTitle>
              <CardDescription className="text-foreground/60 leading-relaxed italic">{s.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}

        {/* Protocolo Limpeza 360 Destaque */}
        <Card className="lg:col-span-1 group transition-all duration-500 border-primary bg-gradient-to-br from-primary/20 via-black to-primary/5 relative overflow-hidden ring-2 ring-primary/50 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          <CardHeader className="p-8">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-primary fill-primary animate-pulse" />
              <span className="text-primary font-black uppercase tracking-tighter text-xs">Destaque Exclusivo</span>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
              <Zap className="w-8 h-8 text-black" />
            </div>
            <CardTitle className="text-3xl font-black text-white mb-2 tracking-tight">Protocolo de Limpeza 360°</CardTitle>
            <CardDescription className="text-white font-medium italic opacity-90 leading-relaxed">
              O cuidado mais completo para seu sorriso. Nossa tecnologia 360° garante uma limpeza profunda e preventiva de alto padrão.
            </CardDescription>
            <div className="mt-8">
              <button 
                className="w-full py-4 bg-primary text-black font-black uppercase tracking-widest text-sm rounded-xl hover:bg-white transition-colors border border-primary"
                onClick={() => window.open("https://wa.me/5598984154556", "_blank")}
              >
                Saiba Mais
              </button>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  </section>
);

export default Services;
