import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { images, attractions, resort } from "@/lib/site-data";

export const Route = createFileRoute("/attractions")({
  head: () => ({
    meta: [
      { title: "Nearby Attractions — Mangalya Cottages Resort, Mahabaleshwar" },
      { name: "description", content: "Venna Lake, Mapro Garden, Arthur's Seat, Wilson Point, Lingmala Waterfall, Tapola Lake and more near Mangalya Cottages Resort." },
      { property: "og:title", content: "Nearby Attractions — Mangalya Cottages" },
      { property: "og:description", content: "Explore the best of Mahabaleshwar from our doorstep." },
      { property: "og:url", content: "/attractions" },
    ],
    links: [{ rel: "canonical", href: "/attractions" }],
  }),
  component: Attractions,
});

function Attractions() {
  return (
    <>
      <PageHero image={images.tapolaLake} eyebrow="Explore" title="Mahabaleshwar's finest, nearby" subtitle="Iconic viewpoints, lakes and gardens — all a short, scenic drive from the resort." />
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {attractions.map((a, i) => (
            <Reveal key={a.name} delay={(i % 4) * 70}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img src={a.image} alt={a.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-primary">
                    <MapPin className="h-3 w-3" /> {a.distance}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg text-foreground">{a.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 overflow-hidden rounded-3xl border border-border/70 shadow-card">
          <iframe
            title="Map of Mahabaleshwar"
            src={resort.mapEmbed}
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>
    </>
  );
}
