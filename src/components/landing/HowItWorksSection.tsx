import { Mic, FileText, Zap, CheckCircle } from "lucide-react";
import FadeIn from "./FadeIn";

const steps = [
  { icon: Mic, step: "01", title: "Grave a consulta", desc: "Inicie a gravação durante o atendimento. A MindMed captura o áudio de forma segura." },
  { icon: FileText, step: "02", title: "A IA transcreve automaticamente", desc: "O áudio é convertido em texto estruturado com precisão clínica em segundos." },
  { icon: Zap, step: "03", title: "O laudo é gerado instantaneamente", desc: "Anamnese, hipóteses, conduta e CID são organizados automaticamente." },
  { icon: CheckCircle, step: "04", title: "Você revisa e exporta", desc: "Revise o documento, ajuste se necessário e exporte no formato desejado." },
];

const HowItWorksSection = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto max-w-5xl">
      <FadeIn>
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-primary-light text-primary text-xs font-semibold px-4 py-1.5 uppercase tracking-wider mb-6">
            Como funciona
          </span>
          <h2 className="font-mono text-3xl md:text-[2.5rem] font-bold tracking-tight text-foreground leading-tight max-w-2xl mx-auto">
            Do áudio ao laudo em <span className="text-primary">4 passos</span>
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <FadeIn key={s.step} delay={i * 0.08}>
            <div className="relative text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary tracking-widest uppercase">{s.step}</span>
              <h3 className="mt-2 text-base font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
