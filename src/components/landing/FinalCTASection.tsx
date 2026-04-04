import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

const FinalCTASection = () => (
  <section id="cta-final" className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-md text-center">
      <FadeIn>
        <h2 className="text-3xl md:text-[2.2rem] font-semibold tracking-tight text-foreground">
          Comece a usar a MindMed.
        </h2>

        <div className="mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[15px] font-medium text-primary-foreground bg-foreground hover:bg-foreground/90 rounded-lg px-8 py-3.5 transition-colors"
          >
            Criar conta <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default FinalCTASection;
