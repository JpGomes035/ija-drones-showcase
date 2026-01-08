const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <span className="text-primary font-display font-bold text-lg">IJA</span>
            </div>
            <span className="font-display font-semibold text-lg text-foreground">
              Drones
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#ijasystem" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              IJASystem
            </a>
            <a href="#diferenciais" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Diferenciais
            </a>
            <a href="#contato" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} IJA Drones. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
