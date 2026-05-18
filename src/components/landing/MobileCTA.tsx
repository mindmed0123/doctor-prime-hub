import { trackLead } from "@/lib/fbq";

const MobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-4 pt-2 pointer-events-none">
    <div className="pointer-events-auto bg-background/80 backdrop-blur-lg rounded-full p-1 shadow-lg shadow-primary/10 border border-border">
      <a href="#planos" onClick={trackLead} className="flex items-center justify-center w-full text-sm font-semibold text-primary-foreground bg-primary rounded-full py-3">
        Iniciar teste gratuito
      </a>
    </div>
  </div>
);

export default MobileCTA;
