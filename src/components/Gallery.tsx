const Gallery = () => {
  const totalImages = 17;
  const images = Array.from({ length: totalImages }, (_, i) => ({
    id: i + 1,
    src: `/gallery${i + 1}.jpeg`,
    title: i < 3 ? "Caso Clínico em Destaque" : "Resultado BCLINIC",
    type: i < 3 ? "Reabilitação Oral" : "Estética Orofacial"
  }));

  return (
    <section id="galeria" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-primary font-bold tracking-widest uppercase text-sm">Transformações que inspiram.</h3>
          <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
            Nossos <span className="text-primary underline decoration-primary/30 text-6xl">Resultados</span>
          </h2>
          <p className="text-foreground/40 text-sm max-w-xl mx-auto">
            Confira alguns dos sorrisos transformados pela excelência e cuidado da equipe BCLINIC.
          </p>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img) => (
            <div key={img.id} className="break-inside-avoid group relative overflow-hidden rounded-[2.5rem] border border-primary/10 bg-secondary/20 shadow-2xl">
              <div className="relative">
                <img 
                  src={img.src} 
                  alt={`Caso ${img.id}`} 
                  className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                <span className="text-primary font-black uppercase text-[10px] tracking-[0.3em] mb-2">{img.type}</span>
                <h4 className="text-white text-xl font-bold italic tracking-tighter">{img.title}</h4>
                <div className="h-0.5 w-8 bg-primary mt-2 group-hover:w-full transition-all duration-700" />
              </div>

              <div className="absolute top-4 right-4 bg-primary/90 text-black text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                 BCLINIC Real Case
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-foreground/20 text-[10px] uppercase tracking-[0.5em]">Excelência em cada detalhe.</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
