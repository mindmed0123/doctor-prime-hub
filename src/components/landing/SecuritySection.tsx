import { Shield, Lock, UserCheck, Trash2 } from "lucide-react";
import FadeIn from "./FadeIn";

const items = [
  {
    icon: Trash2,
    title: "Áudios descartados automaticamente",
    desc: "Nenhum registro de voz fica armazenado.",
  },
  {
    icon: Shield,
    title: "Conformidade com a LGPD",
    desc: "Dados anonimizados e protegidos por padrão.",
  },
  {
    icon: Lock,
    title: "Dados não transitam fora da plataforma",
    desc: "Informações clínicas permanecem em ambiente seguro e exclusivo.",
  },
  {
    icon: UserCheck,
    title: "Revisão médica obrigatória",
    desc: "O profissional sempre tem a palavra final.",
  },
];

const SecuritySection = () => (
  <section id="seguranca" className="py-24 md:py-32">
    <div className="container mx-auto max-w-4xl">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-[12px] font-semibold uppercase tracking-widest text-primary mb-3">
            Segurança
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Segurança de dados em padrão clínico
          </h2>
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 gap-5">
        {items.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.08}>
            <div className="rounded-xl border border-border p-6 h-full">
              <item.icon className="h-5 w-5 text-primary mb-4" />
              <h3 className="text-[15px] font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default SecuritySection;
