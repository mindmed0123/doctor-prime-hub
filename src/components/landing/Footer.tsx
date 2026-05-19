const Footer = () => (
  <footer className="bg-primary text-primary-foreground rounded-t-2xl md:rounded-t-3xl">
    <div className="container mx-auto py-10 md:py-16 px-5 md:px-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        <div>
          <h4 className="font-bold text-sm mb-4 md:mb-5">Home</h4>
          <ul className="space-y-2.5 md:space-y-3">
            {[
              ["Início", "#"],
              ["Funcionalidades", "#funcionalidades"],
              ["Benefícios", "#beneficios"],
              ["Segurança", "#seguranca"],
              ["Planos", "#planos"],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="text-xs md:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {label} ↑
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm mb-4 md:mb-5">Legal</h4>
          <ul className="space-y-2.5 md:space-y-3">
            {[
              ["Termos de uso", "/termos"],
              ["Política de privacidade", "/privacidade"],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="text-xs md:text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h2 className="font-mono text-lg md:text-3xl font-bold leading-tight mb-4 md:mb-6">
            Pronto para transformar minutos digitados em minutos de cuidado?
          </h2>
          <a href="#planos" className="inline-flex items-center text-xs md:text-sm font-semibold text-primary bg-background hover:bg-background/90 rounded-full px-5 md:px-6 py-2.5 md:py-3 transition-colors">
            Iniciar teste gratuito
          </a>
        </div>
      </div>

      <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-primary-foreground/10">
        <p className="text-[10px] md:text-xs text-primary-foreground/50 text-center">
          © {new Date().getFullYear()} MindMed. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
