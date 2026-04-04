import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "O que preciso para usar a MindMed?",
    a: "Basta um computador ou celular com acesso à internet e microfone. Funciona direto pelo navegador — sem instalação.",
  },
  {
    q: "A MindMed funciona como prontuário eletrônico?",
    a: "Não. A MindMed automatiza a documentação clínica. Os registros gerados podem ser copiados e integrados a qualquer prontuário que você já utilize.",
  },
  {
    q: "Posso personalizar os modelos de documentos?",
    a: "Sim. Você pode criar, editar e adaptar modelos de anamnese, laudos e relatórios conforme sua especialidade e estilo de atendimento.",
  },
  {
    q: "A MindMed é segura?",
    a: "Sim. Os áudios são descartados automaticamente, os dados são anonimizados em conformidade com a LGPD e nenhuma informação circula fora da plataforma.",
  },
  {
    q: "A MindMed substitui o julgamento médico?",
    a: "Não. A MindMed é uma ferramenta de apoio. Toda documentação gerada passa pela revisão e aprovação do profissional.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto max-w-2xl">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-primary mb-3">
              Perguntas frequentes
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              O que os médicos mais perguntam
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="rounded-xl border border-border bg-background overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex items-center justify-between w-full text-left p-5"
                >
                  <span className="text-[14px] font-semibold text-foreground pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5 -mt-1">
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
