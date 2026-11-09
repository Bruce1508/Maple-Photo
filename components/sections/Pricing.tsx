import { PRICING } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";

const SOLO = PRICING.filter((t) => t.name !== "Family Bundle");
const FAMILY = PRICING.find((t) => t.name === "Family Bundle")!;

export default function Pricing() {
  return (
    <section id="pricing" className="bg-bg text-ink py-16 md:py-24 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
      <h2 className="sr-only">Pricing</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {SOLO.map((tier, i) => (
          <Reveal
            key={tier.name}
            delay={i * 100}
            className={`rounded-[var(--radius-card)] flex flex-col justify-between px-7 sm:px-8 py-10 md:py-12 ${
              tier.popular ? "bg-accent text-white" : "bg-surface text-ink"
            }`}
          >
            <div>
              <p className="font-display text-[length:var(--step-head)]">{tier.name}</p>
              <p className={`mt-4 text-[length:var(--step-lead)] max-w-[28ch] ${tier.popular ? "text-white/85" : "text-ink-soft"}`}>
                {tier.description}. {tier.features.join(", ")}.
              </p>
            </div>
            <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-end lg:justify-between mt-10">
              <p className="font-display text-[length:var(--step-display)] leading-none">{tier.price}</p>
              <a
                href="#booking"
                className={`shrink-0 font-medium px-6 py-3.5 rounded-[var(--radius-pill)] text-[length:var(--step-body)] whitespace-nowrap transition-colors ${
                  tier.popular ? "bg-white text-ink hover:bg-ink hover:text-white" : "bg-accent text-white hover:bg-ink"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Family Bundle — one wide closing card */}
      <Reveal className="mt-4 rounded-[var(--radius-card)] bg-ink text-white px-7 sm:px-8 py-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="font-display text-[length:var(--step-head)]">{FAMILY.name}</p>
          <p className="mt-2 text-[length:var(--step-body)] text-white/75 max-w-[48ch]">
            {FAMILY.description}. {FAMILY.features.join(", ")}. Prices subject to change, tax not included.
          </p>
        </div>
        <a
          href="tel:4163910388"
          className="shrink-0 font-medium px-6 py-3.5 rounded-[var(--radius-pill)] text-[length:var(--step-body)] bg-accent text-white hover:bg-white hover:text-ink transition-colors text-center"
        >
          {FAMILY.cta} ({FAMILY.priceNote})
        </a>
      </Reveal>
    </section>
  );
}
