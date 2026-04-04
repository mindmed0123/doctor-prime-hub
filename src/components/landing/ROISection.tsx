import { ArrowDown, ArrowUp } from "lucide-react";
import FadeIn from "./FadeIn";

const metrics = [
  { label: "Tempo por consulta", direction: "down" as const, value: "−70%" },
  { label: "Produtividade clínica", direction: "up" as const, value: "+3x" },
  { label: "Carga administrativa", direction: "down" as const, value: "−85%" },
];

const ROISection = () => (
  <section className="py-24 md:py-32 bg-surface">
    <div className="container mx-auto px-6 max-w-4xl">
      <FadeIn>
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-3xl md:text-[2.2rem] font-semibold tracking-tight text-foreground">
            Eficiência mensurável.
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground">
            Reduza significativamente o tempo dedicado à documentação clínica.
          </p>
        </div>
      </FadeIn>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {metrics.map((m, i) => (
          <FadeIn key={m.label} delay={i * 0.1}>
            <div className="rounded-xl border border-border bg-background p-8 text-center">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-surface mb-4">
                {m.direction === "down" ? (
                  <ArrowDown className="h-4 w-4 text-success" />
                ) : (
                  <ArrowUp className="h-4 w-4 text-primary" />
                )}
              </div>
              <p className="text-3xl font-semibold tracking-tight text-foreground">{m.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ROISection;
