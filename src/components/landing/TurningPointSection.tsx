import { Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const TurningPointSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-2xl text-center">
      <AnimatedSection>
        <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 text-primary mb-6">
          <Sparkles className="h-7 w-7" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          A inteligência artificial já{" "}
          <span className="text-gradient">mudou a medicina.</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Médicos no mundo inteiro já usam IA para reduzir burocracia.
          <br className="hidden md:block" />
          Mas a maioria ainda usa ferramentas{" "}
          <span className="font-semibold text-foreground">sem estrutura clínica.</span>
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default TurningPointSection;
