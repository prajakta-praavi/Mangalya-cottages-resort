import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Sprout, Users, Gem } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { images } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Mangalya Cottages Resort, Mahabaleshwar" },
      { name: "description", content: "Our story: luxury meets nature at Mangalya Cottages Resort. Discover our vision, agro-tourism concept and family-friendly hospitality in Mahabaleshwar." },
      { property: "og:title", content: "About Mangalya Cottages Resort" },
      { property: "og:description", content: "Luxury meets nature — the story behind Mangalya Cottages Resort." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const pillars = [
  { icon: Leaf, title: "Nature Tourism", desc: "Forest trails, valley vistas and birdsong — immersive stays that reconnect you with the wild." },
  { icon: Sprout, title: "Agro Tourism", desc: "Strawberry farms, farm-to-table dining and a taste of Mahabaleshwar's living landscape." },
  { icon: Users, title: "Family-Friendly", desc: "Spacious cottages, safe play areas and experiences crafted for every generation." },
  { icon: Gem, title: "Luxury Meets Nature", desc: "Handcrafted comfort and attentive service that never overpowers the surroundings." },
];

function About() {
  return (
    <>
      <PageHero
        image={images.cottageDeluxe}
        eyebrow="Our Story"
        title="Where luxury learns from the land"
        subtitle="Born from a love for the Sahyadris, Mangalya Cottages is a tribute to slow, intentional living in the heart of Mahabaleshwar."
      />

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img src={images.cottageValley} alt="Cottage overlooking the valley" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card" loading="lazy" />
          </Reveal>
          <div>
            <SectionHeading align="left" eyebrow="The Beginning" title="A retreat shaped by the valley" description="What began as a family's weekend refuge among the strawberry farms grew into a resort that honours its surroundings. Every cottage is positioned to frame the mist, every path lined with native greenery, every meal sourced from nearby farms." />
            <Reveal className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground" delay={120}>
              <p>For over a decade we've welcomed couples, families and wanderers seeking quiet luxury. Our promise is simple — leave the city behind, and let the hills do the rest.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border/70 bg-card p-8 shadow-soft">
              <h3 className="text-2xl text-primary">Our Vision</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">To be Mahabaleshwar's most cherished nature retreat — a place where premium hospitality and ecological harmony coexist, inspiring guests to fall in love with the hills.</p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-2xl border border-border/70 bg-card p-8 shadow-soft">
              <h3 className="text-2xl text-primary">Our Mission</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">To craft restorative, memorable stays through thoughtful design, sustainable practices, farm-fresh experiences and warm, personal service for every guest.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="What We Stand For" title="Four pillars of the Mangalya experience" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border/70 bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                  <div className="gradient-forest grid h-14 w-14 place-items-center rounded-2xl text-cream">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl text-foreground">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-forest px-5 py-16 text-center text-cream sm:px-8">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="text-3xl sm:text-4xl">Come experience it for yourself</h2>
          <Link to="/booking" className="gradient-gold mt-7 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-105">
            Book Your Stay <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
