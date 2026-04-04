const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <span className="text-[14px] font-bold text-foreground">MindMed</span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-[13px] text-muted-foreground">
          <a href="#funcionalidades" className="hover:text-foreground transition-colors">Funcionalidades</a>
          <a href="#beneficios" className="hover:text-foreground transition-colors">Benefícios</a>
          <a href="#seguranca" className="hover:text-foreground transition-colors">Segurança</a>
          <a href="#planos" className="hover:text-foreground transition-colors">Planos</a>
        </div>

        <p className="text-[12px] text-muted-foreground">
          © {new Date().getFullYear()} MindMed. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
