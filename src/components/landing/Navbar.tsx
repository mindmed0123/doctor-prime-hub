import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-[0_1px_3px_0_rgb(0_0_0/0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-14 px-6">
        <a href="#" className="text-base font-semibold tracking-tight text-foreground">
          MindMed
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[
            ["Produto", "#produto"],
            ["Segurança", "#seguranca"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
            Entrar
          </a>
          <a
            href="#cta-final"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-primary-foreground bg-foreground hover:bg-foreground/90 rounded-lg px-4 py-2 transition-colors"
          >
            Começar <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 pb-5 pt-2 space-y-1">
          {[
            ["Produto", "#produto"],
            ["Segurança", "#seguranca"],
          ].map(([label, href]) => (
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
            href="#cta-final"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 text-center text-sm font-medium text-primary-foreground bg-foreground rounded-lg px-4 py-2.5"
          >
            Começar →
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
