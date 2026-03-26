import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const info = [
  { icon: MapPin, text: "Rua das Flores, 123 - Centro" },
  { icon: Phone, text: "(11) 99999-0000" },
  { icon: Mail, text: "contato@odontovida.com" },
  { icon: Clock, text: "Seg-Sex: 8h às 18h | Sáb: 8h às 12h" },
];

const Contact = () => (
  <section id="contato" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Entre em Contato</h2>
        <p className="mt-3 text-muted-foreground">Agende sua consulta ou tire suas dúvidas.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <div className="space-y-6">
          {info.map((i) => (
            <div key={i.text} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                <i.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground text-sm pt-2">{i.text}</span>
            </div>
          ))}
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Input placeholder="Seu nome" />
          <Input placeholder="Seu telefone" />
          <Textarea placeholder="Sua mensagem" rows={4} />
          <Button className="w-full" size="lg">Enviar Mensagem</Button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
