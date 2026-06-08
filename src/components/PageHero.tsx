import type { ReactNode } from "react";

type Props = {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
};

export function PageHero({ image, eyebrow, title, subtitle, children }: Props) {
  return (
    <section className="relative flex min-h-[68vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full scale-105 object-cover" />
        <div className="gradient-hero absolute inset-0" />
        <div className="absolute inset-0 bg-forest-deep/35" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-20 text-center text-cream">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="text-balance text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
