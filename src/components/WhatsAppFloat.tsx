import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { resort } from "@/lib/site-data";

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 600);
    return () => clearTimeout(t);
  }, []);

  const href = `https://wa.me/${resort.whatsapp}?text=${encodeURIComponent(
    "Hello Mangalya Cottages! I'd like to enquire about a stay.",
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[oklch(0.72_0.17_150)] px-4 py-3.5 font-semibold text-white shadow-card transition-all duration-500 hover:scale-105 ${
        show ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.72_0.17_150)] opacity-30" />
      <MessageCircle className="relative h-6 w-6" />
      <span className="relative hidden text-sm sm:inline">Chat with us</span>
    </a>
  );
}
