import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "O que preciso para usar a MindMed?",
    a: "Para começar, basta ter um computador ou celular com acesso à internet e um microfone simples, podendo ser o do próprio aparelho. Você pode usar a plataforma direto pelo navegador.",
  },
  {
    q: "A MindMed funciona como prontuário eletrônico?",
    a: "Não. A MindMed não é um prontuário eletrônico. Ela é uma assistente que automatiza a documentação clínica. Os registros gerados podem ser copiados e colados facilmente em qualquer prontuário web que você já utilize.",
  },
  {
    q: "Posso personalizar meus modelos de documentos?",
    a: "Sim. Na MindMed você tem total liberdade para criar, editar e adaptar modelos de anamnese, laudos e relatórios conforme sua especialidade e estilo de atendimento.",
  },
  {
    q: "A MindMed é segura?",
    a: "Sim. Os áudios das consultas são descartados automaticamente, os dados são anonimizados de acordo com a LGPD e nenhuma informação dos pacientes circula fora da MindMed. Todo o processamento ocorre em ambiente seguro e exclusivo.",
  },
  {
    q: "A MindMed substitui o julgamento médico?",
    a: "Não. A MindMed é uma ferramenta de apoio à documentação. Toda informação gerada passa pela revisão e aprovação do profissional, sem substituir qualquer decisão clínica.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto max-w-3xl">
        <FadeIn>
          <div className="text-center mb-6">
            <span className="inline-flex items-center rounded-full bg-primary-light text-primary text-xs font-semibold px-4 py-1.5 uppercase tracking-wider">
              Perguntas frequentes
            </span>
          </div>
          <h2 className="font-mono text-3xl md:text-[2.5rem] font-bold tracking-tight text-foreground text-center leading-tight">
            O que os médicos{" "}
            <span className="text-primary">mais perguntam</span>
          </h2>
        </FadeIn>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div className="rounded-xl border border-border bg-background overflow-hidden transition-shadow hover:shadow-sm">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex items-center justify-between w-full text-left px-6 py-5"
                >
                  <span className="text-[15px] font-semibold text-foreground pr-6">{faq.q}</span>
                  <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    {openIndex === i ? (
                      <Minus className="h-3.5 w-3.5 text-primary" />
                    ) : (
                      <Plus className="h-3.5 w-3.5 text-primary" />
                    )}
                  </div>
                </button>
                <div className={`grid transition-all duration-200 ${openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
