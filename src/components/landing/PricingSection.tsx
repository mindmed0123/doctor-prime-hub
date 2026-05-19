import { Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { createCheckoutSession, STRIPE_PLANS, type StripePlanKey } from "@/lib/stripe";

import FadeIn from "./FadeIn";

const formatCurrency = (amountInCents: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: amountInCents % 100 === 0 ? 0 : 2,
  }).format(amountInCents / 100);

const plans: Array<{
  key: StripePlanKey;
  badge: string;
  title: string;
  subtitle: string;
  summary: string;
  cta: string;
  perConsultation: string;
  timeSaved: string;
  perks: string[];
}> = [
  {
    key: "starter",
    badge: "14 dias grátis",
    title: "MindMed Starter",
    subtitle: "Operação individual",
    summary: "Economize tempo em cada consulta com transcrição e laudos automáticos.",
    cta: "Começar agora",
    perConsultation: "Menos de R$5/consulta — para até 30 consultas/mês",
    timeSaved: "Economize até 40h/mês",
    perks: [
      "Transcrição automática da consulta",
      "Laudos com CID e conduta",
      "Anamnese estruturada em segundos",
      "Ideal para consultório individual",
    ],
  },
  {
    key: "pro",
    badge: "Mais escolhido",
    title: "MindMed Pro",
    subtitle: "Clínicas e alta demanda",
    summary: "Automação completa para quem precisa de velocidade, precisão e escala.",
    cta: "Testar agora",
    perConsultation: "Menos de R$10/consulta",
    timeSaved: "Economize até 60h/mês",
    perks: [
      "Tudo do Starter incluído",
      "Prescrição e receituário automatizados",
      "Relatórios evolutivos expandidos",
      "Fluxo premium para múltiplos atendimentos",
    ],
  },
];

const PricingSection = () => {
  const [loadingPlan, setLoadingPlan] = useState<StripePlanKey | null>(null);

  const handleCheckout = async (plan: StripePlanKey) => {
    try {
      setLoadingPlan(plan);
      
      await createCheckoutSession(plan);
    } catch (error) {
      toast.error("Erro ao iniciar o checkout. Tente novamente.");
    } finally {
      setLoadingPlan(null);
    }
  };

  return (
    <section id="planos" className="bg-surface py-16 md:py-32">
      <div className="container mx-auto max-w-6xl px-5 md:px-6">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Planos
            </span>
            <h2 className="mt-4 md:mt-6 text-center font-mono text-2xl md:text-[2.5rem] font-bold leading-tight tracking-tight text-foreground">
              Escolha o plano ideal para sua operação.
            </h2>
            <p className="mt-3 md:mt-4 text-xs md:text-base text-muted-foreground">
              14 dias grátis, sem cartão. Assine só se amar o produto.
            </p>
          </div>
        </FadeIn>

        <div className="mt-8 md:mt-12 grid gap-4 md:gap-6 lg:grid-cols-2">
          {plans.map((plan, index) => {
            const stripePlan = STRIPE_PLANS[plan.key];
            const isLoading = loadingPlan === plan.key;
            const isPrimary = plan.key === "pro";

            return (
              <FadeIn key={plan.key} delay={0.08 * (index + 1)}>
                <article
                  className={[
                    "relative flex h-full flex-col rounded-2xl md:rounded-3xl border bg-background p-5 md:p-8",
                    isPrimary
                      ? "border-primary shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.25)] ring-1 ring-primary/20"
                      : "border-border shadow-xl shadow-primary/5",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        {plan.subtitle}
                      </p>
                      <h3 className="mt-2 md:mt-3 text-xl md:text-2xl font-bold text-foreground">{plan.title}</h3>
                    </div>
                    <span className="inline-flex flex-col items-end rounded-2xl bg-primary-light px-2.5 md:px-3 py-1 text-[10px] md:text-xs font-semibold text-primary whitespace-nowrap leading-tight">
                      <span>{plan.badge}</span>
                      {plan.key === "starter" && (
                        <span className="text-[9px] md:text-[10px] font-medium opacity-80">Sem cartão necessário</span>
                      )}
                    </span>

                  </div>

                  <p className="mt-3 md:mt-5 text-xs md:text-sm leading-relaxed text-muted-foreground">{plan.summary}</p>

                  <div className="mt-5 md:mt-8 border-y border-border py-4 md:py-6">
                    <div className="flex items-end gap-1.5 md:gap-2">
                      <span className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                        {formatCurrency(stripePlan.monthlyPriceInCents)}
                      </span>
                      <span className="pb-0.5 md:pb-1 text-xs md:text-sm text-muted-foreground">/mês</span>
                    </div>
                    <p className="mt-1.5 md:mt-2 text-[10px] md:text-xs text-muted-foreground">
                      {stripePlan.trialDays > 0
                        ? `${stripePlan.trialDays} dias de teste antes da primeira cobrança.`
                        : "Ativação imediata após confirmação do pagamento."}
                    </p>
                    <div className="mt-2 md:mt-3 flex flex-wrap gap-1.5 md:gap-2">
                      <span className="inline-flex items-center rounded-full bg-success/10 px-2.5 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs font-medium text-success">
                        {plan.perConsultation}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-primary-light px-2.5 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs font-medium text-primary">
                        {plan.timeSaved}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-5 md:mt-8 space-y-2.5 md:space-y-3">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2.5 md:gap-3 text-xs md:text-sm text-foreground">
                        <div className="mt-0.5 flex h-4 w-4 md:h-5 md:w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-2.5 w-2.5 md:h-3 md:w-3 text-primary" />
                        </div>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => void handleCheckout(plan.key)}
                    disabled={isLoading}
                    className={[
                      "mt-5 md:mt-8 inline-flex w-full items-center justify-center rounded-full py-3 md:py-3.5 text-sm md:text-[15px] font-semibold transition-colors",
                      isPrimary
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    ].join(" ")}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Abrindo checkout...
                      </>
                    ) : (
                      plan.cta
                    )}
                  </button>

                  <p className="mt-2 md:mt-3 text-center text-[10px] md:text-xs text-muted-foreground">
                    Sem cartão de crédito. Cancele quando quiser.
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
