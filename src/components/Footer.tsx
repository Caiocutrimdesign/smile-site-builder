const Footer = () => (
  <footer className="py-16 bg-black border-t border-primary/10">
    <div className="container mx-auto px-4">
      <div className="grid gap-12 md:grid-cols-3 items-start">
        <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
          <a href="#inicio">
            <img src="/favicon.ico.png" alt="BCLINIC" className="h-16 animate-logo-glow" />
          </a>
          <p className="text-foreground/40 text-sm leading-relaxed max-w-xs">
            Clínica Odontológica e Estética Orofacial de alto padrão. Tecnologia e humanização para o seu sorriso.
          </p>
        </div>

        <div className="text-center space-y-4 flex flex-col items-center">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs">Acesso Rápido</h4>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#inicio" className="text-foreground/60 hover:text-primary text-sm transition-colors">Início</a>
            <a href="#sobre" className="text-foreground/60 hover:text-primary text-sm transition-colors">A Clínica</a>
            <a href="#servicos" className="text-foreground/60 hover:text-primary text-sm transition-colors">Serviços</a>
            <a href="#galeria" className="text-foreground/60 hover:text-primary text-sm transition-colors">Galeria</a>
          </nav>
          <div className="flex gap-4 pt-2">
            <a href="https://instagram.com/drbergsonlindoso" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors">Instagram</a>
            <span className="text-white/10">|</span>
            <a href="mailto:drbergsonlindoso@gmail.com" className="text-primary hover:text-white transition-colors">E-mail</a>
          </div>
        </div>

        <div className="text-center md:text-right space-y-4 flex flex-col items-center md:items-end">
          <p className="text-primary font-bold text-sm">Dr. Bergson Lindoso – CRO-MA 3898</p>
          <p className="text-foreground/40 text-xs uppercase tracking-widest">Vitoria do Mearim, MA</p>
          <div className="pt-4">
            <p className="text-foreground/20 text-[10px] uppercase tracking-[0.5em]">Sorrir muda tudo.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-primary/5 text-center space-y-2">
        <p className="text-foreground/20 text-xs">
          © {new Date().getFullYear()} BCLINIC. Criado com elegância para o seu bem-estar.
        </p>
        <p className="text-foreground/15 text-[10px]">
          Desenvolvedor: <a href="https://www.caiocutrimdesigner.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">www.caiocutrimdesigner.com.br</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
