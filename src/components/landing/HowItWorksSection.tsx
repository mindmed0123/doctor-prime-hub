import { Mic, FileText, Zap, CheckCircle } from "lucide-react";
import FadeIn from "./FadeIn";

const steps = [
  { icon: Mic, step: "01", title: "Grave a consulta", desc: "Inicie a gravação durante o atendimento. A MindMed captura o áudio de forma segura." },
  { icon: FileText, step: "02", title: "A IA transcreve", desc: "O áudio é convertido em texto estruturado com precisão clínica em segundos." },
  { icon: Zap, step: "03", title: "Laudo gerado", desc: "Anamnese, hipóteses, conduta e CID são organizados automaticamente." },
  { icon: CheckCircle, step: "04", title: "Revise e exporte", desc: "Revise o documento, ajuste se necessário e exporte no formato desejado." },
];

const HowItWorksSection = () => (
  <section className="py-16 md:py-32">
    <div className="container mx-auto max-w-5xl px-5 md:px-6">
      <FadeIn>
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-flex items-center rounded-full bg-primary-light text-primary text-xs font-semibold px-4 py-1.5 uppercase tracking-wider mb-4 md:mb-6">
            Como funciona
          </span>
          <h2 className="font-mono text-2xl md:text-[2.5rem] font-bold tracking-tight text-foreground leading-tight max-w-2xl mx-auto">
            Do áudio ao laudo em <span className="text-primary">4 passos</span>
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {steps.map((s, i) => (
          <FadeIn key={s.step} delay={i * 0.08}>
            <div className="relative text-center">
              <div className="mx-auto mb-3 md:mb-5 flex h-11 w-11 md:h-14 md:w-14 items-center justify-center rounded-xl md:rounded-2xl bg-primary/10">
                <s.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <span className="text-[10px] md:text-xs font-bold text-primary tracking-widest uppercase">{s.step}</span>
              <h3 className="mt-1 md:mt-2 text-sm md:text-base font-bold text-foreground">{s.title}</h3>
              <p className="mt-1 md:mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
