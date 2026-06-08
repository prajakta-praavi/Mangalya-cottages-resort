import { Camera } from "lucide-react";
import { gallery } from "@/lib/site-data";

export function InstagramFeed() {
  return (
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.4fr]">
      <div className="luxury-card rounded-2xl p-7">
        <Camera className="h-9 w-9 text-accent" />
        <p className="eyebrow mt-6">Instagram Feed</p>
        <h3 className="mt-3 text-3xl text-foreground">Resort moments worth sharing</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          A social-style preview of cottages, nature, food, bonfires and family stays at Mangalya Cottages Resort.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {gallery.slice(0, 6).map((item, index) => (
          <div key={`${item.src}-${index}`} className="group aspect-square overflow-hidden rounded-2xl">
            <img src={item.src} alt={item.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
