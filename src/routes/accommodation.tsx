import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Maximize, Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { images, rooms } from "@/lib/site-data";

export const Route = createFileRoute("/accommodation")({
  head: () => ({
    meta: [
      { title: "Accommodation — Luxury Cottages | Mangalya Cottages Resort" },
      { name: "description", content: "Choose from Couple, Deluxe, Family and Premium Valley View cottages at Mangalya Cottages Resort, Mahabaleshwar. View amenities and pricing." },
      { property: "og:title", content: "Luxury Cottages — Mangalya Cottages Resort" },
      { property: "og:description", content: "Couple, Deluxe, Family and Premium Valley View cottages in Mahabaleshwar." },
      { property: "og:url", content: "/accommodation" },
    ],
    links: [{ rel: "canonical", href: "/accommodation" }],
  }),
  component: Accommodation,
});

function Accommodation() {
  return (
    <>
      <PageHero
        image={images.cottageInterior}
        eyebrow="Stays"
        title="Cottages with a view of forever"
        subtitle="Handcrafted interiors, private sit-outs and the Sahyadris framed in every window."
      />

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl space-y-12">
          {rooms.map((room, i) => (
            <Reveal key={room.slug}>
              <article className={`grid items-center gap-8 overflow-hidden rounded-3xl border border-border/70 bg-card shadow-soft lg:grid-cols-2 ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-full">
                  <img src={room.image} alt={room.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-8 lg:p-10">
                  <h2 className="text-3xl text-foreground">{room.name}</h2>
                  <div className="mt-4 flex flex-wrap gap-5 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2"><Users className="h-4 w-4 text-accent" /> {room.occupancy}</span>
                    <span className="flex items-center gap-2"><Maximize className="h-4 w-4 text-accent" /> {room.size}</span>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{room.blurb}</p>
                  <ul className="mt-5 grid grid-cols-2 gap-2.5">
                    {room.amenities.map((a) => (
                      <li key={a} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Check className="h-4 w-4 text-primary" /> {a}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                    <p className="font-display text-2xl text-primary">{room.priceLabel}</p>
                    <Link to="/booking" className="gradient-gold inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-105">
                      Book Now <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
