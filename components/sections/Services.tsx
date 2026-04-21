import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-house-green">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-5">
            What We Offer
          </p>
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
            Photos for Every
            <br />Country &amp; Purpose
          </h2>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-2" />

        {/* Service rows */}
        <div className="divide-y divide-white/10">
          {SERVICES.map((service, i) => (
            <div
              key={service.name}
              className="group flex items-center gap-5 py-5 sm:py-6 hover:bg-white/5 transition-colors duration-150 -mx-4 px-4 sm:-mx-6 sm:px-6 cursor-default"
            >
              {/* Index number */}
              <span className="hidden sm:block text-xs font-bold text-white/30 w-5 text-right flex-shrink-0 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Name + note */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white text-sm sm:text-base leading-snug">
                  {service.name}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 mt-0.5 truncate">
                  {service.note}
                </p>
              </div>

              {/* Spec badge */}
              <span className="hidden sm:inline-flex text-xs font-semibold px-2.5 py-1 rounded-full border border-white/20 text-white/70 flex-shrink-0">
                {service.spec}
              </span>

              {/* Price */}
              <div className="text-right flex-shrink-0">
                <p className="text-sm font-bold text-white">$21.99</p>
                <p className="text-xs text-white/50">from</p>
              </div>

              {/* Arrow */}
              <ArrowRight
                size={16}
                className="text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all duration-150 flex-shrink-0 hidden sm:block"
              />
            </div>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="h-px bg-white/10 mt-2" />

        {/* Footer row */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            Don&apos;t see your country?{" "}
            <a
              href="#location"
              className="text-white font-semibold hover:text-primary transition-colors underline underline-offset-2"
            >
              Contact us
            </a>{" "}
            — we cover all international formats.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-green-light active:scale-95 transition-all duration-200"
            >
              Book your session
              <ArrowRight size={15} />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 border border-white/60 text-white font-semibold px-6 py-2.5 rounded-full text-sm hover:border-white active:scale-95 transition-all duration-200"
            >
              See Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
