import { Clock, DollarSign, TrendingUp } from "lucide-react";
import FadeIn from "./FadeIn";

const stats = [
  { icon: Clock, value: "1h", label: "perdida por dia com burocracia" },
  { icon: DollarSign, value: "R$300", label: "valor médio por consulta" },
  { icon: TrendingUp, value: "20 dias", label: "de trabalho por mês" },
];

const ROISection = () => (
  <section className="py-24 md:py-32 bg-surface">
    <div className="container mx-auto max-w-5xl">
      <FadeIn>
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-primary-light text-primary text-xs font-semibold px-4 py-1.5 uppercase tracking-wider mb-6">
            Retorno sobre investimento
          </span>
          <h2 className="font-mono text-3xl md:text-[2.5rem] font-bold tracking-tight text-foreground leading-tight max-w-2xl mx-auto">
            Quanto tempo (e dinheiro) você está perdendo com burocracia?
          </h2>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-background p-8 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center">
          <p className="text-lg text-muted-foreground mb-2">Resultado estimado</p>
          <p className="text-4xl md:text-5xl font-bold text-primary">
            R$6.000<span className="text-lg font-normal text-muted-foreground">/mês</span>
          </p>
          <p className="mt-2 text-base text-foreground font-medium">
            que você pode estar deixando de ganhar.
          </p>
          <p className="mt-6 text-sm text-muted-foreground max-w-lg mx-auto">
            A MindMed elimina esse desperdício automatizando sua documentação clínica.
          </p>
          <div className="mt-8">
            <a
              href="#planos"
              className="inline-flex items-center text-[15px] font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-full px-8 py-3.5 transition-colors shadow-lg shadow-primary/25"
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
