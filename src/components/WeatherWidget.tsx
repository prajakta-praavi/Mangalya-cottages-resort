import { CloudSun, Droplets, MapPin, Wind } from "lucide-react";

export function WeatherWidget() {
  return (
    <div className="glass-card rounded-2xl border border-cream/60 bg-cream/85 p-5 text-left text-foreground shadow-card">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="flex items-center gap-2 text-xs uppercase tracking-[0.26em] text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-accent" /> Mahabaleshwar
          </p>
          <p className="mt-3 font-display text-3xl">Cool Hill Climate</p>
          <p className="mt-1 text-sm font-medium text-muted-foreground">Mist, fresh breeze and crisp evenings near Tapola Road.</p>
        </div>
        <CloudSun className="h-11 w-11 text-accent" />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 text-xs font-medium text-muted-foreground">
        <div className="rounded-xl border border-border/70 bg-card/70 p-3">
          <Wind className="mb-2 h-4 w-4 text-accent" />
          Valley breeze
        </div>
        <div className="rounded-xl border border-border/70 bg-card/70 p-3">
          <Droplets className="mb-2 h-4 w-4 text-accent" />
          Misty mornings
        </div>
      </div>
    </div>
  );
}
