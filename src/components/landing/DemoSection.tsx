import { X, Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const before = [
  "Áudio bagunçado",
  "Anotação manual",
  "Texto desorganizado",
  "Informações perdidas",
];

const after = [
  "Anamnese estruturada",
  "Hipóteses diagnósticas",
  "Condutas sugeridas",
  "Exames solicitados",
  "Resumo para paciente",
];

const DemoSection = () => (
  <section id="demo" className="section-padding">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Antes vs <span className="text-gradient">Depois</span>
          </h2>
          <p className="mt-3 text-muted-foreground">Veja a diferença na prática</p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6">
        <AnimatedSection>
          <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-8 h-full">
            <p className="text-sm font-bold text-destructive uppercase tracking-wider mb-6">Sem MindMed</p>
            <ul className="space-y-4">
              {before.map((b) => (
                <li key={b} className="flex items-center gap-3 text-foreground">
                  <X className="h-4 w-4 text-destructive shrink-0" />
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="rounded-xl border border-success/20 bg-success/5 p-8 h-full">
            <p className="text-sm font-bold text-success uppercase tracking-wider mb-6">Com MindMed</p>
            <ul className="space-y-4">
              {after.map((a) => (
                <li key={a} className="flex items-center gap-3 text-foreground">
                  <Check className="h-4 w-4 text-success shrink-0" />
                  <span className="text-sm">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.3}>
        <div className="text-center mt-10">
          <Button size="lg" asChild>
            <a href="#cta-final">Começar agora <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default DemoSection;
