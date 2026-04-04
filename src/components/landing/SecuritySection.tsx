import { Shield, Lock, UserCheck, Server } from "lucide-react";
import FadeIn from "./FadeIn";

const items = [
  { icon: Shield, label: "LGPD" },
  { icon: Lock, label: "Controle de dados" },
  { icon: UserCheck, label: "Revisão médica obrigatória" },
  { icon: Server, label: "Arquitetura segura" },
];

const SecuritySection = () => (
  <section id="seguranca" className="py-24 md:py-32 bg-surface">
    <div className="container mx-auto px-6 max-w-3xl">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl md:text-[2.2rem] font-semibold tracking-tight text-foreground">
            Construído para ambientes clínicos.
          </h2>
        </div>
      </FadeIn>

      <div className="mt-14 grid sm:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <FadeIn key={item.label} delay={i * 0.08}>
            <div className="flex items-center gap-4 rounded-xl border border-border bg-background px-6 py-5">
              <item.icon className="h-4.5 w-4.5 text-muted-foreground shrink-0" />
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default SecuritySection;
