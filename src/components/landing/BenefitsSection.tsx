import { ArrowDown, ArrowUp, Clock, Check } from "lucide-react";
import FadeIn from "./FadeIn";

const stats = [
  { icon: Clock, value: "−10 min", label: "por consulta", color: "text-success" },
  { icon: ArrowUp, value: "+3x", label: "produtividade clínica", color: "text-primary" },
  { icon: ArrowDown, value: "−85%", label: "carga administrativa", color: "text-success" },
];

const bullets = [
  "Economize até 10 minutos por consulta",
  "Interface que não atrapalha o fluxo do atendimento",
  "Estruturação clínica precisa",
  "Registros mais ricos em informações",
];

const BenefitsSection = () => (
  <section id="beneficios" className="py-24 md:py-32 bg-surface">
    <div className="container mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-primary mb-3">
            Benefícios
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Eficiência clínica comprovada
          </h2>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-5 mb-16">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.08}>
            <div className="rounded-xl border border-border bg-background p-8 text-center">
              <p className={`text-4xl font-bold tracking-tight ${s.color}`}>{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.15}>
        <div className="max-w-lg mx-auto">
          <ul className="space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-[14px] text-foreground">
                <Check className="h-4 w-4 text-primary shrink-0" />
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center">
            <a
              href="#planos"
              className="inline-flex items-center text-[14px] font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-xl px-6 py-3 transition-colors"
            >
              Iniciar teste gratuito
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default BenefitsSection;
