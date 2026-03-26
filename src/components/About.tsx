import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Mais de 10 anos de experiência",
  "Equipe altamente qualificada",
  "Tecnologia de última geração",
  "Ambiente acolhedor e seguro",
];

const About = () => (
  <section id="sobre" className="py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Sobre a Clínica</h2>
        <p className="text-muted-foreground text-lg">
          A OdontoVida é referência em odontologia moderna. Nossa missão é proporcionar
          tratamentos de excelência em um ambiente confortável, utilizando as mais avançadas
          técnicas e equipamentos do mercado.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto pt-4">
          {highlights.map((h) => (
            <div key={h} className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{h}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
