import { Check, X } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const rows = [
  { feature: "Transcrição", competitor: true, mindmed: true },
  { feature: "Estrutura clínica", competitor: false, mindmed: true },
  { feature: "Hipóteses diagnósticas", competitor: false, mindmed: true },
  { feature: "Condutas sugeridas", competitor: false, mindmed: true },
  { feature: "Resumo para paciente", competitor: false, mindmed: true },
  { feature: "Prontuário completo", competitor: false, mindmed: true },
];

const Icon = ({ yes }: { yes: boolean }) =>
  yes ? (
    <Check className="h-5 w-5 text-success mx-auto" />
  ) : (
    <X className="h-5 w-5 text-destructive/50 mx-auto" />
  );

const ComparisonSection = () => (
  <section className="section-padding surface-sunken">
    <div className="container mx-auto max-w-3xl">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Por que a <span className="text-gradient">MindMed</span> é diferente?
          </h2>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div className="rounded-xl surface-elevated border border-border/50 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-semibold text-foreground">Recurso</th>
                <th className="text-center p-4 font-semibold text-muted-foreground">Concorrentes</th>
                <th className="text-center p-4 font-semibold text-primary">MindMed</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.feature} className={i < rows.length - 1 ? "border-b border-border/50" : ""}>
                  <td className="p-4 font-medium text-foreground">{r.feature}</td>
                  <td className="p-4"><Icon yes={r.competitor} /></td>
                  <td className="p-4 bg-primary/5"><Icon yes={r.mindmed} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ComparisonSection;
