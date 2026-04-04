import { Check } from "lucide-react";
import FadeIn from "./FadeIn";

const features = [
  "Consultas ilimitadas em número e duração",
  "Criação ilimitada de modelos personalizados",
  "Estruturação clínica automática",
  "Exportação e integração com prontuários",
];

const PricingSection = () => (
  <section id="planos" className="py-24 md:py-32">
    <div className="container mx-auto max-w-lg">
      <FadeIn>
        <div className="text-center mb-12">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-primary mb-3">
            Planos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Comece a usar hoje
          </h2>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="rounded-2xl border border-border bg-background p-8 md:p-10 shadow-lg shadow-foreground/[0.03]">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-primary mb-1">
            MindMed Pro
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Desbloqueie todo o potencial com consultas ilimitadas e recursos exclusivos.
          </p>

          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-4xl font-bold text-foreground">R$99</span>
            <span className="text-muted-foreground text-sm">/mês</span>
          </div>
          <p className="text-[12px] text-muted-foreground mb-8">
            Sem fidelidade. Cancele quando quiser.
          </p>

          <ul className="space-y-3 mb-8">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-[14px] text-foreground">
                <Check className="h-4 w-4 text-primary shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="flex items-center justify-center w-full text-[15px] font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-xl py-3.5 transition-colors"
          >
            Iniciar teste gratuito
          </a>

          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            Teste grátis por 7 dias · Sem cartão de crédito
          </p>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default PricingSection;
