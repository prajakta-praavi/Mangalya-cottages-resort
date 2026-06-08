import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { images } from "@/lib/site-data";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Mangalya Cottages Resort" },
      { name: "description", content: "Booking, check-in, cancellation and stay policies for Mangalya Cottages Resort, Mahabaleshwar." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero image={images.cottageDeluxe} eyebrow="Legal" title="Terms & Conditions" />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>These terms govern your booking and stay at Mangalya Cottages Resort. By making a reservation, you agree to the following.</p>
          <div><h2 className="text-xl text-foreground">Bookings & Payment</h2><p className="mt-2">A confirmed booking requires an advance as communicated by our team. Rates are subject to availability and seasonal variation.</p></div>
          <div><h2 className="text-xl text-foreground">Check-in & Check-out</h2><p className="mt-2">Check-in is from 1:00 PM and check-out by 11:00 AM. Valid government-issued ID is required at check-in.</p></div>
          <div><h2 className="text-xl text-foreground">Cancellation</h2><p className="mt-2">Cancellation charges may apply based on notice period. Please contact us for the applicable cancellation terms for your dates.</p></div>
          <div><h2 className="text-xl text-foreground">Conduct</h2><p className="mt-2">We request guests to respect the natural surroundings, fellow guests and resort property throughout their stay.</p></div>
        </div>
      </section>
    </>
  );
}
