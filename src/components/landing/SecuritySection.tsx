import { Shield, Trash2, Lock, UserCheck } from "lucide-react";
import FadeIn from "./FadeIn";

const items = [
  { icon: Trash2, title: "Descartamos áudios automaticamente", desc: "Nenhum registro de voz fica armazenado." },
  { icon: Shield, title: "Anonimizamos os dados", desc: "Em conformidade total com a LGPD." },
  { icon: Lock, title: "Mantemos tudo dentro da MindMed", desc: "Os dados clínicos não transitam em outras aplicações." },
  { icon: UserCheck, title: "Uso simplificado e seguro", desc: "Revisão sempre pelo médico. Sem substituição de decisão clínica." },
];

const SecuritySection = () => (
  <section id="seguranca" className="py-24 md:py-32">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <FadeIn>
          <div className="md:sticky md:top-28">
            <span className="inline-flex items-center rounded-full bg-primary-light text-primary text-xs font-semibold px-4 py-1.5 uppercase tracking-wider mb-6">
              Segurança
            </span>
            <h2 className="font-mono text-3xl md:text-[2.5rem] font-bold tracking-tight text-foreground leading-tight">
              Segurança de dados{" "}
              <span className="text-primary">em padrão clínico</span>
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="flex gap-5">
                <div className="mt-1 h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
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
