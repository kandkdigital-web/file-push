import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-warm">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-primary">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">K</span>
            K&amp;K Digital
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A boutique digital agency in Ocala, FL helping local businesses grow online with care.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/work" className="hover:text-primary">Work</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Say hello</h4>
          <p className="mt-3 text-sm text-muted-foreground">Ocala, Florida</p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-card text-primary shadow-card transition-transform hover:scale-110">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full bg-card text-primary shadow-card transition-transform hover:scale-110">
              <Facebook size={18} />
            </a>
            <a href="mailto:hello@kkdigital.co" aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full bg-card text-primary shadow-card transition-transform hover:scale-110">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} K&amp;K Digital. Made with care in Ocala.</p>
          <p>Built for local businesses, by locals.</p>
        </div>
      </div>
    </footer>
  );
}
