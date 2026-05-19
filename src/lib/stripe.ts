import { supabase } from "@/integrations/supabase/client";

export const STRIPE_PLANS = {
  starter: {
    priceId: "price_1TUEjERpmClnFRZoJeY6zNWv",
    productId: "prod_UTB5ckEKQVGkUL",
    name: "MindMed Starter",
    monthlyPriceInCents: 14900,
    trialDays: 14,
  },
  pro: {
    priceId: "price_1TGigCRpmClnFRZo9mrdRDrd",
    productId: "prod_UFD6iQrFN8u3AO",
    name: "MindMed Pro",
    monthlyPriceInCents: 29900,
    trialDays: 7,
  },
} as const;

export type StripePlanKey = keyof typeof STRIPE_PLANS;

type CheckoutSessionResponse = {
  url?: string;
  error?: string;
};

export async function createCheckoutSession(plan: StripePlanKey) {
  const { data, error } = await supabase.functions.invoke<CheckoutSessionResponse>("create-checkout", {
    body: { plan },
  });

  if (error) {
    throw new Error(error.message);
  }

  if (!data?.url) {
    throw new Error("Checkout URL not returned");
  }

  window.location.assign(data.url);
}

export async function checkSubscription() {
  const { data, error } = await supabase.functions.invoke<{
    subscribed: boolean;
    plan: StripePlanKey | null;
    product_id: string | null;
    price_id: string | null;
    subscription_end: string | null;
  }>("check-subscription");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function openCustomerPortal() {
  const { data, error } = await supabase.functions.invoke<CheckoutSessionResponse>("customer-portal");

  if (error) {
    throw new Error(error.message);
  }

  if (!data?.url) {
    throw new Error("Customer portal URL not returned");
  }

  window.open(data.url, "_blank", "noopener,noreferrer");
  return data;
}
