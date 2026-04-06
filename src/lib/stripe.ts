import { supabase } from "@/integrations/supabase/client";

export const STRIPE_PLANS = {
  starter: {
    priceId: "price_1T95efRpmClnFRZos0lGXwwj",
    productId: "prod_U7KJ2V2HJKkJ14",
    name: "MindMed Starter",
    monthlyPriceInCents: 9990,
    trialDays: 7,
  },
  pro: {
    priceId: "price_1T95fURpmClnFRZoFjoXAteA",
    productId: "prod_U7KKGxZRigRnu6",
    name: "MindMed Pro",
    monthlyPriceInCents: 29900,
    trialDays: 0,
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
