import { Quote } from "lucide-react";
import FadeIn from "./FadeIn";

const testimonials = [
  { quote: "Reduzi meu tempo de documentação pela metade. Consigo atender mais pacientes com mais qualidade.", author: "Dr. Felipe Andrade", specialty: "Clínico Geral" },
  { quote: "A estruturação automática da anamnese mudou minha rotina. É precisa e economiza muito tempo.", author: "Dra. Marina Costa", specialty: "Cardiologista" },
  { quote: "Uso todos os dias na clínica. Os laudos saem prontos e eu só preciso revisar antes de assinar.", author: "Dr. Ricardo Lemos", specialty: "Neurologista" },
];

const SocialProofSection = () => (
  <section className="py-16 md:py-32 bg-surface">
    <div className="container mx-auto max-w-5xl px-5 md:px-6">
      <FadeIn>
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-flex items-center rounded-full bg-primary-light text-primary text-xs font-semibold px-4 py-1.5 uppercase tracking-wider mb-4 md:mb-6">
            Depoimentos
          </span>
          <h2 className="font-mono text-2xl md:text-[2.5rem] font-bold tracking-tight text-foreground leading-tight max-w-2xl mx-auto">
            Mais de 2.000 médicos já estão usando a MindMed
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {testimonials.map((t, i) => (
          <FadeIn key={t.author} delay={i * 0.08}>
            <div className="rounded-xl md:rounded-2xl border border-border bg-background p-6 md:p-8 shadow-sm h-full flex flex-col">
              <Quote className="h-4 w-4 md:h-5 md:w-5 text-primary/40 mb-3 md:mb-4" />
              <p className="text-sm md:text-[15px] text-foreground leading-relaxed flex-1">"{t.quote}"</p>
              <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-border">
                <p className="text-sm font-semibold text-foreground">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.specialty}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
