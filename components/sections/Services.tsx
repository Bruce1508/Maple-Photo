import { SERVICES } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";

// ponytail: Printing/Enlarging have their own chapter; this stack covers the five ID-photo formats.
const SHEETS = SERVICES.filter((s) => !s.name.includes("Printing") && !s.name.includes("Enlarging"));

export default function Services() {
  return (
    <section id="services" className="bg-bg text-ink py-16 md:py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
      <Reveal>
        <h2 className="font-display text-[length:var(--step-head)] leading-[1.05] max-w-xl mb-10 md:mb-12">
          Every document, one promise.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SHEETS.map((service, i) => (
          <Reveal
            key={service.name}
            delay={Math.min(i, 4) * 70}
            className={`rounded-[var(--radius-card)] p-8 flex flex-col justify-between gap-6 min-h-[200px] ${
              i === 0 ? "bg-accent text-white md:col-span-2" : "bg-surface text-ink"
            }`}
          >
            <h3 className="font-display text-[length:var(--step-lead)]">{service.name}</h3>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
              <p className={`text-[length:var(--step-body)] max-w-[34ch] ${i === 0 ? "text-white/85" : "text-ink-soft"}`}>
                {service.note}
              </p>
              <p className="font-display text-[length:var(--step-lead)] shrink-0">{service.spec}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="pt-10">
        <p className="text-[length:var(--step-body)] max-w-lg">
          Don&apos;t see your country? We cover international formats on request.{" "}
          <a href="#location" className="text-accent underline underline-offset-4 hover:text-ink transition-colors">
            Call or visit
          </a>
          .
        </p>
      </Reveal>
    </section>
  );
}
