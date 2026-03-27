import React from "react";

const TeamHighlight = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h3 className="text-primary font-bold tracking-widest uppercase text-sm">Nossa Equipe</h3>
            <h2 className="text-4xl md:text-5xl font-black text-white italic">Excelência em cada detalhe</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="relative group rounded-[2.5rem] overflow-hidden border border-primary/20 bg-black/40 backdrop-blur-sm shadow-[0_0_50px_rgba(212,175,55,0.15)] animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <img 
              src="/equipe-editada.png" 
              alt="Equipe BCLINIC" 
              className="w-full h-auto object-contain block transform transition-transform duration-1000 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHighlight;
