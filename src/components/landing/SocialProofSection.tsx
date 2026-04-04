import { Users, FileText, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { icon: Users, value: "+2.000", label: "médicos ativos" },
  { icon: FileText, value: "Milhares", label: "de documentos gerados" },
  { icon: Clock, value: "10h+", label: "economizadas por semana" },
];

const SocialProofSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-4xl text-center">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-14">
          Médicos já estão usando <span className="text-gradient">todos os dias</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <AnimatedSection key={s.label} delay={i * 0.1}>
            <div className="flex flex-col items-center gap-3 p-8 rounded-xl surface-elevated border border-border/50 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <p className="text-3xl font-extrabold text-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
