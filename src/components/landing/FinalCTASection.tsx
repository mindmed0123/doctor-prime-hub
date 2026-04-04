import FadeIn from "./FadeIn";

const FinalCTASection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto">
      <FadeIn>
        <div className="rounded-2xl bg-foreground px-8 py-16 md:py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-primary-foreground max-w-md mx-auto leading-tight">
            Pronto para transformar minutos digitados em minutos de cuidado?
          </h2>
          <div className="mt-8">
            <a
              href="#planos"
              className="inline-flex items-center text-[15px] font-medium text-foreground bg-background hover:bg-background/90 rounded-xl px-7 py-3.5 transition-colors"
            >
              Iniciar teste gratuito
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default FinalCTASection;
