import FadeIn from "./FadeIn";
import funcCapture from "@/assets/func-capture.jpg";
import funcStructure from "@/assets/func-structure.jpg";
import funcCustomize from "@/assets/func-customize.jpg";

const features = [
  {
    label: "Captura",
    title: "Documente em segundos",
    description:
      "A MindMed escuta a conversa com o paciente, organiza as informações e gera documentos clínicos completos em poucos cliques. Anamneses, relatórios e atestados ficam prontos sem precisar digitar.",
    image: funcCapture,
  },
  {
    label: "Estrutura",
    title: "Estrutura clínica automática",
    description:
      "O conteúdo é organizado automaticamente em anamnese, hipóteses diagnósticas, condutas e exames. A MindMed entende o contexto clínico e estrutura o raciocínio médico.",
    image: funcStructure,
    reverse: true,
  },
  {
    label: "Personalização",
    title: "Personalize do seu jeito",
    description:
      "Anamneses, laudos e relatórios podem ser moldados ao seu estilo de atendimento e especialidade. Ajuste estruturas prontas ou crie novos modelos com liberdade total.",
    image: funcCustomize,
  },
];

const FeaturesSection = () => (
  <section id="funcionalidades" className="py-24 md:py-32">
    <div className="container mx-auto">
      <FadeIn>
        <div className="text-center mb-20">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-primary mb-3">
            Funcionalidades
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-lg mx-auto leading-tight">
            Recursos que economizam tempo e apoiam a escuta clínica
          </h2>
        </div>
      </FadeIn>

      <div className="space-y-24 md:space-y-32">
        {features.map((f, i) => (
          <FadeIn key={f.title} delay={0.05}>
            <div
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                f.reverse ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className={f.reverse ? "md:[direction:ltr]" : ""}>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                  {f.label}
                </span>
                <h3 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  {f.title}
                </h3>
                <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
              <div className={`rounded-2xl overflow-hidden border border-border shadow-lg ${f.reverse ? "md:[direction:ltr]" : ""}`}>
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
