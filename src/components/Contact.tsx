import { Phone, MapPin, Instagram, MessageSquare, Clock } from "lucide-react";
import drBergson from "@/assets/dr-bergson.jpeg";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <section id="contato" className="py-24 bg-black relative">
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Fale Conosco</h3>
              <h2 className="text-5xl font-black text-white italic tracking-tighter">
                Sua transformação começa <span className="text-primary">aqui.</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-all duration-500">
                  <Phone className="w-6 h-6 text-primary group-hover:text-black" />
                </div>
                <div>
                  <p className="text-xs text-primary font-black uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="text-2xl text-white font-bold tracking-tight">(98) 98415-4556</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-all duration-500">
                  <MapPin className="w-6 h-6 text-primary group-hover:text-black" />
                </div>
                <div>
                  <p className="text-xs text-primary font-black uppercase tracking-widest mb-1">Localização</p>
                  <p className="text-xl text-white font-medium">Coque | Vitória do Mearim</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-all duration-500">
                  <Instagram className="w-6 h-6 text-primary group-hover:text-black" />
                </div>
                <div>
                  <p className="text-xs text-primary font-black uppercase tracking-widest mb-1">Redes Sociais</p>
                  <p className="text-xl text-white font-medium">@bclinic.odonto</p>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h4 className="text-white font-bold uppercase text-xs tracking-widest">Horário de Atendimento</h4>
              </div>
              <p className="text-foreground/60 text-sm">Segunda a Sexta: 08h às 18h</p>
              <p className="text-foreground/60 text-sm">Sábado: 08h às 12h</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-3xl opacity-50" />
            <div className="relative bg-gradient-to-br from-primary/20 to-black p-1 rounded-[2rem] border border-primary/30">
              <div className="bg-black rounded-[1.9rem] p-10 space-y-8 text-center">
                <div className="w-32 h-32 mx-auto rounded-full border-2 border-primary p-1 bg-black">
                  <img 
                    src={drBergson} 
                    alt="Dr. Bergson Lindoso"
                    className="w-full h-full object-cover rounded-full" 
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-black text-white italic tracking-tighter">Dr. Bergson Lindoso</h3>
                  <p className="text-primary font-black text-xs uppercase tracking-[0.3em]">CRO-MA 3898</p>
                </div>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  "Minha missão é devolver a confiança através de um sorriso saudável e radiante. Agende sua avaliação personalizada."
                </p>
                <Button 
                  size="lg" 
                  className="w-full py-8 bg-primary hover:bg-white text-black font-black text-lg gap-3 rounded-2xl transition-all hover:scale-[1.02] shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
                  onClick={() => window.open("https://wa.me/5598984154556", "_blank")}
                >
                  <MessageSquare className="w-6 h-6" />
                  AGENDAR VIA WHATSAPP
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
