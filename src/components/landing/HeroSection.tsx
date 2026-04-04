import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";
import platformHero from "@/assets/platform-hero.jpg";

const HeroSection = () => (
  <section className="pt-32 pb-20 md:pt-40 md:pb-32">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <FadeIn>
          <div className="max-w-lg">
            <h1 className="text-[2.5rem] md:text-5xl font-semibold leading-[1.1] tracking-tight text-foreground">
              Documentação médica, sem fricção.
            </h1>

            <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
              Transforme consultas em registros clínicos estruturados, com precisão e velocidade.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#cta-final"
                className="inline-flex items-center gap-2 text-[15px] font-medium text-primary-foreground bg-foreground hover:bg-foreground/90 rounded-lg px-6 py-3 transition-colors"
              >
                Começar <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-3 text-[13px] text-muted-foreground">
              Sem configuração. Pronto em minutos.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative rounded-xl overflow-hidden border border-border shadow-[0_8px_30px_rgb(0_0_0/0.06)]">
            <img
              src={platformHero}
              alt="Interface da plataforma MindMed"
              className="w-full"
              loading="eager"
            />
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default HeroSection;
