import { Loader2 } from "lucide-react";
import FadeIn from "./FadeIn";
import { useCheckoutCTA } from "@/lib/useCheckoutCTA";

const FinalCTASection = () => {
  const { loading, startCheckout } = useCheckoutCTA();

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-5 md:px-6">
        <FadeIn>
          <div className="rounded-2xl md:rounded-3xl bg-primary px-6 md:px-8 py-12 md:py-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80 pointer-events-none" />
            <div className="relative">
              <h2 className="font-mono text-xl md:text-4xl font-bold text-primary-foreground max-w-lg mx-auto leading-tight">
                Pare de perder tempo com burocracia.
              </h2>
              <p className="mt-3 md:mt-4 text-primary-foreground/80 text-sm md:text-base max-w-md mx-auto">
                A MindMed cuida da documentação. Você cuida do paciente.
              </p>
              <div className="mt-6 md:mt-8">
                <button onClick={() => startCheckout()} disabled={loading} className="inline-flex items-center gap-2 text-sm md:text-[15px] font-semibold text-primary bg-background hover:bg-background/90 rounded-full px-6 md:px-8 py-3 md:py-3.5 transition-colors disabled:opacity-70">
                  {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                  Começar agora
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FinalCTASection;
