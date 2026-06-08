import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { images, resort } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Mangalya Cottages Resort, Mahabaleshwar" },
      { name: "description", content: "Get in touch with Mangalya Cottages Resort. Call, WhatsApp or email us, or send an enquiry to plan your Mahabaleshwar getaway." },
      { property: "og:title", content: "Contact — Mangalya Cottages Resort" },
      { property: "og:description", content: "Reach our team to plan your stay in Mahabaleshwar." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const fieldClass = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = `Enquiry from ${data.get("name")} (${data.get("phone")}): ${data.get("message")}`;
    window.open(`https://wa.me/${resort.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHero image={images.cottageCouple} eyebrow="Contact" title="We'd love to host you" subtitle="Questions, special requests or group bookings — our team is here to help." />
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl text-foreground">Send an enquiry</h2>
            <form onSubmit={handleSubmit} className="mt-7 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <input name="name" required placeholder="Your name" maxLength={100} className={fieldClass} />
                <input name="phone" required placeholder="Phone number" maxLength={20} className={fieldClass} />
              </div>
              <input name="email" type="email" placeholder="Email address" maxLength={120} className={fieldClass} />
              <textarea name="message" required rows={5} maxLength={1000} placeholder="How can we help?" className={fieldClass} />
              <button type="submit" className="gradient-gold rounded-xl px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-[1.02]">
                Send Enquiry
              </button>
              {sent && (
                <p className="flex items-center gap-2 text-sm font-medium text-primary">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> Thank you! Opening WhatsApp to confirm your enquiry.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={120} className="space-y-5">
            <div className="rounded-2xl border border-border/70 bg-card p-7 shadow-soft">
              <h3 className="text-xl text-foreground">Reach us directly</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-accent" /><span className="text-muted-foreground">{resort.location}</span></li>
                <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-accent" /><a href={resort.phoneHref} className="text-foreground hover:text-accent">{resort.phone}</a></li>
                <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-accent" /><a href={`mailto:${resort.email}`} className="text-foreground hover:text-accent">{resort.email}</a></li>
              </ul>
              <a href={`https://wa.me/${resort.whatsapp}`} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[oklch(0.72_0.17_150)] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105">
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border/70 shadow-soft">
              <iframe title="Resort location" src={resort.mapEmbed} className="h-64 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
