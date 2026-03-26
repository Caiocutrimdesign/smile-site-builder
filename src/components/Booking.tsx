import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, ShieldCheck, Zap, Scan, Stethoscope, MessageSquare, CheckCircle2, UserPlus, UserCheck, Calendar, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { id: "estetica", title: "Estética Orofacial", icon: Sparkles, desc: "Lentes, Facetas e Clareamento" },
  { id: "implantes", title: "Implantes & Próteses", icon: ShieldCheck, desc: "Tecnologia de Reabilitação" },
  { id: "limpeza", title: "Protocolo Limpeza 360°", icon: Zap, desc: "O cuidado mais completo" },
  { id: "orto", title: "Ortodontia", icon: Scan, desc: "Aparelhos e Alinhadores" },
  { id: "geral", title: "Clínica Geral", icon: Stethoscope, desc: "Restaurações e Prevenção" },
  { id: "harmonizacao", title: "Harmonização", icon: CheckCircle2, desc: "Realce sua beleza natural" },
];

const Booking = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    data: "",
    hora: "",
    obs: "",
    tipo: "novo" // 'novo' | 'ja_cliente'
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatWhatsAppMessage = () => {
    const serviceNames = selectedServices
      .map(id => services.find(s => s.id === id)?.title)
      .filter(Boolean);

    const message = `Olá, gostaria de agendar um horário 😊

*Nome:* ${formData.nome}
*Telefone:* ${formData.telefone}
*Email:* ${formData.email}
*Cliente:* ${formData.tipo === 'novo' ? 'Novo Cliente' : 'Já sou Cliente'}

*Serviços escolhidos:*
- ${serviceNames.join("\n- ")}

${formData.data ? `*Data desejada:* ${formData.data}` : ""}
${formData.hora ? `*Horário:* ${formData.hora}` : ""}

${formData.obs ? `*Observações:* \n${formData.obs}` : ""}`;

    return encodeURIComponent(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.telefone || selectedServices.length === 0) {
      alert("Por favor, preencha nome, telefone e escolha ao menos um serviço.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const waLink = `https://wa.me/5598984154556?text=${formatWhatsAppMessage()}`;
      window.open(waLink, "_blank");
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="agendar" className="py-24 bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-2">
            <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Agendamento VIP</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase">
            Agende seu <span className="text-primary underline decoration-primary/20">Horário</span>
          </h2>
          <p className="text-foreground/40 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Preencha seus dados e escolha os procedimentos desejados. Nossa equipe entrará em contato para confirmar sua reserva.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2">
          {/* Left: Client Info */}
          <div className="space-y-8 bg-zinc-900/40 p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 backdrop-blur-xl">
            <div className="space-y-6">
              <h3 className="text-white text-xl font-bold flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <span className="text-primary text-xs">01</span>
                 </div>
                 Informações do Paciente
              </h3>
              
              <div className="grid gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-primary/60 px-4">Nome Completo *</label>
                  <Input 
                    name="nome" value={formData.nome} onChange={handleInputChange}
                    placeholder="Seu nome" 
                    className="bg-black/50 border-white/10 rounded-2xl h-14 px-6 focus:border-primary/50" 
                    required 
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-primary/60 px-4">WhatsApp *</label>
                    <Input 
                      name="telefone" value={formData.telefone} onChange={handleInputChange}
                      placeholder="(99) 99999-9999" 
                      className="bg-black/50 border-white/10 rounded-2xl h-14 px-6" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-primary/60 px-4">E-mail</label>
                    <Input 
                      name="email" value={formData.email} onChange={handleInputChange}
                      type="email" placeholder="seu@email.com" 
                      className="bg-black/50 border-white/10 rounded-2xl h-14 px-6" 
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-primary/60 px-4 flex items-center gap-2">
                      <Calendar className="w-3 h-3" /> Data Desejada
                    </label>
                    <Input 
                      name="data" value={formData.data} onChange={handleInputChange}
                      type="date" className="bg-black/50 border-white/10 rounded-2xl h-14 px-6" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black tracking-widest text-primary/60 px-4 flex items-center gap-2">
                      <Clock className="w-3 h-3" /> Horário
                    </label>
                    <Input 
                      name="hora" value={formData.hora} onChange={handleInputChange}
                      type="time" className="bg-black/50 border-white/10 rounded-2xl h-14 px-6" 
                    />
                  </div>
                </div>

                {/* Client Toggle */}
                <div className="flex bg-black/50 p-1.5 rounded-2xl border border-white/10">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, tipo: 'novo' }))}
                    className={`flex-1 py-3 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${formData.tipo === 'novo' ? 'bg-primary text-black' : 'text-foreground/40'}`}
                  >
                    <UserPlus className="w-4 h-4 mx-auto mb-1" />
                    Sou novo cliente
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, tipo: 'ja_cliente' }))}
                    className={`flex-1 py-3 px-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${formData.tipo === 'ja_cliente' ? 'bg-primary text-black' : 'text-foreground/40'}`}
                  >
                    <UserCheck className="w-4 h-4 mx-auto mb-1" />
                    Já sou cliente
                  </button>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-primary/60 px-4">Observações Extras</label>
                  <Textarea 
                    name="obs" value={formData.obs} onChange={handleInputChange}
                    placeholder="Algo que queira nos contar?" 
                    className="bg-black/50 border-white/10 rounded-2xl min-h-[120px] px-6 py-4" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Service Selection */}
          <div className="space-y-8">
            <h3 className="text-white text-xl font-bold flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <span className="text-primary text-xs">02</span>
               </div>
               Escolha os Procedimentos
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <motion.div
                  key={s.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleService(s.id)}
                  className={`cursor-pointer p-6 rounded-[2rem] border transition-all duration-500 flex flex-col items-start gap-4 ${
                    selectedServices.includes(s.id)
                    ? "bg-primary/20 border-primary shadow-[0_0_30px_rgba(212,175,55,0.1)]"
                    : "bg-zinc-900/40 border-white/5 hover:border-primary/30"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-colors ${
                    selectedServices.includes(s.id) ? "bg-primary border-primary text-black shadow-lg shadow-primary/20" : "bg-white/5 border-white/10 text-primary"
                  }`}>
                    <s.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-tight">{s.title}</h4>
                    <p className="text-foreground/40 text-[10px] italic">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Selection Summary */}
            <AnimatePresence>
              {selectedServices.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="bg-primary p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(212,175,55,0.2)]"
                >
                  <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
                    <div className="space-y-2 text-center md:text-left">
                       <p className="text-black/60 font-black uppercase text-[10px] tracking-widest">Resumo do Pedido</p>
                       <h4 className="text-black font-black text-2xl italic">Pronto para agendar?</h4>
                       <p className="text-black/80 text-sm font-medium">
                        {selectedServices.length === 1 ? '1 serviço selecionado' : `${selectedServices.length} serviços selecionados`}
                       </p>
                    </div>
                    <Button 
                      disabled={loading}
                      type="submit"
                      className="w-full md:w-auto bg-black text-white hover:bg-zinc-800 h-20 px-10 rounded-3xl font-black uppercase tracking-widest text-xs flex flex-col gap-1 items-center"
                    >
                      {loading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Gerando...</span>
                        </div>
                      ) : (
                        <>
                          <MessageSquare className="w-5 h-5" />
                          <span>Agendar Agora</span>
                        </>
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Disclaimer */}
            <p className="text-center text-[10px] text-foreground/20 font-medium uppercase tracking-[0.2em]">
               Foco total na sua transformação. Sem fricção. Resultados reais.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Booking;
