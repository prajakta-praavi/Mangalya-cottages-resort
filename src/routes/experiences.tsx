import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { images, experiences } from "@/lib/site-data";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences & Activities — Mangalya Cottages Resort" },
      { name: "description", content: "Nature walks, strawberry farm visits, campfire nights, Tapola lake trips, boating and more at Mangalya Cottages Resort, Mahabaleshwar." },
      { property: "og:title", content: "Experiences & Activities — Mangalya Cottages" },
      { property: "og:description", content: "Immersive nature and adventure experiences in Mahabaleshwar." },
      { property: "og:url", content: "/experiences" },
    ],
    links: [{ rel: "canonical", href: "/experiences" }],
  }),
  component: Experiences,
});

function Experiences() {
  return (
    <>
      <PageHero image={images.strawberryFarm} eyebrow="Experiences" title="Days full of wonder" subtitle="From misty forest trails to starlit campfires — craft a getaway that's truly yours." />
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((e, i) => (
            <Reveal key={e.title} delay={(i % 3) * 80}>
              <article className="group relative h-80 overflow-hidden rounded-2xl shadow-soft">
                <img src={e.image} alt={e.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                  <h3 className="text-2xl">{e.title}</h3>
                  <p className="mt-2 text-sm text-cream/85">{e.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 text-center">
          <Link to="/booking" className="gradient-gold inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-105">
            Plan Your Experience <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
