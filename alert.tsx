import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-primary">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            K
          </span>
          K&amp;K Digital
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary bg-secondary/60" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-[1.03] md:inline-flex"
        >
          Free Quote
        </Link>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-foreground md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 p-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-foreground/80 hover:bg-secondary/60"
                activeProps={{ className: "text-primary bg-secondary/60" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
