import FadeIn from "./FadeIn";
import funcCapture from "@/assets/func-capture.jpg";
import funcStructure from "@/assets/func-structure.jpg";
import funcCustomize from "@/assets/func-customize.jpg";

const features = [
  {
    emoji: "📄",
    title: "Documente em segundos",
    description: "A MindMed escuta a conversa com o paciente, organiza as informações e gera documentos clínicos completos em poucos cliques. Anamneses, relatórios e atestados ficam prontos sem precisar digitar, economizando até 10 minutos por atendimento e tornando cada encontro mais humano.",
    image: funcCapture,
  },
  {
    emoji: "🧠",
    title: "Estrutura clínica automática",
    description: "O conteúdo é organizado automaticamente em anamnese, hipóteses diagnósticas, condutas e exames. A MindMed entende o contexto do atendimento e estrutura o raciocínio clínico com respostas rápidas e confiáveis.",
    image: funcStructure,
    reverse: true,
  },
  {
    emoji: "🪄",
    title: "Personalize do seu jeito",
    description: "Anamneses, laudos e relatórios podem ser moldados ao seu estilo de atendimento e especialidade. Ajuste estruturas prontas ou crie novos modelos de documentos com liberdade total na MindMed.",
    image: funcCustomize,
  },
];

const FeaturesSection = () => (
  <section id="funcionalidades" className="py-24 md:py-32">
    <div className="container mx-auto">
      <FadeIn>
        <div className="text-center mb-6">
          <span className="inline-flex items-center rounded-full bg-primary-light text-primary text-xs font-semibold px-4 py-1.5 uppercase tracking-wider">
            Funcionalidades
          </span>
        </div>
        <h2 className="font-mono text-3xl md:text-[2.5rem] font-bold tracking-tight text-foreground text-center max-w-2xl mx-auto leading-tight">
          Recursos que economizam tempo{" "}
          <span className="text-primary">e apoiam a escuta clínica</span>
        </h2>
      </FadeIn>

      <div className="mt-20 space-y-28">
        {features.map((f) => (
          <FadeIn key={f.title}>
            <div className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${f.reverse ? "" : ""}`}>
              <div className={f.reverse ? "md:order-2" : ""}>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  {f.title} {f.emoji}
                </h3>
                <p className="mt-4 text-[15px] text-muted-foreground leading-[1.7]">
                  {f.description}
                </p>
              </div>
              <div className={`rounded-2xl overflow-hidden border border-border shadow-xl ${f.reverse ? "md:order-1" : ""}`}>
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
