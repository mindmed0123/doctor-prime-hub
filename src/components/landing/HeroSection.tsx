import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import heroMockup from "@/assets/hero-mockup.jpg";

const bullets = [
  "Anamnese automática completa",
  "Hipóteses diagnósticas estruturadas",
  "Condutas e exames sugeridos",
  "Resumo pronto para o paciente",
];

const HeroSection = () => (
  <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 pointer-events-none" />

    <div className="container mx-auto px-4 relative">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <AnimatedSection>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              IA clínica estruturada
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-tight tracking-tight text-foreground">
              Pare de perder até{" "}
              <span className="text-gradient">2 horas por dia</span>{" "}
              escrevendo prontuários.
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              A MindMed transforma sua consulta em um prontuário completo, estruturado e pronto — em segundos.
            </p>

            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-secondary-foreground">
                  <span className="flex items-center justify-center h-5 w-5 rounded-full bg-success/15 text-success">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  <span className="text-sm font-medium">{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="text-base px-8 shadow-lg shadow-primary/25" asChild>
                <a href="#cta-final">
                  Começar agora <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <a href="#demo">
                  <Play className="mr-2 h-4 w-4" /> Ver como funciona
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-2xl opacity-50" />
            <img
              src={heroMockup}
              alt="MindMed — prontuário sendo gerado por IA"
              className="relative rounded-xl shadow-2xl border border-border/50 w-full"
              loading="eager"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default HeroSection;
