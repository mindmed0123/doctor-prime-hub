import { Clock, AlertTriangle, Battery, FileWarning } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const pains = [
  { icon: Clock, text: "Horas escrevendo prontuário" },
  { icon: AlertTriangle, text: "Atendimento atrasado" },
  { icon: Battery, text: "Cansaço no fim do dia" },
  { icon: FileWarning, text: "Risco de erro por pressa" },
];

const PainSection = () => (
  <section className="section-padding surface-sunken">
    <div className="container mx-auto max-w-3xl text-center">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Você virou digitador… <span className="text-gradient">e não médico.</span>
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        {pains.map((p, i) => (
          <AnimatedSection key={p.text} delay={i * 0.1}>
            <div className="flex flex-col items-center gap-4 p-6 rounded-xl surface-elevated border border-border/50 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">
                <p.icon className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium text-foreground text-center">{p.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.4}>
        <p className="mt-12 text-lg font-semibold text-muted-foreground">
          Isso não é medicina. <span className="text-foreground">Isso é sobrecarga.</span>
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default PainSection;
