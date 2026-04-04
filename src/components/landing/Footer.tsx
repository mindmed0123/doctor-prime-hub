const Footer = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p className="font-semibold text-foreground">
        Mind<span className="text-gradient">Med</span>
      </p>
      <p>© {new Date().getFullYear()} MindMed. Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Footer;
