import { TrendingUp, DollarSign, Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const benefits = [
  { icon: TrendingUp, text: "Atender mais pacientes" },
  { icon: DollarSign, text: "Faturar mais" },
  { icon: Heart, text: "Ter mais qualidade de vida" },
];

const ROISection = () => (
  <section id="preco" className="section-padding surface-sunken">
    <div className="container mx-auto max-w-4xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Quanto vale{" "}
              <span className="text-gradient">1 a 2 horas</span> por dia?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Se você atende 20 pacientes por dia e economiza 10 minutos por consulta:
            </p>
            <div className="space-y-2 text-foreground font-medium">
              <p>→ 200 minutos economizados</p>
              <p>→ mais de <span className="text-primary font-bold">3 horas livres</span></p>
            </div>
            <p className="text-muted-foreground">Você pode:</p>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {benefits.map((b, i) => (
            <AnimatedSection key={b.text} delay={i * 0.1}>
              <div className="flex items-center gap-4 p-5 rounded-xl surface-elevated border border-border/50 shadow-sm">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <b.icon className="h-5 w-5" />
                </div>
                <p className="font-semibold text-foreground">{b.text}</p>
              </div>
            </AnimatedSection>
          ))}

          <AnimatedSection delay={0.3}>
            <Button size="lg" className="w-full mt-2" asChild>
              <a href="#cta-final">Começar agora <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default ROISection;
