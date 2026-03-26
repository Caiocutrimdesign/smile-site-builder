const Gallery = () => (
  <section id="galeria" className="py-24 bg-black relative">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 space-y-4">
        <h3 className="text-primary font-bold tracking-widest uppercase text-sm">Nossos Resultados</h3>
        <h2 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
          Transformações que <span className="text-primary underline decoration-primary/30">inspiram.</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((idx) => (
          <div key={idx} className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-primary/10 bg-secondary/20">
            <img 
              src={`https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800&sig=${idx}`} 
              alt={`Caso Clínico BCLINIC ${idx}`} 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
              <span className="text-primary font-black uppercase text-xs tracking-widest mb-2">Caso Clínico</span>
              <h4 className="text-white text-xl font-bold italic">Estética Orofacial Avançada</h4>
            </div>
            <div className="absolute top-4 right-4 bg-primary/90 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500">
               Resultado Real
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-foreground/40 text-sm italic">"Cada sorriso é único, cada resultado é uma conquista."</p>
      </div>
    </div>
  </section>
);

export default Gallery;
