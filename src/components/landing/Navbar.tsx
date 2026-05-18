import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { trackLead } from "@/lib/fbq";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Funcionalidades", "#funcionalidades"],
    ["Benefícios", "#beneficios"],
    ["Segurança", "#seguranca"],
    ["Planos", "#planos"],
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? "bg-background/95 backdrop-blur-xl border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between h-16">
        <a href="#" className="text-lg font-bold tracking-tight text-foreground">
          MindMed
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://acesso.mindmed.online" className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2.5">
            Entrar
          </a>
          <a href="#planos" onClick={trackLead} className="inline-flex items-center text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-full px-5 py-2.5 transition-colors">
            Começar agora
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-5 pt-3 space-y-1">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMobileOpen(false)} className="block py-2.5 text-sm text-muted-foreground">{label}</a>
          ))}
          <a href="https://acesso.mindmed.online" onClick={() => setMobileOpen(false)} className="block mt-3 text-center text-sm font-medium text-foreground border border-border rounded-full px-4 py-2.5">
            Entrar
          </a>
          <a href="#planos" onClick={() => setMobileOpen(false)} className="block mt-2 text-center text-sm font-medium text-primary-foreground bg-primary rounded-full px-4 py-2.5">
            Começar agora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
