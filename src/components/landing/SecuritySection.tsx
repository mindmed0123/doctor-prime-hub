import { Shield, Trash2, Lock, UserCheck } from "lucide-react";
import FadeIn from "./FadeIn";

const items = [
  { icon: Trash2, title: "Descartamos áudios automaticamente", desc: "Nenhum registro de voz fica armazenado." },
  { icon: Shield, title: "Anonimizamos os dados", desc: "Em conformidade total com a LGPD." },
  { icon: Lock, title: "Mantemos tudo dentro da MindMed", desc: "Os dados clínicos não transitam em outras aplicações." },
  { icon: UserCheck, title: "Uso simplificado e seguro", desc: "Revisão sempre pelo médico. Sem substituição de decisão clínica." },
];

const SecuritySection = () => (
  <section id="seguranca" className="py-16 md:py-32">
    <div className="container mx-auto px-5 md:px-6">
      <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-start">
        <FadeIn>
          <div className="md:sticky md:top-28">
            <span className="inline-flex items-center rounded-full bg-primary-light text-primary text-xs font-semibold px-4 py-1.5 uppercase tracking-wider mb-4 md:mb-6">
              Segurança
            </span>
            <h2 className="font-mono text-2xl md:text-[2.5rem] font-bold tracking-tight text-foreground leading-tight">
              Segurança de dados{" "}
              <span className="text-primary">em padrão clínico</span>
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-4 md:space-y-6">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="flex gap-4 md:gap-5">
                <div className="mt-0.5 h-9 w-9 md:h-10 md:w-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm md:text-[15px] font-bold text-foreground">{item.title}</h3>
                  <p className="mt-0.5 md:mt-1 text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SecuritySection;
