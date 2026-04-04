import FadeIn from "./FadeIn";
import demoFlow from "@/assets/demo-flow.jpg";

const DemoSection = () => (
  <section id="demo" className="py-24 md:py-32 bg-surface">
    <div className="container mx-auto px-6">
      <FadeIn>
        <div className="flex justify-between items-end mb-8">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Entrada</p>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Saída estruturada</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="rounded-xl overflow-hidden border border-border shadow-[0_8px_30px_rgb(0_0_0/0.06)]">
          <img
            src={demoFlow}
            alt="Fluxo de transformação: áudio para laudo estruturado"
            className="w-full"
            loading="lazy"
          />
        </div>
      </FadeIn>
    </div>
  </section>
);

export default DemoSection;
