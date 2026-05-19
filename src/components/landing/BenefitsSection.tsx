import { Check } from "lucide-react";
import FadeIn from "./FadeIn";


const bullets = [
  "Economize até 10 minutos por consulta",
  "Interface que não atrapalha o fluxo",
  "Estruturação clínica de alta precisão",
  "Resultados validados na prática",
  "Registros mais ricos em informações",
];

const BenefitsSection = () => (
  <section id="beneficios" className="py-16 md:py-32 bg-surface">
    <div className="container mx-auto px-5 md:px-6">
      <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
        <FadeIn>
          <div>
            <span className="inline-flex items-center rounded-full bg-primary-light text-primary text-xs font-semibold px-4 py-1.5 uppercase tracking-wider mb-4 md:mb-6">
              Benefícios
            </span>
            <h2 className="font-mono text-2xl md:text-[2.5rem] font-bold tracking-tight text-foreground leading-tight">
              Produtividade clínica{" "}
              <span className="text-primary">comprovada</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="space-y-3 md:space-y-4">
            {bullets.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <div className="mt-0.5 h-5 w-5 md:h-6 md:w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3 md:h-3.5 md:w-3.5 text-primary" />
                </div>
                <span className="text-sm md:text-[15px] text-foreground">{b}</span>
              </div>
            ))}

            <div className="pt-3 md:pt-4">
              <a href="#planos" className="inline-flex items-center text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-full px-6 py-3 transition-colors">
                Testar agora
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default BenefitsSection;
