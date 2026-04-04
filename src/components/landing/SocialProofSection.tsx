import FadeIn from "./FadeIn";

const SocialProofSection = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-2xl text-center">
      <FadeIn>
        <p className="text-[15px] text-muted-foreground leading-relaxed">
          Utilizado diariamente por médicos em diferentes especialidades.
        </p>
        <div className="mt-8 flex justify-center gap-12">
          <div>
            <p className="text-2xl font-semibold text-foreground">2.000+</p>
            <p className="mt-1 text-xs text-muted-foreground">médicos</p>
          </div>
          <div className="w-px bg-border" />
          <div>
            <p className="text-2xl font-semibold text-foreground">50k+</p>
            <p className="mt-1 text-xs text-muted-foreground">documentos</p>
          </div>
          <div className="w-px bg-border" />
          <div>
            <p className="text-2xl font-semibold text-foreground">12+</p>
            <p className="mt-1 text-xs text-muted-foreground">especialidades</p>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default SocialProofSection;
