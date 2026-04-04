import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MobileCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 surface-elevated border-t border-border/50 backdrop-blur-md bg-card/95">
    <Button className="w-full shadow-lg shadow-primary/25" size="lg" asChild>
      <a href="#cta-final">
        Começar agora <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </Button>
  </div>
);

export default MobileCTA;
