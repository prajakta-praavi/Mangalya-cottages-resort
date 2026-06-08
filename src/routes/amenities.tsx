import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { iconMap } from "@/components/iconMap";
import { images, amenities } from "@/lib/site-data";

export const Route = createFileRoute("/amenities")({
  head: () => ({
    meta: [
      { title: "Amenities — Mangalya Cottages Resort, Mahabaleshwar" },
      { name: "description", content: "WiFi, pool, restaurant, campfire, kids play area, indoor games and more. Explore all amenities at Mangalya Cottages Resort." },
      { property: "og:title", content: "Resort Amenities — Mangalya Cottages" },
      { property: "og:description", content: "Everything you need for an effortless luxury stay in Mahabaleshwar." },
      { property: "og:url", content: "/amenities" },
    ],
    links: [{ rel: "canonical", href: "/amenities" }],
  }),
  component: Amenities,
});

function Amenities() {
  return (
    <>
      <PageHero image={images.pool} eyebrow="Amenities" title="Comforts woven into nature" subtitle="Thoughtful facilities that make your mountain escape effortless from arrival to farewell." />
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((a, i) => {
            const Icon = iconMap[a.icon];
            return (
              <Reveal key={a.title} delay={(i % 3) * 80}>
                <div className="flex h-full gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <div>
                    <h3 className="text-lg text-foreground">{a.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
