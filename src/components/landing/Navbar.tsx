import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 surface-elevated border-b border-border/50 backdrop-blur-md bg-card/90">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="text-xl font-bold text-foreground">
          Mind<span className="text-gradient">Med</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#produto" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Produto</a>
          <a href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Demonstração</a>
          <a href="#preco" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Preço</a>
          <a href="#seguranca" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Segurança</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground">Entrar</Button>
          <Button size="sm" asChild>
            <a href="#cta-final">Começar agora</a>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden surface-elevated border-t border-border px-4 pb-4 space-y-3">
          <a href="#produto" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-muted-foreground">Produto</a>
          <a href="#demo" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-muted-foreground">Demonstração</a>
          <a href="#preco" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-muted-foreground">Preço</a>
          <a href="#seguranca" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-muted-foreground">Segurança</a>
          <Button className="w-full" asChild>
            <a href="#cta-final">Começar agora</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
