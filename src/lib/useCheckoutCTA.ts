import { useState } from "react";
import { toast } from "sonner";
import { createCheckoutSession, type StripePlanKey } from "@/lib/stripe";

export function useCheckoutCTA(defaultPlan: StripePlanKey = "starter") {
  const [loading, setLoading] = useState(false);

  const startCheckout = async (plan: StripePlanKey = defaultPlan) => {
    try {
      setLoading(true);
      await createCheckoutSession(plan);
    } catch (error) {
      toast.error("Erro ao iniciar o checkout. Tente novamente.");
      setLoading(false);
    }
  };

  return { loading, startCheckout };
}
