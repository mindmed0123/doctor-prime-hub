import { Clock, DollarSign, TrendingUp } from "lucide-react";
import FadeIn from "./FadeIn";
import { trackLead } from "@/lib/fbq";

const stats = [
  { icon: Clock, value: "1h", label: "perdida por dia com burocracia" },
  { icon: DollarSign, value: "R$300", label: "valor médio por consulta" },
  { icon: TrendingUp, value: "20 dias", label: "de trabalho por mês" },
];

const ROISection = () => (
  <section className="py-16 md:py-32 bg-surface">
    <div className="container mx-auto max-w-5xl px-5 md:px-6">
      <FadeIn>
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-flex items-center rounded-full bg-primary-light text-primary text-xs font-semibold px-4 py-1.5 uppercase tracking-wider mb-4 md:mb-6">
            Retorno sobre investimento
          </span>
          <h2 className="font-mono text-2xl md:text-[2.5rem] font-bold tracking-tight text-foreground leading-tight max-w-2xl mx-auto">
            Quanto tempo (e dinheiro) você está perdendo com burocracia?
          </h2>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="grid grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-12">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl md:rounded-2xl border border-border bg-background p-4 md:p-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-2 md:mb-4 flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl bg-primary/10">
                <s.icon className="h-4 w-4 md:h-6 md:w-6 text-primary" />
              </div>
              <p className="text-xl md:text-3xl font-bold text-foreground">{s.value}</p>
              <p className="mt-1 md:mt-2 text-[10px] md:text-sm text-muted-foreground leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="rounded-xl md:rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-10 text-center">
          <p className="text-sm md:text-lg text-muted-foreground mb-1 md:mb-2">Resultado estimado</p>
          <p className="text-3xl md:text-5xl font-bold text-primary">
            R$6.000<span className="text-sm md:text-lg font-normal text-muted-foreground">/mês</span>
          </p>
          <p className="mt-1 md:mt-2 text-sm md:text-base text-foreground font-medium">
            que você pode estar deixando de ganhar.
          </p>
          <p className="mt-4 md:mt-6 text-xs md:text-sm text-muted-foreground max-w-lg mx-auto">
            A MindMed elimina esse desperdício automatizando sua documentação clínica.
          </p>
          <div className="mt-6 md:mt-8">
            <a
              href="#planos"
              onClick={trackLead}
              className="inline-flex items-center text-sm md:text-[15px] font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-full px-6 md:px-8 py-3 md:py-3.5 transition-colors shadow-lg shadow-primary/25"
            >
              Começar agora
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default ROISection;
