import { ArrowRight } from "lucide-react";

const MobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-4 pt-2">
    <a
      href="#cta-final"
      className="flex items-center justify-center gap-2 w-full text-sm font-medium text-primary-foreground bg-foreground rounded-lg py-3 shadow-[0_4px_20px_rgb(0_0_0/0.15)]"
    >
      Começar <ArrowRight className="h-3.5 w-3.5" />
    </a>
  </div>
);

export default MobileCTA;
