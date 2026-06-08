import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { BookingForm } from "@/components/BookingForm";
import { images, faqs } from "@/lib/site-data";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Your Stay — Mangalya Cottages Resort, Mahabaleshwar" },
      { name: "description", content: "Check availability and book your luxury cottage at Mangalya Cottages Resort, Mahabaleshwar. Best rates guaranteed on direct bookings." },
      { property: "og:title", content: "Book Your Stay — Mangalya Cottages Resort" },
      { property: "og:description", content: "Reserve your valley-view cottage in Mahabaleshwar." },
      { property: "og:url", content: "/booking" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
  component: Booking,
});

function Booking() {
  return (
    <>
      <PageHero image={images.cottageValley} eyebrow="Reservations" title="Reserve your getaway" subtitle="Tell us your dates and preferences — we'll confirm availability and craft your perfect stay." />

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal className="rounded-3xl border border-border/70 bg-card p-7 shadow-card sm:p-10">
            <h2 className="text-3xl text-foreground">Booking enquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">Complete the form below and our team will reach out to finalise your reservation.</p>
            <div className="mt-8">
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted/40 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal className="text-center">
            <p className="eyebrow mb-3">Good to Know</p>
            <h2 className="text-4xl text-foreground">Frequently asked questions</h2>
          </Reveal>
          <Reveal className="mt-10">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="rounded-2xl border border-border/70 bg-card px-5 shadow-soft">
                  <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  );
}
