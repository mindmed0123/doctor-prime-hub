const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-[13px] text-muted-foreground">
      <span className="font-medium text-foreground">MindMed</span>
      <span>© {new Date().getFullYear()} MindMed. Todos os direitos reservados.</span>
    </div>
  </footer>
);

export default Footer;
