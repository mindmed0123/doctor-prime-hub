const Footer = () => (
  <footer className="bg-primary text-primary-foreground rounded-t-3xl">
    <div className="container mx-auto py-16">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Col 1 - Site links */}
        <div>
          <h4 className="font-bold text-sm mb-5">Home</h4>
          <ul className="space-y-3">
            {[
              ["Início", "#"],
              ["Funcionalidades", "#funcionalidades"],
              ["Benefícios", "#beneficios"],
              ["Segurança", "#seguranca"],
              ["Planos", "#planos"],
              ["Perguntas frequentes", "#perguntas"],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {label} ↑
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 2 - Other pages */}
        <div>
          <h4 className="font-bold text-sm mb-5">Outras páginas</h4>
          <ul className="space-y-3">
            {["Termos de uso", "Política de privacidade"].map((label) => (
              <li key={label}>
                <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 - CTA */}
        <div>
          <h2 className="font-mono text-2xl md:text-3xl font-bold leading-tight mb-6">
            Pronto para transformar minutos digitados em minutos de cuidado?
          </h2>
          <a href="#planos" className="inline-flex items-center text-sm font-semibold text-primary bg-background hover:bg-background/90 rounded-full px-6 py-3 transition-colors">
            Iniciar teste gratuito
          </a>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-primary-foreground/10">
        <p className="text-xs text-primary-foreground/50 text-center">
          © {new Date().getFullYear()} MindMed. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
