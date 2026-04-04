import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-[0_1px_2px_0_rgb(0_0_0/0.03)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-[60px]">
        <a href="#" className="text-[15px] font-bold tracking-tight text-foreground">
          MindMed
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
          >
            Entrar
          </a>
          <a
            href="#planos"
            className="text-[13px] font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg px-4 py-2 transition-colors"
          >
            Iniciar teste gratuito
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-5 pt-3 space-y-1">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm text-muted-foreground"
            >
              {label}
            </a>
          ))}
          <a
            href="#planos"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 text-center text-sm font-medium text-primary-foreground bg-primary rounded-lg px-4 py-2.5 transition-colors"
          >
            Iniciar teste gratuito
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
