import { Brain, LayoutList, Stethoscope, FileCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  { icon: Brain, text: "Entende o contexto clínico" },
  { icon: LayoutList, text: "Organiza a consulta" },
  { icon: Stethoscope, text: "Estrutura o raciocínio médico" },
  { icon: FileCheck, text: "Entrega um documento pronto" },
];

const ProductSection = () => (
  <section id="produto" className="section-padding surface-sunken">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              A MindMed não transcreve.{" "}
              <span className="text-gradient">Ela constrói o seu prontuário.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Enquanto outras ferramentas apenas escrevem o que você fala… a MindMed vai além:
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-4">
          {features.map((f, i) => (
            <AnimatedSection key={f.text} delay={i * 0.1}>
              <div className="p-5 rounded-xl surface-elevated border border-border/50 shadow-sm space-y-3 h-full">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold text-foreground">{f.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProductSection;
