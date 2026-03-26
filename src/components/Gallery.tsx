import { useState } from "react";
import { Maximize2 } from "lucide-react";

const Gallery = () => {
  const [filter, setFilter] = useState("resultados");
  
  const categories = [
    { id: "resultados", label: "Resultados (A/D)" },
    { id: "clinica", label: "A Clínica & Tratamentos" },
  ];

  // Manual categorization based on content analysis
  const images = [
    { id: 8, cat: "resultados", title: "Transformação Estética", sub: "Caso Clínico Real" },
    { id: 9, cat: "resultados", title: "Harmonia Facial", sub: "Caso Clínico Real" },
    { id: 11, cat: "resultados", title: "Sorriso Renovado", sub: "Caso Clínico Real" },
    { id: 12, cat: "resultados", title: "Lentes de Contato", sub: "Caso Clínico Real" },
    { id: 13, cat: "resultados", title: "Estética Avançada", sub: "Caso Clínico Real" },
    { id: 16, cat: "clinica", title: "Nossa Estrutura", sub: "Ambiente Premium" },
    { id: 1, cat: "clinica", title: "BCLINIC Experience", sub: "Excelência" },
    { id: 2, cat: "clinica", title: "Tratamentos", sub: "Limpeza 360" },
    { id: 3, cat: "clinica", title: "Estética Orofacial", sub: "Dr. Bergson Lindoso" },
    { id: 4, cat: "clinica", title: "Tecnologia", sub: "Limpeza 360" },
    { id: 5, cat: "clinica", title: "Naturalidade", sub: "Facetas em Resina" },
    { id: 6, cat: "clinica", title: "Avaliação Estética", sub: "Tratamento" },
    { id: 7, cat: "clinica", title: "Sofisticação", sub: "Facetas em Resina" },
    { id: 10, cat: "clinica", title: "Campanhas", sub: "Março Delas" },
    { id: 14, cat: "clinica", title: "Clareamento", sub: "Tratamento" },
    { id: 17, cat: "clinica", title: "Equipe BCLINIC", sub: "Dr. Bergson Lindoso" },
  ].map(img => ({
    ...img,
    src: `/gallery${img.id}.jpeg`
  }));

  const filteredImages = images.filter(img => img.cat === filter);

  return (
    <section id="galeria" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-4">
             <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Galeria BCLINIC</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter">
            Transformações <span className="text-primary underline decoration-primary/30">Reais</span>
          </h2>
          <p className="text-foreground/40 text-sm max-w-xl mx-auto font-light leading-relaxed italic">
            "A perfeição está nos detalhes. Nossa galeria reflete o compromisso com a estética e o bem-estar."
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-700 border ${
                filter === cat.id 
                ? "bg-primary text-black border-primary shadow-[0_0_40px_rgba(212,175,55,0.2)] scale-105" 
                : "bg-transparent text-foreground/30 border-white/5 hover:border-primary/40 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        
        {/* Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 animate-in fade-in duration-1000">
          {filteredImages.map((img) => (
            <div 
              key={img.id} 
              className="break-inside-avoid group relative overflow-hidden rounded-[2rem] border border-primary/5 bg-[#050505] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-primary/30 hover:shadow-primary/5 translate-y-0 hover:-translate-y-3"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-auto object-cover transition-all duration-[1.5s] group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                  <span className="text-primary font-black uppercase text-[9px] tracking-[0.5em]">{img.sub}</span>
                  <h4 className="text-white text-3xl font-black italic tracking-tighter leading-none mb-4">{img.title}</h4>
                  <div className="h-0.5 w-10 bg-primary group-hover:w-full transition-all duration-1000 origin-left" />
                </div>
              </div>

              {/* Tag Decoration */}
              <div className="absolute top-8 left-8 flex items-center gap-2 py-2 px-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-4 group-hover:translate-x-0">
                 <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                 <span className="text-[8px] text-white font-black uppercase tracking-widest">{img.cat === 'resultados' ? 'Antes & Depois' : 'BCLINIC Oficial'}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer info */}
        <div className="mt-32 text-center flex flex-col items-center gap-8">
           <div className="w-px h-24 bg-gradient-to-b from-primary/50 to-transparent" />
           <p className="text-foreground/10 text-[9px] font-black uppercase tracking-[1em]">Exclusividade & Arte</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
