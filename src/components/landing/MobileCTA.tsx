import { Loader2 } from "lucide-react";
import { useCheckoutCTA } from "@/lib/useCheckoutCTA";

const MobileCTA = () => {
  const { loading, startCheckout } = useCheckoutCTA();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-4 pt-2 pointer-events-none">
      <div className="pointer-events-auto bg-background/80 backdrop-blur-lg rounded-full p-1 shadow-lg shadow-primary/10 border border-border">
        <button onClick={() => startCheckout()} disabled={loading} className="flex items-center justify-center gap-2 w-full text-sm font-semibold text-primary-foreground bg-primary rounded-full py-3 disabled:opacity-70">
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          Iniciar teste gratuito
        </button>
      </div>
    </div>
  );
};

export default MobileCTA;
