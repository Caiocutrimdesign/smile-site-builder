import { useState } from "react";
import { Maximize2 } from "lucide-react";

const Gallery = () => {
  const [filter, setFilter] = useState("todos");
  
  const totalImages = 17;
  const categories = [
    { id: "todos", label: "Todos" },
    { id: "resultados", label: "Resultados" },
    { id: "clinica", label: "A Clínica" },
  ];

  const images = Array.from({ length: totalImages }, (_, i) => ({
    id: i + 1,
    src: `/gallery${i + 1}.jpeg`,
    category: i < 5 ? "resultados" : (i < 10 ? "clinica" : "resultados"),
    title: i < 5 ? "Transformação Dental" : (i < 10 ? "Excelência BCLINIC" : "Sorriso Renovado"),
    subtitle: i < 5 ? "Caso Clínico Real" : "Nossa Estrutura"
  }));

  const filteredImages = filter === "todos" 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <section id="galeria" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-4">
             <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Galeria de Excelência</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter">
            Nossos <span className="text-primary underline decoration-primary/30">Registros</span>
          </h2>
          <p className="text-foreground/40 text-sm max-w-xl mx-auto font-light leading-relaxed">
            Navegue por nossas categorias e veja a sofisticação de nossa estrutura e o impacto de nossos tratamentos.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500 border ${
                filter === cat.id 
                ? "bg-primary text-black border-primary shadow-[0_5px_20px_rgba(212,175,55,0.3)]" 
                : "bg-transparent text-foreground/40 border-white/10 hover:border-primary/50 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        
        {/* Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 animate-in fade-in duration-700">
          {filteredImages.map((img) => (
            <div 
              key={img.id} 
              className="break-inside-avoid group relative overflow-hidden rounded-[2.5rem] border border-primary/10 bg-secondary/20 shadow-2xl transition-all duration-700 hover:border-primary/40 hover:-translate-y-2"
            >
              <div className="relative">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  <span className="text-primary font-black uppercase text-[9px] tracking-[0.4em]">{img.subtitle}</span>
                  <h4 className="text-white text-3xl font-black italic tracking-tighter leading-tight">{img.title}</h4>
                  <div className="h-0.5 w-12 bg-primary group-hover:w-full transition-all duration-1000 origin-left" />
                </div>
              </div>

              {/* Icon Decoration */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-700 scale-50 group-hover:scale-100">
                <Maximize2 className="w-5 h-5 text-primary" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer info */}
        <div className="mt-20 text-center flex flex-col items-center gap-6">
           <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
           <p className="text-foreground/20 text-[9px] font-black uppercase tracking-[0.6em]">A Arte de Transformar Sorrisos</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

export default Gallery;
