const cases = [
  { id: 1, title: "Reabilitação Estética", type: "Facetas em Resina" },
  { id: 2, title: "Alinhamento & Branqueamento", type: "Invisalign + Laser" },
  { id: 3, title: "Transformação Completa", type: "Lentes de Contato" },
];

const Gallery = () => (
  <section id="galeria" className="py-24 bg-black relative">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 space-y-4">
        <h3 className="text-primary font-bold tracking-widest uppercase text-sm">Transformações que inspiram.</h3>
        <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
          Casos <span className="text-primary underline decoration-primary/30 text-6xl">BCLINIC</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cases.map((c) => (
          <div key={c.id} className="group relative overflow-hidden rounded-[2.5rem] border border-primary/10 bg-secondary/20 shadow-2xl">
            <div className="aspect-[4/5] relative">
              <img 
                src={`https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800&case=${c.id}`} 
                alt={c.title} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            </div>
            
            <div className="absolute inset-0 flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-primary font-black uppercase text-[10px] tracking-[0.3em] mb-3">{c.type}</span>
              <h4 className="text-white text-3xl font-black italic tracking-tighter mb-4">{c.title}</h4>
              <div className="h-0.5 w-12 bg-primary group-hover:w-full transition-all duration-700" />
            </div>

            <div className="absolute top-6 right-6 bg-primary text-black text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
               Resultado Real
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <p className="text-foreground/40 text-sm italic font-light tracking-wide max-w-lg mx-auto leading-relaxed">
          "Cada sorriso que transformamos na BCLINIC carrega uma nova história de confiança e autoestima recuperada."
        </p>
      </div>
    </div>
  </section>
);

export default Gallery;
