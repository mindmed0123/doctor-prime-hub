import { useEffect, useState } from "react";
import FadeIn from "./FadeIn";
import appScreenshot from "@/assets/app-screenshot.jpg";
import { Heart, Zap } from "lucide-react";

const phrases = [
  "em segundos.",
  "com precisão clínica.",
  "sem digitar nada.",
];

const HeroSection = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), 30);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setPhraseIndex((phraseIndex + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <section className="pt-28 pb-0 overflow-hidden">
      <div className="container mx-auto text-center">
        {/* Social proof badges */}
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light px-4 py-2 text-[13px]">
              <Heart className="h-3.5 w-3.5 text-primary" />
              <span className="text-muted-foreground"><strong className="text-foreground">+2 mil</strong> médicos que usam</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light px-4 py-2 text-[13px]">
              <Zap className="h-3.5 w-3.5 text-primary" />
              <span className="text-muted-foreground"><strong className="text-foreground">+50 mil</strong> documentos gerados</span>
            </div>
          </div>
        </FadeIn>

        {/* Headline with typing effect */}
        <FadeIn delay={0.05}>
          <h1 className="font-mono text-4xl md:text-6xl lg:text-[3.8rem] font-bold leading-[1.15] tracking-tight text-foreground max-w-4xl mx-auto">
            A IA que transforma sua consulta em um laudo completo{" "}
            <span className="text-primary">
              {phrases[phraseIndex].substring(0, charIndex)}
            </span>
            <span className="text-primary animate-blink">_</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-6 text-base md:text-[17px] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Mais de 2.000 médicos já usam a MindMed para economizar até 2 horas por dia e focar no paciente.
          </p>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.15}>
          <div className="mt-8">
            <a href="#planos" className="inline-flex items-center text-[15px] font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-full px-8 py-3.5 transition-colors shadow-lg shadow-primary/25">
              Iniciar teste gratuito
            </a>
          </div>
        </FadeIn>

        {/* Trust row */}
        <FadeIn delay={0.2}>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-[13px] text-muted-foreground">
            {["Fácil de começar", "Teste sem compromisso", "Proteção total dos dados"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-primary"><path d="M3 7L6 10L11 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {t}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Screenshot */}
        <FadeIn delay={0.25} y={40}>
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="rounded-t-2xl md:rounded-t-3xl overflow-hidden border border-b-0 border-border shadow-[0_-5px_60px_-15px_hsl(var(--primary)/0.15)]">
              <img src={appScreenshot} alt="Interface MindMed" className="w-full" loading="eager" />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
