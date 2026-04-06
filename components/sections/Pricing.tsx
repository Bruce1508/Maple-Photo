import { Check } from "lucide-react";
import { PRICING } from "@/lib/constants";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-brand-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Pricing
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-text-primary mb-4">
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
              className={`relative rounded-2xl p-7 flex flex-col transition-all duration-200 ${
                tier.popular
                  ? "bg-white border-2 border-primary shadow-xl shadow-primary/10 md:-translate-y-2"
                  : "bg-white border border-border hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              {/* Most Popular badge */}
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-semibold text-text-primary mb-1">
                  {tier.name}
                </h3>
                <p className="text-sm text-text-secondary mb-4">
                  {tier.description}
                </p>

                <div className="flex items-baseline gap-1">
                  <span
                    className={`font-heading font-bold ${
                      tier.price.startsWith("$") ? "text-3xl" : "text-xl"
                    } ${tier.popular ? "text-primary" : "text-text-primary"}`}
                  >
                    {tier.price}
                  </span>
                  {tier.priceNote && (
                    <span className="text-sm text-text-secondary">
                      {tier.priceNote}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow" role="list">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <span
                      className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                        tier.popular
                          ? "bg-primary text-white"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      <Check size={10} strokeWidth={3} />
                    </span>
                    <span className="text-sm text-text-secondary">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={tier.name === "Family Bundle" ? "#location" : "#booking"}
                className={`w-full text-center font-semibold py-3 rounded-full text-sm transition-all duration-200 ${
                  tier.popular
                    ? "bg-primary hover:bg-primary-dark text-white hover:shadow-md"
                    : "border-2 border-border text-text-primary hover:border-primary hover:text-primary"
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
