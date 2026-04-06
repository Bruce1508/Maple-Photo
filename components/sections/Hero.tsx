import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { TRUST_BADGES } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16"
    >
      {/* Background accent shape */}
      <div
        className="absolute inset-y-0 right-0 w-full lg:w-1/2 bg-brand-bg"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-full lg:w-1/2 h-2 bg-primary"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-4rem)]">
          {/* Left — text content */}
          <div
            className="flex flex-col justify-center"
            style={{ animation: "fade-up 0.7s ease-out forwards" }}
          >
            {/* Badge — no decorative pulse */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full w-fit mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Toronto&apos;s Passport Photo Studio
            </div>

            {/* Authentic, direct headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] text-text-primary mb-5">
              Passport Photos
              <br />
              Done Right —
              <br />
              <span className="text-primary">Guaranteed.</span>
            </h1>

            <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-md">
              Walk in any time or book online. Same-day prints for Canadian
              passports, US visas, PR cards, and 50+ countries.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-sm"
              >
                Book an Appointment
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-border text-text-primary hover:border-primary hover:text-primary font-semibold px-7 py-3.5 rounded-full transition-all duration-200 text-sm"
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
                  <span className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-primary" strokeWidth={3} aria-hidden="true" />
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
              {/* Decorative background circles */}
              <div
                className="absolute -top-8 -right-8 w-48 h-48 rounded-full bg-primary/10"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-warm/20"
                aria-hidden="true"
              />

              {/* Photo studio card */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-border">
                {/* ID photo frame */}
                <div className="aspect-[4/5] rounded-2xl mb-6 relative overflow-hidden bg-slate-50 border border-slate-200">
                  {/* Top brand bar */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-primary rounded-t-2xl" aria-hidden="true" />

                  {/* Dimension annotation */}
                  <div className="absolute top-4 inset-x-0 flex justify-center">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                      50 × 70 mm
                    </span>
                  </div>

                  {/* Portrait subject — CSS shapes, clearly intentional */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center" aria-hidden="true">
                    <div className="w-20 h-20 rounded-full bg-slate-200" />
                    <div className="w-36 h-24 rounded-t-[100%] bg-slate-200 -mt-5" />
                  </div>

                  {/* Subtle fade at bottom */}
                  <div
                    className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"
                    aria-hidden="true"
                  />

                  {/* Compliance badge inside frame */}
                  <div className="absolute bottom-4 inset-x-0 flex justify-center">
                    <span className="inline-flex items-center gap-1.5 bg-green-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                      <Check size={11} strokeWidth={3} aria-hidden="true" />
                      Government Compliant
                    </span>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { number: "50+", label: "Countries" },
                    { number: "5★", label: "Rated" },
                    { number: "10min", label: "Avg. time" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-brand-bg rounded-xl p-3">
                      <div className="text-lg font-bold text-text-primary font-heading">
                        {stat.number}
                      </div>
                      <div className="text-xs text-text-secondary">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -left-3 bg-warm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                Walk-ins welcome!
              </div>

              {/* Floating accept badge */}
              <div className="absolute -bottom-3 right-8 bg-white border border-border rounded-xl px-3 py-2 shadow-md flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Check size={12} className="text-green-600" strokeWidth={3} aria-hidden="true" />
                </div>
                <span className="text-xs font-semibold text-text-primary">
                  Guaranteed accepted
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator — no decorative bounce */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1 text-text-secondary/40">
          <span className="text-xs">Scroll</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </section>
  );
}
