import FadeIn from "./FadeIn";

const FinalCTASection = () => (
  <section className="py-20 md:py-24">
    <div className="container mx-auto">
      <FadeIn>
        <div className="rounded-3xl bg-primary px-8 py-16 md:py-20 text-center relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80 pointer-events-none" />

          <div className="relative">
            <h2 className="font-mono text-2xl md:text-4xl font-bold text-primary-foreground max-w-lg mx-auto leading-tight">
              Pare de perder tempo com burocracia.
            </h2>
            <p className="mt-4 text-primary-foreground/80 text-base max-w-md mx-auto">
              A MindMed cuida da documentação. Você cuida do paciente.
            </p>
            <div className="mt-8">
              <a href="#planos" className="inline-flex items-center text-[15px] font-semibold text-primary bg-background hover:bg-background/90 rounded-full px-8 py-3.5 transition-colors">
                Começar agora
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default FinalCTASection;
