import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, resort } from "@/lib/site-data";
import logoMark from "@/assets/final logo.png";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || pathname !== "/";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "glass-card border-b border-cream/50 py-3 shadow-soft"
          : "bg-transparent py-5",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center">
          <span className="grid h-16 w-32 place-items-center sm:h-18 sm:w-40">
            <img
              src={logoMark}
              alt="Mangalya Cottages Resort logo"
              className="h-full w-full object-contain"
              width={144}
              height={72}
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "relative text-[0.82rem] font-medium transition-colors hover:text-accent xl:text-sm",
                solid ? "text-foreground/80" : "text-cream/90",
              )}
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={resort.phoneHref}
            className={cn(
              "hidden items-center gap-2 text-xs font-medium transition-colors hover:text-accent xl:flex",
              solid ? "text-foreground/80" : "text-cream/90",
            )}
          >
            <Phone className="h-4 w-4" />
            {resort.phone}
          </a>
          <Link
            to="/booking"
            className="gradient-gold rounded-full px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-105"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "rounded-full p-2 transition-colors lg:hidden",
            solid ? "text-foreground" : "text-cream",
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="glass-card mx-4 mt-3 rounded-2xl border border-border/60 p-5 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground/85 transition-colors hover:bg-accent/10 hover:text-accent"
                activeProps={{ className: "text-accent bg-accent/10" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/booking"
              className="gradient-gold mt-2 rounded-full px-6 py-3 text-center text-sm font-semibold text-gold-foreground shadow-gold"
            >
              Book Your Stay
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
