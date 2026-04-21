import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { TRUST_BADGES } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-brand-bg overflow-hidden pt-16"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-4rem)]">

          {/* Left — text content */}
          <div
            className="flex flex-col justify-center"
            style={{ animation: "fade-up 0.7s ease-out forwards" }}
          >
            {/* Eyebrow */}
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-6">
              Toronto&apos;s Passport Photo Studio
            </p>

            {/* Display headline */}
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-[3.6rem] font-bold leading-[1.1] tracking-tight text-house-green mb-6">
              Passport Photos
              <br />
              Done Right —
              <br />
              <span className="text-primary">Guaranteed</span>
            </h1>

            <p className="text-lg leading-relaxed text-text-secondary mb-8 max-w-md">
              Walk in any time or book online. Same-day prints for Canadian
              passports, US visas, PR cards, and 50+ countries.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark active:scale-95 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 text-sm"
              >
                Book an Appointment
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-[rgba(0,0,0,0.87)] text-text-primary hover:border-primary hover:text-primary font-semibold px-7 py-3.5 rounded-full transition-all duration-200 active:scale-95 text-sm"
              >
                See Our Services
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-col sm:flex-row gap-3">
              {TRUST_BADGES.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 text-sm text-text-secondary"
                >
                  <span className="w-4 h-4 rounded-full bg-green-light flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-primary-dark" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo studio visual */}
          <div
            className="relative flex items-center justify-center"
            style={{ animation: "fade-in 0.9s ease-out 0.2s both" }}
          >
            <div className="relative w-full max-w-md">
              {/* Photo studio card */}
              <div className="relative bg-white rounded-2xl shadow-[0_0_0.5px_rgba(0,0,0,0.14),0_4px_16px_rgba(0,0,0,0.10)] p-6 sm:p-8 border border-[#e7e7e7]">

                {/* Passport photo frame */}
                <div className="rounded-xl mb-6 overflow-hidden border border-[#e7e7e7]" aria-hidden="true">
                  {/* Photo area — white background like a real passport photo */}
                  <div className="relative bg-white flex flex-col items-center pt-8 pb-4 px-6">
                    {/* Dimension labels */}
                    <div className="absolute top-2 inset-x-6 flex items-center gap-1.5">
                      <div className="flex-1 h-px bg-slate-200" />
                      <span className="text-[9px] font-bold tracking-widest text-slate-300 uppercase">50 mm</span>
                      <div className="flex-1 h-px bg-slate-200" />
                    </div>

                    {/* Person silhouette */}
                    <svg viewBox="0 0 120 140" className="w-32 h-36 text-slate-200" fill="currentColor" aria-hidden="true">
                      {/* Head */}
                      <ellipse cx="60" cy="42" rx="26" ry="30" />
                      {/* Neck + shoulders */}
                      <path d="M34 90 Q34 72 60 72 Q86 72 86 90 L100 140 H20 Z" />
                    </svg>

                    {/* Viewfinder corners over the silhouette */}
                    <div className="absolute inset-4">
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/50" />
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/50" />
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/50" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/50" />
                    </div>
                  </div>

                  {/* Compliance checklist — staggered fade-in */}
                  <div className="bg-house-green px-5 py-4 space-y-2.5">
                    {[
                      { label: "White background", delay: "0.4s" },
                      { label: "Face centered & visible", delay: "0.8s" },
                      { label: "Neutral expression", delay: "1.2s" },
                      { label: "Government compliant", delay: "1.6s" },
                    ].map(({ label, delay }) => (
                      <div
                        key={label}
                        className="flex items-center gap-2.5 opacity-0"
                        style={{ animation: `check-in 0.4s ease-out ${delay} forwards` }}
                      >
                        <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <Check size={9} strokeWidth={3} className="text-white" />
                        </span>
                        <span className="text-xs font-medium text-white/90">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { number: "50+", label: "Countries" },
                    { number: "5★", label: "Rated" },
                    { number: "20min", label: "Avg. time" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-brand-bg rounded-xl p-3">
                      <div className="text-lg font-bold text-house-green">{stat.number}</div>
                      <div className="text-xs text-text-secondary">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating walk-in badge */}
              <div className="absolute -top-3 -left-3 bg-house-green text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                Walk-ins welcome!
              </div>

            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 text-text-secondary/40">
          <span className="text-xs">Scroll</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </section>
  );
}
