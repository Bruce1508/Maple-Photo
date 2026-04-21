import { Check } from "lucide-react";
import { PRICING } from "@/lib/constants";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-brand-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-4">
            Pricing
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-house-green mb-4 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-text-secondary text-lg">
            No hidden fees. What you see is what you pay.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {PRICING.map((tier) => (
            <article
              key={tier.name}
              className={`relative rounded-xl p-7 flex flex-col transition-all duration-200 shadow-[0_0_0.5px_rgba(0,0,0,0.14),0_1px_1px_rgba(0,0,0,0.24)] ${
                tier.popular
                  ? "bg-white border-2 border-primary md:-translate-y-2"
                  : "bg-white border border-[#e7e7e7] hover:border-primary/30 hover:-translate-y-1"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-semibold text-house-green mb-1 text-base">
                  {tier.name}
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  {tier.description}
                </p>

                <div className="flex items-baseline gap-1">
                  <span
                    className={`font-bold tracking-tight ${
                      tier.price.startsWith("$") ? "text-3xl" : "text-xl"
                    } ${tier.popular ? "text-primary" : "text-house-green"}`}
                  >
                    {tier.price}
                  </span>
                  {tier.priceNote && (
                    <span className="text-sm text-text-secondary">{tier.priceNote}</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow" role="list">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-green-light flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-primary-dark" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-text-secondary">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={tier.name === "Family Bundle" ? "#location" : "#booking"}
                className={`w-full text-center font-semibold py-3 rounded-full text-sm transition-all duration-200 active:scale-95 ${
                  tier.popular
                    ? "bg-primary hover:bg-primary-dark text-white"
                    : "border border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                {tier.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="text-center text-xs text-text-secondary mt-8">
          Prices subject to change. Tax not included.
        </p>
      </div>
    </section>
  );
}
