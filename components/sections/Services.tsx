import { SERVICES } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";

// ponytail: Printing/Enlarging have their own chapter; this stack covers the five ID-photo formats.
const SHEETS = SERVICES.filter((s) => !s.name.includes("Printing") && !s.name.includes("Enlarging"));

const FIELD = ["bg-blue text-white", "bg-accent text-white", "bg-lime text-ink", "bg-olive text-white", "bg-blue text-white"];

export default function Services() {
  return (
    <section id="services" className="bg-paper text-ink py-16 md:py-20">
      <div className="px-4 sm:px-6 lg:px-10">
        <Reveal>
          <h2 className="font-display text-[length:var(--step-head)] leading-[1.05] max-w-xl mb-10 md:mb-12">
            Every document, one promise.
          </h2>
        </Reveal>
      </div>

      <div>
        {SHEETS.map((service, i) => (
          <Reveal
            key={service.name}
            delay={Math.min(i, 4) * 70}
            className={`${FIELD[i % FIELD.length]} min-h-[42svh] px-4 sm:px-6 lg:px-10 py-10 flex flex-col justify-between gap-6`}
          >
            <h3 className="font-display font-display-title text-[length:var(--step-head)]">
              {service.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 items-end">
              <p className="text-[length:var(--step-lead)] max-w-[34ch]">{service.note}</p>
              <p className="font-display text-[length:var(--step-lead)] md:text-right">{service.spec}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="px-4 sm:px-6 lg:px-10 pt-10 pb-6 bg-paper relative">
        <Reveal>
          <p className="text-[length:var(--step-body)] max-w-lg">
            Don&apos;t see your country?{" "}
            <a href="#location" className="text-accent underline underline-offset-4 hover:text-ink transition-colors">
              Call or visit
            </a>{" "}
            — we cover international formats on request.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
