import { useState } from "react";
import { CalendarCheck, Users, BedDouble, CheckCircle2 } from "lucide-react";
import { rooms, resort } from "@/lib/site-data";

type Props = { compact?: boolean; defaultRoom?: string };

export function BookingForm({ compact = false, defaultRoom }: Props) {
  const today = new Date().toISOString().split("T")[0];
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
    room: defaultRoom ?? rooms[0].name,
    requests: "",
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message =
      `Hello Mangalya Cottages! I'd like to check availability.%0A%0A` +
      `Check-in: ${form.checkIn || "-"}%0A` +
      `Check-out: ${form.checkOut || "-"}%0A` +
      `Guests: ${form.guests}%0A` +
      `Room: ${form.room}%0A` +
      `Requests: ${form.requests || "-"}`;
    window.open(`https://wa.me/${resort.whatsapp}?text=${message}`, "_blank");
    setSubmitted(true);
  };

  const fieldClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";
  const labelClass =
    "mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground";

  return (
    <form
      onSubmit={handleSubmit}
      className={`grid gap-5 ${compact ? "sm:grid-cols-2 lg:grid-cols-5 lg:items-end" : "sm:grid-cols-2"}`}
    >
      <div>
        <label className={labelClass}>
          <CalendarCheck className="h-4 w-4 text-accent" /> Check-in
        </label>
        <input
          type="date"
          min={today}
          required
          value={form.checkIn}
          onChange={(e) => update("checkIn", e.target.value)}
          className={fieldClass}
        />
      </div>
      <div>
        <label className={labelClass}>
          <CalendarCheck className="h-4 w-4 text-accent" /> Check-out
        </label>
        <input
          type="date"
          min={form.checkIn || today}
          required
          value={form.checkOut}
          onChange={(e) => update("checkOut", e.target.value)}
          className={fieldClass}
        />
      </div>
      <div>
        <label className={labelClass}>
          <Users className="h-4 w-4 text-accent" /> Guests
        </label>
        <select
          value={form.guests}
          onChange={(e) => update("guests", e.target.value)}
          className={fieldClass}
        >
          {["1", "2", "3", "4", "5", "6+"].map((g) => (
            <option key={g} value={g}>{g} {g === "1" ? "Guest" : "Guests"}</option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass}>
          <BedDouble className="h-4 w-4 text-accent" /> Room Type
        </label>
        <select
          value={form.room}
          onChange={(e) => update("room", e.target.value)}
          className={fieldClass}
        >
          {rooms.map((r) => (
            <option key={r.slug} value={r.name}>{r.name}</option>
          ))}
        </select>
      </div>

      {!compact && (
        <div className="sm:col-span-2">
          <label className={labelClass}>Special Requests</label>
          <textarea
            rows={3}
            value={form.requests}
            onChange={(e) => update("requests", e.target.value)}
            placeholder="Anniversary decor, early check-in, dietary preferences..."
            className={fieldClass}
          />
        </div>
      )}

      <div className={compact ? "" : "sm:col-span-2"}>
        <button
          type="submit"
          className="gradient-gold w-full rounded-xl px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-[1.02]"
        >
          {compact ? "Check Availability" : "Reserve Your Stay"}
        </button>
      </div>

      {submitted && (
        <p className={`flex items-center gap-2 text-sm font-medium text-primary ${compact ? "lg:col-span-5" : "sm:col-span-2"}`}>
          <CheckCircle2 className="h-4 w-4 text-accent" />
          Thank you! Your request is opening in WhatsApp. Our team will confirm availability shortly.
        </p>
      )}
    </form>
  );
}
