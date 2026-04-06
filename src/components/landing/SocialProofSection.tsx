import { Quote } from "lucide-react";
import FadeIn from "./FadeIn";

const testimonials = [
  { quote: "Reduzi meu tempo de documentação pela metade. Consigo atender mais pacientes com mais qualidade.", author: "Dr. Felipe Andrade", specialty: "Clínico Geral" },
  { quote: "A estruturação automática da anamnese mudou minha rotina. É precisa e economiza muito tempo.", author: "Dra. Marina Costa", specialty: "Cardiologista" },
  { quote: "Uso todos os dias na clínica. Os laudos saem prontos e eu só preciso revisar antes de assinar.", author: "Dr. Ricardo Lemos", specialty: "Neurologista" },
];

const SocialProofSection = () => (
  <section className="py-24 md:py-32 bg-surface">
    <div className="container mx-auto max-w-5xl">
      <FadeIn>
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-primary-light text-primary text-xs font-semibold px-4 py-1.5 uppercase tracking-wider mb-6">
            Depoimentos
          </span>
          <h2 className="font-mono text-3xl md:text-[2.5rem] font-bold tracking-tight text-foreground leading-tight max-w-2xl mx-auto">
            Mais de 2.000 médicos já estão usando a MindMed
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <FadeIn key={t.author} delay={i * 0.08}>
            <div className="rounded-2xl border border-border bg-background p-8 shadow-sm h-full flex flex-col">
              <Quote className="h-5 w-5 text-primary/40 mb-4" />
              <p className="text-[15px] text-foreground leading-relaxed flex-1">"{t.quote}"</p>
              <div className="mt-6 pt-4 border-t border-border">
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
