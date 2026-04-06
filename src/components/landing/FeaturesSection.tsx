import FadeIn from "./FadeIn";
import funcCapture from "@/assets/func-capture.jpg";
import funcStructure from "@/assets/func-structure.jpg";
import funcCustomize from "@/assets/func-customize.jpg";

const features = [
  {
    emoji: "📄",
    title: "Documente em segundos",
    description: "A MindMed escuta a conversa com o paciente, organiza as informações e gera documentos clínicos completos em poucos cliques.",
    image: funcCapture,
  },
  {
    emoji: "🧠",
    title: "Estrutura clínica automática",
    description: "O conteúdo é organizado automaticamente em anamnese, hipóteses diagnósticas, condutas e exames.",
    image: funcStructure,
    reverse: true,
  },
  {
    emoji: "🪄",
    title: "Personalize do seu jeito",
    description: "Anamneses, laudos e relatórios podem ser moldados ao seu estilo de atendimento e especialidade.",
    image: funcCustomize,
  },
];

const FeaturesSection = () => (
  <section id="funcionalidades" className="py-16 md:py-32">
    <div className="container mx-auto px-5 md:px-6">
      <FadeIn>
        <div className="text-center mb-4 md:mb-6">
          <span className="inline-flex items-center rounded-full bg-primary-light text-primary text-xs font-semibold px-4 py-1.5 uppercase tracking-wider">
            Funcionalidades
          </span>
        </div>
        <h2 className="font-mono text-2xl md:text-[2.5rem] font-bold tracking-tight text-foreground text-center max-w-2xl mx-auto leading-tight">
          Recursos que economizam tempo{" "}
          <span className="text-primary">e apoiam a escuta clínica</span>
        </h2>
      </FadeIn>

      <div className="mt-12 md:mt-20 space-y-14 md:space-y-28">
        {features.map((f) => (
          <FadeIn key={f.title}>
            <div className={`grid md:grid-cols-2 gap-6 md:gap-20 items-center`}>
              <div className={f.reverse ? "md:order-2" : ""}>
                <h3 className="text-xl md:text-3xl font-bold tracking-tight text-foreground">
                  {f.title} {f.emoji}
                </h3>
                <p className="mt-3 md:mt-4 text-sm md:text-[15px] text-muted-foreground leading-relaxed md:leading-[1.7]">
                  {f.description}
                </p>
              </div>
              <div className={`rounded-xl md:rounded-2xl overflow-hidden border border-border shadow-xl ${f.reverse ? "md:order-1" : ""}`}>
                <img src={f.image} alt={f.title} className="w-full" loading="lazy" />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
