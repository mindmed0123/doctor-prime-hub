import FadeIn from "./FadeIn";

const ComparisonSection = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-4xl">
      <FadeIn>
        <h2 className="text-3xl md:text-[2.2rem] font-semibold tracking-tight text-foreground text-center">
          Uma abordagem diferente.
        </h2>
      </FadeIn>

      <div className="mt-16 grid md:grid-cols-2 gap-8">
        <FadeIn delay={0.05}>
          <div className="rounded-xl border border-border p-8">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">
              Outras soluções
            </p>
            <ul className="space-y-4">
              {[
                "Transcrição simples, sem estrutura",
                "Texto contínuo e não organizado",
                "Dependência de edição manual",
                "Sem lógica clínica integrada",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-border shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="rounded-xl border border-foreground/10 bg-foreground p-8">
            <p className="text-xs font-medium uppercase tracking-widest text-primary-foreground/50 mb-6">
              MindMed
            </p>
            <ul className="space-y-4">
              {[
                "Estrutura clínica automática",
                "Organização lógica por seções",
                "Documento pronto para uso",
                "Raciocínio médico integrado",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-primary-foreground/90">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default ComparisonSection;
