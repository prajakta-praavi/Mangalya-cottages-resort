import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { navLinks, resort } from "@/lib/site-data";
import logoMark from "@/assets/final logo.png";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const socials = [
    { Icon: Instagram, href: resort.social.instagram, label: "Instagram" },
    { Icon: Facebook, href: resort.social.facebook, label: "Facebook" },
    { Icon: Youtube, href: resort.social.youtube, label: "YouTube" },
  ].filter((item) => item.href);

  return (
    <footer className="gradient-forest relative overflow-hidden text-cream">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.75fr_1fr_1.15fr] lg:py-20">
        <div>
          <div className="flex items-center">
            <span className="grid h-20 w-44 place-items-center">
              <img src={logoMark} alt="Mangalya Cottages Resort logo" className="h-full w-full object-contain" width={160} height={80} loading="lazy" />
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-cream/75">
            A premium nature retreat on Tapola Road, Mahabaleshwar, where cottage stays, Sahyadri views and warm hospitality come together.
          </p>
          {socials.length > 0 && (
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 transition-colors hover:border-accent hover:bg-accent hover:text-gold-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <h3 className="font-display text-xl text-accent">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-cream/80">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/booking" className="transition-colors hover:text-accent">Book Now</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl text-accent">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm text-cream/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{resort.location}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href={resort.phoneHref} className="hover:text-accent">{resort.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${resort.email}`} className="break-all hover:text-accent">{resort.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl text-accent">Find Us</h3>
          <div className="mt-5 overflow-hidden rounded-2xl border border-cream/15">
            <iframe title="Mangalya Cottages Resort map" src={resort.mapEmbed} className="h-48 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-cream/65 sm:flex-row sm:px-8">
          <p>Copyright {year} {resort.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-accent">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
