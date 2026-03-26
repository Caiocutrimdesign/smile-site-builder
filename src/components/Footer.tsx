const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/70 py-10">
    <div className="container mx-auto px-4 text-center space-y-2">
      <p className="text-primary-foreground font-bold text-lg">🦷 OdontoVida</p>
      <p className="text-sm">© {new Date().getFullYear()} OdontoVida. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;
