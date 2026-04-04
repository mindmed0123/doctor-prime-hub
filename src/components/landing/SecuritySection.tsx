import { Shield, Lock, UserCheck, AlertCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const items = [
  { icon: Shield, title: "LGPD compliant", desc: "Totalmente em conformidade com a legislação brasileira" },
  { icon: Lock, title: "Dados protegidos", desc: "Criptografia de ponta a ponta" },
  { icon: UserCheck, title: "Revisão pelo médico", desc: "O profissional sempre tem a palavra final" },
  { icon: AlertCircle, title: "Não substitui decisão clínica", desc: "Ferramenta de apoio, não de substituição" },
];

const SecuritySection = () => (
  <section id="seguranca" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <AnimatedSection>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Segurança e <span className="text-gradient">responsabilidade médica</span>
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.1}>
            <div className="flex gap-4 p-6 rounded-xl surface-elevated border border-border/50 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SecuritySection;
