import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { images, testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials - Mangalya Cottages Resort" },
      { name: "description", content: "Guest reviews and luxury resort testimonials for Mangalya Cottages Resort, Mahabaleshwar." },
      { property: "og:title", content: "Testimonials - Mangalya Cottages Resort" },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHero image={images.bonfireNight} eyebrow="Testimonials" title="Guest stories from the hills" subtitle="Warm stays, peaceful mornings and memorable family escapes at Mangalya Cottages Resort." />
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 80}>
              <article className="luxury-card flex h-full flex-col rounded-2xl p-7">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
                <div className="mt-7 flex items-center gap-3">
                  <div className="gradient-forest grid h-12 w-12 place-items-center rounded-full font-display text-sm font-semibold text-cream">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.place}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 text-center">
          <Link to="/booking" className="gradient-gold inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-105">
            Reserve Your Stay <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
