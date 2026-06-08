import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { images, gallery, galleryCategories, type GalleryCategory } from "@/lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Mangalya Cottages Resort, Mahabaleshwar" },
      { name: "description", content: "Explore photos of our cottages, nature, food, activities and events at Mangalya Cottages Resort in Mahabaleshwar." },
      { property: "og:title", content: "Gallery — Mangalya Cottages Resort" },
      { property: "og:description", content: "A visual journey through Mangalya Cottages Resort." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const items = filter === "All" ? gallery : gallery.filter((g) => g.category === filter);

  return (
    <>
      <PageHero image={images.heroValley} eyebrow="Gallery" title="Moments worth framing" subtitle="A glimpse into the colours, light and life of Mangalya Cottages." />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3">
            {galleryCategories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                  filter === c ? "gradient-gold text-gold-foreground shadow-gold" : "border border-border bg-card text-foreground/70 hover:border-accent hover:text-accent",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {items.map((item, i) => (
              <Reveal key={item.src + i} delay={(i % 3) * 60}>
                <button onClick={() => setLightbox(item.src)} className="group block w-full overflow-hidden rounded-2xl">
                  <img src={item.src} alt={item.alt} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-deep/90 p-4" onClick={() => setLightbox(null)}>
          <button aria-label="Close" className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream hover:bg-cream/20">
            <X className="h-6 w-6" />
          </button>
          <img src={lightbox} alt="" className="max-h-[88vh] max-w-5xl rounded-2xl object-contain shadow-card" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}
