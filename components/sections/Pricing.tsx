import { PRICING } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";

const SOLO = PRICING.filter((t) => t.name !== "Family Bundle");
const FAMILY = PRICING.find((t) => t.name === "Family Bundle")!;

export default function Pricing() {
  return (
    <section id="pricing" className="flex flex-col">
      <h2 className="sr-only">Pricing</h2>

      {/* Two plans, two fields — hard edge, no gap */}
      <div className="grid md:grid-cols-2 min-h-[80svh] md:min-h-[90svh]">
        {SOLO.map((tier, i) => (
          <Reveal
            key={tier.name}
            delay={i * 100}
            className={`flex flex-col justify-between px-6 sm:px-8 lg:px-10 py-10 md:py-14 ${
              tier.popular ? "bg-accent text-white" : "bg-paper text-ink"
            }`}
          >
            <div>
              <p className="font-display text-[length:var(--step-head)]">{tier.name}</p>
              <p className="mt-4 text-[length:var(--step-lead)] max-w-[28ch]">{tier.description}. {tier.features.join(", ")}.</p>
            </div>
            <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-end lg:justify-between mt-10">
              <p className="font-display text-[length:var(--step-display)] leading-none">{tier.price}</p>
              <a
                href="#booking"
                className={`shrink-0 font-medium px-6 py-3.5 text-[length:var(--step-body)] whitespace-nowrap transition-colors ${
                  tier.popular ? "bg-white text-ink hover:bg-ink hover:text-white" : "bg-accent text-white hover:bg-ink"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Family Bundle — dark closing band */}
      <Reveal className="bg-olive text-white px-6 sm:px-8 lg:px-10 py-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="font-display text-[length:var(--step-head)]">{FAMILY.name}</p>
          <p className="mt-2 text-[length:var(--step-body)] text-white/80 max-w-[48ch]">
            {FAMILY.description}. {FAMILY.features.join(", ")}. Prices subject to change, tax not included.
          </p>
        </div>
        <a
          href="tel:4163910388"
          className="shrink-0 font-medium px-6 py-3.5 text-[length:var(--step-body)] bg-accent text-white hover:bg-lime hover:text-ink transition-colors text-center"
        >
          {FAMILY.cta} — {FAMILY.priceNote}
        </a>
      </Reveal>
    </section>
  );
}
