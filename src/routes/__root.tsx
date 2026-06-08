import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { WhatsAppFloat } from "../components/WhatsAppFloat";
import { resort } from "../lib/site-data";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The trail you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="gradient-gold inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold text-gold-foreground shadow-gold"
          >
            Back to Resort
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent/10"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mangalya Cottages Resort — Luxury Stays in Mahabaleshwar" },
      {
        name: "description",
        content:
          "Experience serenity amidst the Sahyadri hills. Mangalya Cottages Resort offers luxury valley-view cottages, fine dining, campfires and nature experiences in Mahabaleshwar.",
      },
      { name: "author", content: "Mangalya Cottages Resort" },
      { property: "og:title", content: "Mangalya Cottages Resort — Luxury Stays in Mahabaleshwar" },
      {
        property: "og:description",
        content:
          "Luxury nature retreat in Mahabaleshwar with valley-view cottages, pool, campfires and Tapola backwater experiences.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Mangalya Cottages Resort" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mangalya Cottages Resort — Luxury Stays in Mahabaleshwar" },
      { name: "twitter:description", content: "Peaceful cottage stays surrounded by Sahyadri Hills, Tapola Backwaters and lush greenery." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Resort",
          name: resort.name,
          description:
            "Luxury nature retreat in Mahabaleshwar, Maharashtra offering valley-view cottages, fine dining and outdoor experiences.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Tapola Road, Wanavali Utekar",
            addressLocality: "Mahabaleshwar",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          telephone: resort.phone,
          email: resort.email,
          starRating: { "@type": "Rating", ratingValue: "5" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </QueryClientProvider>
  );
}
