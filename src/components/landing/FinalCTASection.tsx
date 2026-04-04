import { ArrowRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const FinalCTASection = () => (
  <section id="cta-final" className="section-padding">
    <div className="container mx-auto max-w-2xl">
      <AnimatedSection>
        <div className="text-center rounded-2xl bg-gradient-to-br from-primary to-accent p-12 md:p-16 shadow-2xl shadow-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Teste agora e veja na prática
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-2">
            <span className="text-2xl font-extrabold text-primary-foreground">10 consultas</span> por{" "}
            <span className="text-2xl font-extrabold text-primary-foreground">R$99,90</span>
          </p>
          <p className="text-primary-foreground/70 text-sm mb-8">Sem fidelidade. Cancele quando quiser.</p>

          <Button
            size="lg"
            variant="secondary"
            className="text-base px-10 font-bold shadow-lg"
            asChild
          >
            <a href="#">
              Começar agora <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>

          <p className="mt-6 text-primary-foreground/60 text-xs flex items-center justify-center gap-1.5">
            <Shield className="h-3.5 w-3.5" /> Pagamento seguro · Dados protegidos
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default FinalCTASection;
