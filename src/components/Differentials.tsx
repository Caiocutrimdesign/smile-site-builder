import { Heart, Shield, Target } from "lucide-react";

const differentials = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    desc: "Cuidado genuíno com foco no conforto e bem-estar de cada paciente."
  },
  {
    icon: Shield,
    title: "Técnica Atualizada",
    desc: "Utilizamos as tecnologias e procedimentos mais modernos da odontologia."
  },
  {
    icon: Target,
    title: "Planejamento Individualizado",
    desc: "Tratamentos personalizados para as necessidades exclusivas do seu sorriso."
  }
];

const Differentials = () => (
  <section className="py-20 bg-black">
    <div className="container mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
        {differentials.map((item) => (
          <div key={item.title} className="text-center space-y-4 group flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-all duration-500 group-hover:scale-110">
              <item.icon className="w-8 h-8 text-primary group-hover:text-black transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-tighter">{item.title}</h3>
            <p className="text-foreground/60 leading-relaxed font-light max-w-xs">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Differentials;
