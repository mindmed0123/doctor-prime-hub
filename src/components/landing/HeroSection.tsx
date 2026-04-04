import FadeIn from "./FadeIn";
import appScreenshot from "@/assets/app-screenshot.jpg";
import { Stethoscope, FileText } from "lucide-react";

const HeroSection = () => (
  <section className="pt-[100px] pb-0 overflow-hidden">
    <div className="container mx-auto text-center">
      {/* Social proof badges */}
      <FadeIn>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-[13px] text-muted-foreground shadow-sm">
            <Stethoscope className="h-3.5 w-3.5 text-primary" />
            <span><strong className="text-foreground">+2.000</strong> médicos ativos</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-[13px] text-muted-foreground shadow-sm">
            <FileText className="h-3.5 w-3.5 text-primary" />
            <span><strong className="text-foreground">+50 mil</strong> documentos gerados</span>
          </div>
        </div>
      </FadeIn>

      {/* Headline */}
      <FadeIn delay={0.05}>
        <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-bold leading-[1.08] tracking-tight text-foreground max-w-3xl mx-auto">
          Documentação clínica,{" "}
          <span className="text-primary">sem fricção.</span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Seu assistente de IA para consultas. Transforme atendimentos em registros clínicos estruturados, em segundos.
        </p>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={0.15}>
        <div className="mt-8">
          <a
            href="#planos"
            className="inline-flex items-center text-[15px] font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-xl px-7 py-3.5 transition-colors shadow-lg shadow-primary/20"
          >
            Iniciar teste gratuito
          </a>
        </div>
      </FadeIn>

      {/* Trust indicators */}
      <FadeIn delay={0.2}>
        <div className="mt-5 flex flex-wrap justify-center gap-6 text-[12px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Fácil de começar
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Teste sem compromisso
          </span>
          <span className="flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Proteção total dos dados
          </span>
        </div>
      </FadeIn>

      {/* App screenshot */}
      <FadeIn delay={0.25} y={40}>
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="rounded-t-2xl overflow-hidden border border-b-0 border-border shadow-2xl shadow-foreground/5">
            <img
              src={appScreenshot}
              alt="Interface da plataforma MindMed"
              className="w-full"
              loading="eager"
            />
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default HeroSection;
