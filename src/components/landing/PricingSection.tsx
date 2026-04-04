import { Check } from "lucide-react";
import FadeIn from "./FadeIn";

const perks = [
  "Consultas ilimitadas em número e duração",
  "Criação ilimitada de modelos personalizados",
  "Estruturação clínica automática",
  "Exportação e integração com prontuários",
];

const PricingSection = () => (
  <section id="planos" className="py-24 md:py-32 bg-surface">
    <div className="container mx-auto max-w-xl">
      <FadeIn>
        <div className="text-center mb-6">
          <span className="inline-flex items-center rounded-full bg-primary-light text-primary text-xs font-semibold px-4 py-1.5 uppercase tracking-wider">
            Planos
          </span>
        </div>
        <h2 className="font-mono text-3xl md:text-[2.5rem] font-bold tracking-tight text-foreground text-center leading-tight">
          Quanto custa otimizar{" "}
          <span className="text-primary">sua prática clínica?</span>
        </h2>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Utilize o plano PRO gratuitamente por 7 dias
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-10 rounded-2xl border-2 border-primary/20 bg-background p-8 md:p-10 shadow-xl shadow-primary/5">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-foreground">MindMed Pro</h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                Desbloqueie todo o potencial
              </p>
            </div>
            <span className="inline-flex items-center rounded-full bg-primary-light text-primary text-xs font-semibold px-3 py-1">
              Popular
            </span>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline gap-1">
              <span className="text-sm text-muted-foreground line-through">R$ 199</span>
            </div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-5xl font-bold text-foreground">R$ 99</span>
              <span className="text-muted-foreground text-base">/mês</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">(durante o lançamento)</p>
          </div>

          <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Veja as vantagens:</p>

          <ul className="space-y-3 mb-8">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm text-foreground">
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                {p}
              </li>
            ))}
          </ul>

          <a href="#" className="flex items-center justify-center w-full text-[15px] font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-full py-3.5 transition-colors shadow-lg shadow-primary/20">
            Iniciar teste gratuito
          </a>

          <p className="mt-3 text-center text-xs text-muted-foreground">
            Sem fidelidade · Cancele quando quiser
          </p>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default PricingSection;
