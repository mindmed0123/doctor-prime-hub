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
  perks: string[];
}> = [
  {
    key: "starter",
    badge: "7 dias grátis",
    title: "MindMed Starter",
    subtitle: "Operação individual",
    summary: "Para médicos que querem ganhar velocidade mantendo clareza clínica e documentação consistente.",
    cta: "Começar teste grátis",
    perks: [
      "Transcrição automática da consulta",
      "Estruturação clínica com CID, hipótese e conduta",
      "Laudos e resumos essenciais",
      "Fluxo ideal para consultório individual",
    ],
  },
  {
    key: "pro",
    badge: "Plano avançado",
    title: "MindMed Pro",
    subtitle: "Maior profundidade clínica",
    summary: "Para profissionais e clínicas que precisam de mais automação, mais consistência e maior capacidade operacional.",
    cta: "Assinar MindMed Pro",
    perks: [
      "Tudo do Starter incluído",
      "Prescrição e receituário com mais agilidade",
      "Relatórios evolutivos e documentação expandida",
      "Fluxo premium para prática de maior complexidade",
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
    <section id="planos" className="bg-surface py-24 md:py-32">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-primary-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Planos
            </span>
            <h2 className="mt-6 text-center font-mono text-3xl font-bold leading-tight tracking-tight text-foreground md:text-[2.5rem]">
              Escolha o nível de estrutura clínica que faz sentido para sua operação.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              Checkout recorrente via Stripe, com cobrança mensal e entrada imediata na plataforma.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {plans.map((plan, index) => {
            const stripePlan = STRIPE_PLANS[plan.key];
            const isLoading = loadingPlan === plan.key;
            const isPrimary = plan.key === "pro";

            return (
              <FadeIn key={plan.key} delay={0.08 * (index + 1)}>
                <article
                  className={[
                    "flex h-full flex-col rounded-3xl border bg-background p-8 shadow-xl",
                    isPrimary ? "border-primary/30 shadow-primary/10" : "border-border shadow-primary/5",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        {plan.subtitle}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold text-foreground">{plan.title}</h3>
                    </div>
                    <span className="inline-flex rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
                      {plan.badge}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-muted-foreground">{plan.summary}</p>

                  <div className="mt-8 border-y border-border py-6">
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                        {formatCurrency(stripePlan.monthlyPriceInCents)}
                      </span>
                      <span className="pb-1 text-sm text-muted-foreground">/mês</span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {stripePlan.trialDays > 0
                        ? `${stripePlan.trialDays} dias de teste antes da primeira cobrança.`
                        : "Ativação imediata após confirmação do pagamento."}
                    </p>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-3 text-sm text-foreground">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-3 w-3 text-primary" />
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
                      "mt-8 inline-flex w-full items-center justify-center rounded-full py-3.5 text-[15px] font-semibold transition-colors",
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

                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Sem fidelidade contratual. Cancelamento pelo portal do cliente.
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
