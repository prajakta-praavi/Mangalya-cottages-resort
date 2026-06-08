import { createFileRoute } from "@tanstack/react-router";
import { resort } from "@/lib/site-data";
import { PageHero } from "@/components/PageHero";
import { images } from "@/lib/site-data";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Mangalya Cottages Resort" },
      { name: "description", content: "How Mangalya Cottages Resort collects, uses and protects your personal information." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero image={images.natureWalk} eyebrow="Legal" title="Privacy Policy" />
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>Your privacy matters to us. This policy explains how Mangalya Cottages Resort handles the information you share when enquiring or booking a stay.</p>
          <div><h2 className="text-xl text-foreground">Information We Collect</h2><p className="mt-2">We collect details you voluntarily provide — name, contact number, email and booking preferences — solely to process reservations and respond to enquiries.</p></div>
          <div><h2 className="text-xl text-foreground">How We Use It</h2><p className="mt-2">Your information is used to confirm bookings, personalise your stay and share relevant offers if you opt in. We never sell your data to third parties.</p></div>
          <div><h2 className="text-xl text-foreground">Data Security</h2><p className="mt-2">We apply reasonable safeguards to protect your information. Communication via WhatsApp and email is subject to those platforms' policies.</p></div>
          <div><h2 className="text-xl text-foreground">Contact</h2><p className="mt-2">For any privacy queries, email us at {resort.email}.</p></div>
        </div>
      </section>
    </>
  );
}
