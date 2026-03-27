import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Users, ShieldCheck, Star } from "lucide-react";

const Equipe = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black overflow-x-hidden pt-20">
      <Header />
      
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Hero Section Page */}
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-top-10 duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <Users className="w-3 h-3" /> Nosso Time
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              A Excelência da <span className="text-primary italic">BCLINIC</span>
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Equipe especializada pronta para oferecer o melhor atendimento, aliando tecnologia de ponta e humanização para transformar o seu sorriso.
            </p>
          </div>

          {/* Main Team Photo */}
          <div className="relative group animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-[2.5rem] blur-xl opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-primary/10 bg-black/40 backdrop-blur-sm shadow-2xl">
              <img 
                src="/equipe-editada.png" 
                alt="Equipe BCLINIC" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row justify-between items-end gap-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Padrão de Qualidade</h3>
                  <p className="text-primary font-medium">Equipe Bergson Lindoso</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center gap-1">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                    <span className="text-[10px] uppercase text-white/60 font-bold">Segurança</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Star className="w-6 h-6 text-primary" />
                    <span className="text-[10px] uppercase text-white/60 font-bold">Premium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Future Listing Placeholder */}
          <div className="grid gap-12 pt-12">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground/80 uppercase tracking-widest">Nossos Profissionais</h2>
              <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* This space is prepared for individual listings later */}
               <div className="p-8 rounded-3xl border border-primary/5 bg-primary/[0.02] flex flex-col items-center justify-center text-center space-y-4 border-dashed opacity-50">
                  <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary/40" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground/40 italic">Em breve...</h4>
                    <p className="text-xs text-foreground/30">Novos perfis detalhados em breve.</p>
                  </div>
               </div>
               <div className="p-8 rounded-3xl border border-primary/5 bg-primary/[0.02] flex flex-col items-center justify-center text-center space-y-4 border-dashed opacity-50">
                  <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary/40" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground/40 italic">Em breve...</h4>
                    <p className="text-xs text-foreground/30">Novos perfis detalhados em breve.</p>
                  </div>
               </div>
               <div className="p-8 rounded-3xl border border-primary/5 bg-primary/[0.02] flex flex-col items-center justify-center text-center space-y-4 border-dashed opacity-50">
                  <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary/40" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground/40 italic">Em breve...</h4>
                    <p className="text-xs text-foreground/30">Novos perfis detalhados em breve.</p>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Equipe;
