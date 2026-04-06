import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "npm:@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const STRIPE_PLANS = {
  starter: {
    priceId: "price_1T95efRpmClnFRZos0lGXwwj",
    trialDays: 7,
  },
  pro: {
    priceId: "price_1T95fURpmClnFRZoFjoXAteA",
    trialDays: 0,
  },
} as const;

type PlanKey = keyof typeof STRIPE_PLANS;

const isPlanKey = (value: unknown): value is PlanKey => typeof value === "string" && value in STRIPE_PLANS;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
    status,
  });

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    if (!supabaseUrl) throw new Error("SUPABASE_URL is not set");

    const publishableKey = Deno.env.get("SUPABASE_PUBLISHABLE_KEY");
    if (!publishableKey) throw new Error("SUPABASE_PUBLISHABLE_KEY is not set");

    const { plan } = await req.json();
    if (!isPlanKey(plan)) {
      return json({ error: "Invalid plan" }, 400);
    }

    const stripe = new Stripe(stripeKey, { apiVersion: "2025-08-27.basil" });
    const selectedPlan = STRIPE_PLANS[plan];

    let customerEmail: string | undefined;
    let customerId: string | undefined;

    const authHeader = req.headers.get("Authorization");
    if (authHeader?.startsWith("Bearer ")) {
      const supabaseClient = createClient(supabaseUrl, publishableKey, {
        auth: { persistSession: false },
      });

      const token = authHeader.replace("Bearer ", "");
      const { data, error } = await supabaseClient.auth.getUser(token);

      if (!error && data.user?.email) {
        customerEmail = data.user.email;
        const customers = await stripe.customers.list({ email: customerEmail, limit: 1 });
        if (customers.data.length > 0) {
          customerId = customers.data[0].id;
        }
      }
    }

    const origin = req.headers.get("origin") || "http://localhost:3000";
    const subscriptionData = selectedPlan.trialDays
      ? {
          trial_period_days: selectedPlan.trialDays,
          metadata: { app: "mindmed", plan },
        }
      : {
          metadata: { app: "mindmed", plan },
        };

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : customerEmail,
      line_items: [{ price: selectedPlan.priceId, quantity: 1 }],
      mode: "subscription",
      allow_promotion_codes: true,
      success_url: `${origin}/?checkout=success&plan=${plan}`,
      cancel_url: `${origin}/?checkout=canceled&plan=${plan}`,
      metadata: {
        app: "mindmed",
        plan,
      },
      subscription_data: subscriptionData,
    });

    return json({ url: session.url }, 200);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return json({ error: message }, 500);
  }
});
