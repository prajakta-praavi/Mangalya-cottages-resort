import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight, Leaf, MapPin, Phone, Sparkles } from "lucide-react";
import { BookingForm } from "@/components/BookingForm";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StatCounter } from "@/components/StatCounter";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";
import { WeatherWidget } from "@/components/WeatherWidget";
import { iconMap } from "@/components/iconMap";
import { attractions, amenities, faqs, gallery, images, resort, rooms, stats, whyChooseUs } from "@/lib/site-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mangalya Cottages Resort - Luxury Nature Stay in Mahabaleshwar" },
      {
        name: "description",
        content:
          "Experience peaceful stays surrounded by Sahyadri Hills, Tapola Backwaters and lush greenery at Mangalya Cottages Resort, Mahabaleshwar.",
      },
      { property: "og:title", content: "Mangalya Cottages Resort - Luxury Nature Stay in Mahabaleshwar" },
      { property: "og:description", content: "Luxury cottages, agro tourism, bonfire experiences and nature retreats near Tapola Lake." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const heroSlides = [images.heroValley, images.cottageValley, images.tapolaLake];

function Home() {
  return (
    <>
      <section className="relative z-10 flex min-h-screen items-center overflow-visible">
        <div className="absolute inset-0 overflow-hidden">
          {heroSlides.map((image, index) => (
            <img
              key={image}
              src={image}
              alt=""
              className="absolute inset-0 h-full w-full animate-ken-burns object-cover"
              style={{ animationDelay: `${index * 5}s`, opacity: index === 0 ? 1 : 0.28 }}
              width={1920}
              height={1080}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          ))}
          <div className="gradient-hero absolute inset-0" />
          <div className="absolute inset-0 bg-forest-deep/35" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-36 pt-32 sm:px-8 lg:grid-cols-[1.1fr_0.75fr]">
          <div className="max-w-4xl text-cream">
            <Reveal>
              <p className="eyebrow mb-5">Mahabaleshwar - Tapola Road</p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="text-balance text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
                Escape To Nature, Experience Serenity At Mangalya Cottages
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg">
                Experience peaceful stays surrounded by Sahyadri Hills, Tapola Backwaters, and lush greenery.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link to="/booking" className="gradient-gold inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-105">
                  Book Your Stay <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/accommodation" className="glass inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/20">
                  Explore Resort
                </Link>
                <a href={resort.phoneHref} className="inline-flex items-center gap-2 text-sm font-semibold text-cream/90 hover:text-accent">
                  <Phone className="h-4 w-4" /> {resort.phone}
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={420} className="hidden lg:block">
            <WeatherWidget />
          </Reveal>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 translate-y-1/2 px-4">
          <div className="mx-auto max-w-6xl">
            <Reveal className="glass-card rounded-2xl border border-cream/50 p-5 shadow-card sm:p-6">
              <BookingForm compact />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative z-0 px-5 pb-20 pt-44 sm:px-8 sm:pt-48">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1fr]">
          <Reveal className="relative">
            <img src={images.cottageValley} alt="Mangalya Cottages valley view cottage" className="image-lift aspect-[4/3] w-full rounded-2xl object-cover" loading="lazy" />
            <div className="glass-card absolute -bottom-7 left-5 right-5 rounded-2xl p-5 shadow-card sm:left-auto sm:w-72">
              <p className="eyebrow">About Mangalya</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Luxury meets nature at a peaceful Mahabaleshwar cottage resort.
              </p>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Mangalya Cottages"
              title="A serene escape woven into the Sahyadris"
              description="Tucked along Tapola Road, Mangalya Cottages Resort is a sanctuary of calm. Wake to mist rolling over the valley, spend afternoons around strawberry farms, and end your days beside a warm bonfire."
            />
            <Reveal className="mt-8 grid gap-3 sm:grid-cols-2" delay={120}>
              {["Nature tourism", "Family-friendly stays", "Agro tourism", "Bonfire evenings"].map((item) => (
                <span key={item} className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground/80">
                  <Check className="h-4 w-4 text-accent" /> {item}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="gradient-forest text-cream">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label} className="text-center">
              <p className="font-display text-5xl text-accent">
                <StatCounter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </p>
              <p className="mt-2 text-sm uppercase tracking-wider text-cream/75">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Featured Accommodations" title="Private cottages for every kind of escape" />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {rooms.map((room, i) => (
              <Reveal key={room.slug} delay={i * 80}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={room.image} alt={room.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold text-primary">{room.occupancy}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-xl text-foreground">{room.name}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{room.blurb}</p>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent">{room.priceLabel}</p>
                      <Link to="/booking" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent">
                        Book Now <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Why Choose Us" title="Luxury that lets nature lead" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => {
              const Icon = iconMap[item.icon];
              return (
                <Reveal key={item.title} delay={i * 90}>
                  <div className="luxury-card h-full rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-card">
                    <div className="gradient-forest grid h-14 w-14 place-items-center rounded-2xl text-cream">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <h3 className="mt-5 text-xl text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading align="left" eyebrow="Resort Amenities" title="Everything for an effortless stay" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {amenities.slice(0, 9).map((a, i) => {
              const Icon = iconMap[a.icon];
              return (
                <Reveal key={a.title} delay={(i % 3) * 50}>
                  <div className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-5 shadow-soft">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">
                      {Icon && <Icon className="h-5 w-5" />}
                    </div>
                    <p className="mt-4 text-sm font-semibold text-foreground">{a.title}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="parallax relative overflow-hidden py-24" style={{ backgroundImage: `url(${images.strawberryFarm})` }}>
        <div className="absolute inset-0 bg-forest-deep/70" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 text-cream sm:px-8 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow mb-4">Agro Tourism Experience</p>
            <h2 className="text-balance text-4xl leading-tight sm:text-5xl">Farm-fresh moments, valley air and slow mountain days</h2>
          </Reveal>
          <Reveal delay={120} className="glass-card rounded-2xl p-7">
            <Leaf className="h-9 w-9 text-accent" />
            <p className="mt-5 text-sm leading-relaxed text-cream/85">
              Discover strawberry farms, local produce, nature walks and family-friendly outdoor experiences that connect your stay with the living landscape of Mahabaleshwar.
            </p>
            <Link to="/experiences" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
              Explore Experiences <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Gallery Preview" title="A glimpse of life at Mangalya" />
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
            {gallery.slice(0, 8).map((item, i) => (
              <Reveal key={item.src + i} delay={(i % 4) * 40} className={i === 0 || i === 5 ? "col-span-2 row-span-2" : ""}>
                <div className="group h-full min-h-44 overflow-hidden rounded-2xl">
                  <img src={item.src} alt={item.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Testimonials" title="Guest stories from the hills" />
          <div className="mt-14">
            <TestimonialsSlider />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Nearby Attractions" title="Tapola and Mahabaleshwar at your doorstep" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {attractions.slice(0, 4).map((a, i) => (
              <Reveal key={a.name} delay={i * 80}>
                <article className="group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <img src={a.image} alt={a.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold text-primary">
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
        </div>
      </section>

      <section className="bg-muted/40 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <InstagramFeed />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading align="left" eyebrow="FAQ" title="Good to know before you arrive" />
          <Reveal>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.slice(0, 5).map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-border/70 bg-card px-5 shadow-soft">
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section className="parallax relative flex items-center justify-center py-24 text-center" style={{ backgroundImage: `url(${images.bonfireNight})` }}>
        <div className="absolute inset-0 bg-forest-deep/75" />
        <Reveal className="relative z-10 mx-auto max-w-2xl px-6 text-cream">
          <Sparkles className="mx-auto h-10 w-10 text-accent" />
          <p className="eyebrow mt-5">Contact CTA</p>
          <h2 className="mt-4 text-balance text-4xl sm:text-5xl">Reserve your peaceful Mahabaleshwar getaway</h2>
          <p className="mt-5 text-cream/85">Call, WhatsApp or send an enquiry. Our team will help you choose the right cottage for your stay.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/booking" className="gradient-gold inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-105">
              Book Your Stay <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`https://wa.me/${resort.whatsapp}`} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-cream hover:bg-cream/20">
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
